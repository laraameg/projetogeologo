const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var martelo, solo, borracha, pedra, ferro;

/*
Em arquivos diferentes:
- modifique a classe borracha (já em Borracha.js) para que ela tenha densidade baixa e atrito alto e seja circular
- crie a classe Pedra e dê alta densidade a ela
- crie a classe Ferro e dê densidade muito alta a ela

**Lembre-se de adicionar todos os arquivos que criar ao index.html**
*/

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    solo = new Solo(600,575,1200,50);
    martelo = new Martelo(10,100);
    borracha = new Borracha(600, 560, 40);
    pedra = new Pedra(700, 560);
    ferro = new Ferro(500, 540)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    solo.display();
    martelo.display();
    borracha.display();
    pedra.display();
    ferro.display();
    //exiba os objetos criados aqui    
 
}