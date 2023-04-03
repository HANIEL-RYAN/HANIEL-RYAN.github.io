let canvas=document.querySelector("canvas")
let c=canvas.getContext("2d")
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;


let circleArray=[];

function Circle(x,y,vx,vy,radius){
    this.x=x;
    this.y=y;
    this.vx=vx;
    this.vy=vy;
    this.radius=radius;
   
    this.draw=function(){
        c.beginPath();
        c.strokeStyle="white"

        c.arc(this.x,this.y,this.radius,0,20,false)
        c.stroke();
     
    }
    this.update=function(){
        if(this.x+this.radius>innerWidth){
            this.vx=-this.vx
        }
        else if(this.x-this.radius<0){
            this.vx=-this.vx
        }
        if(this.y+this.radius>innerHeight){
            this.vy=-this.vy
        }
        else if(this.y-this.radius<0){
            this.vy=-this.vy
        }
        this.x+=this.vx
       this.y+=this.vy

        this.draw()
    }
}

for(let i=0; i<100; i++){
    let radius=30;
    let x=Math.random()*(innerWidth-radius*2)+radius;
let vx=10;
let y=Math.random()*(innerHeight-radius*2)+radius;
let vy=10;

circleArray.push(new Circle(x,y,vx,vy,radius))
}










function move(){
    requestAnimationFrame(move)
c.clearRect(0,0,innerWidth,innerHeight)
    for(let i=0; i<circleArray.length; i++){
        circleArray[i].update();
        c.font="bold 70px brush script mt";
        c.fillStyle="yellow"
        c.fillText("BEST CODING TUTORIALS",190,200)
        c.fillText("IN THE WHOLE WORLD!",150,320)
    }
}

move();


let p1;
let div1;

function visibility(id,visibility){
    document.getElementById(id).style.display=visibility;
}



    
