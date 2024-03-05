console.log("A stack")
queueMicrotask(function () {
    console.log("B microtask")
});
requestAnimationFrame(function () {
    console.log("C rAF")
});
console.log("D stack");
setTimeout(function () {
    console.log("E macrotask")
},0);
console.log("F stack");
Promise.resolve().then(function () {
    console.log("G microtask")
}).then(function () {
    console.log("H microtask")
})
requestAnimationFrame(function () {
    console.log("I rAF")
});
console.log("J stack");
setTimeout(function () {
    console.log("K macrotask")
}, 0);
queueMicrotask(function () {
    console.log("L microtask")
    queueMicrotask(function () {
        console.log("M microtask")
    })
    Promise.resolve().then(function () {
        console.log("N microtask")
    })
    setTimeout(function () {
        console.log("0 macrotask")
    },0)
});
console.log("P stack")