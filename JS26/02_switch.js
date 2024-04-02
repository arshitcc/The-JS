// Switch Syntax : 

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const monthNumber = 3;

switch (monthNumber) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        // break;  // If this gets matched the flow will not stop upto last case number
    case 4:
        console.log("April");
        // break;
    case 5:
        console.log("May");
        // break;
    default:
        console.log("Default Region");
        // break;
}

const monthName = "dec";

switch (monthNumber) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    
    default:
        console.log("Default Region");
            
    case "march":
        console.log("March");
        // break;  
        // If this gets matched and break is not used the flow will not stop upto last case number.
        // In languages like Swift, this is not much important.
    case "april":
        console.log("April");
        break;
    case "may":
        console.log("May");
        break;
}

