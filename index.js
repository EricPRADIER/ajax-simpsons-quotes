
function simpsonQuote() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
  
  
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
  
    axios
      .get(url)
  
      .then(function (response) {
        return response.data; // response.data instead of response.json() with fetch
      })
  
      .then(function (quote) {
  
        const quoteHtml = `
    
            <h2>" ${quote[0].quote} "</h2>
            <h3> ${quote[0].character} </h3>
            <img src="${quote[0].image}" />
            `;
  
            document.querySelector('#simpsonQuote').innerHTML = quoteHtml;
          });
      }
  
  simpsonQuote();
  
  
  document.getElementById('button').addEventListener('click', function (e) {
      e.preventDefault();
      simpsonQuote();
    });
  
  