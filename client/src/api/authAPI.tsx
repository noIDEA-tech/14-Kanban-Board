import { UserLogin } from "../interfaces/UserLogin";
// TODO: make a POST request to the login route

const login = async (userInfo: UserLogin) => {
    try {
        const response = await fetch('http://localhost:3001/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInfo)
        });
    
         if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error: ${errorData.message}`);
        }
    
            const data = await response.json();
    
            return data;
        }   catch (err) {
            console.log('Error from user login: ', err);
            return Promise.reject('Could not fetch user info');
        }   
    
  };
 

export { login };