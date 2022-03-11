let userName    = document.getElementById('userName');
let password    = document.getElementById('password');
let signIn      = document.getElementById('signIn');
let getUser     = localStorage.getItem('username')
let getPassowrd = localStorage.getItem('passowrd')

/*############################################################*/

signIn.onclick = function(e){
    e.preventDefault()
    if(userName.value === '' || password.value === ''){
        alert("Please Fill Data")
    }else{
        if(getUser && getUser === userName.value && getPassowrd && getPassowrd === password.value ){
            setTimeout(() => {
                window.location = "index.html"
            }, 500);
        }else{
            alert('There is an error in the name or password')
        }
    }
}