function editarDica(event) {
  const id = event.target.dataset.id;
  let listaDicas = JSON.parse(localStorage.getItem("dicas")) || [];
  listaDicas.forEach((dica) => {
    if (dica.id === id) {
      console.log(dica);
      const myModal = document.getElementById("myModal");
      myModal.style.display = "block";
      myModal.addEventListener("shown.bs.modal", () => {
        myInput.focus();
      });

      return;
    }
  });
}