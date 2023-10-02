const container = document.getElementById("personajes")
/*VARIABLES FILTROS*/
/*ESTADO*/
const toDos = document.getElementById("personajesTodos")
const alive = document.getElementById("vivo")
const dead = document.getElementById("muerto")
const none = document.getElementById("incierto")
/*ESPECIES*/
const human = document.getElementById("humano")
const alien = document.getElementById("alien")
const robot = document.getElementById("robotico")
/*GENERO*/
const female = document.getElementById("mujer")
const male = document.getElementById("hombre")
const desconocido = document.getElementById("indefinido")

/*PAGINACION CON BOTONES*/

/*PRIMERA PAGINA*/
const primeraPagina = document.querySelector(".primeraPagina")
/*ULTIMA PAGINA*/
const ultimaPagina = document.querySelector(".ultimaPagina")

/*BOTON ANTERIOR*/
const anterior = document.querySelector(".anterior")
/*BOTON SIGUIENTE*/
const siguiente = document.querySelector(".siguiente")


const todosLosPersonajes = (elementos) => {
    fetch(`https://rickandmortyapi.com/api/character?page=${elementos}`)
        .then(respuesta => respuesta.json())
        .then((datos) => cadaPersonaje(datos))

}
todosLosPersonajes();


/*CARDS DE TODOS LOS PERSONAJES */
const cadaPersonaje = (datos) => {
    container.innerHTML = ""
    datos.results.forEach(personajes => {
        container.innerHTML += `
<div class="container">

    <div class="cardsPersonajes">
        <div class="caja cajaUno">
            <div class="contenido">
              <img class="personajesImage" src=${personajes.image} alt="">
              <h2 class="personajesName">${personajes.name}</h2>
            </div>
        </div>

        <div class="caja cajaDos">
            <div class="contenido">
              <p class="espeCie"><strong>Especie: ${personajes.species}</strong></p>
              <p class="estaDo"><strong>Estado: ${personajes.status}</strong></p>
              <p class="geneRo"><strong>Género: ${personajes.gender}</strong></p>
            </div>
            <button class="ver-mas" onclick=verDetalle("${personajes.url}")><strong>+<strong></button>
        </div>
        
    </div>

</div>`

    })
}

/*CARDS DE PERSONAJE INDIVIDUA*/
const verDetalle = (detallePersonajeUrl) => {
    container.innerHTML = ""
    fetch(detallePersonajeUrl)
        .then(respuesta => respuesta.json())
        .then((personajes) => {
            container.innerHTML =
                `<div class="cardsIndividual">
               
                <h1 class="individualName">${personajes.name}</h1>
                <img class="personajeIndividual" src=${personajes.image} alt="">

       <div class="parrafo">
          <ul class="origen">Origen: ${personajes.origin.name}</ul>
          <ul class="locacion">Locación: ${personajes.location.name}</ul>&nbsp<br>
          <p class="lorem">Lorem ipsum fuyplor sit amet consectetur adipisicing.&nbsp<br>
          &nbsp ipsum duelor sit amet consectetur adipisic greniuiod &nbsp<br>
                &nbsp&nbsp&nbspget lopertaf burejaio, trewloss impyreadcerbian&nbsp&nbsp <br>
           &nbsp  <br>  &nbsp  &nbsp   dorem ipsum sit amet consectetur adipisic  &nbsp<br>
          </p>
        </div>  
       <button class="ver-menos" onclick=todosLosPersonajes()><strong>-</strong></button>
               
      </div>`

        })
};

/*PAGINACION CON BOTONES*/
let elementos = 1
let paginas = 42

/*BOTON ANTERIOR*/
anterior.addEventListener("click", () => {
    if (elementos <= 1) {
        anterior.setAttribute("disabled", true)
    } else if (elementos > 1 && elementos <= paginas) {
        elementos--;
        siguiente.removeAttribute("disabled", true)

    } else {
        siguiente.setAttribute("disabled", true)
        elementos--
    }

    todosLosPersonajes(elementos)
});
/*BOTON SIGUIENTE*/

siguiente.addEventListener("click", () => {
    if (elementos <= 1) {
        anterior.removeAttribute("disabled", true)
        elementos++;
    } else if (elementos > 1 && elementos < paginas) {
        anterior.removeAttribute("disabled", false)
        elementos++
    }

    if (elementos >= paginas) {
        siguiente.setAttribute("disabled", true)
    }
    todosLosPersonajes(elementos)
});

/*FILTROS*/

/*1 TODOS*/
let filtroTodosPersonajes = (todosJuntos) => {
    fetch(`https://rickandmortyapi.com/api/character?${todosJuntos}`)
        .then(respuesta => respuesta.json())
        .then((datos) => cadaPersonaje(datos))
}
filtroTodosPersonajes()

personajesTodos.addEventListener("click", () =>
    filtroTodosPersonajes("character"))

/*2 ESTADO*/

/* 2.1 VIVO*/
let filtroEstadoVivo = (status, alive) => {
    fetch(`https://rickandmortyapi.com/api/character/?${status}=${alive}`)
        .then(respuesta => respuesta.json())
        .then((datos) => cadaPersonaje(datos))
}

filtroEstadoVivo()

vivo.addEventListener("click", () =>
    filtroEstadoVivo("status", "alive"))

/*2.2 MUERTO*/
let filtroEstadoMuerto = (status, dead) => {
    fetch(`https://rickandmortyapi.com/api/character/?${status}=${dead}`)
        .then(respuesta => respuesta.json())
        .then((datos) => cadaPersonaje(datos))
}

filtroEstadoMuerto()

muerto.addEventListener("click", () =>
    filtroEstadoMuerto("status", "dead"))

/*2.3 INCIERTO*/
let filtroEstadoIndefinido = (status, no) => {
    fetch(`https://rickandmortyapi.com/api/character?${status}=${no}`)
        .then(respuesta => respuesta.json())
        .then((datos) => cadaPersonaje(datos))
}

filtroEstadoIndefinido()

incierto.addEventListener("click", () =>
    filtroEstadoIndefinido("status", "unknown"))

/* 3 ESPECIE*/

/*3.1 HUMANO*/
let filtroEspecieSerHumano = (species, human) => {
    fetch(`https://rickandmortyapi.com/api/character/?${species}=${human}`)
        .then(respuesta => respuesta.json())
        .then((datos) => cadaPersonaje(datos))
}

filtroEspecieSerHumano()

serHumano.addEventListener("click", () =>
    filtroEspecieSerHumano("species", "human"))

/*3.2 ALIEN*/
let filtroEspecieAlien = (species, alien) => {
    fetch(`https://rickandmortyapi.com/api/character/?${species}=${alien}`)
        .then(respuesta => respuesta.json())
        .then((datos) => cadaPersonaje(datos))
}

filtroEspecieAlien()

alien.addEventListener("click", () =>
    filtroEspecieAlien("species", "alien"))

/*3.3ROBOT*/
let filtroEspecieRobot = (species, robot) => {
    fetch(`https://rickandmortyapi.com/api/character/?${species}=${robot}`)
        .then(respuesta => respuesta.json())
        .then((datos) => cadaPersonaje(datos))
}

filtroEspecieRobot()

robotico.addEventListener("click", () =>
    filtroEspecieRobot("species", "robot"))


/* 4 GENEROS*/

/*4.1 FEMENINO*/
let filtroGeneroFemenino = (genero, femenino) => {
    fetch(`https://rickandmortyapi.com/api/character/?${genero}=${femenino}`)
        .then(respuesta => respuesta.json())
        .then((datos) => cadaPersonaje(datos))
}

filtroGeneroFemenino()

mujer.addEventListener("click", () =>

    filtroGeneroFemenino("gender", "female"));

/*4.2 MASCULINO*/
let filtroGeneroMasculino = (genero, masculino) => {
    fetch(`https://rickandmortyapi.com/api/character/?${genero}=${masculino}`)
        .then(respuesta => respuesta.json())
        .then((datos) => cadaPersonaje(datos))
}

filtroGeneroMasculino()

hombre.addEventListener("click", () =>

    filtroGeneroFemenino("gender", "male"));

/*4.3 INDEFINIDO*/
let filtroGeneroIndefinido = (gener, unknown) => {
    fetch(`https://rickandmortyapi.com/api/character?${gener}=${unknown}`)
        .then(respuesta => respuesta.json())
        .then((datos) => cadaPersonaje(datos))
}

filtroGeneroIndefinido()

indefinido.addEventListener("click", () =>

    filtroGeneroIndefinido("gender", "unknown"));

let paginaInicial = (number) => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${number}`)
        .then(respuesta => respuesta.json())
        .then((datos) => cadaPersonaje(datos))
}

paginaInicial()

primeraPagina.addEventListener("click", () =>

    paginaInicial(1));

let paginaFinal = (number) => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${number}`)
        .then(respuesta => respuesta.json())
        .then((datos) => cadaPersonaje(datos))
}

paginaFinal()

ultimaPagina.addEventListener("click", () =>

    paginaFinal(42));