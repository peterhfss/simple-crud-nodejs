import { Router } from 'express';
import UserController from './controllers/userController.js';

const router = Router();

/** Criando as rotas da aplicação */
router.get('/', UserController.index);

router.post('/user', UserController.store);

router.put('/user:id', UserController.update);

router.delete('/user:id', UserController.destroy);

export default router;