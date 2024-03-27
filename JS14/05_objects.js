/* Destructureing of Objects : This has to be understood as we will be dealing with API and when recieving data from backend */

const shop = {
    shopName : "Mishri Lal & Sons",
    shopNumber : 100,
    shopOwner : {
        owner1 : {
            ownerName : "Subhash Chaurasia",
            ownerAge : 50,
            ownerVehicle : "Hero Passion Pro",
        },
        owner2 : {
            ownerName : "Satish Chaurasia",
            ownerAge : 65,
            ownerVehicle : "Honda Grazia",
        }
    },
    shopTurnover : 370000000,
}

const {shopName} = shop; // use this syntax to avoid writing like shop.shopName
console.log(shopName);

const {shopName : sname} = shop;   // use this syntax for an alternate name
console.log(sname);


/* Destructure Look in React :  */

/* 
const navbar = ( {company} ) => {

}
navbar (company = "ML&S")

*/


/* How does a JSON file looks , it is nothing but an object without name and key as string only */
/* for more details refer to  : https://api.github.com/users/arshitcc */
/* 
{
    "name" : "Arshit Chaurasia",
    "enroll" : "22UICS111",
    "registration" : 2215551,
    "semester" : "4th",
    "cgpa" : 8.49,
}
*/

/* Usually we will be getting API in form of objects but sometimes also as  array of objects : 
[
    {},
    {},
    {},
]
*/

/* JSON Intro  : 
    => Copy any API url or the JSON code .
    -> Example : https://randomuser.me/api/         OR     code at this url 
    => Paste that API url or JSON code into a JSON Formatter,
    => JSON formatter is a tool that helps to understand the given API more structurally, 

*/

