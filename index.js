function poemGenerator(event){
          event.preventDefault();
          
          new Typewriter('#poem', {
  strings:"esta agua que fluye de la noche",
  autoStart: true,
  delay: 1,
  cursor: '',
});
      }
      
      let poemElement = document.querySelector("#form");
      poemElement.addEventListener("submit", poemGenerator);
