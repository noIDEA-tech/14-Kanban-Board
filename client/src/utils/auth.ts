import { jwtDecode, JwtPayload } from 'jwt-decode';

class AuthService {
   getProfile(): JwtPayload | null {   // Get the decoded token payload
      const token = this.getToken();
      try {

        return token ? jwtDecode(token) : null;  // Only attempt to decode if we have a token
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }

  loggedIn(): boolean {    // Check if user is logged in by validating token existence and expiration
    const token = this.getToken();
    
    if (!token) return false; // Return false if there's no token
    
    return !this.isTokenExpired(token);  // Check if token is expired
  }

  isTokenExpired(token: string): boolean {   // Check if token is expired
    try {
       const decoded = jwtDecode<JwtPayload>(token);
     
      if (!decoded.exp) return true;   // Check if the token has an expiration claim
        
      return decoded.exp * 1000 < Date.now();  // Compare expiration timestamp with current time // exp is in seconds, Date.now() is in milliseconds
    } catch (error) {
      console.error('Error checking token expiration:', error);
      return true; // Treat decode errors as expired tokens
    }
  }

  getToken(): string {   // Get token from localStorage
      return localStorage.getItem('id_token') || '';   // Retrieve token from localStorage
  }

  login(idToken: string): void {   // Store token in localStorage and redirect
    localStorage.setItem('id_token', idToken); // Save token to localStorage
    
    window.location.assign('/'); // Redirect to home page
  }

  logout(): void {  // Remove token and redirect to login
    localStorage.removeItem('id_token');  // Remove token from localStorage
    
    window.location.assign('/login'); // Redirect to login page
  }
}

export default new AuthService();

// class AuthService {
  
//   // Check if the user is logged in by retrieving the token from localStorage
//   loggedIn() {
//     const token = this.getToken();
//     return token;
//   }

//   // Retrieve the JWT token from localStorage
//   getToken(): string {
//     const loggedUser = localStorage.getItem('id_token') || '';
//     return loggedUser;
//   }

//   // Store the JWT token in localStorage and redirect to the home page
//   login(idToken: string) {
//     localStorage.setItem('id_token', idToken);
//     window.location.assign('/');
//   }

//   // Remove the JWT token from localStorage and redirect to the home page
//   logout() {
//     localStorage.removeItem('id_token');
//     window.location.assign('/');
//   }
// }

// // Export an instance of the AuthService class
// export default new AuthService();
