import { loadTips } from "./database";
import { title,language,category,description,youtube,data } from "./selectors";
import { alert } from "./util";

export function salvarDica(event) {
    dicas = validateTips();
    if(dicas){
    let listaDicas = loadTips();
    listaDicas.push(dicas);
    localStorage.setItem("dicas", JSON.stringify(listaDicas));
    alert("Dica salva com Sucesso", "success", "alert-save");
    document.querySelector("form").reset();
    }
    
}
export function limpaForm(event) {
  document.querySelector("form").reset();
}
export function validateTips(){

  if (title.value.length < 5 || title.value.length > 50) {
    alert("O titulo deve ter 5 a 50 caracteres!", "danger", "alert-title");
    return;
  }
  if (language.value.length < 2 || language.value.length > 20) {
    alert(
      "A linguagem/skill deve ter entre 2 e 20 caracteres!",
      "danger",
      "alert-language"
    );
    return;
  }
  if (category.value === "") {
    alert("Você deve selecionar uma categoria!", "danger", "alert-category");
    return;
  }
  if (description.value.length < 10 || description.value.length > 600) {
    alert(
      "A descrição deve ter entre 10 e 600 caracteres!",
      "danger",
      "alert-description"
    );
    return;
  }

  const dica = {
    id: data,
    title: title.value,
    language: language.value,
    category: category.value,
    description: description.value,
    youtube: youtube.value,
  };

  return dica;
}
