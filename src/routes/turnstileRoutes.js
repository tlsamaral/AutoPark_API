import { Router } from 'express';
import turnstileController from '../controllers/TurnstileController';
const router = new Router();

router.post('/', turnstileController.store);
router.get('/', turnstileController.index);

router.get('/:id', turnstileController.show);
router.put('/', turnstileController.update);
router.delete('/:id', turnstileController.delete);
export default router;
