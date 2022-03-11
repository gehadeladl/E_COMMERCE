let image      = document.getElementById('image')
let editName   = document.getElementById('editName')
let editEmail  = document.getElementById('editEmail')
let submit     = document.getElementById('submit')
let nameLocal  = localStorage.getItem('username')
let EmailLocal = localStorage.getItem('email') 
let proImage ;


/*########################################################*/

editName.value  = nameLocal ; 
editEmail.value = EmailLocal ; 

/*########################################################*/

submit.addEventListener('click' , function(e){
    e.preventDefault()
    localStorage.setItem('username' , editName.value)
    localStorage.setItem('email' , editEmail.value)
    localStorage.setItem('image78' , proImage)
    window.location = 'myProfil.html'
})

/*########################################################*/

image.onchange = function(){
    let file   = this.files[0]
    getImagePase640(file)
}

function getImagePase640(fill){
    let reader    = new FileReader()
    reader.readAsDataURL(fill)
    reader.onload = function(){
        proImage  = reader.result
    }
}
