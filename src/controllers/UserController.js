import User from '../models/User';

class UserController {
  async register(req, res) {
    try {
      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      const { id, name, email } = user;
      return res.status(200).json({ newUser: { id, name, email } });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'name', 'email'] });
      return res.status(200).json({ users });
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  }

  async showById(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      const { id, name, email } = user;
      if (!user) return res.status(404).json({ message: 'Invalid ID' });
      return res.status(200).json({ id, name, email });
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) return res.status(404).json({ message: 'Invalid ID' });
      user.update({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      const { id, name, email } = user;
      return res.status(200).json({ user: { id, name, email } });
    } catch (e) {
      return res.status(500).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) return res.status(404).json({ message: 'Invalid ID' });
      await user.destroy();
      return res.status(200).json({ message: 'User deleted' });
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  }
}

export default new UserController();
