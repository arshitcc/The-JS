/*
    Step 1 : generate Random Colors ? 
*/

let randomColor = () => {
    let colorsHex = "0123456789ABCDEF";
    let color = "#";

    for(let i=0; i<6; i++){
        color += colorsHex[Math.floor(Math.random()*16)];
    }

    return color;
    // Create a random number to go from 0 to 15
    // random() = > [0,1) *16 = [0,16)
    // Math.floor(Math.random()*16)
}

let stopID;


const startColorChanging = function(){
    
    if(stopID == null){  // if (!stopID) // If stopID is null and u want to start colorChange it means changeIt
        stopID = setInterval(changeBG,100);
        console.log(typeof stopID);
    }

    function changeBG(){
        document.body.style.backgroundColor = randomColor();
    }
}

const stopColorChanging = function(){
    clearInterval(stopID);
    stopID = null; 
    // this is better habbit for code flushing, but also apply a check if stopID is already null and then again stop is clicked then null cannot be a refernce for clearInterval
}

document.querySelector('#start').addEventListener('click',startColorChanging);
document.querySelector('#stop').addEventListener('click', stopColorChanging);
