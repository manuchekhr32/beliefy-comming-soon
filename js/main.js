const form = document.getElementById("form");
form.addEventListener("submit", e => {
  e.preventDefault();
  const inputs = document.querySelectorAll(".form-control")
  const message = `📬 Message from beliefy.agency %0A%0A Subject: ${inputs[0].value}%0A Email: ${inputs[1].value}%0A Text: ${inputs[2].value.replaceAll('\n', ' ')}`;
  console.log(message);
  fetch(`https://api.telegram.org/bot5015409653:AAHaz9WWoLz792LA5IpxyE41guGmSzvXR0I/sendMessage?chat_id=-1001301960296&text=${message}`)
  .then(res => {
    if (res.ok) {
      alert("Success! Thank you for your message. We will contact you.")
      inputs.forEach(el => el.value = '')
    } else {
      alert('Error!')
    }
  }, err => {
    alert('Error!')
  })
})