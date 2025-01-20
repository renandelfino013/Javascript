const { JSDOM } = require('jsdom');

describe('mudarimagen function', () => {
    let document;
    let imagen;

    beforeEach(() => {
        const dom = new JSDOM(`<!DOCTYPE html><body><img id="img"></body>`);
        document = dom.window.document;
        imagen = document.getElementById('img');
    });

    function mudarimagen(hora) {
        if (hora >= 6 && hora <= 12) {
            imagen.src = 'manha.jpg';
            imagen.alt = 'imagen de paisagen de manhã/nascer do sol';
        } else if (hora > 12 && hora <= 18) {
            imagen.src = 'tarde.jpg';
            imagen.alt = 'imagen de paisagen de tarde/por do sol';
        } else {
            imagen.src = 'noite.jpg';
            imagen.alt = 'imagen de paisagen de noite/lua';
        }
    }
});
