
	

	function LoadMenu(ulID,file,options){
		$.ajax({
			url:        file,
			dataType:   "json", 
			success:    function(data){
				var $this = $(ulID);
				$.each(data.d, function(key, val) {
					$this.append('<li rel="' + val.link + '">' +  val.title + '</li>');
				});
				$this.menu(options);
			},
			error:    AjaxFailed
		});
	}
	
	function TextExplodeEffect(id){

		$(id).hover(function () {
				$(this).effect("explode", { pieces: 16 }, 1400, callback_); 
			});
				   
			function callback_() {
				$(id).hide().fadeIn();
				$(id).fadeIn('slow');
		};

	}

	

	// Main entry for script
	function MainEntry()
	{
		
		TextExplodeEffect("#text");
		$("#d0").WootbRotate(); // default
		$("#d1").WootbRotate({val:12}); 
		$("#d2").WootbRotate({val:-22}); 
		$("#d3").WootbRotate({val:32}); 
		$("#d4").WootbRotate({val:-42}); 
		$("#d5").WootbRotate({val:52}); 
		$("#d6").WootbRotate({val:-62}); 
		$("#d7").WootbRotate({val:72}); 
		$("#d8").WootbRotate({val:-82}); 
		$("#d9").WootbRotate({val:-12});

		var index = 0.01;
		setInterval(function(){ $("#d0").WootbRotate({val:index=index+0.01,unit:"rad"}); }, 10);
		
		$(".item").WootbCorner();
	}
	
	MainEntry();