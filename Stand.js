class Stand{
    constructor(x,y,width,hieght,){
        var options={
            isstatic: true
 }
        this.body=this.body.rectangle(x,y,width,hieght,options);
        this.width=this.width;
        this.hieght=this.hieght;
        world.add(world,this.body);
}
display(){
        var angle=this.body.angle;
        translate(this.body.position.x, this.body.position.y);
        Push();
        rectMode(CENTRE);
        rotate(angle);
        rect(0,0,this.width,this.hieght);
        Pop();

}

}