


$(document).ready(function () {
  $('button').click(() => {
    //to search without refreshing the page
    $('#outputarea').empty();
    let userInput = $('#search').val();

    $.ajax({
      type: "GET",
      url: `https://api.giphy.com/v1/gifs/search?api_key=2T1BqAMfHkOdSwlIDsUmWOmnnuAZcNj8&q=${userInput}&limit=20`
    })
      .done(function (res) {
        let giphy = res.data;

        $.each(giphy, function (i, e) {
          let gifs = e.images.original.url;
          console.log("index", i, "element", e.images.original.url)
          $('#outputarea').append(`<img src="${gifs}" alt="giphy"/>`)

        })

      });
  });
});