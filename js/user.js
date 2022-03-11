let userInfo = document.getElementById('userInfo');
let userDom  = document.getElementById('user');
let links    = document.getElementById('links');
let logout   = document.getElementById('logout');

/*############################################################*/

if(localStorage.getItem('username')){
	links.remove()
	userInfo.style.display = 'flex' ;
	userDom.innerHTML      =  'Welcome'  + ' ' + localStorage.getItem('username')
}

/*############################################################*/

logout.onclick = function(){
    localStorage.clear();
	window.location = 'Register.html'
}