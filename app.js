const productos = [
  {
    nombre: "Animalitos navideños",
    desc: "Caja de velas baby blancas con divertidos animalitos navideños.",
    detalles: ["Presentación: caja x 10 velas", "Vela baby blanca", "$19.000" ],
    imgs: ["img/animalitosnavidadcaja.png",
            "img/animalitosnavidad.png"
    ]

  },
  {
    nombre: "Deseos blancos",
    desc: "Caja de velas baby en colores pastel con frases de deseos en blanco.",
    detalles: ["Presentación: caja x 10 velas", "Vela baby pastel", "19.000" ],
    imgs: ["img/deseosblancoscaja.png",
          "img/dedeosblancos.png"
    ]
  },
  {
    nombre: "Deseos negros",
    desc: "Caja de velas baby blancas con frases de deseos en negro.",
    detalles: ["Presentación: caja x 5 velas", "Vela baby blanca","$9.500" ],
    imgs: ["img/deseosnegrox5.png",
            "img/deseosnegros.png"
    ]
  },
  {
    nombre: "Animalitos navideños 2",
    desc: "Caja de velas colombianas blancas con animalitos navideños.",
    detalles: ["Presentación: caja x 10 velas", "Vela colombiana blanca","$16.000"],
    imgs: ["img/navidadcaja.png",
          "img/navidad.png",
          "img/navidadcajaa.png"
    ]
  }
];


const $ = id => document.getElementById(id);
let actual = null;
let sel = 0;


document.querySelectorAll("button[data-i]").forEach(boton => {
  boton.addEventListener("click", () => abrir(Number(boton.dataset.i)));
});

function abrir(i) {
  actual = productos[i];
  sel = 0;
  $("mTitulo").textContent = actual.nombre;
  $("mDesc").textContent = actual.desc;
  $("mLista").innerHTML = actual.detalles.map(d => "<li>" + d + "</li>").join("");
  pintarFotos();
  $("modal").classList.add("abierto");
  document.body.style.overflow = "hidden";
}


function pintarFotos() {
  $("grande").src = actual.imgs[sel];
  $("grande").alt = actual.nombre;
  $("miniaturas").innerHTML = actual.imgs.map((src, k) =>
    k === sel ? "" :
    '<button data-k="' + k + '" aria-label="Ver foto ' + (k + 1) + '"><img src="' + src + '" alt=""></button>'
  ).join("");
}


$("miniaturas").addEventListener("click", e => {
  const b = e.target.closest("button[data-k]");
  if (b) { sel = Number(b.dataset.k); pintarFotos(); }
});

function cerrar() {
  $("modal").classList.remove("abierto");
  document.body.style.overflow = "";
}
$("cerrar").onclick = cerrar;
$("modal").addEventListener("click", e => { if (e.target.id === "modal") cerrar(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") cerrar(); });


$("pedir").onclick = () => {
  const msg = encodeURIComponent("Hola, me interesa: " + actual.nombre);
  window.open("https://wa.me/573054756421?text=" + msg, "_blank");
};
