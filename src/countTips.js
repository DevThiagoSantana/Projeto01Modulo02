export function countTips(dicas){
  totalCount(dicas);  
  contCategory(dicas, "FrontEnd", "item-FrontEnd");
  contCategory(dicas, "BackEnd", "item-BackEnd");
  contCategory(dicas, "FullStack", "item-FullStack");
  contCategory(dicas, "SoftSkill", "item-SoftSkill");
}
export function totalCount(listaDicas){
  let count = listaDicas.length;
  let itemCountElement = document.getElementById("item-total-count");
  itemCountElement.textContent = count;
};
export function contCategory(lista, categoryType, id) {
  let listCategory = lista.filter((lista) => lista.category === categoryType);
  let count = listCategory.length;
  let itemCountElement = document.getElementById(id);
  itemCountElement.textContent = count;
};
