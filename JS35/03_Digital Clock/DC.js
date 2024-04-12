const clock = document.querySelector('.time');
// console.log(clock);



    // let nowTime = new Date();
    // console.log(nowTime.toLocaleTimeString());
    // clock.innerHTML = nowTime.toLocaleTimeString();



// The above thing will just do one-time, whenever the user reloads then only it is going to show the time. 
// The main aim is to show Live Timing. For that we will be using setInterval which basically will be performing a method after a given interval

// setInterval(function(){} , time in milliseconds);

setInterval(() => {

    let nowTime = new Date();
    // console.log(nowTime.toLocaleTimeString());  
    clock.innerHTML = nowTime.toLocaleTimeString();

}, 1000); // 1000ms = 1s or  can also be taken



