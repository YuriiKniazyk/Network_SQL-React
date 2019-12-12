const jwt = require('jsonwebtoken');
const config = require('../../constant/config');

module.exports.login = (token) => {
    let user = null;

    jwt.verify(token, config.secret, (err, decode) => {
        if (err) throw new Error('Token is no valid!!!');
        user = decode;
    });
    return user;
};

module.exports.refresh = (token) => {
    let user = null;

    jwt.verify(token, config.refreshSecret, (err, decode) => {
        if (err) throw new Error('Token is no valid!!!');
        user = decode;
    });
    return user;
};