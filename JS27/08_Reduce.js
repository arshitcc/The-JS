const nums = [1,2,3,4,5,6];

// const total = nums.reduce( callbackFunction, intial Value )

const intialValue = 0;

// reduce callback function : uses (prevValue, currentValue , currentIdx)

// => Accumulator , I read this term in microprocessors and microcontrollers which was part of my course in college so no problem in understanding why the word accumulator is used. You can refer to MP-8085 theory or I think in any MP accumulator will be there.

const total = nums.reduce( function (accumulator, currentValue) {
    console.log(accumulator, currentValue);
    return accumulator+currentValue;
}, intialValue )

console.log(total);

const total2 = nums.reduce( (accumulator,num) => ( accumulator+num )     ,intialValue);

const val = nums.reduce((accumulator,num)=>(accumulator*num) , 1); // Tried for Multiplication

console.log(val);

console.log(`Bro got Internship Letter !!! \u{1F389}`);

const shoppingCart = [
    {
        itemName: "Nestle Maggi",
        price: 24,
        quanity: 5
    },
    {
        itemName: "Tata Spoon",
        price: 19,
        quanity: 5
    },
    {
        itemName: "Apple iPhone 14 Pro",
        price: 85999,
        quanity: 1
    },
    {
        itemName: "Apple Macbook M3 Max 36GB / 2TB ",
        price: 385999,
        quanity: 1
    },
    {
        itemName: "NCERT Science book",
        price: 764,
        quanity: 3
    },
];

const shoppingCartValue = shoppingCart.reduce ( (acc, num) => ( acc + num.price*num.quanity )    ,0);

console.log(`Party Cost : ${shoppingCartValue}`);
console.log(`Bro's Pocket got hurt!!! \u{1F602}`);