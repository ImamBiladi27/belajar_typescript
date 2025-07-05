document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm") as HTMLFormElement;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement)
      .value;
    console.log(password);
    if (!email || !password) {
      alert("Semua field harus diisi");
      return;
    }
    alert(`Login berhasil sebagai ${email}`);
  });
});
