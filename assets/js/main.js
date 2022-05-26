const sortCard = () => {
    let test = data.sort((a, b) => {
        return b.price - a.price
    })
}

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

const keyPress = (e) => {
    console.log(e.value)
}

const setCheckbox = (e) => {
    e.forEach(item => {
        if(item.checked) {
            item.parentNode.querySelector('.checkbox').classList.add('active')
        }
    })
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