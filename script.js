fetch('https://type.fit/api/quotes')
.then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    //const quoteElement = document.getElementById('quoteElement');
    //quoteElement.innerHTML=data;

    
    // Select a random quote
    const randomQuote = data[Math.floor(Math.random() * data.length)];

    // Get the quote element
    const quoteElement = document.getElementById('quoteElement');

    // Update the quote element with the selected quote
    quoteElement.innerHTML = `"${randomQuote.text}"`; 
  })
  .catch(function(error) {
    console.error('Error fetching the quotes:', error);
  });


  