const jwt = require("jsonwebtoken");
require('dotenv').config();

module.exports = (req, res, next) => {
  try {
    const token = req.headers.cookie.split("=")[1];
    const decoded = jwt.verify(token, process.env.secret);
    req.headers.userData = decoded;
    next();
  }
  catch(error) {
    if (req.headers.fetch === "true"){
      res.status(401).json({link: "/loginForm"});
    }
    else {
      res.redirect('/loginForm');
    }
  }
}
