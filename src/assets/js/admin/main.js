//LINKS

const getLinks = () => {    
    let containerLinks = document.querySelector('.links')
    const containers = containerLinks.querySelectorAll('h3')
    containers.forEach(item => {
        item.remove()
    })
    links.forEach(item => {
        containerLinks.innerHTML += `<h3>${item}</h3>`
    })    
}

const addLink = (e) => {
    const value = e.parentNode.querySelector('input').value;

    if(value.trim().length) {
        links.push(value);
        getLinks();
    }
    
}

getLinks()

// TITLE
const getTitle = () => {
    const inputTitle = document.querySelector('input[name="title"]');
    inputTitle.parentNode.querySelector('.save').style.display = 'none';
    inputTitle.style.display = 'none';    

    let cashe = inputTitle.parentNode.innerHTML 

    inputTitle.parentNode.innerHTML = `
         <p>${title}</p>
         <h4 class="add edit" onclick="changeTitle(this)">Редактировать</h4>
    `+cashe;    
}  

const changeTitle = (e) => {
    e.parentNode.querySelector('p').style.display = 'none';
    e.parentNode.querySelector('.edit').style.display = 'none';
    e.parentNode.querySelector('.save').style.display = 'block';
    document.querySelector('input[name="title"]').style.display = 'block';
}

const saveTitle = (e) => {
    title = document.querySelector('input[name="title"]').value;
    getTitle();
}

getTitle()