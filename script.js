class Shape {
 	 constructor(height, width) {
   	 this.height = height;
   	 this.width = width;
  }
}

class Sqr extends Shape{
  constructor(height, width){
  super(height, width);    
    
  }
}

class Per extends Sqr {
  constructor(height,width){
  super(height,width);
  }
}


class Area extends Per {
  constructor(height, width){
    super(height, width);
    this.Area= height * width;
  }
}

let newShape = new Shape(10,10);
console.log(newShape);

let newShape1 = new Sqr(10,10);
console.log(newShape1);

let newShape2 = new Area(10,10);
console.log(newShape2);