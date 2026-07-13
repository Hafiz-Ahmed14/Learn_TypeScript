//Built in Data Type: 
// Number, string, boolean, void, undefined, null

let userId: number;
let firstName: string;
let lastName : string;
let isActive : boolean;

userId = 10;
firstName = "hafiz";
lastName = "ahmed"
isActive = true;

console.log(`Your Id: ${userId}, userName : ${firstName} ${lastName}, Your account is: ${isActive}`);


//Union Data types
let User : string | Number | boolean

User = 101;
User = "Hafiz";
User = true

function displayName(User: string | number) {
    console.log(User);
}

displayName("Hafiz");
displayName(101);
