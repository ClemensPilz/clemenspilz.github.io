document.addEventListener("DOMContentLoaded", init);

function init() {

    if (document.getElementById('button')) {
        let button = document.getElementById('button');
        button.addEventListener('click', () => alert('clicked!'));


    }
}