function displayPoem(response){
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });

}

function generatePoem(event){
    event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "1ebbc025fb0d89f5cft4a842733a0o03";
  let context = "You are a romantic expert and you love to right short poems. Your mission is to generate a 4 line poem  and seperate each line with a <br />. Make sure to follow the user instructions below: Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning on a new line.";
  let prompt = `User instructions: Generate a french poem about ${instructionsInput.value}`;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a French poem about ${instructionsInput.value}</div>`;
  

  axios.get(apiURL).then(displayPoem) ;

    
    }


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener('submit',generatePoem);