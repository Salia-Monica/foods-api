const yup = require("yup")

function validate(data) {
 const userSchema = yup.object().shape({

    username: yup.string().required("username cant't be null").min(3).max(20),
    email: yup.string().required("email cant't be null").min(3).max(20),
    password: yup.string().required("password cant't be null").min(3).max(20),
    

 });
 return userSchema.validate(data);

}

module.exports = validate










