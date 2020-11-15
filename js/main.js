
//using ready()
$(document).ready(function () {
  console.log("ready!");
  
  //click on search icon
  $('.fa-search').on('click', () => {
   
    //using empty() to clear the previous search results and to display only the results for the current search (instead of updating the for loop I used empty())
  $('#search-results').empty();
    
    //userInput to take whatever value the user enter in the search bar field
    let userInput = $('#search-field').val();
    console.log(userInput);
    
    //URL specifying api_key,limit=30,rating=g and userInput
    let url="https://api.giphy.com/v1/gifs/search?api_key=2T1BqAMfHkOdSwlIDsUmWOmnnuAZcNj8&limit=30&rating=g&q=" + userInput;
    
    //JQuery $.get
    $.get(url, function (giphyResponse) {
      console.log(giphyResponse);
      console.log('giphyData', giphyResponse.data)
      console.log('giphyData result 0 (1st result)', giphyResponse.data[0]);
      console.log('giphyData result 0 (1st result) - all images list', giphyResponse.data[0].images);
      console.log('giphyData result 0 (1st result) - all images list - original image', giphyResponse.data[0].images.original);
      console.log('giphyData result 0 (1st result) - all images list - original image - url', giphyResponse.data[0].images.original.url);
      
      //Displaying GIFs
      for (let image of giphyResponse.data) {
        let imgHtml = `<img src=${image.images.original.url} />`
        $('#search-results').append(imgHtml);
      }
     
      //fail function to alert an error message whenever the get request fails.Tested it by creating a typo in base url (instead of https://api provide https://pi)
        }).fail(function () {
      alert('Error:Sorry,get request failed');
    
    });
  })
})




