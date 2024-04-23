import User from '../models/User';
import sendEmail from '../services/emailService';

class UserController {
  async store(req, res) {
    try {
      console.log(req.body);
      const novoUser = await User.create(req.body);

      const { id, nome, email } = novoUser;

      const respEmail = await sendEmail(nome, email, req.body.password);

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
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }

  // Show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }

  // Update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      console.log(user);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      const novosDados = await user.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => `${err.message}`),
      });
    }
  }
  // Delete

  async delete(req, res) {
    try {
      console.log(req.userId);
      const user = await User.findByPk(req.userId);
      console.log(user);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }
      await user.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => `${err.message}`),
      });
    }
  }
}

export default new UserController();
