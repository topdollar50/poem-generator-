function displayPoem (response){
      let poem = document.querySelector("#poem");
      poem.innerHTML = response.data.answer
          new Typewriter('#poem', {
  strings:response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: '',
});
      }
      function poemGenerator(event){
          event.preventDefault();
          let apiKey = `fa0d396f3af7cta73o6fb5a74235503f`
          let poemInput = document.querySelector("#poem-input");
          let prompt = poemInput.value;
      let context = `write a spanish poem of five lines about the  ${prompt}  in HTML format and sign it at the end with <strong style = "color:green">SheCodes AI</strong> without including backtick and html`
      
      let poemElement = document.querySelector("#poem");
      poemElement.style.display = "block";
      poemElement.innerHTML = `Generating your Spanish poem about ${poemInput.value}`
      let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`
      axios.get(apiUrl).then(displayPoem);
      }
      
      let poemElement = document.querySelector("#form");
      poemElement.addEventListener("submit", poemGenerator);
