const BASE_URL = "http://localhost:8090";

interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
}

(window as any).createUser = async () => {
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const password = (document.getElementById("password") as HTMLInputElement)
    .value;

  const response = await fetch(`${BASE_URL}/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  if (response.ok) {
    alert("User berhasil ditambahkan!");
  } else {
    alert("Gagal menambahkan user");
  }
};

(window as any).getUser = async () => {
  const id = (document.getElementById("userId") as HTMLInputElement).value;
  const userResult = document.getElementById("userResult")!;

  const response = await fetch(`${BASE_URL}/user/${id}`);
  if (!response.ok) {
    userResult.innerHTML = "User tidak ditemukan.";
    return;
  }
  // const name = (document.getElementById("name") as HTMLInputElement).value;
  // console.log("Name:", name);
  const user: User = await response.json();
  userResult.innerHTML = `
    <strong>ID:</strong> ${user.id} <br>
    <strong>Nama:</strong> ${user.name} <br>
    <strong>Email:</strong> ${user.email} <br>
    <strong>Password Hash:</strong> ${
      user.password ? user.password : "Tidak tersedia"
    }
  `;
};
