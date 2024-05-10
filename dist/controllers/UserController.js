"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _emailService = require('../services/emailService'); var _emailService2 = _interopRequireDefault(_emailService);

class UserController {
  async store(req, res) {
    try {
      console.log(req.body);
      const novoUser = await _User2.default.create(req.body);

      const { id, nome, email } = novoUser;

      const respEmail = await _emailService2.default.call(void 0, nome, email, req.body.password);

      return res.json({
        id, nome, email, respEmail,
      });
    } catch (e) {
      console.log(e);
      let errors = [];
      if (e.errors) {
        errors = e.errors.map((err) => `${err.message}`);
      } else {
        errors.push('An unexpected error occurred.');
      }
      console.log(errors);
      return res.status(400).json({ errors });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await _User2.default.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }

  // Show
  async show(req, res) {
    try {
      const user = await _User2.default.findByPk(req.params.id);

      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }

  // Update
  async update(req, res) {
    try {
      console.log(req.body);
      const user = await _User2.default.findByPk(req.body.id);
      console.log(user);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      const novosDados = await user.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => `${err.message}`),
      });
    }
  }
  // Delete

  async delete(req, res) {
    try {
      console.log(req.userId);
      const user = await _User2.default.findByPk(req.userId);
      console.log(user);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }
      await user.destroy();
      return res.json(null);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => `${err.message}`),
      });
    }
  }
}

exports. default = new UserController();
