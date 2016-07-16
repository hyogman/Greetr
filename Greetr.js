// put semi colon here to protect if other lib before doesn't finish out semi colons properly 
;(function(global, $){
 
	 // wrap function constructor inside of funtion so user doesn't have to use 'new'
	 // keyword when using Greetr 
	 var Greetr = function (firstname, lastname, language){
		return new Greetr.init(firstname, lastname, language);

	 };

	// hidden in IIFE
	var supportedLangs = ['en', 'es', 'de'];
	
	//informal greetings
	var greetings = {
		en: 'Hello',
		es: 'Hola',
		de: 'Hallo'
	};
	
	// formal greetings
	var formalGreetings = {
		en: 'Greetings', 
		es: 'Saludos',
		de: 'Gruss'
	};
	
	
	// log messages 
	var loggedMessages = {
		en: 'Logged in',
		es: 'Inicio Sesion',
		de: 'eingeloggt'
	};
	
	// add methods and functionality on the prototype to save memory space 
	Greetr.prototype = {
		
		// 'this' refers to calling object at execution time
		fullname: function () {
			return this.firstname + ' ' + this.lastname
		},
		
		validate: function() {
			// check that is a valid lang
			if(supportedLangs.indexOf(this.language) === -1) {
				throw 'Invalid Language';
			}
		},
		
		// gets messages from obj by referring to properties using [] syntax
		greeting: function () {
			return greetings[this.language]	+ ' ' + this.firstname + '!';
		},
		
		formalGreeting: function(){
			return formalGreetings[this.language] + ', ' + this.fullname(); 
		},
		
		greet:function(formal){
			var msg; 
			
			// if undefined or null will be coerced to false
			if(formal){
				msg = this.formalGreeting();
			}
			else {
				msg = this.greeting(); 
			}
			
			if(console){
				console.log(msg);
			}
			
			// returning 'this' calls function at exectution time and allows 
			// for functions to be chainable 
			return this; 
			
		},
		
		log:function(){
			if(console){
				console.log(loggedMessages[this.language] + ': ' + this.fullname()); 
			}
			
			// makes chainable 
			return this;
		},
		
		setLang:function(lang){
			// sets language
			this.language = lang; 
			// validates if language exists
			this.validate(); 
			
			// makes chainable 
			return this; 
		},
		
		// uses jquery to select selector and use greeting 
		HTMLGreeting: function(selector, formal){
			if(!$){
				throw 'jQuery not loaded';
			}
			
			if(!selector){
				throw 'Missing jQuery selector';
			}
			
			var msg; 
			if(formal){
				msg = this.formalGreeting(); 
			}
			else {
				msg = this.greeting(); 
			}
			
			// inject message to DOM
			$(selector).html(msg);
			
			return this;
		}
	}; 

	 // acutal object created here with out having user use 'new'
	 Greetr.init = function(firstname, lastname, language){ 
		var self = this; 
		
		 // short circuit for default values 
		self.firstname = firstname || '';
		self.lastname = lastname || '';
		self.language = language || 'en'; 

		 self.validate(); 
	 };

	// points to prototype, pattern borrowed from jQuery so user doesn't use new keyword
	 Greetr.init.prototype = Greetr.prototype; 

	// lets user use shortcut 'G$' instead of typing 'Greetr' everytime. Attach Greetr to global obj 
	 global.Greetr = global.G$ = Greetr; 


 }(window, jQuery)); 