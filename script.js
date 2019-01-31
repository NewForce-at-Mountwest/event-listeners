// // Go over the += innerHTML

// // const ulElement = document.querySelector("#list-section");

// // const studentNames = ["Sable", "Nikki", "Matt", "Dale", "Joey"];

// // let allStudents = "";

// // for(let i = 0; i < studentNames.length; i++){
// //   const studentComponent = `<li>${studentNames[i]}</li>`
// //   allStudents += studentComponent;
// // }

// // ulElement.innerHTML = allStudents;
// // console.log(ulElement.innerHTML);




// // const studentNames = ["Sable", "Nikki", "Matt", "Dale", "Joey"];


// // for(let i = 0; i < studentNames.length; i++){
// //   document.querySelector("#list-section").innerHTML += `<li>${studentNames[i]}</li>`
// // }

// // LIGHTNING EXERCISE 1 

// // ## Lightning Exercise 1
// // - In your HTML, create three header elements (and h1, an h2, and an h3) and give them each a unique id
// // - In your JavaScript file, select each element by its id. 
// // console.log(document.querySelector("#main-header"));

// // const subHeader = document.querySelector("#sub-header");

// // console.log(subHeader);

// // console.log(document.querySelector("#tagline"));
// // - Log each element to the console to make sure you selected it correctly.


// // Add a click handler for the h1 element

// function sayHelloWorld(){
//   console.log("Hello, world!")
// }


// // document.querySelector("#main-header").addEventListener("click", function(){
// //     console.log("You clicked on the H1!");
// // })



// // const h1 = document.querySelector("#main-header")
// // console.log(h1)

// // talk about the document object

// // LIGHTNING EXERCISE 2

// // ## Lightning Exercise 2
// // - Add a click event listener to each heading element you just created. 
// // - Inside the event listener's callback function, you should log a string about which element they clicked on to the console

// function clickOnH2(){
//   console.log("You clicked on the H2!")
// }
// document.querySelector("#sub-header").addEventListener("click", () => {
//     console.log("You clicked on the h2");
// })


// //Add an event listener to everything of a certain class
// // WON'T WORK
// // const allBlogPosts = document.querySelectorAll(".blog-post").addEventListener("click", () => {
// //   console.log("did it work???")
// // });
// // console.log(allBlogPosts);

// // const allBlogPosts = document.querySelectorAll(".blog-post")
// // console.log(allBlogPosts);

// // for(let i = 0; i < allBlogPosts.length; i++){
// //   const currentBlogPost = allBlogPosts[i];
// //   currentBlogPost.addEventListener("mouseover", (event) => {
// //     console.log(event);
// //     event.target.classList.add("blue-background");
// //   })
// //   currentBlogPost.addEventListener("mouseleave", (event) => {
// //     console.log(event);
// //     event.target.classList.remove("blue-background");
// //   })
// // }

// // ## Lightning Exercise 3
// // - Create a CSS file and link it to your HTML file
// // - Inside the event listener for your h1 element, add a line of code that will change the text color of the h1 element to red when you click on it 

// document.querySelector("#main-header").addEventListener("click", () => {
//   event.target.classList.toggle("red-text");
//   console.log("this is event.target", event.target);
//   console.log("this is its classList", event.target.classList);
// })




// // log event.target.classList to the console

// // LIGHTNING EXERCISE 3

// document.querySelector("#dark-theme").addEventListener("click", () => {
//   document.querySelector("body").classList.toggle("dark-background");
// })

// // When they click on the "submit" button, log the message to the console and print a "message sent!" message

// document.querySelector("#contact-submit").addEventListener("click", () => {
//   // figure out what's in the text area
//   const messageToPrint = document.querySelector("#contact-me").value;
//   console.log(messageToPrint);
//   // print what's in the text area to the DOM in the #output-div container

//   document.querySelector("#output-div").textContent = messageToPrint;
//   console.log(document.querySelector("#output-div"))
//   // console.log("You sent the message!");
// })


// document.querySelector("#contact-me").addEventListener("keydown", () => {
//   // figure out what's in the text area
//   const messageToPrint = document.querySelector("#contact-me").value;
//   console.log(messageToPrint);
//   // print what's in the text area to the DOM in the #output-div container

//   document.querySelector("#output-div").textContent = messageToPrint;
//   console.log(document.querySelector("#output-div"))
//   // console.log("You sent the message!");
// })



// LIGHTNING EXERCISE FOUR 

// Add another keyup event listener to the textarea 
// As the user types, print the message in the output div below

/*
  EVENT BUBBLING:

  You can add an event handler on the body tag, and since all
  browser events bubble up to the body, you can then put in
  conditional logic to handle the click event on many different
  elements in one function.
 */
document.querySelector("body").addEventListener("click", function () {
  console.log("You clicked on the body of the DOM")
  console.log(event.target)
  if(event.target.id === "dark-theme"){
    document.querySelector("body").classList.toggle("dark-background")
  }
})