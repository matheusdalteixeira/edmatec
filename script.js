var imgs = [];
var comentarios = {
	h1: [],
	p: []
};
var slider;
var imgAtual;
var maxImg;
var tmp;
var tempoTroca;
var vtempo;
var vbarra;
var primeiroCarregamento = 0;
var altura;

function preCarregamento(){
	var s = 1;
	for(i = 0; i < 2; i++){
		imgs[i] = new Image();
		imgs[i].src = "../modelosProntos/projeto"+s+".png";
		s++;
	}
}

function carregarImg(img){
	slider.style.backgroundImage = "url('"+imgs[img].src+"')";
	slider.style.backgroundRepeat= "no-repeat";
}

function preFileTexto(){
	readerFileText = new FileReader();
	reader.addEventListener("load",loadFilePage);
	readerFileText.readAsText(input);
}

function loadFilePage(){

}


function inicia(){
	preCarregamento();
	imgAtual = 0;
	maxImg = imgs.length - 1;
	altAside=document.getElementById("tagAside");
	slider=document.getElementById("dvslider");
	vbarra=document.getElementById("dvbarra");
	carregarImg(imgAtual);
	tempoTroca = 0;
	anima();
}

function troca(dir){
	tempoTroca = 0;
	imgAtual+=dir;
	if(imgAtual > maxImg)
		imgAtual = 0;
	else if(imgAtual < 0)
		imgAtual = maxImg;
	carregarImg(imgAtual);
}

function anima(){
	tempoTroca++;
	if(tempoTroca >= 500){
		tempoTroca = 0;
		troca(1);
	}
	vtempo = tempoTroca/5;
	vbarra.style.width = vtempo+"%";
	window.requestAnimationFrame(anima);
}

window.addEventListener("load", inicia);