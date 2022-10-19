/*Functions*/
function sendContactForm() {
    fname = document.getElementById("fullname")
    email = document.getElementById("email")
    subject = document.getElementById("subject")
    message = document.getElementById("message")

    window.alert("Thank you for you message!")
    delete window.alert; // true
    alert('test');

    fname.innerText = ""
    email.innerText = ""
    subject.innerText = ""
    message.innerText = ""
}