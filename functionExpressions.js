

//console.log(toCelsius(10));


function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}


setTimeout(function () {
    console.log('I waited 2 seconds');
}, 2000);                //  2 saniye bekler sonra functionu yapar


setTimeout(function () {
    console.log(toCelsius(10));

}, 3000);


let counter = 10;

function timeout() {
    setTimeout(function () {
        console.log("Hi " + counter--);

        if (counter === 0) {
            console.log("Take your seat");
            return;
        }

        timeout();

    }, 2000);
}

//timeout();



(function (){
    console.log('Yasin akpinar is buldu');
})();
