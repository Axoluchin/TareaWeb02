const cuerpo = document.getElementsByTagName("body")[0];

const Cuerpo = () => {
  cuerpo.style =
    "background-color: #161616; font-family: 'Josefin Sans', sans-serif; color: #CACACA; margin: 0%; font-size: large;";
};

const Top = () => {
  const cabeza = document.createElement("header");
  const imagen = document.createElement("img");
  const titulo = document.createElement("h1");

  cabeza.style = "display: flex; align-items: center; padding: 15px;";

  titulo.appendChild(document.createTextNode("Fes Acatlan"));
  titulo.style = "text-align: center; flex: 1;";
  imagen.src =
    "https://www.acatlan.unam.mx/identidad-acatlan/img/Logotipos/Escudo/escudo-d.png";
  imagen.style = "width: 150px; height: 150px;";

  cabeza.appendChild(imagen);
  cabeza.appendChild(titulo);
  cuerpo.appendChild(cabeza);
};

const Navegacion = () => {
  const navi = document.createElement("nav");
  const lista = document.createElement("ul");

  for (let index = 1; index < 5; index++) {
    const item = document.createElement("li");

    item.appendChild(document.createTextNode(`Opcion ${index}`));
    lista.appendChild(item);
  }

  navi.appendChild(lista);

  lista.style =
    "padding: 0%; margin: 0%; list-style: none; display: flex; justify-content: space-evenly; background-color: #c84b31;  padding: 20px;";
  cuerpo.appendChild(navi);
};

Cuerpo();
Top();
Navegacion();

const contenido = document.createElement("section");
contenido.style = "display: flex; flex-direction: row-reverse;";
cuerpo.appendChild(contenido);

const LiteralYo = () => {
  const articulo = document.createElement("article");
  const foto = document.createElement("img");
  const parrafo = document.createElement("p");
  articulo.style =
    "width: 300px;   padding: 25px;   background-color: #346751;";

  foto.src = "https://pbs.twimg.com/media/Es6aoM1XUAE4Gwh.jpg";
  foto.style = "width: 100%;   border-radius: 50%;";

  parrafo.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis incidunt asperiores aliquid saepe blanditiis aspernatur nemo eius vitae quasi quaerat amet fugit consequuntur, corporis nobis laboriosam iusto. Dolore, blanditiis reiciendis.";

  articulo.appendChild(foto);
  articulo.appendChild(parrafo);
  contenido.appendChild(articulo);
};

LiteralYo();

const ArtiCulo = document.createElement("section");
ArtiCulo.style = "padding: 30px;";
contenido.appendChild(ArtiCulo);

const Cabezera = () => {
  const articulo = document.createElement("article");
  articulo.style =
    "border: #ecdbba solid 2px;    border-radius: 32px;    padding: 1rem;    margin: 30px 0; display: flex;   flex-direction: column;    align-items: center;";
  const textoArriba = document.createElement("p");
  textoArriba.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dignissimos perferendis excepturi, consequuntur harum sint.  ";
  articulo.appendChild(textoArriba);

  const imagen = document.createElement("img");
  imagen.src = "img/setup.jpg";
  imagen.style = "width: 50%;  height: 150px;  object-fit: cover;";

  articulo.appendChild(imagen);

  const textoAbajo = document.createElement("p");
  textoAbajo.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
  articulo.appendChild(textoAbajo);

  ArtiCulo.appendChild(articulo);
};

Cabezera();

const Formulario = () => {
  const preFormulario = document.createElement("article");
  preFormulario.style =
    "border: #ecdbba solid 2px;    border-radius: 32px;    padding: 1rem;    margin: 30px 0;";

  const textoArriba = document.createElement("p");
  textoArriba.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
  preFormulario.appendChild(textoArriba);

  ArtiCulo.appendChild(preFormulario);

  const FormularioCont = document.createElement("form");
  FormularioCont.style =
    "border: #ecdbba solid 2px;    border-radius: 32px;    padding: 1rem;    margin: 30px 0; background-color: #19282f;";
  const titulo = document.createElement("h2");
  titulo.textContent = "Búzon de Sugerencias";
  FormularioCont.appendChild(titulo);

  const names = ["Nombre", "Correo", "Asunto", "Comentario"];
  const type = ["text", "email", "text", "textarea"];
  const ids = ["name", "mail", "asunto", "comentario"];

  for (let index = 0; index < names.length; index++) {
    const label = document.createElement("label");
    label.setAttribute("for", ids[index]);
    label.textContent = names[index];
    label.style = "display: block;    margin: 20px;";
    FormularioCont.appendChild(label);

    const input = document.createElement(
      type[index] !== "textarea" ? "input" : "textarea"
    );

    type[index] !== "textarea" ? (input.type = type[index]) : {};

    input.id = ids[index];
    input.name = ids[index];

    input.style =
      "width: 100%;    border-style: none;    background-color: #161616;    color: #CACACA;    font-size: large;    font-family: 'Josefin Sans', sans-serif;";

    FormularioCont.appendChild(input);
  }

  const sumit = document.createElement("input");
  sumit.type = "submit";
  sumit.value = "Enviar";
  sumit.style =
    "width: 100%;    border-style: none;        color: #CACACA;    font-size: large;    font-family: 'Josefin Sans', sans-serif; margin-top: 20px;  background-color: #346751;";

  FormularioCont.appendChild(sumit);

  preFormulario.appendChild(FormularioCont);
};

Formulario();
