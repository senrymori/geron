// LET

// CONST
const links = [];

const cards = [
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

const title = 'Good shop! Get now! Shadow Test!';

fetch('https://run.mocky.io/v3/b143c558-c525-47d1-83aa-0de833ec2b81')
.then((res) => {
    return res.json()
})
.then((data) => {
    links.push(...data)
    const navLinks = document.querySelector('.nav-links');
    links.forEach(item => {
        navLinks.innerHTML += `<a onclick="navigation('main')">${item.title}</a>`
    })
    
})
