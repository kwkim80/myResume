jQuery(document).ready(function(){

	title_animate_text();
	var id=getParamenters();


	$(".menu-nav-item").click(function(){
		//alert(this.value());
		$(".menu-nav-item").each(function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
			}
		})
		if($(this).hasClass('dropdown-menu')){
            $("#menu-nav-etc").addClass('active');
		}else{
			$(this).addClass('active');
		}
	
	})
	
	
});
function title_animate_text(){
	var animateSpan	= $('.title_animation_text_word');
		animateSpan.typed({
			strings: ["Full stack Developer", "Web Developer","Application Developer","Freelancer"],
			loop: true,
			startDelay: 1e3,
			backDelay: 2e3
		});
}

function getParamenters(){

	var str=window.location.href;
	var id;
	if(str.split('#').length>1){
		id=str.split('#')[1];
	}
	return id;
	
}
