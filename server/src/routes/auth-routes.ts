import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

 // TODO: If the user exists and the password is correct, return a JWT token
 export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    // Validate input
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    } 

    // Find user
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

   // Compare password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

  // Generate JWT token
     const token = jwt.sign(
      { username: user.username },
      process.env.JWT_SECRET_KEY || '',
      { expiresIn: '24h' }
    );

   // Return token
      res.json({
        message: 'Login successful',
        token,
        user: {
        id: user.id,
        username: user.username
      }
  });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error during login' });
    }
    return res.status(500).json({ message: 'Unexpected error' });
  };

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;