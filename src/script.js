import { renderTipsAndCountTips } from './renderCardTips.js';
import { salvarDica,limpaForm, salvarDicaEditada } from './tipsForm.js';
import { loadTips } from './database.js';
import { botaoSalvar,botaoLimpar,search } from './selectors.js';
import { searchInkeyUp } from './filter.js';
import { removeDica } from './remove.js';
import { editarDica } from './editTips.js';
import { AcessLink } from './link.js';
import { botaoSalvarEdit } from './selectors.js';


botaoSalvar.addEventListener("click", salvarDica);
botaoLimpar.addEventListener("click", limpaForm);
botaoSalvarEdit.addEventListener("click",salvarDicaEditada)

search.addEventListener('keyup', _.debounce(searchInkeyUp, 400));

document.body.addEventListener('click', function (event) {
	event.preventDefault();

	const dicaRemoveId = event.target.getAttribute('data-remove-id');
  const dicaEditId = event.target.getAttribute('data-edit-id');
	const dicaLink = event.target.getAttribute('card-link')
  
	if (dicaRemoveId) {
		removeDica(dicaRemoveId);
	}
  if(dicaEditId){
    editarDica(dicaEditId)
  }
	if(dicaLink){
		AcessLink(dicaLink)
	}


});



const itens = loadTips();
renderTipsAndCountTips(itens);









