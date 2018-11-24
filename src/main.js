import '../static/styles/main.css';
import Partial from '../static/tmpl/partial.html';

function main() {
    partial();
    addLogEntry('another entry');

}

function addLogEntry(text) {
    let el = document.getElementById('console');
    let x = document.createElement('p');
    x.classList.add('log-entry');
    // x.innerText = 'another entry';
    x.innerHTML = text;
    el.appendChild(x);
}

function partial() {
    console.log('Partial: ' + Partial);
    let content = document.getElementById('content');
    let el = document.createElement('div');
    el.innerHTML = Partial;
    content.appendChild(el.firstChild);
}

main();