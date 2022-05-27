const navigation = (pageOpen) => {
    const pages = document.querySelectorAll('.fullpage');

    pages.forEach(item => {
        item.classList.remove('open');

        item.classList.forEach(className => {
            if (className === pageOpen) {
                item.classList.add('open')
            }
        })     
    })
}


// SETTERS
const setCountProduct = (type) => {
    const count = document.getElementById('quality');
    let value = parseInt(count.innerHTML);

    if(type === 'minus') {
        if(value > 1) {
            value -= 1;
        }        
    } else {
        value += 1;
    }       

    count.innerHTML = value;
}

const setCheckbox = (e) => {
    e.forEach(item => {
        if(item.checked) {
            item.parentNode.querySelector('.checkbox').classList.add('active')
        }
    })
}


// CHANGE
const sortCard = (typeSort) => {
    const tempCards = [];
    tempCards.push(...cards);

    switch(typeSort) {
        case 'UP': 
            tempCards.sort((a, b) => {            
                return a.price - b.price;            
            })
            break;
        case 'DOWN': 
            tempCards.sort((a, b) => {            
                return b.price - a.price
            }) 
            break;
        default: 
            break;
    }

    setCards(document.querySelector('.cards .container'), tempCards)
}

const changeCheckbox = (e) => {    
    e.parentNode.querySelector('.checkbox').classList.toggle('active')
}

const pickColor = (e) => {
    const container = document.querySelectorAll('.ellipse-container')
    container.forEach(item => {
        item.querySelector('.ellipse').classList.remove('active')
    })
    e.classList.toggle('active')
}


// MODAL

const modal = (open) => {
    const modal = document.getElementById('modal');
    
    if(open) {
        modal.style.display = 'flex';
    } else {
        modal.style.animationName = 'closeModal'
        setTimeout(() => {
            modal.style.display = 'none';
            modal.style.animationName = 'openModal';
        }, 400);
    }
}

const burger = (open) => {
    const burger = document.querySelector('.nav-links');
    

    if(open) {
        burger.dataset.statusBurger = true;
        burger.classList.add('mobile');
    } else {
        if(burger.dataset.statusBurger) {
            burger.style.animationName = 'closeBurger'
            setTimeout(() => {
                burger.classList.remove('mobile')
                burger.dataset.statusBurger = '';
                burger.style.animationName = 'openBurger';
            }, 800);
        }        
    }
}

// GETTERS

const getLinks = () => {
    console.log(links)
}