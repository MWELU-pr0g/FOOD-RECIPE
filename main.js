const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");
// console.log(searchForm)
let searchQuery = "";



searchForm.addEventListener("submit", (e) => {
     e.preventDefault();
     searchQuery = e.target.querySelector("input").value;
     // console.log(searchQuery)
     fetchAPI();

   });

   async function fetchAPI() {
     const baseURL = `http://www.recipepuppy.com/api/?=${searchQuery}`;
     const options = {
       method:"POST",
      headers:{'content-type': 'text/plain'},
     }

     const response = await fetch(baseURL,options)
     const data = await response.json();
     generateHTML(data.results);
    //  console.log(baseURL);
    };
   
    function generateHTML(results) {
      container.classList.remove("initial");
      console.log(results.thumbnail)
      console.log("up")
      let generatedHTML = "";
      results.map((results) => {
        console.log(results.thumbnail)
        generatedHTML += `
        <div class=" div-image">
        <img src="${results.thumbnail}" alt="">
        <div class="item flex-container">
          <h6 class="title">${results.title}</h6>
          <a class="vbutton" href="${results.href}" class="vrecipe">view recipe</a>
        </div>
        `;
      });
      searchResultDiv.innerHTML = generatedHTML;
    } 





 