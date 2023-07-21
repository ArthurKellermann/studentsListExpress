import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
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

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) return res.status(401).json({ errors: 'Token is required' });

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({ errors: 'Token is required' });
  }
};
