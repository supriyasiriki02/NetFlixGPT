export const checkValidation =(email,password)=>{
    const isEmailValid =  /^[(\w\d\W)+]+@[\w+]+\.[\w+]+$/i.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
    if(!isEmailValid) return "Email is not Valid";
    if(!isPasswordValid) return "password is not Valid";
    return null;
}