import { renderTipsAndCountTips } from "./renderCardTips.js";
import { loadTips } from "./database.js";

export function searchInkeyUp(event) {
  event.preventDefault();

	const searched = event.target.value;
  const tipsFound =tipsFilterInSearch(searched);

  tipsFound.length > 0 
  ? renderTipsAndCountTips(tipsFound)
  :cardsDicas.innerHTML = 'Nenhum produto encontrado';
}

export function tipsFilterInSearch(searched) {
  const itens = loadTips();
	return itens.filter((item) => {
		return  item.title.toLowerCase().includes(searched.toLowerCase());
	});
}