class HomeController {
  async store(req, res) {
    return res.status(200).json({
      inf: {
        file: req.file,
      },
    });
  }
}
export default new HomeController();
