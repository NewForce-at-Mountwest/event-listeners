

// LIGHTNING EXERCISE 1 

// Add a click handler for the h1 element
document.getElementById("main-header").addEventListener("click", function () {
  console.log("you clicked on the header")
})

// LIGHTNING EXERCISE 2


//Add an event listener to everything of a certain class
const blogPosts = document.getElementsByClassName("blog-post");

// Every time they click on an element with a class of "blog-post", console log that they clicked on a blog post
// log the event to the console
// log event.target to the console
// log event.target.innerHTML to the console
// log event.target.classList to the console
// add a class


// add a mouseneter event to each blog post and add a class of "blue-background"
// remove the class when the mouse leaves
for (let i = 0; i < blogPosts.length; i++) {
  blogPosts[i].addEventListener("mouseenter", function () {
    console.log(event.target.classList);
    event.target.classList.add("blue-background")
  })
  blogPosts[i].addEventListener("mouseleave", function () {
    event.target.classList.remove("blue-background")
  })
}

// When you click on the dark theme button, it should apply a class of "dark-backround" to the body element of the page
// You can also define the function OUTSIDE the event listener

function darkTheme() {
  document.getElementsByTagName("body")[0].classList.toggle("dark-background");
}

// When you click on the dark theme button, it should call the function
document.getElementById("dark-theme").addEventListener("click", darkTheme)

// LIGHTNING EXERCISE 3

// When they click on the "submit" button, log the message to the console and print a "message sent!" message
document.getElementById("contact-submit").addEventListener("click", function () {
  const message = document.getElementById("contact-me").value;
  console.log(message);
  event.target.innerText = "Message submitted!";
})

// LIGHTNING EXERCISE FOUR 
// Add another keyup event listener to the textarea 
// As the user types, print the message in the output div below
document.getElementById("contact-me").addEventListener("keyup", function () {
  document.getElementById("output-div").innerText = event.target.value;
})

/*
  EVENT BUBBLING:

  You can add an event handler on the body tag, and since all
  browser events bubble up to the body, you can then put in
  conditional logic to handle the click event on many different
  elements in one function.
 */
document.querySelector("body").addEventListener("click", function (event) {
  console.log("You clicked on the body of the DOM")
  console.log(event.target)
})