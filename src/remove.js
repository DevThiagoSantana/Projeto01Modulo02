import { loadTips } from './database.js';
import { renderTipsAndCountTips } from './renderCardTips.js';
import { alert } from './util.js';

export function removeDica(dicaID) {
  if (window.confirm("Tem certeza que quer deletar essa dica???")) {    
    let listaDicas = loadTips();
    listaDicas.forEach((dicaAtual, index) => {      
      if (dicaAtual.id===dicaID ) {
        const x = listaDicas.splice(index, 1);
        localStorage.setItem("dicas", JSON.stringify(listaDicas));
        alert("Dica Deletada", "success","alert-global")
      }
    });
    renderTipsAndCountTips(listaDicas);
  }  
};
