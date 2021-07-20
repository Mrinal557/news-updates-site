console.log(" my news-site");
// 84542d54521847159867d1374ed1f201

//Initialize the news api parameters
let source = "bbc-news";
let apiKey = "84542d54521847159867d1374ed1f201";

let newsAccordion = document.getElementById("newsAccordion");
//Grab the news container
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=in&apiKey=84542d54521847159867d1374ed1f201`,
  true
);

// What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element, index) {
      // console.log(articles[news]);
      let news = `<div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-heading ${index}">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapse${index}"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapse${index}"
                      >
                      <b>Breaking News ${index + 1}</b>: ${element["title"]}
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapse${index}"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-heading${index}"
                    >
                      <div class="accordion-body">${
                        element["content"]
                      },<a href="${
        element["url"]
      }" target="_blank">Read More Here</a> </div>
                    </div>
                  </div>`;
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("Some error occured");
  }
};
xhr.send();
xhr.getResponseHeader("Content-type", "application/json");
//Create a get request
