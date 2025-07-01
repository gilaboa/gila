const chatBox = document.getElementById('chatBox');

function askQuestion(question) {
  appendMessage("Përdoruesi", question);
  
  let answer = getAnswer(question);
  setTimeout(() => appendMessage("Chatbot", answer), 500); // vonesë për efekt real
}

function getAnswer(question) {
  switch(question) {
    case 'Ku mund te blesh akullore?':
      return 'Laguna Shop nga ora 08:00 deri në 16:00, nga e hëna në të premte.';
    case 'Sa kushton 1 top akullore?':
      return '1 top akullore kushton 100 leke.';
    case 'Sa eshte distanca per tek dyqani?':
      return 'Vetem 150 meter';
    default:
      return 'Më falni, nuk e kuptova pyetjen.';
  }
}

function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}
