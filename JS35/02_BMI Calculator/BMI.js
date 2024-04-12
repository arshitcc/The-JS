const form = document.querySelector('form');
const calc = document.querySelector('.result');

// console.log(typeof(document.querySelector('#height').value));
// We get values in string so we have to convert it into number 

// const height = Number(document.querySelector('#height').value);
// console.log(typeof height);

form.addEventListener( 'submit', (event) => {

    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const res = document.createElement('p');
    res.setAttribute('class', 'bmi border border-black rounded bg-blue-200 p-4 flex items-center text-blue-500');

    if(height === '' || height < 0 || isNaN(height)){
        res.innerHTML = `${height} is Invalid. Please Enter a Valid height.`;
        calc.appendChild(res);
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        res.innerHTML = `${weight} is Invalid. Please Enter a Valid weight.`;
        calc.appendChild(res);
    }
    else{ // calculate BMI
        const bmi = (weight/((height/100)*(height/100))).toFixed(2);
        res.innerHTML = `<span>${bmi}<span/>`;

        const message = document.createElement('p');
        message.setAttribute('class', 'border border-black rounded bg-white flex items-center text-green-500 p-2');

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

        calc.appendChild(res);
        calc.appendChild(message);
    }

} )