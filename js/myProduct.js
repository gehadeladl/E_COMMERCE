let allProducts  = JSON.parse(localStorage.getItem('allProducts'))
let myProductDom = document.getElementById('product')
let myProduct    = allProducts.filter(item => item.isMe === 'Y')
let badge        = document.querySelector('.badge')
let noitems1     = document.getElementById('noitems1')

/*############################################################*/

badge.innerHTML  = localStorage.getItem("number")

/*############################################################*/

function ProductsUi(){
	if(!myProduct || myProduct.length === 0){
        noitems1.style.display = "block"
	}
	let productsLop = myProduct.map((item) => {
		return`
			<div class="col-lg-4">
				<div class="product-item" id="${item.isMe === "Y" ? "yes" : "no"}">
					<img src="${item.image}" alt="image"/>
					<div class="product-item-desc">
						<h5><a onclick="detalseItem(${item.id})">${item.title}</a></h5>
						<p>${item.desc}</p>
						<h5>${item.price} $ </h5>
						${item.isMe === "Y" && "<button class='btnEdt btnEdi1' onclick='edit(" + item.id + ")'><i class='fas fa-edit'></i></button>"} ${item.isMe === "Y" && "<button class='btnDele btnEele1' onclick='deleteProduct(" + item.id + ")'><i class='fas fa-trash-alt'></i></button>"}
					</div>
				</div>
			</div>	
		`
	}) 
    myProductDom.innerHTML = productsLop.join("") ;
}
ProductsUi()

/*############################################################*/

function edit(id){
	localStorage.setItem("editId" , id)
	window.location = 'edit.html'
}

/*############################################################*/

function deleteProduct(id){
    let allProducts = JSON.parse(localStorage.getItem('allProducts'))
    let myProduct   = allProducts.filter(item => item.isMe === 'Y')
	let filtered    = myProduct.filter(item => item.id !== id)
	let newProduct  = allProducts.filter(item => item.id !== id)
	let productsLop = filtered.map((item) => {
		return`
			<div class="col-lg-4">
				<div class="product-item" id="${item.isMe === "Y" ? "yes" : "no"}">
					<img src="${item.image}" alt="image"/>
					<div class="product-item-desc">
						<h5><a onclick="detalseItem(${item.id})">${item.title}</a></h5>
						<p>${item.desc}</p>
						<h5>${item.price} $ </h5>
						${item.isMe === "Y" && "<button class='btnEdt' onclick='edit(" + item.id + ")'><i class='fas fa-edit'></i></button>"} ${item.isMe === "Y" && "<button class='btnDele' onclick='deleteProduct(" + item.id + ")'><i class='fas fa-trash-alt'></i></button>"}
					</div>
				</div>
			</div>	
		`
	}) 
    myProductDom.innerHTML = productsLop.join("") ;
	localStorage.setItem("allProducts" , JSON.stringify(newProduct))
	let allProducts10 = JSON.parse(localStorage.getItem('allProducts'))
    let myProduct10 = allProducts10.filter(item => item.isMe === 'Y')
    if(!myProduct10 || myProduct10.length === 0){
        noitems1.style.display = "block"
	}
}


