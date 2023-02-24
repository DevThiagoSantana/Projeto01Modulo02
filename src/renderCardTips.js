import { countTips} from "./countTips";
import { cardsDicas } from "./selectors";

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
            let linkDiv = document.createElement("a");
            let youtubeIMG = document.createElement("img");
            youtubeIMG.setAttribute("src", "./img/youtube.svg");
            linkDiv.classList.add("btn", "btn-outline-dark", "card-link");
          
            card = ` <div class =" card col-md-5 m-5 bg-success">       
                      <i class="bi bi-journal-bookmark-fill" style="display: flexbox; font-size: xx-large;"> ${dica.title}</i>
                      <p class="card-language">Linguagem: ${dica.language}</p>
                      <p class="card-language">Categoria: ${dica.category}</p>
                      <p class="card-text">Descrição: ${dica.description}</p>      
                      <a class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#myModal" data-id="${dica.id}" onclick="editarDica(event)">Editar</a>
                      <a class="btn btn-outline-dark" data-id="${dica.id}" onclick="removeDica(event)">Deletar</a>     
             
             `;
            if (dica.youtube.length > 0) {
              linkDiv.setAttribute("href", dica.youtube);
              linkDiv.setAttribute("target", "_blank");
              linkDiv.appendChild(youtubeIMG);            
              card.appendChild(linkDiv);
            }            
        });}
        cardsDicas.innerHTML = card;      
}


 