window.onscroll = function() {

    /* ANIMACIONES */
    let fadeUpElems = document.getElementsByClassName('fadeUp');
    let fadeLeftElems = document.getElementsByClassName('fadeLeft');

    for (const fadeUpElem of fadeUpElems) {
        let posicionObj1 = fadeUpElem.getBoundingClientRect().top;
        let tamañoPantalla = window.innerHeight; 

        if (posicionObj1 < tamañoPantalla) {
            fadeUpElem.style.animation = 'fadeUp 1s forwards';
        }
    }

    for (const fadeLeftElem of fadeLeftElems) {
        let posicionObj1 = fadeLeftElem.getBoundingClientRect().top;
        let tamañoPantalla1 = window.innerHeight / 1.5; 

        if (posicionObj1 < tamañoPantalla1) {
            fadeLeftElem.style.animation = 'fadeLeft 2s forwards';
        }
    }
        
    
    /* FORMAS */
    var posicion = window.pageYOffset || document.documentElement.scrollTop;

    var element1 = document.getElementById('heroShape');
    var element2 = document.getElementById('trabajosShape');
    var element3 = document.getElementById('contactoShape');

    element1.style.top = posicion * 0.1 + "px";
    element2.style.top = posicion * 0.15 + "px";
    element3.style.bottom = posicion * 0.25 + "px";

}



