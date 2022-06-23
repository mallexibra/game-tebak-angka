const inputUser = document.getElementById("inputUser");
const button = document.getElementById("kirim");
const hasil = document.querySelector(".hasil h1");
const tHMenang = "Kamu Menang :)";
const tHKalah = "Kamu Kalah :(";
const jwbKomputer = document.getElementsByClassName("jwbkomputer")[0];
const jwbUser = document.getElementsByClassName("jwbuser")[0];
const form = document.getElementsByTagName("form")[0];
// const jwbKomputer = "<p>Jawaban Komputer adalah </p>";
// const jwbUser = "<p>Sedangkan</p> <p>Jawaban Kamu adalah 68</p>";



button.addEventListener("click", function(e){
    const comp = Math.floor(Math.random() * 10 + 1);
    const user = inputUser.value;
        if(user == ""){
            alert("Diisi dulu broo");
        }else if(user > 10){
            alert("Pilih angka mulai dari 1-10 bro jangan lebih hehe");
        }else if(user < 1){
            alert("Pilih angka mulai dari 1-10 bro jangan kurang hehe");
        }else{
                if(comp == user){
                    hasil.innerText = "Kamu Benar!";
                    jwbKomputer.innerHTML = `<p>Jawaban Komputer adalah ${comp} </p>`;
                    jwbUser.innerHTML = `<p>Sedangkan</p> <p>Jawaban Kamu adalah ${user}</p>`;
                    hasil.style.color = "black";
                }else{
                    hasil.innerText = "Kamu Salah!";
                    jwbKomputer.innerHTML = `<p>Jawaban Komputer adalah ${comp} </p>`;
                    jwbUser.innerHTML = `<p>Sedangkan</p> <p>Jawaban Kamu adalah ${user}</p>`;
                    hasil.style.color = "red";
            }
        }
    inputUser.value = "";
e.preventDefault();
});