var famousPeople = [
{
  title: "Scientist",
  name: "Margaret Hamilton",
  bio: "Margaret is a computer scientist, systems engineer and business owner. She was Director of the Software Engineering Division of the MIT Instrumentation Laboratory, which developed on-board flight software for the Apollo space program.",
  image: "http://i.imgur.com/bxyWmuA.jpg",
  lifespan: {
    birth: 1936,
    death: null
  }
},
{
  title: "Countess of Lovelace",
  name: "Augusta Ada King-Noel",
  bio: "Ada was an English mathematician and writer, chiefly known for her work on Charles Babbage's early mechanical general-purpose computer, the Analytical Engine.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/440px-Ada_Lovelace_portrait.jpg",
  lifespan: {
    birth: 1815,
    death: 1852
  }
},
{
  title: "Mathematician",
  name: "Jean Bartik",
  bio: "Jean Bartik was one of the original programmers for the ENIAC computer. She studied mathematics in school then began work at the University of Pennsylvania, first manually calculating ballistics trajectories, then using ENIAC to do so. She and her colleagues developed and codified many of the fundamentals of programming while working on the ENIAC, since it was the first computer of its kind.",
  image: "https://upload.wikimedia.org/wikipedia/en/1/19/Jean_Bartik.jpg",
  lifespan: {
    birth: 1924,
    death: 2011
  }
},
{
  title: "Computer Scientist and Rear Admiral",
  name: "Grace Hopper",
  bio: "Grace was an American computer scientist and United States Navy Rear Admiral. She was one of the first programmers of the Harvard Mark I computer in 1944, invented the first compiler for a computer programming language, and was one of those who popularized the idea of machine-independent programming languages which led to the development of COBOL, one of the first high-level programming languages.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg/440px-Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg",
  lifespan: {
    birth: 1906,
    death: 1992
  }
}
]

var container = document.getElementById("container");
var person = document.getElementById("person");
var input = document.getElementById("input");
var editedBio;
container.innerHTML = "";
input.addEventListener('keyup', inputKeyUp)

var counter = 0;
var outputEl = document.getElementById("container");
for (; counter < famousPeople.length; counter++) {
  var x = "<div>" + famousPeople[counter].title +"</div>";
  x += "<div>" + famousPeople[counter].name + "</div>";
  x += "<div class='bio' id='person_" + counter +"'>" + famousPeople[counter].bio + "</div>";
  x += "<img>" + famousPeople[counter].image + "</img>";
  x += "<div>" + "Birth: " + famousPeople[counter].lifespan.birth + "</div>";
  x += "<div>" + "Death: " + famousPeople[counter].lifespan.death + "</div>";
  // Give each person element a unique identifier
  outputEl.innerHTML += `<person class="person__container" id="person--${counter}">${x}</person>`;
}

var containerEl = document.getElementsByClassName("person__container");

for (var i = 0; i < containerEl.length; i++) {
  containerEl[i].addEventListener("click", function (event) {
    event.currentTarget.classList.toggle("border");
    input.focus();
    input.value = event.currentTarget.getElementsByClassName('bio')[0].innerHTML;
    editedBio = event.currentTarget.getElementsByClassName('bio')[0].id
  });
};

input.addEventListener('keyup', inputFunction)

function inputFunction() {
  document.getElementById(editedBio).innerHTML = input.value;
}

function inputKeyUp(e) {
    e.which = e.which || e.keyCode;
    if(e.which == 13) {
        input.value = "";
    }
}