const selector = document.querySelector('.cards');
const items = selector.querySelectorAll('.card');

items.forEach(item => {
    let img = item.querySelector('img');
    img.setAttribute('src', '../assets/img/card.jpg')
})

