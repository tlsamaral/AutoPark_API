"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _TurnstileController = require('../controllers/TurnstileController'); var _TurnstileController2 = _interopRequireDefault(_TurnstileController);
const router = new (0, _express.Router)();

router.post('/', _TurnstileController2.default.store);
router.get('/', _TurnstileController2.default.index);

router.get('/:id', _TurnstileController2.default.show);
router.put('/', _TurnstileController2.default.update);
router.delete('/:id', _TurnstileController2.default.delete);
exports. default = router;
