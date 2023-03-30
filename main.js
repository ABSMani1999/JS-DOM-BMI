var a=document.getElementById("first");

	a.addEventListener('submit',function(e){
	e.preventDefault();
	
	let height=parseInt(document.querySelector('#height').value);
	let weight=parseInt(document.querySelector('#weight').value);
	let result=document.querySelector('#result');
	
	//height
	if(height===null || isNaN(height) || height<0 ){
		
		result.innerHTML="Please Enter Your height";
		result.style.color='red'; 	}
	
	//weight
	else if(weight===null || isNaN(weight) || weight<0 ){
		
		result.innerHTML="Please Enter Your Weight";
		result.style.color='red';	}
	
	//if all clear
	else{
		result.innerHTML=Math.round((weight*100*100/height**2));
			result.style.color="white";
		if(result.innerHTML<19 && result.innerHTML>0){
			
			result.innerHTML=(`Your BMI ${result.innerHTML} (UnderWeight)`);
			result.style.backgroundColor="#33ff33";
			
		}
		
		else if(result.innerHTML<25 && result.innerHTML>=19){
			
			result.innerHTML=(`Your BMI ${result.innerHTML} (Normal)`);
			result.style.backgroundColor="#009933"
			
		}
		
		else if(result.innerHTML<35 && result.innerHTML>=25){
			result.innerHTML=(`Your BMI ${resul.innerHTML} (Overweight)`);
			resul.style.backgroundColor="#ffff00";
		}
		
		else{
			resul.innerHTML=(`Your BMI ${result.innerHTML} (Obesity)`);
			result.style.backgroundColor="#cc0000";
		}
	}
})