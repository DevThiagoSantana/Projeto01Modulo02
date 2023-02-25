import { loadTips } from "./database";

export function editarDica(dica) {

  let listaDicas = loadTips
  console.log("ok entrei")
  listaDicas.forEach((dicaAtual) => {
    if ( dicaAtual.id=== dica) {     
      const myModal = document.getElementById("myModal");
      myModal.style.display = "block";      
      document.getElementById("title-modal").value = dica.title;
      

      return;
    }
  });
}