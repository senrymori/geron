const data = [
    {
        id: '1',
        title: 'T-Shirt! Summer Collect.',
        url: '../assets/img/tshirt.png',
        price: '1500'
    },
    {
        id: '3',
        title: 'Jeans! Summer Collect.',
        url: '../assets/img/jeans.png',
        price: '2500'
    },
    {
        id: '6',
        title: 'Kurtka! Winter Collect.',
        url: '../assets/img/kurtka.png',
        price: '1000'
    },
]

const setCards = (cardsContainer) => {
    let cards = '';
    data.forEach(item => {
        let htmlObject = `
            <a onclick="navigation('product')" class="card" data-price="${item.price}" data-color="black">
                <div class="cover">
                    <img src="${item.url}" alt="">
                    <div class="ellipse"></div>
                </div>
                <h2>${item.title}</h2>
                <p>$${item.price}</p>
            </a>
        `
        cards += htmlObject;       
    });
    cardsContainer.innerHTML = cards;  
}

