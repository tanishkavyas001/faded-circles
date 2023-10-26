var dat=[];
function setup() {
  createCanvas(400, 400);
  background(220);
  for(var i=0;i<20;i++){
    let p=random(145,175);
    //dat.push(p) - either this or the statement below could be used
    dat[i]=p;
  }
  var m1=min(dat);
  var m2=max(dat);

  for(var k=0;k<dat.length;k++){
    var t=map(dat[k],m1,m2,50,height-100);
    noStroke();
    fill(255,0,0,20);
    ellipse(width/2,height/2,t);
  }
}

function draw() {}