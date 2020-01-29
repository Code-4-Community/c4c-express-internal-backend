const jwt = require("jsonwebtoken");

// Middleware: function(req, res, next)

// authenticate : int -> Middleware
// Custom middleware to verify jwt given the required privilege level
// also checks the token is not blacklisted (in the tokenCache)
// as well as standard check for good signature and unexpired token
// decoded token is stored in req.token
function authenticate(requiredPrivilegeLevel) {
  let token;
  return (req, res, next) => {
    try {
      token = req.headers.authorization.split(" ")[1];
    } catch (err) {
      return res
        .status(401)
        .json({
          error:
            "Malformed Authorization header. Token should be sent under Authorization as Bearer <token>"
        });
    }

    jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
      if (err) return res.status(401).json({ error: err });
      if (tokenCache.has(decoded.jti))
        return res.status(401).json({ error: "blacklisted token" });

      if (decoded.privilege_level < requiredPrivilegeLevel)
        return res
          .status(401)
          .json({ error: "insufficent privilege to access this resource" });
      req.token = decoded;
      next();
    });
  };
}

module.exports = authenticate;
