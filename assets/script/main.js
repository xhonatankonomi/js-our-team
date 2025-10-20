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


// Seleziona l'elemento HTML con l'ID 'gertrudo' e lo memorizza nella variabile 'gertrudo'.
// Questo elemento è il contenitore dove verrà visualizzato il contenuto dinamico.
const gertrudo = document.getElementById('gertrudo');

// Inizializza una stringa vuota. Questa variabile accumulerà l'HTML generato
// per tutte le card prima di essere inserita nel DOM.
let cardsHTML = "";

// Avvia un ciclo 'for' per iterare su ogni oggetto (membro del team) presente nell'array 'teamMembers'.
// Si assume che l'array 'teamMembers' sia definito altrove nel codice e contenga i dati.
for (let index = 0; index < teamMembers.length; index++) {
    // Ad ogni iterazione, assegna l'oggetto corrente dell'array alla variabile 'element'.
    const element = teamMembers[index];
    
    // Utilizza la "destructuring assignment" per estrarre le proprietà necessarie ('name', 'role', 'email', 'img')
    // dall'oggetto 'element'. Questo rende l'accesso a questi dati più conciso.
    const {name, role, email, img} = element;
    
    // Concatena l'HTML per la card del membro del team corrente alla variabile 'cardsHTML'.
    // Viene utilizzato un template literal (stringa tra apici rovesci) per includere le variabili.
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

// Terminato il ciclo, assegna l'intera stringa di HTML accumulata ('cardsHTML')
// come contenuto interno (innerHTML) dell'elemento selezionato ('gertrudo').
// Questo passo renderizza tutte le card sulla pagina.
gertrudo.innerHTML = cardsHTML