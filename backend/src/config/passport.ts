const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passportDotEnv = require("dotenv");

const Prisma = require("../../generated/prisma/client");
const passportPrisma = new Prisma.PrismaClient();

passportDotEnv.config();


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
},
    async (accessToken: string, refreshToken: string, profile: any, done: any) => {
        console.log(profile);
        try {

            const user = await passportPrisma.app_user.findUnique({ where: { email: profile?.emails[0]?.value } });

            if (!user) {
                const newUser = await passportPrisma.app_user.create({ data: { 
                    id: profile.id,
                    given_name: profile.name.givenName,
                    family_name: profile.name.familyName,
                    email: profile?.emails[0]?.value } });
                return done(null, newUser);
            }
            
            return done(null, user);
        } catch (error) {
            console.error(error);
            return done(error);
        }

    })
);

passport.serializeUser((user: any, done: any) => done(null, user));
passport.deserializeUser((obj: any, done: any) => done(null, obj));

module.exports = passport;