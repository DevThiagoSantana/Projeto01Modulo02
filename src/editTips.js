import { loadTips } from "./database.js";

export function editarDica(dica) {
  let listaDicas = loadTips()
  listaDicas.forEach((dicaAtual) => {
    if ( dicaAtual.id=== dica) {     
      const myModal = document.getElementById("myModal");
      myModal.style.display = "block";      
      document.getElementById("titleModal").value = dicaAtual.title;
      document.getElementById("languageModal").value = dicaAtual.language;
      document.getElementById("categoryModal").value = dicaAtual.category;
      document.getElementById("descriptionModal").value = dicaAtual.description;
      document.getElementById("youtubeModal").value = dicaAtual.youtube;
      document.getElementById("dicaIdEdit").value = dica;
      return;
    }
  });
}