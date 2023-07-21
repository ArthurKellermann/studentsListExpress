import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['User must be logged in'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const userData = jwt.verify(token, process.env.JWT_SECRET);
    const { id, email } = userData;
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    const userData = jwt.verify(token, process.env.JWT_SECRET);
    const { id, email } = userData;
    req.userId = id;
    req.userEmail = email;
    return res.status(401).json({
      errors: ['s'],
    });
  }
};
