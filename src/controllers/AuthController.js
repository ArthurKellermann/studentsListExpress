import jwt from 'jsonwebtoken';
import User from '../models/User';

class AuthController {
  async login(req, res) {
    const { email = '', password = '' } = req.body;
    if (!email || !password) return res.status(401).json({ message: 'Invalid Login. Check username and password' });

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ message: 'The user does not exist' });

    if (!(await user.passwordIsValid(password))) return res.status(401).json({ message: 'Password does not match' });
    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });

    return res.status(200).json({ token });
  }
}

export default new AuthController();
