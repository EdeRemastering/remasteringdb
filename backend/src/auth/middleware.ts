const MiddlewareJWT = require("jsonwebtoken");

function middleware(req: any, res: any, next: any) {
    let token;
    const authHeader = req.headers.authorization;

    if (authHeader) {
        token = authHeader.split(" ")[1];
    } else if (req.cookies && req.cookies.token) {
        token = req.cookies.token;
    }

    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {
        const decoded = MiddlewareJWT.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.sendStatus(403);
    }
}

module.exports = middleware;
