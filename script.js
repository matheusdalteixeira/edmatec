var imgs = [];
var comentarios = ["Me chamo Matheus, tenho 27 anos e desenvolvo projetos web front-end e back-end, utilizando HTML, CSS, JAVASCRIPT(ou jQuery) e PHP. Tenho cerca de 8 anos de experiência no desenvolvimento de projetos web como Freelancer.", "Alguns projetos que realizo:<br> - Institucionais<br> - Gestão de produtos e recursos de uma empresa<br> - portifólios<br>Clique no botão abaixo e encontre seu projeto web perfeito.", "Além de escolher um dos modelos de páginas web prontas no menu <b>projetos</b>, você também pode entrar em contato, aqui pelo nosso site, e solicitar um orçamento para um projeto específico que você esteja necessitando através do botão abaixo."];
var comentariosTitulos = ["Desenvolvedor", "Projetos", "Contato"];
var slider;
var startSlider;
var imgAtual;
var maxImg;
var tmp;
var tempoTroca;
var vtempo;
var vbarra;
var estagio;
var nodes = [];
var pagHome = {
	executando: 0,
	pausado: 1,
	estagioSubSecoes: function(pagSelecionada){
		if(pagSelecionada == "novPagDes" || pagSelecionada == "novPagPro" || pagSelecionada == "novPagCon"){
			estagio = this.pausado;
			//alert("função estagioSubSeções: "+estagio);
		}
		else if(pagSelecionada = "logomarca")
			estagio = this.executando;
	},
	iniciaEstagio: function(){
		estagio = this.executando;
	}
};
var primeiroCarregamento = true;
var altura;
var texto;
var titulo;
var novPagCon;
var novPagDes;
var novPagPro;
var logo;

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
	pagHome.iniciaEstagio();
	if(estagio == pagHome.executando && primeiroCarregamento == true){
		logo=document.getElementById("logomarca");
		novPagDes=document.getElementById("novPagDes");
		novPagPro=document.getElementById("novPagPro");
		novPagCon=document.getElementById("novPagCon");
		texto=document.getElementById("cardText");
		titulo=document.getElementById("cardTitulo");
		slider=document.getElementById("dvslider");
		vbarra=document.getElementById("dvbarra");
		primeiroCarregamento = false;
	}
	if(estagio == pagHome.executando){
		imgAtual = 0;
		maxImg = imgs.length - 1;
		tempoTroca = 0;
		preCarregamento();
		carregarImg(imgAtual);
		anima();
	}
	logo.addEventListener("click",clique);
	novPagDes.addEventListener("click",clique);
	novPagPro.addEventListener("click",clique);
	novPagCon.addEventListener("click",clique);
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

function anima(mudarEstadoAnimacao){
	if(mudarEstadoAnimacao == pagHome.pausado){
		cancelAnimationFrame(startSlider);
		//inicia();
		return;
	}
	tempoTroca++;
	if(tempoTroca >= 500){
		tempoTroca = 0;
		troca(1);
	}
	vtempo = tempoTroca/5;
	vbarra.style.width = vtempo+"%";
	startSlider = window.requestAnimationFrame(anima);
}

function clique(evento){
	var estagioAntesClique;
	estagioAntesClique = estagio;
	pagHome.estagioSubSecoes(evento.target.id);
	if(estagio == pagHome.executando)
		anima;
	else if(estagio == pagHome.pausado){
		var tagDiv = [2];
		var i;
		var tagArticle;
		asideMenu(evento.target.id);
		if(estagioAntesClique == pagHome.executando){
			//alert(estagio);
			anima(estagio);
			evento.preventDefault();
			//tagArticle = document.getElementById("tagArticle");
			//tagArticle.removeChild(slider);
		}
		else{
			if(evento.target.id == "novPagDes"){
				for(i = 0; i < 2; i++){
					tagDiv[i] = document.createElement("div");
					tagDiv[i].classList.add("bloco");
					tagDiv[i].style.backgroundColor = "black";
				}
			}
			if(evento.target.id == "novPagPro"){
				for(i = 0; i < 2; i++){
					tagDiv[i] = document.createElement("div");
					tagDiv[i].classList.add("bloco");
					tagDiv[i].style.backgroundColor = "black";
				}
			}
			if(evento.target.id == "novPagCon"){
				for(i = 0; i < 2; i++){
					tagDiv[i] = document.createElement("div");
					tagDiv[i].classList.add("bloco");
					tagDiv[i].style.backgroundColor = "black";
				}
			}
		}
	}
	if(evento.target.id == "novPagDes")
		novPagDes.removeEventListener("click",clique)
	else if(evento.target.id == "novPagPro")
		novPagPro.removeEventListener("click",clique)
	else if(evento.target.id == "novPagCon")
		novPagCon.removeEventListener("click",clique)
	else if(evento.target.id == "logomarca")
		logo.removeEventListener("click",clique)
	return;
	//cancelAnimationFrame(startSlider);
	//evento.preventDefault();
}
function asideMenu(pagSelecionada){
	//pagHome.carregaNodes(document);
	if(pagSelecionada == "novPagDes"){
		novPagDes.style.color = "white";
		novPagDes.style.backgroundColor = "#1f238f70";
		novPagDes.style.padding = "10px";
		novPagDes.style.borderRadius = "5px";
		novPagDes.style.fontWeight = "normal";
		novPagPro.style.backgroundColor = "transparent";
		novPagPro.style.padding = "0";
		novPagPro.style.borderRadius = "none";
		novPagPro.style.fontWeight = "500";
		novPagCon.style.backgroundColor = "transparent";
		novPagCon.style.padding = "0";
		novPagCon.style.borderRadius = "none";
		novPagCon.style.fontWeight = "500";
	}
 	else if(pagSelecionada == "novPagPro"){
		novPagDes.style.backgroundColor = "transparent";
		novPagDes.style.padding = "0";
		novPagDes.style.borderRadius = "none";
		novPagDes.style.fontWeight = "500";
		novPagPro.style.color = "white";
		novPagPro.style.backgroundColor = "#1f238f70";
		novPagPro.style.padding = "10px";
		novPagPro.style.borderRadius = "5px";
		novPagPro.style.fontWeight = "normal";
		novPagCon.style.backgroundColor = "transparent";
		novPagCon.style.padding = "0";
		novPagCon.style.borderRadius = "none";
		novPagCon.style.fontWeight = "500";
 	}
	else if(pagSelecionada == "novPagCon"){
		novPagPro.style.backgroundColor = "transparent";
		novPagPro.style.padding = "0";
		novPagPro.style.borderRadius = "none";
		novPagPro.style.fontWeight = "500";
		novPagDes.style.backgroundColor = "transparent";
		novPagDes.style.padding = "0";
		novPagDes.style.borderRadius = "none";
		novPagDes.style.fontWeight = "500";
		novPagCon.style.color = "white";
		novPagCon.style.backgroundColor = "#1f238f70";
		novPagCon.style.padding = "10px";
		novPagCon.style.borderRadius = "5px";
		novPagCon.style.fontWeight = "normal";
	}
}

window.addEventListener("load", inicia);
