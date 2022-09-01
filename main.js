

let nombre = "Francisco Toledo";
let edad = 24;


let edades = [23, 45, 2, 42];

addContent(`<h2>"${nombre}"</h2><h3>${edad}"</h3>`);

for(let i = 0; i <= edades.length; i++){
    addContent(`<h3>La edad es de ${edades[i]} años"</h3>`)
}

function addContent(newContenido){
    contenido.innerHTML += newContenido;
}


addContent("Hola amigo programador")