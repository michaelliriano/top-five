// Navbar
const menu = document.querySelector('.burger-menu')

menu.addEventListener('click', (e) => {
    const nav = document.querySelector('nav')
    const menu = document.querySelector('.nav-menu')
    const list = document.querySelector('.nav-list')
    const navbar = () => {
        if(menu.style.display === 'none'){
            nav.style.height = '250px';
            menu.style.display = 'block';
            menu.style.position = 'absolute';
            menu.style.top = '100px';
            menu.style.left = '0px';
            list.style.display = 'block';
        } else{
            menu.style.display = 'none';
            nav.style.height = '60px'
        }
    }
    navbar()
    console.log(e)
})

// User Class

const form = document.querySelector('.guest-form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const fname = e.target[0].value
    const lname = e.target[1].value
    const email = e.target[2].value
    const username = e.target[3].value
    const password = e.target[4].value

    const newUser = new User(fname,lname,email,username,password)
    newUser.createAccount(fname).login(username)
    console.log(newUser)
})


class User {
    constructor(fname, lname, email, username, password) {
        this.fname = fname,
        this.lname = lname,
        this.email = email,
        this.username = username,
        this.password = password
    }
     createAccount(name) {
        console.log(`${name} has created an account`)
        return this;
    }
    login(user) {
        console.log(`Logged ${user} in`)
        return this;
    }
}

