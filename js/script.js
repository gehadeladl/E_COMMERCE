let productDom = document.getElementById('product')
let badge      = document.querySelector('.badge')

/*############################################################*/

let allProducts  = JSON.parse(localStorage.getItem("allProducts"))
let allproducts1 = [
	{
		id    : 1 , 
		title : "Italian Import",
		desc  : "Imported brown boots",
		size  : "41 : 45",
		price : 50 ,
		image : "images/image1.jpg",
		isMe  : "N"
	},
	{
		id    : 2 , 
		title : "Turkish Import",
		desc  : "kochi nike",
		size  : "35 : 40",
		price : 60 ,
		image : "images/image2.jpg",
		isMe  : "N"
	},
	{
		id    : 3 , 
		title : "German import",
		desc  : "Kochi Nike red in gray",
		size  : "43 : 45",
		price : 20 ,
		image : "images/image3.jpg",
		isMe  : "N"
	},
	{
		id    : 4 , 
		title : "Italian Import",
		desc  : "formal boots",
		size  : "44",
		price : 35 ,
		image : "images/image4.jpg",
		isMe  : "N"
	},
	{
		id    : 5 , 
		title : "French Import",
		desc  : "Original sports kochi",
		size  : "41 : 45",
		price : 10 ,
		image : "images/image5.jpg",
		isMe  : "N"
	},
	{
		id    : 6 , 
		title : "Italian Import",
		desc  : "formal boots",
		size  : "44",
		price : 40 ,
		image : "images/image6.jpg",
		isMe  : "N"
	},
	{
		id    : 7 , 
		title : "Turkish import",
		desc  : "Original high heels",
		size  : "44",
		price : 45 ,
		image : "images/image7.jpg",
		isMe  : "N"
	},
	{
		id    : 8 , 
		title : "Italian Import",
		desc  : "snake rope",
		size  : "44",
		price : 70 ,
		image : "images/image8.jpg",
		isMe  : "N"
	},
	{
		id    : 9 , 
		title : "French Import",
		desc  : "soccer shoes",
		size  : "44",
		price : 20 ,
		image : "images/image9.jpg",
		isMe  : "N"
	},
	{
		id    : 10 , 
		title : "German import",
		desc  : "nike original boots",
		size  : "44",
		price : 100 ,
		image : "images/image10.jpg",
		isMe  : "N"
	}
]

/*############################################################*/

function ProductsUi(){
	let productsLop = allProducts ? allProducts.map((item) => {
		return`
			<div class="col-lg-4">
				<div class="product-item" id="${item.isMe === "Y" ? "yes" : "no"}">
					<img src="${item.image}" alt="image"/>
					<div class="product-item-desc">
						<h5><a onclick="detalseItem(${item.id})">${item.title}</a></h5>
						<p>${item.desc}</p>
						<h5>${item.price} $ ${item.isMe === "Y" ? "<button class='btnEdt' onclick='edit(" + item.id + ")'><i class='fas fa-edit'></i></button>" : ""} ${item.isMe === "Y" ? "<button class='btnDele' onclick='deleteProduct(" + item.id + ")'><i class='fas fa-trash-alt'></i></button>" : ""}</h5>
						<i class="fa-solid fa-heart"></i> 
						<button class="add-to-cart" onclick="addedToCart(${item.id})"><i class="fa-solid fa-bag-shopping"></i>Add To Cart</button>
					</div>
				</div>
			</div>	
		`
	}) : allproducts1.map((item) => {
		return`
			<div class="col-lg-4">
				<div class="product-item" id="${item.isMe === "Y" ? "yes" : "no"}">
					<img src="${item.image}" alt="image"/>
					<div class="product-item-desc">
						<h5><a onclick="detalseItem(${item.id})">${item.title}</a></h5>
						<p>${item.desc}</p>
						<h5>${item.price} $ ${item.isMe === "Y" ? "<button class='btnEdt' onclick='edit(" + item.id + ")'><i class='fas fa-edit'></i></button>" : ""} ${item.isMe === "Y" ? "<button class='btnDele' onclick='deleteProduct(" + item.id + ")'><i class='fas fa-trash-alt'></i></button>" : ""}</h5>
						<i class="fa-solid fa-heart"></i> 
						<button class="add-to-cart" onclick="addedToCart(${item.id})"><i class="fa-solid fa-bag-shopping"></i>Add To Cart</button>
					</div>
				</div>
			</div>
		`
	})
    productDom.innerHTML = productsLop.join("") ;
}
ProductsUi()

/*############################################################*/

let addedItem = localStorage.getItem("addedItemLocal") ? JSON.parse(localStorage.getItem("addedItemLocal")) : []
function addedToCart(id){
	if(localStorage.getItem("username")){
		let chooseItem  = allProducts.find((item) => item.id === id)
		addedItem       = [...addedItem , chooseItem]
		localStorage.setItem("addedItemLocal" , JSON.stringify(addedItem))
		localStorage.setItem('number' , addedItem.length)
        badge.innerHTML = localStorage.getItem("number")
    }else{
		window.location = 'Register.html'
	}
}
badge.innerHTML         = localStorage.getItem("number")

/*############################################################*/

function detalseItem(id){
	window.location = "cartDetalse.html"
	localStorage.setItem("detalseProduct" , id)
}

/*############################################################*/

let inpfil = document.getElementById('inpfil')
inpfil.onkeyup = function(e){
	search(e.target.value , allProducts)
	if(this.value == ""){
		let productsLop = allProducts.map((item) => {
			return`
				<div class="col-lg-4">
					<div class="product-item" id="${item.isMe === "Y" ? "yes" : "no"}">
						<img src="${item.image}" alt="image"/>
						<div class="product-item-desc">
							<h5><a onclick="detalseItem(${item.id})">${item.title}</a></h5>
							<p>${item.desc}</p>
							<h5>${item.price} $ ${item.isMe === "Y" ? "<button class='btnEdt' onclick='edit(" + item.id + ")'><i class='fas fa-edit'></i></button>" : ""} ${item.isMe === "Y" ? "<button class='btnDele' onclick='deleteProduct(" + item.id + ")'><i class='fas fa-trash-alt'></i></button>" : ""}</h5>
							<i class="fa-solid fa-heart"></i> 
							<button class="add-to-cart" onclick="addedToCart(${item.id})"><i class="fa-solid fa-bag-shopping"></i>Add To Cart</button>
						</div>
					</div>
				</div>	
			`
		})
		productDom.innerHTML = productsLop.join("") ;
	}
}

/*############################################################*/

function search(title , myArray){
	let arr = myArray.filter((item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1)
	let productsLop = arr.map(item => {
		return`
			<div class="col-lg-4">
				<div class="product-item" id="${item.isMe === "Y" ? "yes" : "no"}">
					<img src="${item.image}" alt="image"/>
					<div class="product-item-desc">
						<h5><a onclick="detalseItem(${item.id})">${item.title}</a></h5>
						<p>${item.desc}</p>
						<h5>${item.price} $ ${item.isMe === "Y" ? "<button class='btnEdt' onclick='edit(" + item.id + ")'><i class='fas fa-edit'></i></button>" : ""} ${item.isMe === "Y" ? "<button class='btnDele' onclick='deleteProduct(" + item.id + ")'><i class='fas fa-trash-alt'></i></button>" : ""}</h5>
						<i class="fa-solid fa-heart"></i> 
						<button class="add-to-cart" onclick="addedToCart(${item.id})"><i class="fa-solid fa-bag-shopping"></i>Add To Cart</button>
					</div>
				</div>
			</div>	
	`
	})
	productDom.innerHTML = productsLop.join("")
}

/*############################################################*/

let heart = document.querySelectorAll('.fa-heart');

heart.forEach((hear) => {
	hear.addEventListener("click" , function(){
		this.classList.toggle("active")
	})
})

/*############################################################*/

function edit(id){
	localStorage.setItem("editId" , id)
	window.location = 'edit.html'
}

/*############################################################*/

function deleteProduct(id){
    let allProducts = JSON.parse(localStorage.getItem('allProducts'))
	let newProduct = allProducts.filter(item => item.id !== id)
	let productsLop = newProduct.map((item) => {
		return`
			<div class="col-lg-4">
				<div class="product-item" id="${item.isMe === "Y" ? "yes" : "no"}">
					<img src="${item.image}" alt="image"/>
					<div class="product-item-desc">
						<h5><a onclick="detalseItem(${item.id})">${item.title}</a></h5>
						<p>${item.desc}</p>
						<h5>${item.price} $ ${item.isMe === "Y" ? "<button class='btnEdt' onclick='edit(" + item.id + ")'><i class='fas fa-edit'></i></button>" : ""} ${item.isMe === "Y" ? "<button class='btnDele' onclick='deleteProduct(" + item.id + ")'><i class='fas fa-trash-alt'></i></button>" : ""}</h5>
						<i class="fa-solid fa-heart"></i> 
						<button class="add-to-cart" onclick="addedToCart(${item.id})"><i class="fa-solid fa-bag-shopping"></i>Add To Cart</button>
					</div>
				</div>
			</div>	
		`
	}) 
    productDom.innerHTML = productsLop.join("") ;
	localStorage.setItem("allProducts" , JSON.stringify(newProduct))
}

