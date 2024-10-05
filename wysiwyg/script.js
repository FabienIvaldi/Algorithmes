import { MyWysiwyg } from './modules/my_wysiwyg.js ';
let mw = new MyWysiwyg(document.querySelector('textarea'), {
    buttons: ["Gras", "italique", "Souligner",'taille_de_la_police', "couleur", "barred","lien","aligner_a_droite","aligner_a_gauche","centrer","justifié"],

});

let textarea = document.querySelector('textarea');

textarea.addEventListener('input', update);

function update() {
    let textvalue = textarea.value;
    let output = document.querySelector('#output');
    output.innerHTML = textvalue;
}

output.style.whiteSpace = 'pre-wrap';

let colorsdiv = document.querySelector('.colors')

let bold = document.querySelector('.Gras').addEventListener('click', boldscr)
let italic = document.querySelector('.italique').addEventListener('click', italicscr)
let underline = document.querySelector('.Souligner').addEventListener('click', underscr)
let linestrike = document.querySelector('.barred').addEventListener('click', strikescr)
let color = document.querySelector('.couleur').addEventListener('click', colorscr)
let link = document.querySelector('.lien').addEventListener('click', linkscr)
let center = document.querySelector('.centrer').addEventListener('click', centscr)
let end = document.querySelector('.aligner_a_droite').addEventListener('click', startscr)
let start = document.querySelector('.aligner_a_gauche').addEventListener('click', endscr)
let justified = document.querySelector('.justifié').addEventListener('click', justifiedscr)
let sizefont = document.querySelector('.taille_de_la_police').addEventListener('click', sizescr)

function sizescr() {
    let size = ['10px', '14px', '18px', '20px', '24px', '30px', '35px', '40px', '50px', '90px'];
    size.forEach(function (fontsize) {
        let bouton = document.createElement('button');
        bouton.textContent = fontsize;
        bouton.classList.add(fontsize)
        colorsdiv.appendChild(bouton);
        bouton.addEventListener('click', function () {
            applyselection("<span style='font-size:" + fontsize + ";'>", "</span>");
        });
    });
   
}

function colorscr() {

    let colors_bouton = ['red', 'blue', 'green', 'yellow', 'orange', 'violet', 'pink', 'black', 'white', 'grey'];
    colors_bouton.forEach(function (couleur) {
        let bouton = document.createElement('button');
        bouton.textContent = couleur;
        bouton.classList.add(couleur)
        colorsdiv.appendChild(bouton);
        bouton.addEventListener('click', function () {
            applyselection("<span style='color:" + couleur + ";'>", "</span>");
        });
    });
}
function underscr() {
    applyselection('<u>', '</u>')

}
function linkscr() {
    applyselection('<a href="#">', '</a>')

}
function centscr() {
    applyselection('<div style= "text-align: center">', '</div>')

}
function startscr() {
    applyselection('<div style= "text-align: start">', '</div>')

}
function justifiedscr() {
    applyselection('<div style= "text-align: justify">', '</div>')

}
function endscr() {
    applyselection('<div style= "text-align: end">', '</div>')

}
function strikescr() {
    applyselection('<s>', '</s>')

}
function italicscr() {
    applyselection('<i>', '</i>')


}

function boldscr() {
    applyselection('<b>', '</b>')

}

function applyselection(start, end) {
    let startSelection = textarea.selectionStart;
    let endSelection = textarea.selectionEnd;
    let selected = textarea.value.substring(startSelection, endSelection);
    let replace = start + selected + end;
    textarea.setRangeText(replace, startSelection, endSelection, 'end');
    textarea.selectionStart = startSelection + start.length;
    textarea.selectionEnd = endSelection + start.length;
    update();
}
let contentTextarea = document.getElementById('localstorage');
let content = localStorage.getItem('content');

if (content) {
    textarea.value = content;
}

let local = contentTextarea.addEventListener('click', function() {
        localStorage.setItem('content', textarea.value);
    });

    function save(){
        localStorage.setItem('content', textarea.value);
    }

    let minutes = 10;
    let mlscds = minutes * 60 * 1000;

    let saveevery10minutes = setInterval(save, mlscds) && alert("contenu sauvegardé en local")
        
   



