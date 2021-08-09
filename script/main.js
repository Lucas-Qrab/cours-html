let span = document.getElementById('s2');
let troll = document.getElementById('thierry');
let refresh = document.getElementById('thierry2');
let beau = document.getElementById('beau');
let tet = document.getElementById('tet');
let navigation = document.getElementById('navigation');
let boutton = document.getElementById('disparait');
let selection = document.getElementById('selection');
let text = document.getElementById('tete');
let dieppe = document.getElementById('dieppe');
let dieppe2 = document.getElementById('dieppe2');
let variable ='0';
var string = "";
var scrollPos = 0;
var choice = 0;

//var kevin = prompt("c'est quoi ton nom ?");

document.addEventListener('DOMContentLoaded', function(){
	dieppe2.hidden=true;
})

function choix(){
	var choice =selection.selectedIndex;
	if(choice == 1) {
		dieppe.hidden=true;
		dieppe2.hidden=false;
	}else{
		dieppe.hidden=false;
		dieppe2.hidden=true;
	}
}

selection.addEventListener('click', function(){
	choix();
})

function trol(){
	if (variable==='1'){
		variable='2';
	}else {
		if (variable==='2'){
			variable='3';
		}else{
			if (variable==='3'){
				variable='1';
				alert('Mec enfaite ça sert a rien :/ ');
			}
		}
	} 
}

beau.addEventListener('click' , function(){
	string=tet.value.toString();
	tet.value="gg bro!!";
	alert("vous avez saisi : " + string);
})

span.addEventListener('click', function(){
	span.textContent = 'Tu as réussit !';
	alert('gg bro!');
})

troll.addEventListener('click', function(){
	if (variable==='0'){
		variable='1';
	}else{
		trol();
	}
})

refresh.addEventListener('click',function(){
	document.location.reload();
})

window.addEventListener('scroll',function(){
	  // detects new state and compares it with the new one
  	if ((document.body.getBoundingClientRect()).top > scrollPos){
		span.textContent = 'monte';
		navigation.hidden=false;
  	}
	else{
		span.textContent ='descend';
		navigation.hidden =true;
	}
	// saves the new position for iteration.
	scrollPos = (document.body.getBoundingClientRect()).top;
})


