// Author Eetu
// 9.9.2019

function temp(x){
    
    let toiminto = document.getElementById("toiminto").value;
    let desi = document.querySelector('input[name="desimaali"]:checked').value;
    let result;

    if (toiminto == "celtofah") {
        result = celToFah(x);
    } else if (toiminto == "fahtocel") {
        result = fahToCel(x);
    } else if (toiminto == "keltocel") {
        result = kelToCel(x);
    } else if (toiminto == "celtokel") {
        result = celToKel(x);
    } else if (toiminto == "keltofah") {
        result = kelToFah(x);
    } else if (toiminto == "fahtokel") {
        result = fahToKel(x);
    }
    console.log(typeof result);

    document.getElementById('tempResult').innerHTML = result.toFixed(desi);
  
}

function celToFah(cf){
    return cf * 1.8 + 32;
}

function fahToCel(fc){
    return (fc - 32) / 1.8
}

function kelToCel(kc){
    return kc - 273.15
}

function celToKel(ck){
    
    return Number(ck) + 273.15
}
function kelToFah(kf){
    return kf * 1.8 - 459.67
}

function fahToKel(fk){
    return (Number(fk) + 459.67) / 1.8
}