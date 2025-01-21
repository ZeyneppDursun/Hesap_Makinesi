var sayi = document.getElementById("sayi");
var sayi2 = document.getElementById("sayi2");
    
function hesapla(type) {
    var sonuc = "";

    switch(type) {
        case "+":
            sonuc = Number(sayi.value) + Number(sayi2.value);
            break;
        case "-": 
            sonuc = Number(sayi.value) - Number(sayi2.value);
            break;
        case "*": 
            sonuc = Number(sayi.value) * Number(sayi2.value);
            break;
        case "/": 
            sonuc = Number(sayi.value) / Number(sayi2.value);
            break;
    }

    document.getElementById("sonuc").innerHTML = sonuc;
}