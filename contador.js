const cuadroTexto = document.querySelector("textarea");
const boton = document.querySelector("button");
const cuentac = document.querySelector(".carqty");
const cuentap = document.querySelector(".wordqty");
const listadetop = document.querySelector(".listTop");
const getText = cuadroTexto.value;
let getCount = [];
let elementosUnicos = [];
let repetidos = [];
let contador = 1;
let elementosdeltop = [];

const elementostest = [
  {
    palabra: "hola",
    cantidad: 4,
  },
  {
    palabra: "Gaby",
    cantidad: 3,
  },
];

boton.addEventListener("click", wordCount());

function wordCount() {
  const getText = cuadroTexto.value.toLowerCase();
  console.log(getText);
  const textoDividido = getText.split(" ");
  getCount = textoDividido.filter((text) => text != "");
  console.log(getCount);
  console.log(getCount.length);
  cuentap.innerHTML = `Cantidad de palabras: ${getCount.length}`;
  cuentac.innerHTML = `Cantidad de caracteres: ${getText.length}`;
  toplist(getCount);
}

function toplist(arr) {
  console.log(`Ordenado: ${arr.sort()}`);
  arrOrdenado = arr.sort();
  elementosUnicos = [];
  repetidos = [];
  contador = 1;

  for (let index = 0; index < arrOrdenado.length; index++) {
    if (arrOrdenado[index] === arrOrdenado[index + 1]) {
      contador++;
    } else {
      elementosUnicos.push({
        palabra: arrOrdenado[index],
        cantidad: contador,
      });

      contador = 1;
    }
  }
  const filteredData = elementosUnicos.filter(
    (objeto) => objeto.palabra.length >= 4
  );

  elementoslimit = filteredData.sort((x, y) => y.cantidad - x.cantidad);
  // limite del top
  console.log(elementoslimit.length);
  //   let top = elementoslimit.length;
  //   for (let i = 0; i < top; i++) {
  //     if (elementoslimit.length > 7) {
  //       elementoslimit.pop();
  //       console.log("borre");
  //     }
  //   }

  console.log("limit" + elementoslimit.length);
  listadetop.innerHTML = elementoslimit
    .slice(0, 7)
    .map(
      (top) =>
        `<li class='topli'>
           <p>${top.palabra}</p>
           <p class='badge'>${top.cantidad}</p>
          </li>`
    )
    .join(" ");
  console.log(elementosUnicos);
}
