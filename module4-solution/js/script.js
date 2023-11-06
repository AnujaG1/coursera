var names = ["Anu","Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim" ]
for (var i = 0 ; i<names.length ; i++)
{
    /*console.log(names[i]);
    console.log(names[i].toLowerCase());*/
    if(names[i].toLowerCase().startsWith("j")) {
        console.log("Goodbye " +names[i]);
    }
    else {
        console.log("Hello "+names[i]);
    }
}