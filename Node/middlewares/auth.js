const auth = (req, res, next) => {
  console.log("Auth Middleware Working");
  next();
};

module.exports = auth;
