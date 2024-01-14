function cotizar1(precio, tasa, meses){
    var abono_ci = document.getElementById("abono_ci")
     
    var letra = precio * ((tasa * (tasa + 1) ** meses)) / ((tasa + 1) ** meses - 1);
    var t_prestamo = letra * meses 
    var res_abono = t_prestamo - parseFloat(abono_ci.value);
    var total_l = res_abono / meses 
    var resultado_ci = document.getElementById("resultado_ci");
    resultado_ci.innerHTML = total_l.toFixed(2)
    console.log(total_l);
    
}

function cotizar2(precio, tasa, meses){
    var abono_ce = document.getElementById("abono_ce")
     
    var letra = precio * ((tasa * (tasa + 1) ** meses)) / ((tasa + 1) ** meses - 1);
    var t_prestamo = letra * meses 
    var res_abono = t_prestamo - parseFloat(abono_ce.value);
    var total_l = res_abono / meses 
    var resultado_ce = document.getElementById("resultado_ce");
    resultado_ce.innerHTML = total_l.toFixed(2)
    console.log(total_l);
    
}

function cotizar3(precio, tasa, meses){
    var abono_co = document.getElementById("abono_co")
     
    var letra = precio * ((tasa * (tasa + 1) ** meses)) / ((tasa + 1) ** meses - 1);
    var t_prestamo = letra * meses 
    var res_abono = t_prestamo - parseFloat(abono_co.value);
    var total_l = res_abono / meses 
    var resultado_co = document.getElementById("resultado_co");
    resultado_co.innerHTML = total_l.toFixed(2)
    console.log(total_l);
    
}

function cotizar4(precio, tasa, meses){
    var abono_au = document.getElementById("abono_au")
     
    var letra = precio * ((tasa * (tasa + 1) ** meses)) / ((tasa + 1) ** meses - 1);
    var t_prestamo = letra * meses 
    var res_abono = t_prestamo - parseFloat(abono_au.value);
    var total_l = res_abono / meses 
    var resultado_au = document.getElementById("resultado_au");
    resultado_au.innerHTML = total_l.toFixed(2)
    console.log(total_l);
    
}