export function AcessLink(dicaLink){
  console.log("to no link")
  var b = confirm('Tem certeza que quer sair?');
  if (b){    
    window.open(dicaLink,'_blank');
  }

}