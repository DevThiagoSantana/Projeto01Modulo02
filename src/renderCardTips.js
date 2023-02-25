import { countTips} from './countTips.js';
import { cardsDicas } from './selectors.js';


export function renderTipsAndCountTips(dicas){
  // Conta a quantidade de dicas em cada categoria
  countTips(dicas)
  renderTips(dicas);

}

export function renderTips(dicas) {
  let cards = '';

   // Cria as divs com as informações da dicas   
   if(dicas.length<=0){
      cards +='<div id="no-tips"> Nenhuma dica disponivel!!</div>';
   }else{
          dicas.forEach((dica) => {            
            let card ='';
            card = ` <div class =" card col-md-4 m-4">       
                      <i class="bi bi-journal-bookmark-fill" style="display: flexbox; font-size: xx-large;"> ${dica.title}</i>
                      <p class="card-language">Linguagem: ${dica.language}</p>
                      <p class="card-language">Categoria: ${dica.category}</p>
                      <p class="card-text">Descrição: ${dica.description}</p>      
                      <a class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#myModal" data-edit-id="${dica.id}">Editar</a>
                      <a class="btn btn-outline-dark" data-remove-id="${dica.id}">Deletar</a>
                    `;
            
            if (dica.youtube.length > 0) {
              card+=`<a class="btn btn-outline-dark card-link" href="${dica.youtube}" target="_blank">
                      <img src="./img/youtube.svg">
                      </a>
                      `;
              } 
            card+= `</div>`;
            cards+=card;

        });}
        cardsDicas.innerHTML = cards;      
}

 