const jwt = require('jsonwebtoken');


const generateJWT = ( id ) => {

    return new Promise( (resolve, reject) => {

        const payload = { id };

        jwt.sign( payload, process.env.SECRET_KEY, {
            expiresIn: '7d'
        }, ( err, token ) => {

            if ( err ) {
                console.log(err);
                reject( 'Failed to generate token' )
            } else {
                resolve( token );
            }
        })

    })
}

module.exports = {
    generateJWT
}

