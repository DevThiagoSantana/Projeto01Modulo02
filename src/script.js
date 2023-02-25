import { renderTipsAndCountTips } from './renderCardTips.js';
import { salvarDica,limpaForm } from './tipsForm.js';
import { loadTips } from './database.js';
import { botaoSalvar,botaoLimpar,search } from './selectors.js';
import { searchInkeyUp } from './filter.js';
import { removeDica } from './remove.js';


botaoSalvar.addEventListener("click", salvarDica);
botaoLimpar.addEventListener("click", limpaForm);

search.addEventListener('keyup', _.debounce(searchInkeyUp, 400));

document.body.addEventListener('click', function (event) {
	event.preventDefault();

	const dicaRemoveId = event.target.getAttribute('data-remove-id');
  const dicaEditId = event.target.getAttribute('data-edit-id');
  
	if (dicaRemoveId) {
		removeDica(dicaRemoveId);
	}
  if(dicaEditId){
    
  }


});



const itens = loadTips();
renderTipsAndCountTips(itens);









