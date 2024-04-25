import { Router } from 'express';
import vacancyController from '../controllers/VacancyController';
const router = new Router();

router.post('/', vacancyController.store);
router.get('/', vacancyController.index);

router.get('/:id', vacancyController.show);
router.put('/', vacancyController.update);
router.delete('/:id', vacancyController.delete);
export default router;
