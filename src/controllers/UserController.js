import User from '../models/User';

// Essa rota é um POST /users/
class UserController {
  async store(req, res) {
    try {
      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      return res.status(200).json({ newUser: user });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
