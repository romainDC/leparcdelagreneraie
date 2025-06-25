let cdb = document.getElementById("contactDetailButton");
let contact = document.getElementById("contact");
let mail = document.getElementById("mail2");

cdb.onclick = () => {
    if (mail.innerHTML === "")
        contact.style.display = "initial";
};