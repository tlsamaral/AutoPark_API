import Vacancy from '../models/Vacancy';

class VacancyController {
  async store(req, res) {
    try {
      console.log(req.body);
      if (!req.body) {
        throw new Error('Request body is missing or empty.');
      }

      const newVacancy = await Vacancy.create(req.body);

      return res.json({
        newVacancy,
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
      const Vacancies = await Vacancy.findAll();
      return res.json(Vacancies);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }

  // Show
  async show(req, res) {
    try {
      const vacancy = await Vacancy.findByPk(req.params.id);

      return res.json(vacancy);
    } catch (e) {
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }

  // Update
  async update(req, res) {
    try {
      console.log(req.body);
      const vacancy = await Vacancy.findByPk(req.body.id);

      if (!vacancy) {
        return res.status(400).json({
          errors: ['Vanancy not found.'],
        });
      }

      const newData = await vacancy.update(req.body);
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
      const vacancy = await Vacancy.findByPk(req.params.id);
      console.log(vacancy);
      if (!vacancy) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }
      await vacancy.destroy();
      return res.json(true);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => `${err.message}`),
      });
    }
  }
}

export default new VacancyController();
