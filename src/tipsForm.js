import { loadTips } from "./database.js";
import { renderTipsAndCountTips } from "./renderCardTips.js";
import { title,language,category,description,youtube,data } from "./selectors.js";
import { alert } from "./util.js";

export function salvarDica() {
  if (title.value.length < 5 || title.value.length > 50) {
    alert(
          "O titulo deve ter 5 a 50 caracteres!", 
          "danger", 
          "alert-title"
    );
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
    alert(
          "Você deve selecionar uma categoria!", 
          "danger", 
          "alert-category"
    );
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

  
    if(dica){
    let listaDicas = loadTips();
    listaDicas.push(dica);
    localStorage.setItem("dicas", JSON.stringify(listaDicas));
    alert("Dica salva com Sucesso", "success", "alert-global");
    document.querySelector("form").reset();
    }
    const itens = loadTips();
    renderTipsAndCountTips(itens);
}
export function salvarDicaEditada(event) {
  if (titleModal.value.length < 5 || titleModal.value.length > 50) {
    alert(
          "O titulo deve ter 5 a 50 caracteres!", 
          "danger", 
          "alert-title"
    );
    return;
  }
  if (languageModal.value.length < 2 || languageModal.value.length > 20) {
    alert(
          "A linguagem/skill deve ter entre 2 e 20 caracteres!",
          "danger",
          "alert-language"
    );
    return;
  }
  if (categoryModal.value === "") {
    alert(
          "Você deve selecionar uma categoria!", 
          "danger", 
          "alert-category"
    );
    return;
  }
  if (descriptionModal.value.length < 10 || descriptionModal.value.length > 600) {
    alert(
          "A descrição deve ter entre 10 e 600 caracteres!",
          "danger",
          "alert-description"
    );
    return;
  }

  const dicaEditada = {
        id: dicaIdEdit.value,
        title: titleModal.value,
        language: languageModal.value,
        category: categoryModal.value,
        description: descriptionModal.value,
        youtube: youtubeModal.value,
  };

  if (window.confirm("Tem certeza que quer Alterar essa dica???")) {
      let listaDicas = loadTips();
      listaDicas.forEach((dicaAtual, index) => {      
      if (dicaAtual.id===dicaIdEdit.value ) {
        const x = listaDicas.splice(index, 1 ,dicaEditada);
        localStorage.setItem("dicas", JSON.stringify(listaDicas));
        alert("Dica Alterada com Sucesso", "success","alert-global")
        console.log("editado");
        console.log(dicaEditada);
      }
    });
    renderTipsAndCountTips(listaDicas);
  }
};

export function limpaForm(event) {
  document.querySelector("form").reset();
}
