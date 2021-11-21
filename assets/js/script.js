
const supercard  = document.getElementById("supercard")


const Naruto = [
    
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg',
    'img7.jpg',
    'img8.jpg',
    'img9.jpg',
    'img10.jpg',
    'img11.jpg',
    'img12.jpg'
];
const Bokunohero = [
    
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg',
    'img7.jpg',
    'img8.jpg',
    'img9.jpg',
    'img10.jpg',
    'img11.jpg',
    'img12.jpg'
    
];

let codigodoHtml= '';   


var bokunohero,naruto;
var thema,tiptema;
var feedback;
var carta1,carta2;
var block = false;
var final = 0;
var pontuacao = 0;

function alteranaruto(){
    thema = Naruto;
    tiptema = "naruto";
    aplicaTema();
}
function alterabokunohero(){
    thema = Bokunohero;
    tiptema = "bokunohero";
    aplicaTema();
}
function aplicaTema(){
    codigodoHtml = '';

thema.forEach(img =>{

    zeraTudo();
    codigodoHtml += `
    <div class="card" data-carta="${img}" >
        <div class="frontcard"><img src="img/${tiptema}/cover/cover.jpg"></div>
        <div class="backcard"> <img src="img/${tiptema}/imgs/${img}"></div>
    </div>
    ` ;      
});
supercard.innerHTML = codigodoHtml + codigodoHtml;



const cartas = document.querySelectorAll(".card")


function verif() {
    let comp = carta1.dataset.carta === carta2.dataset.carta?true:false;

    atualizaclique()

    if(!comp){ 
    remo();
    
}
    else if(comp)
    {
        carta1.removeEventListener('click',virar)
        carta2.removeEventListener('click',virar)
        block = null;
        carta1 = null;
        carta2 = null;
        final++;

        ganhaPontos();
    }
    
    if(final == 12){
        setTimeout(() =>{
            alert("Parabéns !!");
            
            aplicaTema();
            
        },500)
        

    }
    
}
function zeraTudo(){
    feedback = 0;
    document.getElementById("cliques").textContent = `${feedback}`
    pontuacao = 0;
    document.getElementById("pontuacao").textContent = `${pontuacao}`
    final = 0;
}
function ganhaPontos(){
    pontuacao += 125;
    document.getElementById("pontuacao").textContent = `${pontuacao}`
}
function atualizaclique (){
    if(feedback < 22){
    feedback ++;
    document.getElementById("cliques").textContent = `${feedback}`
}
    else{
    alert("Infelizmente você excedeu o numero maximo de cliques, tente novamente!!");

    aplicaTema();
}
}


function virar(){

    if(block) return false;
    this.classList.add("virar")

    if(!carta1){
    carta1 = this;
    carta1.removeEventListener('click',virar)
    return false;
}
    
    carta2 = this

    verif();
    
}


function remo(){
    block = true;
    setTimeout(() =>{
        carta1.classList.remove("virar")
        carta2.classList.remove("virar")
        
        block = false;
        carta1 = '';
        carta2 = '';

    },900)
    carta1.addEventListener('click',virar)
}





cartas.forEach(cart => cart.addEventListener('click', virar))

}
alterabokunohero()