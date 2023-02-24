import { loadTips } from "./database";

export function removeDica(event) {
  if (window.confirm("Tem certeza que quer deletar essa dica???")) {
    const id = event.target.dataset.id;
    let listaDicas = loadTips();
    listaDicas.forEach((dica, index) => {
      if (dica.id === id) {
        const x = listaDicas.splice(index, 1);
        localStorage.setItem("dicas", JSON.stringify(listaDicas));
        console.log(x);
      }
    });    
  }
};
