$(document).ready(function() {
	const swiper = new Swiper('.swiper', {
  	// Optional parameters
  	direction: 'horizontal',
	  loop: true,
	  
	  speed:3000,
	  // If we need pagination
	  

	  // Navigation arrows
	  navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	  },
	  autoplay:{
	    delay:5000,

	  },

	  // And if we need scrollbar
	  
	});
});