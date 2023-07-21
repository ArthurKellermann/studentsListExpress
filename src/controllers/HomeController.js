class HomeController {
  async index(req, res) {
    return res.status(200).json({ home: 'Index' });
  }
}

export default new HomeController();
