const ticketForm = document.getElementById("ticket_form");

function generateTicket(fullName, email, username, avatar) {
  //   TODO: implement the ticket generating login
  console.log(" user info ", { fullName, email, github, avatar });

  return `${fullName} ${email} ${github} ${avatar}`;
}

function onSubmit(event) {
  event.preventDefault(); // prevent the default bev=havior i.e reload page after form submission

  const form = new FormData(ticketForm);
  const data = Object.fromEntries(form.entries());

  //   generate the ticket
  const ticket = generateTicket(
    data?.fullName,
    data?.email,
    data?.github,
    data?.avatar, // pass the avatar
  );

  console.log(ticketForm);
}

// listen to event via event listener
ticketForm?.addEventListener(`submit`, function (e) {
  event.preventDefault();
  document.location = "ticket.html";

  const fullNameValue = fullName.value;
  localStorage.setItem("newfullName", fullNameValue);

  const emailValue = email.value;
  localStorage.setItem("newEmail", emailValue);

  const githubValue = github.value;
  localStorage.setItem("newGithub", githubValue);
});

const avatarElement = document.getElementById('avatar');
const avatar = localStorage.getItem("avatar");
avatarElement.src = avatar;
console.log(" avatar ", avatar);

const newfullName = localStorage.getItem("newfullName");
document.getElementById("fullName").textContent = newfullName + "!";

const ticketfullName = localStorage.getItem("newfullName");
document.getElementById("ticketfullName").textContent = ticketfullName;

const newEmail = localStorage.getItem("newEmail");
document.getElementById("email").textContent = newEmail;


const newGithub = localStorage.getItem("newGithub");
document.getElementById("github").textContent = ('@')+ newGithub;



