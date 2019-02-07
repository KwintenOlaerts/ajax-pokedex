$.get("https://pokeapi.co/api/v2/pokemon/ditto/",function(data){
    $("#pokedex").text(data.name+" "+data.weight)
    $("#photo").attr("src", data.sprites.front_default)
    $("#moves").append(data.moves)

    console.log(data)
    console.log(data.sprites.front_default)
});



console.log("test");


