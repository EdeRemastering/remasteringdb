const express = require("express");
const session = require("express-session");
const jwt = require("jsonwebtoken");

const authMiddleware = require("./auth/middleware");

const dotenv = require("dotenv");
const passportConfig = require("./config/passport");
const cookieParser = require('cookie-parser');

dotenv.config();    

const app = express();
const PORT = process.env.PORT || 4000;

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    sameSite: 'lax', // o 'none' si usas HTTPS y frontend/backend en dominios distintos
    secure: false,    // true si usas HTTPS
  }
}));

app.use(passportConfig.initialize());
app.use(passportConfig.session());
app.use(cookieParser());

app.get('/', (req: any, res: any) => {
    res.send('Hello World');
    console.log('is logged in', req.isAuthenticated());
});

app.get("/auth/google", passportConfig.authenticate("google", { scope: ["profile", "email"] }));

app.get(
    '/auth/google/callback',
    passportConfig.authenticate('google', { failureRedirect: '/login' }),
    (req: any, res: any) => {
      const user = req.user;
      
       const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET!,
        { expiresIn: '1h' }
      );

      res.cookie("token", token, {
        httpOnly: true,
        secure: true, // cambia a true si usas HTTPS
        sameSite: "none", // o "none" si usas dominios distintos
        maxAge: 3600000, // 1 hora
      });
  
      res.redirect(`http://localhost:3000/dashboard`);

      console.log('is logged in', req.isAuthenticated());
    }
  );

  app.get('/auth/logout', (req: any, res: any) => {
    req.logout(() => {
      req.session.destroy(() => {
        res.clearCookie('connect.sid');
        res.redirect('http://localhost:3000/login');
      });

      console.log('is logged in', req.isAuthenticated());
    });
  });

  app.get('/dashboard', authMiddleware, (req: any, res: any) => {
    res.send('Dashboard');
  });

  app.get('/workspaces', authMiddleware, (req: any, res: any) => {
    res.send('Workspaces');
  });

  app.get('/workspaces/:id', authMiddleware, (req: any, res: any) => {
    res.send('Workspaces: ' + req.params.id);
  });

  app.get('/workspaces/:id/projects', authMiddleware, (req: any, res: any) => {
    res.send('Projects');
  });

  app.get('/workspaces/:id/projects/:id', authMiddleware, (req: any, res: any) => {
    res.send('Projects: ' + req.params.id);
  });

  app.get('/workspaces/:id/projects/:id/databases', authMiddleware, (req: any, res: any) => {
    res.send('Databases');
  });

  app.get('/workspaces/:id/projects/:id/databases/:id', authMiddleware, (req: any, res: any) => {
    res.send('Databases: ' + req.params.id);
  });

 
  app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
  