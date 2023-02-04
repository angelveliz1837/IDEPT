document.querySelector('input[name="apellidos"]').addEventListener("keypress",function(event){
    var ascii=event.keyCode || event.which;
    if((ascii>=48 && ascii<=57) || (ascii==46)){
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="nombres"]').addEventListener("keypress",function(event){
    var ascii=event.keyCode || event.which;
    if((ascii>=48 && ascii<=57) || (ascii==46)){
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="trabajo"]').addEventListener("keypress",function(event){
    var ascii=event.keyCode || event.which;
    if((ascii>=48 && ascii<=57) || (ascii==46)){
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="unidad"]').addEventListener("keypress",function(event){
    var ascii=event.keyCode || event.which;
    if((ascii>=48 && ascii<=57) || (ascii==46)){
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="cargo"]').addEventListener("keypress",function(event){
    var ascii=event.keyCode || event.which;
    if((ascii>=48 && ascii<=57) || (ascii==46)){
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="distrito2"]').addEventListener("keypress",function(event){
    var ascii=event.keyCode || event.which;
    if((ascii>=48 && ascii<=57) || (ascii==46)){
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="provincia2"]').addEventListener("keypress",function(event){
    var ascii=event.keyCode || event.which;
    if((ascii>=48 && ascii<=57) || (ascii==46)){
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="ciudad2"]').addEventListener("keypress",function(event){
    var ascii=event.keyCode || event.which;
    if((ascii>=48 && ascii<=57) || (ascii==46)){
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="deposito"]').addEventListener("keypress",function(event){
    var ascii=event.keyCode || event.which;
    if((ascii>=48 && ascii<=57) || (ascii==46)){
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="doc"]').addEventListener("keypress",function(event){
    if(longitud>=8){
        window.event.preventDefault();
        return;
    }
});

function registrar(frm){
    let test=/^\d{8}$/;
    if(!test.test(frm.doc.value)){
        window.event.preventDefault();
        alert("DNI incorrecto"); return;
    }

    test=/^\s*$/;
    if(test.test(frm.nombres.value)){
        window.event.preventDefault();
        alert("Ingrese el nombre"); return;
    }

    if(test.test(frm.apellidos.value)){
        window.event.preventDefault();
        alert("Ingrese sus apellidos"); return;
    }

    if(test.test(frm.trabajo.value)){
        window.event.preventDefault();
        alert("Ingrese el trabajo"); return;
    }

    if(test.test(frm.unidad.value)){
        window.event.preventDefault();
        alert("Ingrese el area"); return;
    }

    if(test.test(frm.cargo.value)){
        window.event.preventDefault();
        alert("Ingrese el cargo"); return;
    }

    if(test.test(frm.direccion2.value)){
        window.event.preventDefault();
        alert("Ingrese la dirección"); return;
    }

    if(test.test(frm.distrito2.value)){
        window.event.preventDefault();
        alert("Ingrese el distrito"); return;
    }

    if(test.test(frm.provincia2.value)){
        window.event.preventDefault();
        alert("Ingrese la provincia"); return;
    }

    if(test.test(frm.ciudad2.value)){
        window.event.preventDefault();
        alert("Ingrese la ciudad"); return;
    }

    if(test.test(frm.deposito.value)){
        window.event.preventDefault();
        alert("Ingrese si deposito o transfirió"); return;
    }

    test=/^[9][0-9]{8}$/;
    if(!test.test(frm.celular.value)){
        window.event.preventDefault();
        alert("Celular debe tener 9 digitos"); return;
    }

    test= /^([a-zA-Z0-9])+[@]([a-z])+[.][a-z]{2,3}$/;
    if(!test.test(frm.email.value)){
        window.event.preventDefault();
        alert("Formato de email incorrecto"); return;
    }

    test=/^([0-3][0-9])+[/]+([0-1][0-9])+[/]+([1-2][0-9][0-9][0-9])$/;
    if(!test.test(frm.fecha_dep.value)){
        window.event.preventDefault();
        alert("Ingrese la fecha correcta"); return;
    }

    if(test.test(frm.tema.value)){
        window.event.preventDefault();
        alert("Ingrese el tema"); return;
    }
    alert("Datos ingresados");
}