/*
Clan: Clan Gates
Grupo: Charlie
Fecha: 16/05/2024
*/

// Import our custom CSS
import "../scss/styles.scss";
import "../scss/dashboard.scss";

// import library for json-server
import i18next from 'i18next';
import Backend from 'i18next-http-backend'

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// footer variables
const footer = document.querySelector("footer");


footer.innerHTML = `
    <div class="footerr">
        <p>© 2024 Reserva Tu Espacio. Todos los derechos reservados.</p>
    </div>
`;
