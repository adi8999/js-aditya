// Primitive datatype:

 // 7 Types : String, Number,Boolean,Null,Undefined,Symbol,BigInt.

 const score = 100
 const scoreValue= 100.3

 const isLoggedIn = false
 const outsideTemp = null

 let userEmail;
  const id =Symbol ('123');
  const anotherId =Symbol('123');
 // console.log(id===anotherId);
  
  //const bigNumber = 357486586768n
  

 // Non - Primitive or Reference:

 // Array , Objects , Functions.

 const heroes =["ironman ", "superman", "Thanos"]
 let myObj = {
    name:"aditya",
    age :22,

  }

  const myFunction = function(){
    console.log("Hello World");

  }
  console.log(typeof outsideTemp);

  //***************************+++++++++++

  //Stack (primitive) and Heap (Non primitive)
  // stack = call by value
  // Heap = call by reference
   let myName = "Aditya";
   let anotherName = myName
    anotherName ="Ronaldo";

    console.log(myName);
    console.log(anotherName);


   let userOne = {
       email:"aditya@gmail.com"
       upi: "user@ybl"

   }
   let userTwo = userOne
   
   userTwo.email = "aditya@gmail.com"

   console.log(userOne.email);
   console.log(userTwo.email);