import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}
 // TODO: verify the token exists and add the user data to the request object

 export const authenticateToken = (req: Request, res: Response, next: NextFunction): Response | void  => {

  // Get token from header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

   // If no token present, return unauthorized
   if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY || '') as JwtPayload;
    
   // Add user data to request object
    req.user = {
      username: decoded.username
    };
    
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

// // Scenario 1: Valid Token
// Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
// → Token verifies successfully
// → next() is called
// → Request proceeds to the actual API endpoint

// // Scenario 2: Expired Token
// Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
// → jwt.verify throws an error
// → catch block executes
// → Returns 403 with error message
// → Request stops here

// // Scenario 3: Tampered Token
// Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
// → jwt.verify throws an error
// → catch block executes
// → Returns 403 with error message
// → Request stops here