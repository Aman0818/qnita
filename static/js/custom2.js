document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loader').style.display = 'none';
});


const phrases = ["Quantum Computing Event", "Event Hosted By NIT Agartala", "Quantum Event", "Hackathon & much more..."];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;

function loop() {
const targetElement = document.getElementById('dynamic-text');

targetElement.innerHTML = currentPhrase.join('');

if (!isDeleting && j < phrases[i].length) {
    currentPhrase.push(phrases[i][j]);
    j++;
} else if (isDeleting && j > 0) {
    currentPhrase.pop();
    j--;
} else if (!isDeleting && j === phrases[i].length) {
    isDeleting = true;
    setTimeout(loop, 1000); 
    return;
} else if (isDeleting && j === 0) {
    isDeleting = false;
    i++;
    if (i === phrases.length) {
    i = 0;
    }
}


const speed = isDeleting ? 50 : 100;
setTimeout(loop, speed);
}

loop();

function showModal() {
    document.getElementById('modal-background').style.display = 'block';
}

window.onload = function() {
    setTimeout(showModal, 1000);
};


document.getElementById('close-modal').onclick = function() {
    document.getElementById('modal-background').style.display = 'none';
};

window.onclick = function(event) {
    if (event.target === document.getElementById('modal-background')) {
        document.getElementById('modal-background').style.display = 'none';
    }
};
