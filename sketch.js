const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Body=Matter.Body
const Constraint=Matter.Constraint

var ground,polygon1,chain1

function setup(){
createCanvas(1200,700)    
engine=Engine.create()
world=engine.world

g1=new Ground(600,700,1200,30)
g2=new Ground(430,600,380,20)

polygon1=new Polygon(100,500,70,70)
chain1=new Chain(polygon1.body,{x:200,y:500})

//30,4
b1=new Box(330,570,30,40)
b2=new Box(360,570,30,40)
b3=new Box(390,570,30,40)
b4=new Box(420,570,30,40)
b5=new Box(450,570,30,40)
b6=new Box(480,570,30,40)
b7=new Box(510,570,30,40)
b8=new Box(540,570,30,40)


b9=new Box(360,530,30,40)
b10=new Box(390,530,30,40)
b11=new Box(420,530,30,40)
b12=new Box(450,530,30,40)
b13=new Box(480,530,30,40)
b14=new Box(510,530,30,40)

b15=new Box(390,490,30,40)
b16=new Box(420,490,30,40)
b17=new Box(450,490,30,40)
b18=new Box(480,490,30,40)

b19=new Box(420,450,30,40)
b20=new Box(450,450,30,40)



Engine.run(engine)
}


function draw(){
background("pink")
Engine.update(engine)

g1.display()
g2.display()

polygon1.display()



b1.display()
b2.display()
b3.display()
b3.display()
b4.display()
b5.display()
b6.display()
b7.display()
b8.display()

b9.display()
b10.display()
b11.display()
b12.display()
b13.display()
b14.display()
b15.display()
b16.display()
b17.display()
b18.display()
b19.display()
b20.display()

chain1.display()

}

function mouseDragged(){
Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
chain1.fly()    
}

function keyPressed(){
if(keyCode===32){
chain1.attach(polygon1.body)

}
}