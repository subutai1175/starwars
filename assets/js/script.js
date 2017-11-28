var ranChar = "";

axios.get("https://swapi.co/api/films/7/") // Call the fetch function passing the url of the API as a parameter
.then(response => {
  let characters = response.data.characters
  ranChar = characters[Math.floor(Math.random() * characters.length)]

axios.get(ranChar)
.then(response => {
    console.log("response2", response)
  let charInfo = response.data
  console.log("charInfo", charInfo)
  .then(function(response) {
    console.log("response3", response)
    new Vue ({

      el: ".container",
      data: {
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
})
.catch(function(err) {
    console.log(err)// This is where you run code if the server returns any errors
});

































})
