const Validator = require("validator");
const validText = require("./valid_text");

module.exports = function validateInputs(data) {
    data.email = validText(data.email) ? data.email : "";
    data.name = validText(data.name) ? data.name : "";
    data.password = validText(data.password) ? data.password : "";
    
    if (!Validator.isEmail(data.email)) {
        return { message: "email is invalid", isValid: false };
    }

    if (!Validator.isEmpty(data.email)) {
        return { message: "email is required", isValid: false };
    }

    if (!Validator.isEmpty(data.name)) {
        return { message: "name is required", isValid: false };
    }

    if (!Validator.isEmpty(data.password)) {
        return { message: "password is required", isValid: false };
    }

    return {
        message: "",
        isValid: true
    }
}