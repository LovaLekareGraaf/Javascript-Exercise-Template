// Our variables
const key = "979c446a2b42469a812e69a8e3e06cf5"
const url = `https://newsapi.org/v2/everything?excludeDomains=mashable.com,wired.com,lifehacker.com,instructables.com,thekitchn.com,theguardian.com&sortBy=popularity&q=mushroom&q=fungai&q=spongebob&apiKey=${key}`
const url1= `https://newsapi.org/v2/everything?language=en&excludeDomains=bleacherreport.com,mashable.com,boingboing.net,kottke.org,thepointsguy.com&sortBy=popularity&q=spongebob+squarepants&apiKey=${key}`

// Our main function
const recievedNews = (newsdata) => {

    newsdata.articles.forEach((article, index) => {

// here we create top news
      if (index ===0){
        document.querySelector(".heroNews").innerHTML +=
        `<div class="heroarticle">
        <h2>${article.title}</h2>
        <p class="p1">${article.description}</p>
        <a class="button" href=${article.url}>Read the Mushroom</a>
        <img class="heroimg" src="${article.urlToImage}"/>
      </div>`
      }

      // For each article object from the API, we create a new div in HTML.
          else {
					document.querySelector(".allNews").innerHTML +=
            `<div class="news">
            <img src="${article.urlToImage}"/>
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a class="button" href=${article.url}>Read the Mushroom</a>
          </div>`
        }
    })
}


const recievedNews1 = (newsdata) => {

    newsdata.articles.forEach((article) => {
      {
					document.querySelector(".spongebob").innerHTML +=
            `<div class="news">
            <img src="${article.urlToImage}"/>
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a class="button" href=${article.url}>Read the Mushroom</a>
          </div>`
        }
    })
}

//Fetch is a built in function in Javascript, it gets the data from the API and tranforms it into Javascript objects – JSON data.
fetch(url)
  .then(response => response.json())
  .then(recievedNews)

  fetch(url1)
    .then(response => response.json())
    .then(recievedNews1)
