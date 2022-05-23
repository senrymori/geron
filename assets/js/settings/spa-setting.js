  fetch("./base/components/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });

  fetch("./pages/main/main.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector(".include-main").innerHTML = data;
  });

  fetch("./pages/main/category.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector(".include-cat").innerHTML = data;
  });

  fetch("./base/components/cards.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector(".include-cards").innerHTML = data;
  });