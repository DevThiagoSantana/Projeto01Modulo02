import { renderTipsAndCountTips } from "./renderCardTips";
import { loadTips } from "./database";

export function searchInkeyUp(event) {
	const searched = event.target.value;

  const tipsFound =tipsFilterInSearch(searched);

  tipsFound.length > 0 
  ? renderTipsAndCountTips(tipsFound)
  :(cardsDicas.innerHTML = 'Nenhum produto encontrado');
}

export function tipsFilterInSearch(searched) {
  const itens = loadTips();
	return itens.filter((item) => {
		return  item.title.toLowerCase().includes(searched.toLowerCase());
	});
}