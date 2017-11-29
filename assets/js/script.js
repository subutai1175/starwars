$(document).ready(function () {
$('body').css({'background-image': 'url(' + "/assets/img/star-wars-wallpapers.jpg" + ')'});
});


var vue
var ranChar = "";
var homeworld = "";
var species = "";

axios.get("https://swapi.co/api/films/7/") // Call the fetch function passing the url of the API as a parameter
.then(response => {
  let characters = response.data.characters
  function ranIndex (min, max) {
    var num = Math.floor(Math.random() * (max - min))
    // exclude index position 5
    if (num === 5) num++
    return num
  }
  ranChar = characters[ranIndex(0, characters.length)]
  // characters[Math.floor(Math.random() * characters.length)];
axios.get(ranChar)
.then(response => {
  let charInfo = response.data
  console.log(charInfo)
  homeworld = charInfo.homeworld
  species = charInfo.species
  filmOne = charInfo.films[0]
  vehicle = charInfo.vehicles[0]
  starship = charInfo.starships[0]
  axios.get(homeworld)
  .then(response => {
    vue.homeworld = response.data
  })
  axios.get(species)
  .then(response => {
    vue.species = response.data
  })
  axios.get(filmOne)
  .then(response => {
    vue.filmOne = response.data
  })
  axios.get(vehicle)
  .then(response => {
    vue.vehicle = response.data
  })
  axios.get(starship)
  .then(response => {
    vue.starship = response.data
  })
  vue = new Vue ({

      el: ".container",
      data: {
        random: ranChar,
        charInfo: charInfo,
        homeworld: "",
        species: "",
        filmOne: "",
        vehicle: "",
        starship: "",
        header1: "Star",
        header2: "Wars",
        message: "The Force Awakens",
        imageLink: [
          {
            text: "https://swapi.co/api/people/1/",
            image: "./assets/img/New/Individual-11.png"
          },
          {
            text: "https://swapi.co/api/people/3/",
            image: "./assets/img/New/Individual-10.png"
          },
          {
            text: "https://swapi.co/api/people/5/",
            image: "./assets/img/New/Individual-07.png"
          },
          {
            text: "https://swapi.co/api/people/13/",
            image: "./assets/img/New/Individual-06.png"
          },
          {
            text: "https://swapi.co/api/people/14/",
            image: "./assets/img/New/Individual-09.png"
          },
          {
            text: "https://swapi.co/api/people/84/",
            image: "./assets/img/New/Individual-01.png"
          },
          {
            text: "https://swapi.co/api/people/85/",
            image: "./assets/img/New/Individual-05.png"
          },
          {
            text: "https://swapi.co/api/people/86/",
            image: "./assets/img/New/Individual-04.png"
          },
          {
            text: "https://swapi.co/api/people/87/",
            image: "./assets/img/New/Individual-02.png"
          },
          {
            text: "https://swapi.co/api/people/88/",
            image: "./assets/img/New/Individual-15.png"
          }
      ]
      }
  })
})
.catch(function(err) {
    console.log(err)// This is where you run code if the server returns any errors
});

































})
