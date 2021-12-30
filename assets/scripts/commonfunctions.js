//Global Vars
	var translationTarget;

//Google Init
	google.load("language", "1");
	google.setOnLoadCallback(bind_translate);

//jQuery Init
	$(function(){
		
		//Set Var Values
		translationTarget = $('a.translate');
		
	});

//Binding Functions
	function bind_translate(){
		$('a.translate')
			.unbind('click')
			.bind('click', function(){
				$(this).attr('rel'), translate($(this).attr('rel'));
				return false;
			});
	}

//General Functions
	function translate(word){
		
		if( word != null ){
			google.language.translate(word, "nl", "en", function(result){
				var translation = (!result.error) ? result.translation : '';
				translationTarget
					.html( translation )
					.removeClass('untranslated')
					.addClass('translated')
					.unbind('click')
					.bind('click', function(){
						return false;
					});
			});
		}
		
	}