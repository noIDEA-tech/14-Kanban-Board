import { jwtDecode, JwtPayload } from 'jwt-decode';

class AuthService {
   getProfile(): JwtPayload | null {    
      const token = this.getToken();
      try {

        return token ? jwtDecode(token) : null;  
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }

  loggedIn(): boolean {    
    const token = this.getToken();
    
    if (!token) return false;  
    
    return !this.isTokenExpired(token);   
  }

  isTokenExpired(token: string): boolean {    
    try {
       const decoded = jwtDecode<JwtPayload>(token);
     
      if (!decoded.exp) return true;    
        
      return decoded.exp * 1000 < Date.now();  
    } catch (error) {
      console.error('Error checking token expiration:', error);
      return true;  
    }
  }

  getToken(): string {    
      return localStorage.getItem('id_token') || '';    
  }

  login(idToken: string): void {    
    localStorage.setItem('id_token', idToken);  
    
    window.location.assign('/');  
  }

  logout(): void {   
    localStorage.removeItem('id_token');   
    
    window.location.assign('/login');  
  }
}

export default new AuthService();

