import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',    
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo)
    });
        
    if (!response.ok) {
        throw new Error('Login failed');
        
    }
    
      const data = await response.json();
      return data;
    } catch (err) {
      console.log('Error from user login: ', err);
   
      throw err;
    }      
};
 
export { login };

