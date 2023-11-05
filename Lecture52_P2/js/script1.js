(function (window) {
    var AnujaGreeter = {};
    AnujaGreeter.name = "Anuja";
    var greeting = "Hello ";
    AnujaGreeter.SayHello = function() {
        console.log(greeting + AnujaGreeter.name);
    }
window.AnujaGreeter = AnujaGreeter;
})(window);
