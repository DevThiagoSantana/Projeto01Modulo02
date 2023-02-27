export function AcessLink(dicaLink){
  var b = confirm('Tem certeza que quer sair?');
  if (b){    
    window.open(dicaLink,'_blank');
  }

}