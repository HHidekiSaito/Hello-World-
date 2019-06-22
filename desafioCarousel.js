

var txt = "";

var array1 = [45, 4, 9, 16, 25];

var dados, y, imagemReferencia;

var y = function (product) {
	var coloca = document.getElementById("carousel")
    var element = document.createElement("div");
	var clica = document.createElement("a");
	var preco = document.createElement ("p");
	var parcelas = document.createElement ("p");
	var i = i++;
    var img = document.createElement("img");
	//var img = document.getElementById("imagem" + i);
	clica.href = "https:" + product.detailUrl;
    img.src = "https:" + product.imageName;
    img.alt = product.imageName;
    element.innerText = product.name;
	preco.innerText = "De" + " " + product.oldPrice + " " + "Por" + " " + product.price	;
	parcelas.innerText = "Ou " + product.productInfo.paymentConditions ;
	carousel.appendChild(element)
	clica.appendChild(element);
    clica.appendChild(img);
	clica.appendChild(preco);
	return clica;
};
  
var X = function (recommendations) {
	
	var principal = document.getElementById("principal");
	var recomendacao = document.getElementById("recomendacao");
	
	var clica = y(recommendations.data.reference.item);
	principal.appendChild(clica);
	
	recommendations.data.recommendation.forEach(function(element) {
		var clica = y(element);
		recomendacao.appendChild(clica);
	});
   
};

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');

const slideSize = slides[0].getBoundingClientRect(); // mede o tamanho da imagem dependendo do tamanho do browser
const slideWidth = slideSize.width;

//colocar os slides um do lado do outro 

//slides[0].style.left = slideWidth*0 + 'px';
//slides[1].style.left = slideWidth*1 + 'px';
//slides[2].style.left = slideWidth*2 + 'px';

const setSlidePosition = (slide, index) => {
	
	slide.style.left = slideWidth * index + 'px';
	
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
	
	track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
	currentSlide.classList.remove('current-slide');
	targetSlide.classList.add('current-slide');
	
}

// quando clicar no botao da direita, mover os slides para a direita 

nextButton.addEventListener('click', e => {
	
	const currentSlide = track.querySelector('.current-slide');
	const nextSlide = currentSlide.nextElementSibling;
	//vai para o proximo slide
	//const amountToMove = nextSlide.style.left;
	//track.style.transform = 'translateX(-' + amountToMove + ')'  Movi pra cima
	//currentSlide.classList.remove('current-slide');
	//nextSlide.classList.add('current-slide');
	moveToSlide(track, currentSlide, nextSlide);
});

prevButton.addEventListener('click', e => {
	
	const currentSlide = track.querySelector('.current-slide');
	const prevSlide = currentSlide.previousElementSibling;
	moveToSlide(track, currentSlide, prevSlide);		
})
// quando clicar no botao da esquerda, mover os slides para a esquerda






