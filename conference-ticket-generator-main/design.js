const ticket_form = document.getElementById('ticket_form');
const avatarInput = document.getElementById('avatar');
const fullNameInput = document.getElementById('fullNameInput');
const emailInput = document.getElementById('emailInput');
const githubInput = document.getElementById('githubInput');


ticket_form.addEventListener('submit', (e) => {
e.preventDefault();
document.location = 'ticket.html';
fullNameInput = fullNameInput.value;

});

function FormData(avatar, fullNameInput, emailInput, githubInput) {
    avatar = avatar.value;
    fullNameInput = fullNameInput.value;
    emailInput = emailInput.value;
    githubInput= githubInput.value;

}




