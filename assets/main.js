window.onscroll = function() {
    var posicion = window.pageYOffset || document.documentElement.scrollTop;

    var element1 = document.getElementById('heroShape');

    element1.style.top = posicion * 0.1 + "px";
}