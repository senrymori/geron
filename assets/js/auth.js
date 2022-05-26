const users = [
    {
        id: 1,
        email: 'test@test.ru',
        phone: '78886665544',
        password: '12345'
    },
    {
        id: 2,
        email: 'test33@test.ru',
        phone: '7816665544',
        password: '22345'
    },
    {
        id: 3,
        email: 'tes11t@test.ru',
        phone: '78881165544',
        password: '123445'
    }
]

const userPhone = document.querySelector('input[name="phone"]');
const maskOptions = {
    mask: '+{7}(000)000-00-00'
};

let userPhoneMask = IMask(userPhone, maskOptions);

const login = () => {
    const userEmail = document.querySelector('input[name="email"]').value;
    const userPassword = document.querySelector('input[name="password"]').value;

    users.forEach(item => {
        if (item.email === userEmail && 
            item.phone === userPhoneMask.unmaskedValue && 
            item.password === userPassword) {
                window.location = '/pages/app.html'
        }
    })
}

const reg = () => {
    const userEmail = document.querySelector('input[name="emailReg"]').value;
    const userPhone = document.querySelector('input[name="phoneReg"]').value;
    const userPassword = document.querySelector('input[name="passwordReg"]').value;

    users.push({
        id: 4,
        email: userEmail,
        phone: userPhone,
        password: userPassword
    })

    document.getElementById('reg').classList.remove('open')
    document.getElementById('auth').classList.add('open')
}

const navigate = (form) => {
    document.querySelectorAll('form').forEach(item => {
        item.classList.add('open')
    })
    form.parentNode.classList.remove('open')
}