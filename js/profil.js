let userLocal   = localStorage.getItem('username')
let emailLocal  = localStorage.getItem('email')
let allProducts = JSON.parse(localStorage.getItem('allProducts'))
let myProduct   = allProducts.filter(item => item.isMe === 'Y').length
let badge       = document.querySelector('.badge')
badge.innerHTML = localStorage.getItem("number")

/*#####################################################*/ 

let username      = document.getElementById('username')
let email         = document.getElementById('email')
let imagePro      = document.getElementById('imagePro')
let productLength = document.getElementById('productLength')

/*#####################################################*/

username.innerHTML = userLocal ;
email.innerHTML    = emailLocal ;
if(localStorage.getItem('image78')){
    imagePro.src   = localStorage.getItem('image78')
}else{
    imagePro.src   = 'images/image11.png'
}
if(myProduct != 0){
    productLength.innerHTML += myProduct ;
}else{
    productLength.remove()
}