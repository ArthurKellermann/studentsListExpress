class HomeController {
  async index(req, res) {
    return res.status(200).json({
      inf: {
        routes: {
          user: {
            register: {
              type: 'POST',
              url: 'http://localhost:3000/users/',
            },
            update: {
              type: 'PUT',
              url: 'http://localhost:3000/users/',
            },
            delete: {
              type: 'DELETE',
              url: 'http://localhost:3000/users/',
            },
          },
          auth: {
            login: {
              type: 'POST',
              url: 'http://localhost:3000/auth/',
            },
          },
          students: {
            index: {
              type: 'GET',
              url: 'http://localhost:3000/students/',
            },
            store: {
              type: 'POST',
              url: 'http://localhost:3000/students/',
            },
            showById: {
              type: 'GET',
              url: 'http://localhost:3000/students/:id',
            },
            update: {
              type: 'PUT',
              url: 'http://localhost:3000/students/:id',
            },
            delete: {
              type: 'DELETE',
              url: 'http://localhost:3000/students/:id',
            },
          },
        },
      },
    });
  }
}

export default new HomeController();
