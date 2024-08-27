
export const checkValidData = (email, password) => {
    const isEmailValid =  /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    if(!isEmailValid) return "Email is not valid";
    else if(!isPasswordValid) return "Password is not valid";
    else return null;
}


export const checkValidData2 = (name, email, password) => {
    const isNameValid = /^[A-Z][a-zA-Z]*(?: [A-Z][a-zA-Z]*)*$/.test(name);
    const isEmailValid =  /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    if(!isNameValid) return "Name is not valid";
    else if(!isEmailValid) return "Email is not valid";
    else if(!isPasswordValid) return "Password is not valid";
    else return null;
}