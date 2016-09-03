var ZQ_Common = (function ($) {
    function Init() {
    	
    }  
	
	function say(msg){
		alert(msg);
	}
	
	jQuery(function() {
		Init();
	});

	return {
		say: say
	};
}());
