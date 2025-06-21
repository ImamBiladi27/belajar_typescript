var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const BASE_URL = "http://localhost:8090";
window.createUser = () => __awaiter(this, void 0, void 0, function* () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const response = yield fetch(`${BASE_URL}/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
    });
    if (response.ok) {
        alert("User berhasil ditambahkan!");
    }
    else {
        alert("Gagal menambahkan user");
    }
});
window.getUser = () => __awaiter(this, void 0, void 0, function* () {
    const id = document.getElementById("userId").value;
    const userResult = document.getElementById("userResult");
    const response = yield fetch(`${BASE_URL}/user/${id}`);
    if (!response.ok) {
        userResult.innerHTML = "User tidak ditemukan.";
        return;
    }
    const user = yield response.json();
    userResult.innerHTML = `
    <strong>ID:</strong> ${user.id} <br>
    <strong>Nama:</strong> ${user.name} <br>
    <strong>Email:</strong> ${user.email}
  `;
});
