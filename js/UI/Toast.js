export default function TOAST(type, msg) {
  const iconName = type == "warraing" ? "warning" : `${type}-circle`;

  const markup = `<div class="toast__alert">
    <span>
    <ion-icon class="icon" name="${iconName}-outline"></ion-icon>
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
