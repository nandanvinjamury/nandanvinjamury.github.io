const menu = document.querySelector('#menu');
const items = document.querySelector('#items');

menu.addEventListener('click', () => {
    if(items.classList.contains('hidden')){
        items.classList.remove('hidden');
    } else {
        items.classList.add('hidden');
    }
})