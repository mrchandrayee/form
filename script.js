const container = document.getElementById("container");
const btn = document.getElementById("toggleBtn");
const title = document.getElementById("panelTitle");
const text = document.getElementById("panelText");

btn.addEventListener("click", () => {
  const isRegister = container.classList.toggle("active");

  if (isRegister) {
    title.textContent = "Already have an account ?";
    text.textContent = "Login to continue";
    btn.textContent = "Login";
  } else {
    title.textContent = "New here ?";
    text.textContent = "Create an account to get started";
    btn.textContent = "Register";
  }
});