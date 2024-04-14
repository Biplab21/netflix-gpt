export const checkValidData = (email, password)=>{
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[A-Z]).{8,20}$/.test(password);


    if(!isEmailValid) return "Email is not valid"
    if(!isPasswordValid) return "Password is not valid"

    return null
}