import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

 // TODO: If the user exists and the password is correct, return a JWT token
 export const login = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;
  
 // Input validation
 if (!username || !password) {
  return res.status(400).json({ message: 'Username and password are required' });
}  

  try {
    // Find user by username
    const user = await User.findOne({ where: { username } });
  
    // if (!username || !password) {
    //   return res.status(400).json({ message: 'Username and password are required' });
    // }

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Compare password with hashed password in database
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { username: user.username },
      process.env.JWT_SECRET_KEY || '',
      { expiresIn: '24h' }
    );

    // // Return token and success response
    // return res.json({
    //   message: 'Login successful',
    //   token,
    //   user: {
    //     id: user.id,
    //     username: user.username
    //   }
    // });
   // Generate JWT token
    
   // Return token
    return res.json({ token });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Server error during login' });
  }
};

const router = Router();
 
// POST /login - Login a user
router.post('/login', login);

export default router;