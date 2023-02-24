
export const alert = (message, type, id) => {
  let divAlert = document.getElementById(id);
  divAlert.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");
  setTimeout(() => {
    let alertEl = divAlert.querySelector(".alert");
    divAlert.removeChild(alertEl);
  }, 2000);
};
