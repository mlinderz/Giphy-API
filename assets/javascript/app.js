var animals = ["cats", "dogs", "squirrels", "ducks", "otters", "bears"]

for (var i = 0; i < animals.length; i++){
    var button = $("<button>")
    button.addClass("animalButton")
    button.attr("data-animal", animals[i])

    button.text(animals[i])
    $("#animalButtons").append(button)
}


$(document).on("click", ".animalButton", function(){
    console.log("you clicked")
    var buttonPushed = $(this).attr("data-animal")
    console.log(buttonPushed)
    var apiKey = "3p8uLXOLOA68T24g3o85ZPR5cxOabAGy"
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+buttonPushed+"&api_key="+apiKey	

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response){
        console.log(response)
    var gifs = response.data
    for (var g = 0; g<gifs.length; g++){
        var img = $("<img>")
        img.attr("src", gifs[g].images.original.url)
        $("#animalGifs").append(img)
    }
    })
})

