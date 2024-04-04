const languages = {
    cpp : 'C++',
    js : 'JavaScript',
    rb : 'Ruby',
    py : 'Python',
    jsx : 'React, JSON',
    tsx : 'TypeSricpt JSON',
    ts : 'TypeScript'
};


for (const key in languages) {
    // console.log(key); // prints key only
}

// for (const [key,value] in languages) {
//     // console.log(key); // prints only the first-character of languages
// }

// for (const [key,value] in languages) {
//     // console.log(value); // Bakwas 
// }

for (const key in languages) {
    // console.log(languages[key]);
}

for (const key in languages) {
    // console.log(`${key} is shortcut for ${languages[key]}`);
}


//  Let's see how it works on arrays : 

const arr = ["Ironman", "Captain America", "Black Panther"];

for (const key in arr) {
    // console.log(key); 
    // Here comes the game, this prints index of elements because indexes are the keys of elements in array, that's how it works
    // console.log(arr[key]);
}

const map = new Map();
map.set('IND', 'India');
map.set('USA','United States of America');
map.set('UK','United Kingdom');
map.set('FRN','France');
map.set('IND', 'India');

/* 
    Nothing is working because Maps cannot be iterated over for-in loops. 
    The reasons is due to security of map with for-in-loop, or reason can be finded in mdn docs.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
*/

// for (const key in map) {
//     console.log(key);
// }


