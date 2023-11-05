// ARRAYS

var array = new Array();
array[0]= "Anuja";
array[1]= 1;
array[2] = function(name){
    console.log("Hello! "+name);
};
array[3]= {course:"HTML , CSS & JS"};
console.log(array);
console.log(array[1]);
array[2](array[0]);
console.log(array[3].course);


// Short hand array creation
var names = ["Anuja" , 
              {name: "sita"}];
console.log(names);
for (var i =0 ; i< names.length ; i++)
{
    console.log("Hello! "+names[i]);
}

var names2 = ["anuja" , "sita" , "pabitra"];
names2.greeting = "Hi!";     // terated as property of a array.
for (var j in names2)
{
    console.log("Hello! "+ names2[j]);
}
var myobj = {
    name: "anuja",
    course: "HTML/CSS/JS",
    platform: "coursera"
};
for(var prop in myobj){
    console.log(prop + ":" + myobj[prop]);
}

