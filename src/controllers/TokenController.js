import jwt from 'jsonwebtoken';
import User from '../models/User';
import Foto from '../models/Foto';

class TokenController {
  async store(req, res) {
    try {
      const { email = '', password = '' } = req.body;

      if (!email || !password) return res.status(401).json({ errors: ['Credenciais inválidas'] });

      const user = await User.findOne({
        where: { email },
        order: [[Foto, 'id', 'desc']],
        include: {
          model: Foto,
          attributes: ['url', 'filename'],
        },
      });

      if (!user) return res.status(401).json({ errors: ['Usuário não existe'] });

      if (!(await user.passwordIsValid(password))) {
        return res.status(401).json({ errors: ['Senha incorreta'] });
      }

      const { id, Fotos } = user;
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.json({
        token,
        user: {
          nome: user.nome, id, email, Fotos,
        },
      });
    } catch (err) {
      return console.log(err);
    }
  }
}

export default new TokenController();
