const allColors = document.querySelectorAll('.button');
const body  = document.querySelector('main');

allColors.forEach( (item) => {
    console.log(item);
    item.addEventListener( ('click'), (event)=>{
        console.log(event);
        console.log(event.target);
        body.style.backgroundColor = item.id;
    })
} )

console.log(allColors[0].className);