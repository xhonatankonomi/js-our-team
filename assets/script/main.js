const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


const gertrudo = document.getElementById('gertrudo');

let cardsHTML = "";

for (let index = 0; index < teamMembers.length; index++) {
    const element = teamMembers[index];
    const {name, role, email, img} = element;
    cardsHTML += `
        <div class="col-lg-6">
                    <div class="card">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="./assets/${img}" class="img-fluid rounded-start" alt="Team Member">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${name}</h5>
                                    <p class="card-text">${role}</p>
                                    <p class="card-text">${email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    `
}

gertrudo.innerHTML = cardsHTML