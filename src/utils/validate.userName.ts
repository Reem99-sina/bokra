export const validateInput = ({value,message}:{value:string,message:string}) => {  
    // Email regex pattern  
    const emailPattern = /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/;  
    
    // Username regex pattern (only letters, numbers, and underscores)  
    const usernamePattern = /^[a-zA-Z0-9_]{3,15}$/;  

    // Check if the input is a valid email or a valid username  
    if (emailPattern.test(value)) {  
        return true;  
    } else if (usernamePattern.test(value)) {  
        return true;  
    } else {  
        return message;  
    }  
};  