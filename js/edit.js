let allProducts = JSON.parse(localStorage.getItem('allProducts'));
let editId      = JSON.parse(localStorage.getItem('editId'));
let getEdit     = allProducts.find(item => item.id === editId)
let createImage = document.getElementById('image');
let createTitle = document.getElementById('title');
let createDesc  = document.getElementById('desc');
let createSize  = document.getElementById('size');
let createPrice = document.getElementById('price');
let createEdit  = document.getElementById('edit');
let proImage ;

/*############################################################*/

createTitle.value = getEdit.title ;
createDesc.value  = getEdit.desc ;
createSize.value  = getEdit.size ;
createPrice.value = getEdit.price ;
proImage          = getEdit.image ;

/*############################################################*/

createEdit.addEventListener("click" , function(e){
    e.preventDefault()
    getEdit.title   = createTitle.value ;
    getEdit.desc    = createDesc.value ;
    getEdit.size    = createSize.value ;
    getEdit.price   = createPrice.value ;
    getEdit.image   = proImage ;
    localStorage.setItem("allProducts" , JSON.stringify(allProducts))
    window.location = 'index.html'
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
