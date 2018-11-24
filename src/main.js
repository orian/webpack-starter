import '../static/styles/main.css';

function main() {
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

main();