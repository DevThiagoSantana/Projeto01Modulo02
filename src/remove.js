import { loadTips } from './database.js';
import { renderTipsAndCountTips } from './renderCardTips.js';

export function removeDica(dicaID) {
  if (window.confirm("Tem certeza que quer deletar essa dica???")) {    
    let listaDicas = loadTips();
    listaDicas.forEach((dicaAtual, index) => {
      console.log(dicaAtual);
      console.log(dicaID);
      if (dicaAtual.id===dicaID ) {
        const x = listaDicas.splice(index, 1);
        localStorage.setItem("dicas", JSON.stringify(listaDicas));
        console.log("foi deletada essa");
      }
    });
    renderTipsAndCountTips(listaDicas);
  }  
};
