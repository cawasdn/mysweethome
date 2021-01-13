const name = document.getElementById('name')
const password = document.getElementById('password')
const anniversary = document.getElementById('anniversary')
const form = document.getElementById('form')


form.addEventListener('submit', function(e){
    if (name.value === "shane" && password.value == "rose" && anniversary.value == "04/14/2018") {
        window.location = "message.html"
    }
    else{
        name.style = "background: #d9534f"
        name.value = ""
        password.style = "background: #d9534f"
        password.value = ""
        anniversary.style = "background: #d9534f"
        anniversary.value = ""
        setTimeout(() => name.style = "background: white", 2000)
        setTimeout(() => name.value = "", 2000)  
        setTimeout(() => password.style = "background: white", 2000)
        setTimeout(() => password.value = "", 2000)    
        setTimeout(() => anniversary.style = "background: white", 2000)
        setTimeout(() => anniversary.value = "", 2000)   

    } 
    
    e.preventDefault()
})

setTimeout()

