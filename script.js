const newMessage = ` 
  <div class="row new-row">
    <img class="avatar" src="images/avatar-1.jpg" />
    <div class="text-container">
      <h6>John Doe</h6>
      <p>New message</p>
    </div>
    <span class="delete">✖</span>
  </div>
`;

document.querySelector('#msg-container').innerHTML += newMessage;

const messagesCount = document.querySelectorAll('p').length;
document.querySelector('#count').textContent = messagesCount;

let year = new Date().getUTCFullYear();
let month;
let day;

if (new Date().getMonth() < 9) {
  month = "0" + (new Date().getMonth() + 1);
} else {
  month = new Date().getMonth() + 1;
}

if (new Date().getDate() < 9) {
  day = "0" + new Date().getDate();
} else {
  day = new Date().getDate();
}

const date = year + "-" + month + "-" + day;
document.querySelector('#footer').innerHTML += `<span id="date">${date}</span>`;


// Pour supprimer un message
for (let i = 0; i < document.querySelectorAll('.delete').length; i++) {
  document.querySelectorAll('.delete')[i].addEventListener('click',
    function () {
      this.parentNode.remove();
      const messagesCount = document.querySelectorAll('p').length;
      document.querySelector('#count').textContent = messagesCount;
    }
  );
}

// Pour ajouter un message
document.querySelector('#btn-add').addEventListener('click', function () {
  let message = document.querySelector('#add-message').value;
  document.querySelector('#msg-container').innerHTML += `
  <div class="row new-row">
  <img class="avatar" src="images/avatar-3.jpg" />
  <div class="text-container">
    <h6>John Doe</h6>
    <p>${message}</p>
  </div>
  <span class="delete">&#x2716;</span>
</div>
`;
  for (let i = 0; i < document.querySelectorAll('.delete').length; i++) {
    document.querySelectorAll('.delete')[i].addEventListener('click',
      function () {
        this.parentNode.remove();
        const messagesCount = document.querySelectorAll('p').length;
        document.querySelector('#count').textContent = messagesCount;
      }
    );
  }

  document.querySelector('#add-message').value = "";
  const messagesCount = document.querySelectorAll('p').length;
  document.querySelector('#count').textContent = messagesCount;
});

// Pour faire une recherche

document.querySelector('#btn-search').addEventListener('click', function () {
  for (let i = 0; i < document.querySelectorAll('h6').length; i++) {
    let textToCompare = document.querySelector('#search-message').value;
    textToCompare = textToCompare.toLowerCase();
    if (document.querySelectorAll('h6')[i].textContent.toLowerCase().includes(textToCompare) === false) {
      const textToHide = document.querySelectorAll('.row')[i];
      textToHide.style.display = 'none';
    } else {
      const textToShow = document.querySelectorAll('.row')[i];
      textToShow.style.display = 'flex';
    }
  }
  document.querySelector('#search-message').value = "";
});