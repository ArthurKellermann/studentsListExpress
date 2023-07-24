import User from '../models/User';

class UserController {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      const { id, name, email } = user;
      return res.status(201).json({ newUser: { id, name, email } });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'name', 'email'] });
      return res.status(200).json({ users });
    } catch (e) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async showById(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) return res.status(404).json({ message: 'Invalid ID' });

      const { id, name, email } = user;
      return res.status(200).json({ id, name, email });
    } catch (e) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) return res.status(404).json({ message: 'Invalid ID' });

      await user.update(req.body);
      const { id, name, email } = user;
      return res.status(200).json({ user: { id, name, email } });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) return res.status(404).json({ message: 'Invalid ID' });

      await user.destroy();
      return res.status(200).json({ message: 'User deleted' });
    } catch (e) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default new UserController();
