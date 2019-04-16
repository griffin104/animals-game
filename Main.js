let doDraw = (function() {

let  getTotalRate = function() {
// Returns total rate
} 

let getRate = function(gen, mult) {
// Returns rate for the given generator
}

let init = function() {
    gameLoop = setInterval(paint, 1000/60);
}

return {
    init: init
}
}());