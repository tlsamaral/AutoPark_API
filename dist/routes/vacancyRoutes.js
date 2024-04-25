"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _VacancyController = require('../controllers/VacancyController'); var _VacancyController2 = _interopRequireDefault(_VacancyController);
const router = new (0, _express.Router)();

router.post('/', _VacancyController2.default.store);
router.get('/', _VacancyController2.default.index);

router.get('/:id', _VacancyController2.default.show);
router.put('/', _VacancyController2.default.update);
router.delete('/:id', _VacancyController2.default.delete);
exports. default = router;
