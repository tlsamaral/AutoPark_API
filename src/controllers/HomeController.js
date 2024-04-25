class HomeController {
  async index(req, res) {
    res.json('Welcome to AutoPark');
  }
}

export default new HomeController();
