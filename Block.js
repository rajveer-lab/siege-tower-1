class Block{
    constructor(x,y,width,hieght){
        var options={
            friction:0.0,
            restitution :0.4, 
        }
this.body=Bodies.rectangle(x,y,width,hieght,options);
this.hieght=hieght;
this.width=width;
world.add(world,this.body);
    }
display(){
 rectMode(CENTRE)
 var angle= this.body.angle;
 var pos=this.body.position;
 Push()
 translate(pos.x, pos.y);
 Pop();
}

    }
