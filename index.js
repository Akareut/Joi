const joi = require("joi")
const complex = require("joi-password-complexity")
const schema = joi.object({
    name:joi.string().min(6).max(20).required(),
    username:joi.string().alphanum().min(6).max(20),
    age:joi.number().integer().min(1).max(50).required(),
    password:joi.string().regex(new RegExp("^[a-zA-Z0-9]{8,30}$")).required(),
    confirm_password:joi.ref("password"),
    amount:joi.number(),
    token:joi.any(),
    email:joi.string().email({
        minDomainSegments:2,
        tlds:{ allow:["com" , "in"]}
    })
})

const payload ={
    name:"Francesca Akareut",
    username:"Franky247",
    age:20,
    password:"Frankie247",
    confirm_password:"Frankie247",
    amount:1000,
    token:300,
    email:"franky@gmail.com"
}
const{error,value}=schema.validate(payload);
if  (error) {
    console.log(error.message);

}else console.log(value);
