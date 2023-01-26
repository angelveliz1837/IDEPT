//LLAMADO A LAS FUNCIONES PARA SU EJECUCION (aqui tambien cargo la funcion cargarDefectoAviso)
document.body.setAttribute("onload","fecha()");

//****************CALENDARIO******************/

var dsemanas = new Array("Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab");
//                         0      1      2      3      4      5      6
var meses = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto",
"Setiembre","Octubre","Noviembre","Diciembre");

function fecha(){
    var f = new Date(); //devuelve la fecha del sistema (actual)
    var dia = f.getDate(); //número de dia en el mes
    var mes = meses[f.getMonth()]; //devuelve el nombre ddel mes
    var year = f.getFullYear();

    var ndias = new Date(f.getFullYear(), f.getMonth()+1, 0).getDate(); //se ubica en el ultimo dia del mes
    var dsemana = new Date(f.getFullYear(), f.getMonth(), 1).getDay();
    var nmes = new Date(f.getMonth()+1);
    nmes;

    var dias = new Array(); //dias = []; arreglo vacio

    for(let i=0; i<dsemana; i++){
        dias.push(" "); //rellena espacios( ) en el arreglo
    }

    for(let i=0; i<ndias; i++){
            dias.push(i+1); // rellena el numero de dias en el arreglo
    }//dias = ["","","","",1,2,3....30]
    

    var tabla = document.createElement("table");  //crea un elemento <table>
    document.getElementById('aside_cal').appendChild(tabla)
    
    var fila = document.createElement("tr");  //crea un elemento <tr>
    tabla.appendChild(fila)

    dsemanas.forEach(function(d){ //bloque anonimo a ejecutar al recorrer el arreglo
        let celda = document.createElement("th"); //crea un elemento <th> o columna
        celda.innerHTML = d; //en cada celda coloca el elemento o texto del arreglo
        fila.appendChild(celda); //agrega la celda a la fila
    });

    
    let i=0;
    dias.forEach(function(d){ //bloque anonimo a ejecutar al recorrer el arreglo
        if(i%7 == 0){
            fila = document.createElement("tr");//crea una nueva fila
            tabla.appendChild(fila);            //agrega la fila a la tabla
        }
        i++;
        let celda = document.createElement("td"); //crea un elemento <td> o columna
        celda.innerHTML = d; //en cada celda coloca el elemento o texto del arreglo
        fila.appendChild(celda);  //agrega la celda a la fila
    });

    var borde = document.createAttribute("br");
}

/*--------REDES DE CONTACTANOS--------------------------*/
function gira(e){
    e.style.transform="rotateY(360deg)";
    e.style.transition="all 1s";
}

function retorno(e){
    e.style.transform="rotateY(0deg)";
    e.style.transition="all 1s";
}

let imagenes = document.getElementsByClassName("imgfooter"); //crea un arreglo con las img
//
for (let i=0; i < imagenes.length; i++){
    imagenes[i].setAttribute("onmouseover", "gira(this)");
    imagenes[i].setAttribute("onmouseout", "retorno(this)");
}
