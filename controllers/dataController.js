const ApiError = require('../error/ApiError');

class dataController {

  async getProjects(req, res) {
    try {
    } catch (e) {
      next(ApiError.internal(err));
    }
  }
}
