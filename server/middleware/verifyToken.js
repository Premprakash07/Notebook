const verifyToken = (req, res, next) => {
    const token = req.cookies.userid;
    console.log("hello", req.cookies);

    if (token == null) {
      res.sendStatus(401);
    } else {
      jsonwebtoken.verify(token, "some_secret_key", (err, user) => {
        if (err) {
          res.sendStatus(401);
        } else {
          console.log(user);
          req.userid = user;
        }

        next();
      });
    }
}

export default verifyToken;