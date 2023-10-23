const usuarioAutenticado = new Promise( (resolve, reject) =>{
    const auth =true;

    if (auth){
        resolve('Usuario Autenticado');
    }else{
        reject('No se reconoce el usuario');
    }
});

usuarioAutenticado
    .then( resultado =>console.log(resultado))
    .catch( error => console.log(error))

