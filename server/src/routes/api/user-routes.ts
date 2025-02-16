import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../../controllers/user-controller.js';

import { authenticateToken } from '../../middleware/auth.js';

const router = express.Router();

router.get('/', authenticateToken, getAllUsers);

router.get('/:id', authenticateToken, getUserById);

router.post('/', authenticateToken, createUser);

router.put('/:id', authenticateToken, updateUser);

router.delete('/:id', authenticateToken, deleteUser);

export { router as userRouter };