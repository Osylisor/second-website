let navList = document.querySelector(".nav-list");
let toggleButton = document.querySelector(".toggle-button");

toggleButton.addEventListener('click' , ()=>{

    navList.classList.toggle("active");
    console.log("clicked");
});