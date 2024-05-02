"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Turnstile = require('../models/Turnstile'); var _Turnstile2 = _interopRequireDefault(_Turnstile);

class TurnstileController {
  async store(req, res) {
    try {
      if (!req.body) {
        throw new Error('Request body is missing or empty.');
      }

      const newTurnstile = await _Turnstile2.default.create(req.body);

      return res.json({
        newTurnstile,
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
      const Turnstiles = await _Turnstile2.default.findAll();
      return res.json(Turnstiles);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }

  // Show
  async show(req, res) {
    try {
      const Turnstiles = await _Turnstile2.default.findByPk(req.params.id);

      return res.json(Turnstiles);
    } catch (e) {
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }

  // Update
  async update(req, res) {
    try {
      console.log(req.body);
      const turnstiles = await _Turnstile2.default.findByPk(req.body.id);

      if (!turnstiles) {
        return res.status(400).json({
          errors: ['Turnstile not found.'],
        });
      }

      const newData = await turnstiles.update(req.body);
      console.log(newData);
      return res.json(newData);
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
      console.log(req.params.id);
      const turnstile = await _Turnstile2.default.findByPk(req.params.id);
      console.log(turnstile);
      if (!turnstile) {
        return res.status(400).json({
          errors: ['Turnstile not found.'],
        });
      }
      await turnstile.destroy();
      return res.json(true);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => `${err.message}`),
      });
    }
  }
}

exports. default = new TurnstileController();
