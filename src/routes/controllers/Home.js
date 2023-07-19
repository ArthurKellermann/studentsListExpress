import Student from './models/Student';

class HomeController {
  async index(req, res) {
    const student = await Student.create({
      firstName: 'Arthur',
      lastName: 'Kellermann',
      email: 'arthur.kellermann@gmail.com',
      age: 18,
      weight: 80.20,
      height: 1.87,
    });

    return res.status(200).json({ newStudent: student });
  }
}

export default new HomeController();
