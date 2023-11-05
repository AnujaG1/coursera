(function (window) {
    var AnuGreeter = {};
    AnuGreeter.name = "Anu";
    var greeting = "Hi ";
    AnuGreeter.SayHi= function() {
        console.log(greeting +AnuGreeter.name);
    }
    window.AnuGreeter = AnuGreeter;

})(window);