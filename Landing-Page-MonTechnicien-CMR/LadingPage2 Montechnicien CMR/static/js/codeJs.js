// je pointe sur  mon  bouton burger et le nav-menu
const burger = document.querySelector('.hamburger'),
      mobileMenuContainer = document.querySelector('.nav-menu');



burger.addEventListener("click", function () {

	// si on a cliquer et que mon nav-menu contient la class active : ie le menu-burger est visible alors desactive cela et mon bouton burger

  if (mobileMenuContainer.classList.contains('active')) {
       burger.classList.remove("active");
       mobileMenuContainer.classList.remove("active");

   // si non active mon menu-burger et mon bouton burger
  }else{

   mobileMenuContainer.classList.add("active");
   burger.classList.add("active");
 }

});


// gestion de l'encre pour lors du scrollage
window.onscroll = function(){
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop >20){
		document.querySelector('.retour-haut').style.display = "block";
	}else{
		document.querySelector('.retour-haut').style.display = "none";
	}
}

// by yvanol fotso

