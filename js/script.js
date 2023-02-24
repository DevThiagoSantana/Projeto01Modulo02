const botaoSalvar = document.querySelector('button[id="save"]');
  botaoSalvar.addEventListener('click', salvarDica);

const botaoLimpar=  document.querySelector('button[id="clear"]');
  botaoLimpar.addEventListener('click',limpaForm);

const botaoProcurar = document.querySelector('button[id="search"]');
  botaoProcurar.addEventListener('click',procurarConteudo);

const divCardsDicas = document.querySelector("#cards-dicas");

let oldCard =[];
  
function salvarDica(event) {
    event.preventDefault();
  
    const title = document.querySelector('#title');
    const language = document.querySelector('#language');
    const category = document.querySelector('#category');
    const description = document.querySelector('#description');
    const youtube = document.querySelector('#youtube');
    const data = new Date();     

    if (title.value.length < 5 || title.value.length > 50) {
     alert("O titulo deve ter 5 a 50 caracteres!", "danger", "alert-title")
		return;
	}
	if (language.value.length < 2 || language.value.length > 20) {
    alert("A linguagem/skill deve ter entre 2 e 20 caracteres!","danger","alert-language");
    return;
}
if (category.value === '') {

    alert("Você deve selecionar uma categoria!","danger","alert-category");
    return;
}
if (description.value.length < 10 || description.value.length > 600) {
    alert("A descrição deve ter entre 10 e 600 caracteres!","danger","alert-description");
    return;
}

  
    const dica = {
        id: data,
        title: title.value,
        language: language.value,
        category: category.value,
        description: description.value,
        youtube: youtube.value
    };
   
  
    let listaDicas = JSON.parse(localStorage.getItem('dicas')) || [];
    listaDicas.push(dica);
    localStorage.setItem('dicas', JSON.stringify(listaDicas));
    alert("Dica salva com Sucesso","success","alert-save");
    document.querySelector('form').reset();
    setTimeout(() => {
      window.location.reload();
    },3000);
    
  };

  function limpaForm(event){
    document.querySelector('form').reset();
};
  
async function carregarDicas(listaDicas) {
    totalCount(listaDicas); 
    // Conta a quantidade de dicas em cada categoria
    contCategory(listaDicas,"FrontEnd","item-FrontEnd");
    contCategory(listaDicas,"BackEnd","item-BackEnd");
    contCategory(listaDicas,"FullStack","item-FullStack");
    contCategory(listaDicas,"SoftSkill","item-SoftSkill");

    // Cria as divs com as informações das dicas
  const row = document.createElement("div");
  row.classList.add("row", "justify-content");

  listaDicas.forEach((dica) => {    
    let card = document.createElement("div");
    let linkDiv = document.createElement('div');
    card.classList.add("card", "col-md-5", "m-5","bg-secondary");
    card.innerHTML = `      
        <i class="bi bi-journal-bookmark-fill" style="display: flexbox; font-size: xx-large;"> ${dica.title}</i>
        <p class="card-language">Linguagem: ${dica.language}</p>
        <p class="card-language">Categoria: ${dica.category}</p>
        <p class="card-text">Descrição: ${dica.description}</p>      
        <button class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#myModal" data-id="${dica.id}" onclick="editarDica(event)">Editar</button>
        <button class="btn btn-dark" data-id="${dica.id}" onclick="deleteDica(event)">Deletar</button>      
    `;
    if(dica.youtube.length >0){
      linkDiv.innerHTML =
      `<a class="btn btn-dark card-link" target="_blank" href="${dica.youtube}">Link</a>`;
      card.appendChild(linkDiv)
    }

    row.appendChild(card);
  });
  return row;
};

async function carregarListaDicas() {
  return new Promise((resolve, reject) => {
    const listaDicas = JSON.parse(localStorage.getItem("dicas")) || [];

    setTimeout(() => {
      resolve(listaDicas);
    }, 1000);
  });
}

(async () => {
  const listaDicas = await carregarListaDicas();
  const dicas = await carregarDicas(listaDicas);
  if (dicas) {
    popularCard(dicas);
  }
})();

async function procurarConteudo(event) {
  const search = document.querySelector('#inputSearch');
  let lista = JSON.parse(localStorage.getItem('dicas')) || [];  
  let items = lista.filter(item => item.title.toLowerCase().includes(search.value.toLowerCase()));
  if (items.length > 0) {
    const dicas = await carregarDicas(items);
    popularCard(dicas);
  } else {
    const divCardsDicas = document.querySelector("#cards-dicas");
    divCardsDicas.innerHTML = '<p class="btn btn-light">Nenhum resultado encontrado.</p>';
  }
};
  
const popularCard = (itens) => {
  if (oldCard.length > 0) {
    divCardsDicas.replaceChild(itens, oldCard);
  } else {
    divCardsDicas.appendChild(itens);
  }
  oldCard = itens;
};

function editarDica(event){
  const id = event.target.dataset.id  
  let listaDicas = JSON.parse(localStorage.getItem('dicas')) || [];
  listaDicas.forEach((dica) =>{
    if(dica.id===id){
      console.log(dica);
      const myModal = document.getElementById('myModal')
      // const myInput = document.getElementById('myInput')      
        myModal.style.display = 'block';
        myModal.addEventListener('shown.bs.modal', () => {
        myInput.focus()
        })

      return
    }
  })
};

function deleteDica(event){
  if (window.confirm("Tem certeza que quer deletar essa dica???")) {
  const id = event.target.dataset.id  
  let listaDicas = JSON.parse(localStorage.getItem('dicas')) || [];
  listaDicas.forEach((dica,index) =>{
    if(dica.id===id){
        const x = listaDicas.splice(index,1);
        localStorage.setItem('dicas', JSON.stringify(listaDicas));
      console.log(x);       
    ;
      return
    }
  })
  window.location.reload();
}};

const alert = (message, type,id) => {
  let divAlert = document.getElementById(id);
  divAlert.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')
  setTimeout(() => {
    let alertEl = divAlert.querySelector('.alert');
    divAlert.removeChild(alertEl);
  }, 2000);
  
};

const totalCount = (listaDicas) =>{
  let count = listaDicas.length; 
  let itemCountElement = document.getElementById("item-total-count");
  itemCountElement.textContent = count;
  return count;  
};
const contCategory =(lista, categoryType,id)=>{
  let listCategory  = lista.filter(lista =>lista.category === categoryType);
  let count = listCategory.length; 
  let itemCountElement = document.getElementById(id);
  itemCountElement.textContent = count;
  return count;  
};


