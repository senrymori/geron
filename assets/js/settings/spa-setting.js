const pages = [
  {
    url: './base/components/header.html',
    include: 'header'
  },
  {
    url: './pages/main/main.html',
    include: '.include-main'
  },
  {
    url: './pages/main/category.html',
    include: '.include-cat'
  },
  {
    url: './base/components/cards.html',
    include: '.include-cards'
  },
  {
    url: './pages/product/product.html',
    include: '.include-product'
  },
  {
    url: './pages/basket/basket.html',
    include: '.include-basket'
  },
  {
    url: './pages/pay/pay.html',
    include: '.include-pay'
  },
]

pages.forEach(item => {
  fetch(item.url)
  .then(response => {
    return response.text()
  })
  .then(data => {
    if(item.include === '.include-cards') {
      const includeCards = document.querySelector(item.include)
      includeCards.innerHTML = data;

      setCards(includeCards.querySelector('.cards .container'))
    } else {
      document.querySelector(item.include).innerHTML = data;
    }    
  });
})