function create (app) {
  return {
    creator: (port) => {
      return new Promise((resolve, reject) => {
        const server = app.listen(port, () => {
          resolve({
            server: {
              shutdown: () => {
                server.close();
              }
            },
            url: `http://localhost:${port}`
          });
        });
      });
    }
  };
}

const expressWrapper = {
  create: create
};

module.exports = expressWrapper;
