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
  this.perimiter = (height*2) + (width * 2);
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

let newShape2 = new Per(10,10);
console.log(newShape2);

let newShape3 = new Area(12,78);
console.log(newShape3);