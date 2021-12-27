import isEmail from "validator/es/lib/isEmail";
import isStrongPassword from "validator/es/lib/isStrongPassword";
import isEmpty from "validator/es/lib/isEmpty";

const validation = (email, password, repeatedPassword) => {
    let isValidate = true;
    let errorLoginMessage = "";
    let errorPasswordMessage = "";
    let errorRepeatedPasswordMessage = "";

    if (!isEmail(email)) {
        isValidate = false;
        errorLoginMessage = "Niepoprawny adres email";
    }

    if (password === "" || !isStrongPassword(password)) {
        isValidate = false;
        errorPasswordMessage = "Hasło jest za słabe";
    }

    if (repeatedPassword === "" || repeatedPassword !== password) {
        isValidate = false;
        errorRepeatedPasswordMessage = "Hasła nie są takie same";
    }

    return {
        isValidate,
        errorLoginMessage,
        errorPasswordMessage,
        errorRepeatedPasswordMessage
    }
}

const addEventValidation = (...inputs) => {
    let isValidate = true;
    inputs.forEach(input => {
        if (isEmpty(input)) {
            isValidate = false;
        }
    });
    return isValidate;
}

export {
    validation,
    addEventValidation
}