// =========================================================
// 1. DATA: Array Iniziale dei Membri del Team
// =========================================================
// Dichiarazione dell'array 'teamMembers'. Questo è l'archivio centrale dei dati
// del team. Ogni elemento è un oggetto che contiene le proprietà (dati) di un
// singolo membro (nome, ruolo, email, e l'URL dell'immagine).
// Questo array verrà modificato (aggiunto) quando l'utente invia il form.
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

// =========================================================
// 2. SELEZIONE DEL DOM
// =========================================================
// Seleziona l'elemento HTML con l'ID 'gertrudo' (il div contenitore per le card)
// e lo memorizza per un accesso rapido.
const gertrudo = document.getElementById('gertrudo');
// Seleziona il bottone/link "Inserisci" tramite il suo ID.
const addButton = document.getElementById('tasto-invio')

// =========================================================
// 3. FUNZIONE DI VISUALIZZAZIONE (Rendering)
// =========================================================
// Funzione che ha il compito di leggere l'intero array 'teamMembers'
// e riscriverlo completamente nel DOM.
function displayTeam() {
  // Inizializza una stringa vuota che conterrà l'HTML di tutte le card.
  let cardsHTML = "";

  // Avvia un ciclo for classico per iterare su ogni oggetto (membro) nell'array 'teamMembers'.
  for (let index = 0; index < teamMembers.length; index++) {
    // Estrae l'oggetto corrente.
    const element = teamMembers[index];
    // Usa la destrutturazione per assegnare le proprietà dell'oggetto a variabili locali.
    const { name, role, email, img } = element;

    // Concatena il template HTML della card.
    // I template literal (backtick ``) permettono di iniettare le variabili (${...})
    // direttamente nella struttura HTML, creando una stringa per la singola card.
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
  // Riscrive il contenuto del div 'gertrudo' con tutto l'HTML accumulato.
  // Questa è l'operazione che aggiorna la pagina visibile all'utente.
  gertrudo.innerHTML = cardsHTML
}

// =========================================================
// 4. FUNZIONE DI AGGIUNTA NUOVO MEMBRO (Gestione Form)
// =========================================================
// Funzione richiamata ogni volta che l'utente clicca il bottone "Inserisci".
function addNewMember(event) {
  // ESSENZIALE: Previene il comportamento predefinito del link 'a' (navigazione a '#'),
  // altrimenti la pagina si ricaricherebbe o scorrerebbe in alto.
  event.preventDefault();

  // Legge i valori correnti dai campi input del form e rimuove spazi bianchi non necessari.
  const newName = document.getElementById('inputNome').value.trim();
  const newRole = document.getElementById('inputRuolo').value.trim();
  const newEmail = document.getElementById('inputEmail').value.trim();
  const newImgUrl = document.getElementById('inputImg').value.trim();

  // URL di fallback (riserva) se l'utente non inserisce un URL di immagine.
  const defaultImage = "https://picsum.photos/id/1084/120/120";

  // Crea un nuovo oggetto con i dati appena inseriti dall'utente.
  const newMember = {
    name: newName,
    role: newRole,
    email: newEmail,
    // Usa l'URL inserito, altrimenti (||) usa l'immagine di default.
    img: newImgUrl || defaultImage
  };

  // Aggiunge il nuovo oggetto (membro) alla fine dell'array 'teamMembers'.
  teamMembers.push(newMember);

  // Richiama la funzione di visualizzazione per RI-GENERARE e RI-CARICARE tutto il team,
  // inclusi i vecchi membri e il nuovo appena aggiunto.
  displayTeam();

  // Resetta i campi del form per prepararsi al prossimo inserimento.
  document.getElementById('inputNome').value = '';
  document.getElementById('inputRuolo').value = '';
  document.getElementById('inputEmail').value = '';
  document.getElementById('inputImg').value = '';
}

// =========================================================
// 5. INIZIALIZZAZIONE E GESTIONE EVENTI
// =========================================================
// Carica la squadra iniziale quando la pagina viene caricata per la prima volta.
displayTeam();

// Aggiunge un ascoltatore di eventi: quando il bottone viene cliccato,
// viene eseguita la funzione 'addNewMember'.
addButton.addEventListener('click', addNewMember);