//giphy search using $.get

$(document).ready(function () {
  console.log("ready!");
  $('.fa-search').on('click', () => {
    $('#outputarea').empty();
    let userInput = $('#search').val();
    $.get(`https://api.giphy.com/v1/gifs/search?api_key=2T1BqAMfHkOdSwlIDsUmWOmnnuAZcNj8&q=${userInput}&limit=30&rating=g`, function (giphyResponse) {
      console.log(giphyResponse);
      console.log('giphyData', giphyResponse.data)
      console.log('giphyData result 0 (1st result)', giphyResponse.data[0]);
      console.log('giphyData result 0 (1st result) - all images list', giphyResponse.data[0].images);
      console.log('giphyData result 0 (1st result) - all images list - original image', giphyResponse.data[0].images.original);
      console.log('giphyData result 0 (1st result) - all images list - original image - url', giphyResponse.data[0].images.original.url);
      for (let image of giphyResponse.data) {
        let imgHtml = `<img src=${image.images.original.url} />`
        $('#outputarea').append(imgHtml);

      }
    })
  });

})




