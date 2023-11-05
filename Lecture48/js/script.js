function test(){
    console.log(this);
    this.name = "anuja"
}
test();
console.log(window.name);

// function constructors
//function Circle (radius) {
 //   this.radius = radius;

 //   this.getArea=
 //   function () {
 //       return Math.PI * Math.pow(this.radius,2);
 //   };
//}
//var myCircle = new Circle(10);
//console.log(myCircle);
//console.log(myCircle.getArea());

// function prototype
function Circle (radius) {
    this.radius = radius;
}
Circle.prototype.getArea=
function () {
    return Math.PI * Math.pow(this.radius,2);
};
var myOtherCircle = new Circle(10);
console.log(myOtherCircle);
console.log(myOtherCircle.getArea());


// object literals and "this"

var literalCircle = {
    radius : 10,
    getArea : function () {
        //var self = this;
        console.log(this);

        var increaseRadius = function () {
            //this.radius = 20;
            self.radius =20;
        };
        increaseRadius();
        console.log(this.radius);
        return Math.PI * Math.pow(this.radius,2);
    }
};
console.log(literalCircle.getArea());
