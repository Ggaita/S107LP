function loguer () {

let user=document.getElementById("usuario").value;
let pass=document.getElementById("clave").value;

if (user== "Ggaita" && pass== 32889818) {
    window.location="./manual/manual.html"
}

else {
    Swal.fire({
        title: "CENTRO!!!",
        text: "No se compió, mire 2 seg antes de apretar el botón",
        imageUrl: "images/rocha-alert.jpg",
        imageWidth: 330,
        imageHeight: 400,
        imageAlt: "No te conozco", 
      });
}
}