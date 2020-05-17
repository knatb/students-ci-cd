import Controller from '../models/Controller';

export default class StudentController extends Controller {
  static basePath = '/api/students';

  static mountController(app) {
    return new StudentController(app);
  }

  // eslint-disable-next-line class-methods-use-this
  initialize() {
    throw new Error('Method not implemented');
  }
}
