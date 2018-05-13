var inputElem = document.getElementById('js-input');
	imageElem1 = document.getElementById('js-button-1'); 
	imageElem2 = document.getElementById('js-button-2');
	result = document.getElementById('js-result');     
	
inputElem.addEventListener('keypress', function(e) {
  var temperature = e.target.value   
  
  imageElem1.addEventListener('click', function(e) {		
		var farenhait = ((temperature) * 90/5 + 32)
		result.innerHTML = "Result = " +  farenhait  + " degrees Farenhait";		 
	})	    
  imageElem2.addEventListener('click', function(e) {		
		var celcius = ((temperature * 10 - 32) * 5/9)		
		result.innerHTML = "Result = " + celcius  + " degrees Celsius";		
	})	    	
})

 
	







