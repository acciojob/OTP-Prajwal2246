//your JS code here. If required.
let inputs=document.querySelectorAll(".code");

inputs.forEach((input,index)=>{
	input.addEventListener('input',(e)=>{
		const value =e.target.value;

		//check if input by user is number
		if(!/^\d$/.test(value)){
		   e.target.value="";
		   return;
		}
		if(index<inputs.length-1){
			inputs[index+1].focus();
		}
						   
	})
	 //backspace
	  input.addEventListener('keydown',(e)=>{
		if(e.key === "Backspace"){
			if(input.value===""){
				if(index>0){
					 inputs[index - 1].value = "";   // <-- clear previous
                     inputs[index - 1].focus();
				}
				
			}else {
                 // Current has value → just clear it
                  input.value = "";
            }
			e.preventDefault();
		}
	  });
	input.addEventListener('focus',()=>{
		input.select();
	});
});

