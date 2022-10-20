/*Functions*/
function sendContactForm() {
    let fname = document.getElementById("fullname");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");

    window.alert("Thank you for you message!");

    fname.innerText = "";
    email.innerText = "";
    subject.innerText = "";
    message.innerText = "";
}

function showOrHideElement(item_id) {
    let x = document.getElementById(item_id);
    
    if (x.style.display == "none") {
      x.style.display = "block";
    } 
    else {
      x.style.display = "none";
    }
}