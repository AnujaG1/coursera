function makeMultiplier (multiplier) {
    function b() {
        console.log("Multiplier is :" + multiplier);
    }
    b();
    return(
        function (x) {
            return multiplier *x;
        }
    );
}
var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));  // its own execution environment.