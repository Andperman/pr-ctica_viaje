//IMAGEN 1
const insertimg = document.getElementById('image1');

//Creo elemento img , insertar imagen 
const newImage = document.createElement('img');

// Configurar los atributos de la imagen
newImage.src = "img/3.jpg";
newImage.alt = "Atardecer";

newImage.style.width = '100%';  // Ocupa el 100% del ancho del contenedor
newImage.style.height = '300px';

// NEWIMAGE INSERA DETNRO DE INSERTIMG
insertimg.appendChild(newImage);





//podría crear uno de alt también 
    const datos = [
      { imagen: "img/viajes-1.jpg", titulo: "Maldivas", descripcion: "Descripción de Maldivas 1." },
      { imagen: "img/viajes-1.jpg", titulo: "Maldivas", descripcion: "Descripción de Maldivas 2." },
      { imagen: "img/viajes-1.jpg", titulo: "Maldivas", descripcion: "Descripción de Maldivas 3." },
      { imagen: "img/viajes-1.jpg", titulo: "Maldivas", descripcion: "Descripción de Maldivas 4." },
      { imagen: "img/viajes-1.jpg", titulo: "Maldivas", descripcion: "Descripción de Maldivas 5." },
      { imagen: "img/viajes-1.jpg", titulo: "Maldivas", descripcion: "Descripción de Maldivas 6." },
    ]; 
    
    let lista = "<section>";
  
    for (let i = 0; i < datos.length; i++) {
      lista += `<article>
                  <img src="${datos[i].imagen}" alt="${datos[i].titulo}">
                  <h2>${datos[i].titulo}</h2>
                  <p>${datos[i].descripcion}</p>
                </article>`;
    }
  
    document.getElementById("cajas").innerHTML = lista; // Asegúrate de tener un elemento con id "contenedor"
    cajas.insertBefore(article, h1.nextSibling); // Inserta justo después del <h1>


  

//IMAGEN 2 / 3/4 
    // Crear un array con las rutas de las imágenes /ALMACENA RUTAS
   // const imagenesViajes = ['img/viajes-2.jpg', 'img/viajes-1.jpg', 'img/viajes-6.jpg'];
   // const sections = ['image2', 'image3', 'image4'];

    // Iterar sobre cada sección y añadir la imagen
   // sections.forEach((sectionId, index) => {
       // const img = document.createElement('img');
        //img.src = imagenesViajes[index]; // Posicion , imagenviajes[0]...
        //img.alt = "Viajes"; // Texto alternativo
        //img.style.width = "100%"; // Establecer ancho al 100%
       // img.style.height = '180px'; // Establecer altura


        ////const section = document.getElementById(sectionId);
        //section.insertBefore(img, section.firstChild); // Insertar la imagen antes del h2
//});

