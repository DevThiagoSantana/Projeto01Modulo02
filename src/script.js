import { renderTipsAndCountTips } from "./rendenrCardTips.js";
import { salvarDica,limpaForm } from "./tipsForm.js";
import { loadTips } from "./database.js";

botaoSalvar.addEventListener("click", salvarDica);
botaoLimpar.addEventListener("click", limpaForm);

search.addEventListener('keyup', _.debounce(searchInkeyUp, 400));
const itens = loadTips();
renderTipsAndCountTips(itens);








