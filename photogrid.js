const icon = document.getElementById("search_icon");
const input = document.getElementById("searchbar");

const filterFunction = () => {
  const images = document.querySelectorAll(".images");
  images.forEach((image) => {
    let searchedWord = image.querySelector("p");
    if (
      searchedWord.innerHTML.toUpperCase().indexOf(input.value.toUpperCase()) >
      -1
    ) {
      image.style.display = "";
      console.log("hello")
      
    } 
    // else if(input.value == " ")
    // {
    //   clearInput();
    // } 
    else { 
      image.style.display = "none";
    }
  });
};
icon.addEventListener("click", filterFunction);

// const clearInput = () => {
//   return window.location.reload();
// }