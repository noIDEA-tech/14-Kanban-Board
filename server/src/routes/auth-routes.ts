import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = Router();

 // TODO: If the user exists and the password is correct, return a JWT token
export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
      const user = await User.findOne({ where: { username } });
      if (user === null) {
        return res.status(401).json({ message: 'AUthentication failed ' });
     }

     const validPassword = await bcrypt.compare(password, user.password);
     if (!validPassword) {
      return res.status(401).json({ message: 'Authentication failed' });
     } 
     
     const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET_KEY!,
      { expiresIn: '1h' }
     );

     return res.json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};
    
// POST /login - Login a user
router.post('/login', login);

export default router;
