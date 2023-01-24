window.onscroll = function() {
    var posicion = window.pageYOffset || document.documentElement.scrollTop;

    var element1 = document.getElementById('heroShape');
    var element2 = document.getElementById('trabajosShape');
    var element3 = document.getElementById('contactoShape');

    var element4 = document.getElementById('nosotrosShape1');
    var element5 = document.getElementById('nosotrosShape2');
    var element6 = document.getElementById('nosotrosShape3');

    element1.style.top = posicion * 0.1 + "px";
    element2.style.top = posicion * 0.15 + "px";
    element3.style.bottom = posicion * 0.25 + "px";

    element4.style.bottom = posicion * 0.1 + "px";
    element5.style.top = posicion * 0.1 + "px";
    element6.style.bottom = posicion * 0.1 + "px";
}



