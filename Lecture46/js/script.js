var a = 4;
var b = a;
console.log("a is :" +a);
console.log("b is :"+b);
b= 5;
console.log("after b is update: ");
console.log("a:" +a);
console.log("b:"+b);

var c= {x:6};
var d = c;
console.log(c);
console.log(d);
d.x = 8;
console.log("After update:");
console.log(c);
console.log(d);

function changePrimitive(primValue){
    console.log("in changePrimitive...");
    console.log("before:");
    console.log(primValue);

    primValue = 5;
    console.log("after:");
    console.log(primValue);
}
var value = 7;
changePrimitive(value);
console.log("after changePrimitive, orig value:");
console.log(value);

function values(pvalue) {
    console.log("in values...");
    console.log("before:");
    console.log(pvalue);

    pvalue.y = 4;
    console.log("after:");
    console.log(pvalue);
}
var s={y:10};
values(s);
console.log("after pvalue, orig value:");
console.log(s);

