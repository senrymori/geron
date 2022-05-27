const setCards = (cardsContainer, dataSort) => {
    let tempCards = '';
    
    if(dataSort) {
        dataSort.forEach(item => {
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
            tempCards += htmlObject;       
        });
    } else {
        cards.forEach(item => {
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
            tempCards += htmlObject;       
        });
    }
    cardsContainer.innerHTML = tempCards;  
}

