let heading = document.querySelectorAll(".heading");
let para = document.querySelectorAll(".para");
let textbox = document.querySelector("#textbox");
let textarea = document.querySelector("#textarea");
let input = document.querySelector(".input");
let edit = document.querySelectorAll(".edit");
let image = document.querySelectorAll(".image");
let save = document.querySelector(".save");
let modal = document.querySelector(".modal");
let er1 = document.querySelector(".error1");
let er2 = document.querySelector(".error2");
let area = "";
let box = "";
let full = "";
let del = document.querySelectorAll("#del"); 
let prodDel = document.querySelectorAll("#prod-del"); 
let i=0;
edit.forEach(function(current,index){
	current.onclick = function(){
		input.onchange = function(){
			full = URL.createObjectURL(input.files[0]);
			i=1;
		}
		textbox.value = heading[index].innerText;
		textarea.value = para[index].innerText;
		save.onclick = function(){
			box = textbox.value;
			area = textarea.value;
			if (box=="") {
				er1.style.cssText = "display:block;"
			}
			else if(area==""){
				er2.style.cssText = "display:block;"
			}
			else{
				er1.style.cssText = "display:none;"
				er2.style.cssText = "display:none;"
				heading[index].innerText = box;
				para[index].innerText = area;
				if (i == 1) {
					image[index].removeAttribute("src");
					image[index].setAttribute("src",full);
					i=0;
				}
				textbox.value = "";
				textarea.value = "";
				input.value = "";
				$('#edit').modal('hide');	
			}
		}
	}
});

del.forEach(function(current){
	current.onclick = function(event){
		event.preventDefault();
		current.parentElement.parentElement.parentElement.parentElement.style.cssText = "display:none;"
	}
});

prodDel.forEach(function(current){
	current.onclick = function(event){
		event.preventDefault();
		current.parentElement.parentElement.parentElement.style.cssText = "display:none;"
	}
});