export default function TOAST(type, msg) {
  const markup = `<div class="toast__alert">
    <span>
    <ion-icon class="icon" name="${type}-circle-outline"></ion-icon>
    </span>
    <span>${msg}</span>
    </div>`;

  document.body.insertAdjacentHTML("afterbegin", markup);

  setTimeout(() => {
    return document.querySelector(".toast__alert").classList.add("active");
  }, 100);

  setTimeout(
    () => document.querySelector(".toast__alert").classList.remove("active"),
    5000
  );
}

// information
// alert
// warnin-outline
