"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

class TokenController {
  async store(req, res) {
    try {
      const { email = '', password = '' } = req.body;

      if (!email || !password) return res.status(401).json({ errors: ['Credenciais inválidas'] });

      const user = await _User2.default.findOne({
        where: { email },
        order: [[_Foto2.default, 'id', 'desc']],
        include: {
          model: _Foto2.default,
          attributes: ['url', 'filename'],
        },
      });

      if (!user) return res.status(401).json({ errors: ['Usuário não existe'] });

      if (!(await user.passwordIsValid(password))) {
        return res.status(401).json({ errors: ['Senha incorreta'] });
      }

      const { id, Fotos } = user;
      const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
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

exports. default = new TokenController();
