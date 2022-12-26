addEventListener("DOMContentLoaded", (e)=>{
//Pregunto si quiere el huevo frito.
//Si me dice que si, lo frio, si me dice que no, lo hago hervido.
//Una vez cocinado le pregunto si quiere sal en el huevo.
//Si me dice que no lo sirvo en el Plato. Si me dice que si le hecho sal y después lo sirvo en el plato.
 
let  huevo= prompt("¿quiere huevo frito?","");
if (huevo=="si"){
    alert("el huevo estara frito"); 
}else {
    alert("el huevo estara hervido");
}

let  sal= prompt("¿quiere echarle sal?","");
if (sal=="no"){
    alert("lo servire en un plato");
}else {
    alert( "le hecho sal y despues lo sirvo en un plato");
}
})