import { renderTipsAndCountTips } from "./renderCardTips.js";
import { loadTips } from "./database.js";
import { cardsDicas } from "./selectors.js";

export function searchInkeyUp(event) {
  event.preventDefault();

	const searched = event.target.value;
  const tipsFound =tipsFilterInSearch(searched);
  console.log(tipsFound.length);

  tipsFound.length > 0 
  ? renderTipsAndCountTips(tipsFound)
  :cardsDicas.innerHTML = '<div id="no-tips"> Nenhuma dica Encontrada</div>';
}


export function tipsFilterInSearch(searched) {
  const itens = loadTips();
	return itens.filter((item) => {
		return  item.title.toLowerCase().includes(searched.toLowerCase());
	});
}