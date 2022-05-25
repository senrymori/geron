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

const login = () => {
    const userEmail = document.querySelector('input[name="email"]').value;
    const userPhone = document.querySelector('input[name="phone"]').value;
    const userPassword = document.querySelector('input[name="password"]').value;

    users.forEach(item => {
        if (item.email === userEmail && 
            item.phone === userPhone && 
            item.password === userPassword) {
                window.location = '/pages/app.html'
        }
    })
}
