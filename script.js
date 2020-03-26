var imgs = [];
var comentarios = ["Meu texto 1", "Meu texto 2", "Meu texto 3"];
var comentariosTitulos = ["Desenvolvedor", "Projetos realizados", "Contato"];
var slider;
var startSlider;
var imgAtual;
var maxImg;
var tmp;
var tempoTroca;
var vtempo;
var vbarra;
var primeiroCarregamento = 0;
var altura;
var texto;
var titulo;
var novPagCon;
var novPagDes;
var novPagPro;
var tagArticle;

function preCarregamento(){
	var s = 1;
	for(i = 0; i < 3; i++){
		imgs[i] = new Image();
		imgs[i].src = "../modelosProntos/projeto"+s+".png";
		if(i == 2)
			imgs[i].src = "../modelosProntos/projeto"+s+".jpg";
		s++;
	}
}

function carregarImg(img){
	slider.style.backgroundImage = "url('"+imgs[img].src+"')";
	slider.style.backgroundRepeat= "no-repeat";
	carregarTexto(img);
}

function carregarTexto(img){
	texto.innerHTML = comentarios[img];
	titulo.innerHTML = comentariosTitulos[img];
}

function inicia(){
	preCarregamento();
	imgAtual = 0;
	maxImg = imgs.length - 1;
	novPagDes = document.getElementById("novPagDes");
	novPagPro = document.getElementById("novPagPro");
	novPagCon = document.getElementById("novPagCon");
	texto=document.getElementById("cardText");
	titulo=document.getElementById("cardTitulo");
	slider=document.getElementById("dvslider");
	vbarra=document.getElementById("dvbarra");
	carregarImg(imgAtual);
	tempoTroca = 0;
	anima();
	novPagDes.addEventListener("click",cancelaSlider);
	novPagPro.addEventListener("click",cancelaSlider);
	novPagCon.addEventListener("click",cancelaSlider);
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
	startSlider = window.requestAnimationFrame(anima);
}

function cancelaSlider(evento){
	alert(evento);
	cancelAnimationFrame(startSlider);
	evento.preventDefault();
	//anima();
	tagArticle = document.getElementById("tagArticle");
	tagArticle.removeChild(slider);
}

window.addEventListener("load", inicia);
