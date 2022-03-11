let username = document.getElementById('username');
let email    = document.getElementById('useremail');
let passowrd = document.getElementById('userpassword');
let signUp   = document.getElementById('signup');

signUp.onclick = function(e){
    e.preventDefault()
    if(username.value === '' || email.value === '' , passowrd.value === ''){
        alert("Please Fill Data")
    }else{
        localStorage.setItem('username' , username.value);
        localStorage.setItem('email' , email.value);
        localStorage.setItem('passowrd' , passowrd.value);

        setTimeout(() => {
            window.location = 'Login.html'
        }, 500);
    }
}