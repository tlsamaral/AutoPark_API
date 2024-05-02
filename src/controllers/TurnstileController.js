import Turnstile from '../models/Turnstile';

class TurnstileController {
  async store(req, res) {
    try {
      if (!req.body) {
        throw new Error('Request body is missing or empty.');
      }

      const newTurnstile = await Turnstile.create(req.body);

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
      const Turnstiles = await Turnstile.findAll();
      return res.json(Turnstiles);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }

  // Show
  async show(req, res) {
    try {
      const Turnstiles = await Turnstile.findByPk(req.params.id);

      return res.json(Turnstiles);
    } catch (e) {
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }

  // Update
  async update(req, res) {
    try {
      console.log(req.body);
      const turnstiles = await Turnstile.findByPk(req.body.id);

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
      const turnstile = await Turnstile.findByPk(req.params.id);
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

export default new TurnstileController();
