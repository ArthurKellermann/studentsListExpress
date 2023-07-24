class HomeController {
  async index(req, res) {
    return res.status(200).json({
      inf: {
        routes: {
          user: {
            register: {
              type: 'POST',
              url: 'http://localhost:8000/users/',
            },
            update: {
              type: 'PUT',
              url: 'http://localhost:8000/users/',
            },
            delete: {
              type: 'DELETE',
              url: 'http://localhost:8000/users/',
            },
          },
          auth: {
            login: {
              type: 'POST',
              url: 'http://localhost:8000/auth/',
            },
          },
          students: {
            index: {
              type: 'GET',
              url: 'http://localhost:8000/students/',
            },
            store: {
              type: 'POST',
              url: 'http://localhost:8000/students/',
            },
            showById: {
              type: 'GET',
              url: 'http://localhost:8000/students/:id',
            },
            update: {
              type: 'PUT',
              url: 'http://localhost:8000/students/:id',
            },
            delete: {
              type: 'DELETE',
              url: 'http://localhost:8000/students/:id',
            },
          },
          file: {
            upload: {
              type: 'POST',
              url: 'http://localhost:8000/file/',
            },
          },
        },
      },
    });
  }
}

export default new HomeController();
