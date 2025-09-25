function simularPetisionAPI(){
    return new Promise (resolve => {
        setTimeout(() =>{
            resolve("Datos recividos correctamente");
        },5000);
    });
}

async function obtenerDatos() {
    const resultado = await simularPetisionAPI();
    console.log(resultado);
}

obtenerDatos();