const form = document.querySelector('form');

// console.log(typeof(document.querySelector('#height').value));
// We get values in string so we have to convert it into number 

// const height = Number(document.querySelector('#height').value);
// console.log(typeof height);

form.addEventListener( 'submit', (event) => {

    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const res = document.querySelector('.bmi');
    
    if(height === '' || height < 0 || isNaN(height)){
        res.innerHTML = `${height} is Invalid. Please Enter a Valid height.`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        res.innerHTML = `${weight} is Invalid. Please Enter a Valid weight.`;
    }
    else{ // calculate BMI

        const bmi = (weight/((height/100)*(height/100))).toFixed(2);
        res.innerHTML = `<span>${bmi}<span/>`;

        const message = document.querySelector('.message');

        if(bmi < 18.9) {
            message.style.color = 'red';
            message.innerHTML = `You are Under Weight.`;
        }
        else if(bmi > 24.9) {
            message.style.color = 'red';
            message.innerHTML = 'You are Over Weight';
        }
        else{
            message.style.color = 'green';
            message.innerHTML = `Congratulation !! You are a HEALTHY Person !!`;
        }
    }

} )