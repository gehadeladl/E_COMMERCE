let createImage  = document.getElementById('image');
let createTitle  = document.getElementById('title');
let createDesc   = document.getElementById('desc');
let createSize   = document.getElementById('size');
let createPrice  = document.getElementById('price');
let createSubmit = document.getElementById('submit');
let badge = document.querySelector('.badge')
let proImage ;

/*############################################################*/

badge.innerHTML  = localStorage.getItem("number")

/*############################################################*/

createSubmit.addEventListener("click" , function(e){
    e.preventDefault()
    let allProducts = JSON.parse(localStorage.getItem("allProducts"));
    if(localStorage.getItem("username")){
		if(createTitle.value && createDesc.value && createSize.value && createPrice.value){
            let obj   = {
                id    : allProducts.length + 1 , 
                image : proImage, 
                title : createTitle.value ,
                desc  : createDesc.value ,
                size  : createSize.value ,
                price : createPrice.value  ,
                isMe  : "Y"
            }
            let newProducts = [...allProducts , obj] ; 
            localStorage.setItem("allProducts" , JSON.stringify(newProducts))
            createTitle.value = "" ;
            createDesc.value  = "" ;
            createSize.value  = "" ;
            createPrice.value = "" ;
            localStorage.setItem('createCart' , JSON.stringify(obj))
            window.location = "index.html"
        }else{
            alert("Enter your complete product information")
        }
    }else{
		window.location = 'Register.html'
	}
})

/*############################################################*/

createImage.onchange = function(){
    let file = this.files[0]
    getImagePase64(file)
    let types = ["image/jpeg" , "image/png"]
    if(types.indexOf(file.type) == -1){
        alert("type not subported")
        return;
    }else if(file.size > 1024 * 2){
        alert("image not exced 2MG")
        return;
    }
}
function getImagePase64(fill){
    let reader = new FileReader()
    reader.readAsDataURL(fill)
    reader.onload = function(){
        proImage = reader.result

    }
}

/*############################################################*/


