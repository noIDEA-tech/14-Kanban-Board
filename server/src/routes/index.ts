// TODO: Add authentication to the API routes // Protected routes (authentication required)
import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

//public routes (no authentication required)
router.use('/auth', authRoutes);

//protected routes (authentication required)
router.use('/api', authenticateToken, apiRoutes);

export default router;

