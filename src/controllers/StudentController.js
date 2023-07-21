import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    const students = await Student.findAll();
    return res.status(200).json({ students });
  }

  async store(req, res) {
    try {
      const student = await Student.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        age: req.body.age,
        weight: req.body.weight,
        height: req.body.height,
      });
      return res.status(200).json({ student });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async showById(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ message: 'Invalid ID' });

      const student = await Student.findByPk(id);
      if (!student) return res.status(400).json({ message: 'Student does not exist' });
      return res.status(200).json({ student });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ message: 'Invalid ID' });

      const student = await Student.findByPk(id);
      if (!student) return res.status(400).json({ message: 'Student does not exist' });

      await student.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        age: req.body.age,
        weight: req.body.weight,
        height: req.body.height,
      });

      return res.status(200).json({ student });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ message: 'Invalid ID' });

      await Student.destroy({ where: { id } });
      return res.status(200).json({ message: 'Student deleted' });
    } catch (e) {
      return res.status(400).json({ errors: e });
    }
  }
}

export default new StudentController();
