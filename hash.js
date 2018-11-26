const bcrypt = require('bcrypt');
const { MD5 } = require('crypto-js');
const jwt = require('jsonwebtoken');
// bcrypt.genSalt(10, (err, salt) => {
//     if (err) return next(err);

//     bcrypt.hash('password123', salt, (err, hash) => {
//         if (err) return next(err);
//         console.log(hash);
//     })
// });

// const seceret = 'mySecretPassword';
// const secretSalt = 'sfasfasfasfasf'

// const user = {
//     id:1,
//     token: MD5('SDFSDFSDF').toString() + secretSalt
// }

// const receivedToken = 'ddb5bcc8d59840c31cbbb044d5970871sfasfasfasfasf'
// if (receivedToken===user.token) {
//     console.log('move forward');
// }
// console.log(user);

const id = '1000';
const secret = 'supersecret';
const receivedToken = 'eyJhbGciOiJIUzI1NiJ9.MTAwMA.L9PmEqLlZjettygguzj25agunJu6NkvVtG9RFRBnK2Y';


const token = jwt.sign(id, secret); //wiil do the encoding
const decodeToken = jwt.verify(receivedToken, secret); //will do the decoding

console.log(decodeToken);