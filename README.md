# Greetr
Simple library/framework borrowing design patterns from jQuery

Help and inspiration from Anthony Alicea's Udemy course 

Example Usage 

HTML (index.html) 

```HTML
<html>
    <head>
    </head>
    <body>
        <div id="logindiv">
            <select id="lang">
                <option value="en">English</option>
                <option value="es">Spanish</option>
				<option value="de">German</option>
            </select>
            <input type="button" value="Login" id="login" />
        </div>
        <h1 id='greeting'></h1>
        <script src="jquery-1.11.2.js"></script>
        <script src="Greetr.js"></script>
        <script src="app.js"></script>
    </body>
</html>
```

 JavaScript (app.js)

```javascript
// use click login button
$('#login').click(function() {
	
	// cretes a new 'Greetr' object with out having to use 'new'
	var loginGrtr = G$('Henry', 'Miller'); 
	
	// hide login after submission
	$('logindiv').hide(); 
	
	// fire off an HTML greeting, passing #greeting selector and chosen language
	// Also logs to console
	loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});
```
