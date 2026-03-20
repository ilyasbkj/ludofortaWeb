// =============================================
//  LUDOFORTA — app.js
// =============================================

// =============================================
//  SISTEMA DE IDIOMA (ES / CA)
// =============================================

const TRANSLATIONS = {
  es: {
    toast_members_only:  'Esta sección es solo para miembros de Ludoforta',
    toast_login_required:'Inicia sesión para acceder a tu perfil',
    // Nav home
    nav_home: 'Inicio',
    // Home
    home_welcome:       'BIENVENIDOS A LUDOFORTA',
    home_sub:           'Proyecto socioeducativo en Torreforta que utiliza los juegos de mesa como motor de cohesión y aprendizaje.',
    home_cta:           'DESCUBRE MÁS',
    home_seen_at:       'NOS HAS VISTO EN:',
    card_que_som:       '¿Qué somos?',
    card_que_som_sub:   'Somos un grupo de apasionados por los juegos de mesa que nace del Institut Torreforta.',
    card_que_fem:       '¿Qué hacemos?',
    card_que_fem_sub:   'Nos reunimos semanalmente para jugar, enseñar nuevas mecánicas y colaborar con festivales.',
    card_on_participem: '¿Cuándo y dónde?',
    card_on_participem_sub: 'Todos los jueves a las 17:00h en el local del Institut.',
    card_historia:      'Nuestra historia',
    card_historia_sub:  'Descubre cómo nació Ludoforta y el camino recorrido.',
    // Admin
    admin_social_title: 'Redes sociales',
    admin_social_hint:  'Introduce las URLs de tus redes sociales.',
    btn_guardar_social: '💾 Guardar redes sociales',
    admin_cards_title:  'Tarjetas de la página de inicio',
    admin_cards_hint:   'Edita el contenido de las 4 tarjetas.',
    // Roles
    role_member: 'Miembro',
    role_normal: 'Usuario',
    btn_make_member: 'Hacer miembro',
    btn_make_normal: 'Quitar miembro',
    nav_games:    'Juegos',
    nav_sessions: 'Partidas',
    nav_ranking:  'Ranking',
    nav_tablon:   'Tablón',
    nav_profile:  'Perfil',
    nav_admin:    'Admin',
    btn_salir:    'Salir',
    btn_cerrar_sesion: 'Cerrar sesión',
    // Auth
    auth_login:    'Iniciar sesión',
    auth_register: 'Registrarse',
    label_email:   'Correo electrónico',
    label_password:'Contraseña',
    btn_entrar:    'Entrar',
    btn_continuar: 'Continuar →',
    btn_google:    'Continuar con Google',
    divider_o:     'o',
    // Secciones
    games_title:      'Ludoteca',
    games_subtitle:   'Todos los juegos disponibles en Ludoforta',
    sessions_title:   'Partidas',
    sessions_subtitle:'Organiza o únete a partidas con otros jugadores',
    ranking_title:    'Ranking',
    ranking_subtitle: 'Ranking de jugadores por juegos que dominan',
    tablon_title:     'Tablón',
    tablon_subtitle:  'Noticias y comunicados de Ludoforta',
    profile_title:    'Mi perfil',
    profile_subtitle: 'Edita tu información personal',
    // Botones y acciones
    btn_nueva_partida: '+ Nueva partida',
    btn_cerrar:  'Cerrar',
    btn_cancelar:'Cancelar',
    btn_guardar: 'Guardar cambios',
    btn_crear_partida: 'Crear partida',
    // Juegos
    lbl_players:  'Jugadores',
    lbl_age:      'Edad mín.',
    lbl_duration: 'Duración',
    lbl_category: 'Categoría',
    lbl_desc:     'Descripción',
    lbl_know_game:'Me sé este juego',
    // Partidas
    lbl_juego:    'Juego',
    lbl_fecha:    'Fecha y hora',
    lbl_limite:   'Límite de jugadores',
    lbl_notas:    'Descripción (opcional)',
    // Perfil
    btn_cambiar_foto: '📷 Cambiar foto',
    hint_foto:        'JPG, PNG o GIF. Máx 5MB',
    lbl_username: 'Nombre de usuario',
    lbl_fullname: 'Nombre completo',
    lbl_edad:     'Edad',
    // Admin
    admin_title:         'Panel Admin',
    admin_subtitle:      'Gestión de Ludoforta',
    admin_logo_title:    '🖼️ Logo de la app',
    admin_logo_hint:     'Aparece en la barra de navegación y en la pantalla de inicio de sesión.',
    btn_elegir_imagen:   '📁 Elegir imagen',
    btn_guardar_logo:    'Guardar logo',
    admin_favicon_title: '🌐 Icono del navegador (favicon)',
    admin_favicon_hint:  'Esta imagen aparece en la pestaña del navegador. Se recomienda un PNG cuadrado de al menos 32×32 px.',
    admin_favicon_format:'PNG, ICO o SVG cuadrado.',
    btn_guardar_favicon: 'Guardar favicon',
    admin_icons_title:   '🎨 Iconos de la interfaz',
    admin_icons_hint:    'Sube una imagen para cada icono de la aplicación. PNG o SVG recomendado, fondo transparente.',
    btn_guardar_iconos:  '💾 Guardar todos los iconos',
    admin_add_game:      '🎮 Añadir juego',
    btn_add_bgg:         'Añadir desde BoardGameGeek',
    admin_o_manual:      'o añadir manualmente',
    admin_game_name:     'Nombre del juego *',
    admin_game_photo:    'Foto del juego',
    btn_añadir_juego:    'Añadir juego',
    admin_users_title:   '👥 Gestionar usuarios',
    // Tablón
    tablon_tipo_noticia:    '📰 Noticia',
    tablon_tipo_comunicado: '📋 Comunicado',
    tablon_tipo_evento:     '🎉 Evento',
    tablon_tipo_urgente:    '🚨 Urgente',
    tablon_nuevo:           '+ Nuevo anuncio',
    tablon_publicar:        '📢 Publicar',
    tablon_titulo_modal:    '📢 Nuevo anuncio',
    tablon_tipo_label:      'Tipo',
    tablon_titulo_label:    'Título *',
    tablon_contenido_label: 'Contenido *',
    tablon_email_toggle:    'Enviar notificación por email a todos los usuarios',
    tablon_empty:           'Sin anuncios todavía',
    tablon_empty_sub:       'Los administradores publicarán noticias y comunicados aquí',
    // Bienvenida
    welcome: '¡Bienvenido a Ludoforta!',
    // Juegos
    games_empty:     'La ludoteca está vacía',
    games_empty_sub: 'Los administradores añadirán juegos pronto',
    // Perfil público
    pub_games_title: 'Juegos que domina',
    // Sesiones vacías
    sessions_empty:       'Sin partidas',
    sessions_empty_sub:   '¡Crea la primera partida!',
    // Ranking subtítulos
    rank_played_singular: 'partida jugada',
    rank_played_plural:   'partidas jugadas',
    rank_wins_singular:   'victoria',
    rank_wins_plural:     'victorias',
    rank_ratings_singular:'valoración',
    rank_ratings_plural:  'valoraciones',
    rank_no_votes:        'Sin votos',
    // Ranking tabs
    ranking_tab_players: 'Jugadores',
    ranking_tab_games:   'Juegos',
    // Partida modal
    session_modal_title:  'Nueva partida',
    session_select_game:  'Selecciona un juego...',
    // Tablón tipos
    tablon_tipo_noticia_pub: '🌍 Noticia pública',
    tablon_tipo_miembros:    '⭐ Solo miembros',
    tablon_titulo_ph:        'Título del anuncio...',
    tablon_contenido_ph:     'Escribe el contenido del anuncio...',
    // Votación
    vote_winner_title: '¿Quién ha ganado?',
    vote_winner_sub:   'Vota al ganador. Gana quien tenga más votos.',
    // Valoración
    rate_game_title:  'Valorar juego',
    rate_game_sub:    '¿Qué nota le das a este juego?',
    btn_rate_save:    'Guardar valoración',
    btn_rate_game:    'Valorar',
    // Ajustes
    settings_lang:    'Idioma',
    settings_theme:   'Tema',
    settings_dark:    'Oscuro',
    settings_light:   'Claro',
    settings_logout:  'Cerrar sesión',
    // Confirmar
    btn_confirmar:    'Confirmar',
    // Completar perfil
    cp_step:            'Paso 2 de 2',
    cp_title:           'Completa tu perfil',
    cp_subtitle:        'Cuéntanos un poco más sobre ti',
    lbl_username_req:   'Nombre de usuario *',
    lbl_fullname_req:   'Nombre completo *',
    lbl_edad_req:       'Edad *',
    lbl_usertype:       '¿Formas parte de Ludoforta? *',
    cp_external_title:  'No, soy externo',
    cp_external_desc:   'Solo quiero ver la ludoteca y el ranking',
    cp_asistente_title: 'Asistente extraescolar',
    cp_asistente_desc:  'Asisto a la extraescolar de Ludoforta',
    cp_member_title:    'Miembro',
    cp_member_desc:     'Soy miembro activo de Ludoforta',
    btn_start_playing:  '¡Empezar a jugar!',
    // BGG
    bgg_title:    'Buscar en BoardGameGeek',
    bgg_subtitle: 'Base de datos con más de 140.000 juegos de mesa',
    btn_buscar:   'Buscar',
    // Admin
    admin_requests_title: '📋 Solicitudes de membresía',
    // Ranking
    ranking_players_empty: 'Sin jugadores todavía',
    ranking_games_empty:   'Todavía no hay valoraciones',
    ranking_games_sub:     '¡Sé el primero en valorar un juego!',
    ranking_unrated:       'Sin valoraciones aún:',
    // Solicitudes
    requests_pending:   'No hay solicitudes pendientes.',
    requests_approve:   'Aprobar',
    requests_deny:      'Denegar',
    // Ranking
    ranking_players_empty: 'Sin jugadores todavía',
    ranking_games_empty:   'Todavía no hay valoraciones',
    ranking_games_sub:     '¡Sé el primero en valorar un juego!',
    ranking_unrated:       'Sin valoraciones aún:',
    // Solicitudes
    requests_pending:   'No hay solicitudes pendientes.',
    requests_approve:   'Aprobar',
    requests_deny:      'Denegar',
  },
  ca: {
    toast_members_only:  'Aquesta secció és només per a membres de Ludoforta',
    toast_login_required:'Inicia sessió per accedir al teu perfil',
    // Nav home
    nav_home: 'Inici',
    // Home
    home_welcome:       'BENVINGUTS A LUDOFORTA',
    home_sub:           "Projecte socioeducatiu a Torreforta que utilitza els jocs de taula com a motor de cohesió i aprenentatge.",
    home_cta:           'DESCOBREIX MÉS',
    home_seen_at:       'ENS HAS VIST A:',
    card_que_som:       'Què som?',
    card_que_som_sub:   "Som un grup d'apassionats pels jocs de taula que neix de l'Institut Torreforta.",
    card_que_fem:       'Què fem?',
    card_que_fem_sub:   'Ens reunim setmanalment per jugar, ensenyar noves mecàniques i col·laborar amb festivals.',
    card_on_participem: 'Quan i On?',
    card_on_participem_sub: "Tots els dijous a les 17:00h al local de l'Institut.",
    card_historia:      'La nostra història',
    card_historia_sub:  'Descobreix com va néixer Ludoforta i el camí recorregut.',
    // Admin
    admin_social_title: 'Xarxes socials',
    admin_social_hint:  'Introdueix les URLs de les teves xarxes socials.',
    btn_guardar_social: '💾 Desar xarxes socials',
    admin_cards_title:  'Targetes de la pàgina d\'inici',
    admin_cards_hint:   'Edita el contingut de les 4 targetes.',
    // Rols
    role_member: 'Membre',
    role_normal: 'Usuari',
    btn_make_member: 'Fer membre',
    btn_make_normal: 'Treure membre',
    nav_games:    'Jocs',
    nav_sessions: 'Partides',
    nav_ranking:  'Rànquing',
    nav_tablon:   'Tauler',
    nav_profile:  'Perfil',
    nav_admin:    'Admin',
    btn_salir:    'Sortir',
    btn_cerrar_sesion: 'Tancar sessió',
    // Auth
    auth_login:    'Iniciar sessió',
    auth_register: 'Registrar-se',
    label_email:   'Correu electrònic',
    label_password:'Contrasenya',
    btn_entrar:    'Entrar',
    btn_continuar: 'Continuar →',
    btn_google:    'Continuar amb Google',
    divider_o:     'o',
    // Seccions
    games_title:      'Ludoteca',
    games_subtitle:   'Tots els jocs disponibles a Ludoforta',
    sessions_title:   'Partides',
    sessions_subtitle:'Organitza o uneix-te a partides amb altres jugadors',
    ranking_title:    'Rànquing',
    ranking_subtitle: 'Rànquing de jugadors per jocs que dominen',
    tablon_title:     'Tauler',
    tablon_subtitle:  'Notícies i comunicats de Ludoforta',
    profile_title:    'El meu perfil',
    profile_subtitle: 'Edita la teva informació personal',
    // Botons i accions
    btn_nueva_partida: '+ Nova partida',
    btn_cerrar:  'Tancar',
    btn_cancelar:'Cancel·lar',
    btn_guardar: 'Desar canvis',
    btn_crear_partida: 'Crear partida',
    // Jocs
    lbl_players:  'Jugadors',
    lbl_age:      'Edat mín.',
    lbl_duration: 'Durada',
    lbl_category: 'Categoria',
    lbl_desc:     'Descripció',
    lbl_know_game:'Em sé aquest joc',
    // Partides
    lbl_juego:    'Joc',
    lbl_fecha:    'Data i hora',
    lbl_limite:   'Límit de jugadors',
    lbl_notas:    'Descripció (opcional)',
    // Perfil
    btn_cambiar_foto: '📷 Canviar foto',
    hint_foto:        'JPG, PNG o GIF. Màx 5MB',
    lbl_username: 'Nom d\'usuari',
    lbl_fullname: 'Nom complet',
    lbl_edad:     'Edat',
    // Admin
    admin_title:         'Panell Admin',
    admin_subtitle:      'Gestió de Ludoforta',
    admin_logo_title:    '🖼️ Logo de l\'app',
    admin_logo_hint:     'Apareix a la barra de navegació i a la pantalla d\'inici de sessió.',
    btn_elegir_imagen:   '📁 Triar imatge',
    btn_guardar_logo:    'Desar logo',
    admin_favicon_title: '🌐 Icona del navegador (favicon)',
    admin_favicon_hint:  'Aquesta imatge apareix a la pestanya del navegador. Es recomana un PNG quadrat d\'almenys 32×32 px.',
    admin_favicon_format:'PNG, ICO o SVG quadrat.',
    btn_guardar_favicon: 'Desar favicon',
    admin_icons_title:   '🎨 Icones de la interfície',
    admin_icons_hint:    'Puja una imatge per a cada icona de l\'aplicació. PNG o SVG recomanat, fons transparent.',
    btn_guardar_iconos:  '💾 Desar totes les icones',
    admin_add_game:      '🎮 Afegir joc',
    btn_add_bgg:         'Afegir des de BoardGameGeek',
    admin_o_manual:      'o afegir manualment',
    admin_game_name:     'Nom del joc *',
    admin_game_photo:    'Foto del joc',
    btn_añadir_juego:    'Afegir joc',
    admin_users_title:   '👥 Gestionar usuaris',
    // Tauler
    tablon_tipo_noticia:    '📰 Notícia',
    tablon_tipo_comunicado: '📋 Comunicat',
    tablon_tipo_evento:     '🎉 Esdeveniment',
    tablon_tipo_urgente:    '🚨 Urgent',
    tablon_nuevo:           '+ Nou anunci',
    tablon_publicar:        '📢 Publicar',
    tablon_titulo_modal:    '📢 Nou anunci',
    tablon_tipo_label:      'Tipus',
    tablon_titulo_label:    'Títol *',
    tablon_contenido_label: 'Contingut *',
    tablon_email_toggle:    'Enviar notificació per correu a tots els usuaris',
    tablon_empty:           'Sense anuncis encara',
    tablon_empty_sub:       'Els administradors publicaran notícies i comunicats aquí',
    // Benvinguda
    welcome: 'Benvingut a Ludoforta!',
    // Jocs buits
    games_empty:     'La ludoteca és buida',
    games_empty_sub: 'Els administradors afegiran jocs aviat',
    // Perfil públic
    pub_games_title: 'Jocs que domina',
    // Sessions buides
    sessions_empty:       'Sense partides',
    sessions_empty_sub:   'Crea la primera partida!',
    // Rànquing subtítols
    rank_played_singular: 'partida jugada',
    rank_played_plural:   'partides jugades',
    rank_wins_singular:   'victòria',
    rank_wins_plural:     'victòries',
    rank_ratings_singular:'valoració',
    rank_ratings_plural:  'valoracions',
    rank_no_votes:        'Sense vots',
    ranking_tab_players: 'Jugadors',
    ranking_tab_games:   'Jocs',
    // Modal partida
    session_modal_title:  'Nova partida',
    session_select_game:  'Selecciona un joc...',
    // Tauler tipus
    tablon_tipo_noticia_pub: '🌍 Notícia pública',
    tablon_tipo_miembros:    '⭐ Només membres',
    tablon_titulo_ph:        'Títol de l\'anunci...',
    tablon_contenido_ph:     'Escriu el contingut de l\'anunci...',
    // Votació
    vote_winner_title: 'Qui ha guanyat?',
    vote_winner_sub:   'Vota el guanyador. Guanya qui tingui més vots.',
    // Valoració
    rate_game_title:  'Valorar joc',
    rate_game_sub:    'Quina nota li dones a aquest joc?',
    btn_rate_save:    'Desar valoració',
    btn_rate_game:    'Valorar',
    // Ajustos
    settings_lang:    'Idioma',
    settings_theme:   'Tema',
    settings_dark:    'Fosc',
    settings_light:   'Clar',
    settings_logout:  'Tancar sessió',
    // Confirmar
    btn_confirmar:    'Confirmar',
    // Completar perfil
    cp_step:            'Pas 2 de 2',
    cp_title:           'Completa el teu perfil',
    cp_subtitle:        'Explica\'ns una mica més sobre tu',
    lbl_username_req:   'Nom d\'usuari *',
    lbl_fullname_req:   'Nom complet *',
    lbl_edad_req:       'Edat *',
    lbl_usertype:       'Formes part de Ludoforta? *',
    cp_external_title:  'No, soc extern',
    cp_external_desc:   'Només vull veure la ludoteca i el rànquing',
    cp_asistente_title: 'Assistent extraescolar',
    cp_asistente_desc:  'Assisteixo a l\'extraescolar de Ludoforta',
    cp_member_title:    'Membre',
    cp_member_desc:     'Soc membre actiu de Ludoforta',
    btn_start_playing:  'Començar a jugar!',
    // BGG
    bgg_title:    'Cercar a BoardGameGeek',
    bgg_subtitle: 'Base de dades amb més de 140.000 jocs de taula',
    btn_buscar:   'Cercar',
    // Admin
    admin_requests_title: '📋 Sol·licituds de membresía',
    // Rànquing
    ranking_players_empty: 'Sense jugadors encara',
    ranking_games_empty:   'Encara no hi ha valoracions',
    ranking_games_sub:     'Sigues el primer a valorar un joc!',
    ranking_unrated:       'Sense valoracions encara:',
    // Sol·licituds
    requests_pending:   'No hi ha sol·licituds pendents.',
    requests_approve:   'Aprovar',
    requests_deny:      'Denegar',
    // Rànquing
    ranking_players_empty: 'Sense jugadors encara',
    ranking_games_empty:   'Encara no hi ha valoracions',
    ranking_games_sub:     'Sigues el primer a valorar un joc!',
    ranking_unrated:       'Sense valoracions encara:',
    // Sol·licituds
    requests_pending:   'No hi ha sol·licituds pendents.',
    requests_approve:   'Aprovar',
    requests_deny:      'Denegar',
  }
};

let currentLang = localStorage.getItem('ludoforta_lang') || 'es';

window.setLang = function (lang) {
  currentLang = lang;
  localStorage.setItem('ludoforta_lang', lang);
  applyTranslations();
};

function applyTranslations() {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.es;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!t[key]) return;

    // If inside a home-card with a custom saved title, use that instead of default
    try {
      const homeCard = el.closest('.home-card');
      if (homeCard && homeCard.id) {
        const cardId = homeCard.id.replace('home-card-', '');
        if (cardId && infoCardsData[cardId]) {
          const customTitle = infoCardsData[cardId]['title_' + currentLang] || infoCardsData[cardId]['title_es'];
          if (customTitle) { el.textContent = customTitle; return; }
        }
      }
    } catch(_) {}

    el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key]) el.placeholder = t[key];
  });

  document.querySelectorAll('[data-i18n-opt]').forEach(el => {
    const key = el.getAttribute('data-i18n-opt');
    if (t[key]) el.textContent = t[key];
  });

  // Card body texts
  ['que-som','que-fem','on-participem','historia'].forEach(id => {
    const txtEl = document.getElementById('card-text-' + id);
    if (!txtEl) return;
    const card = infoCardsData[id];
    if (card) {
      const text = card['text_' + currentLang] || card.text_es;
      if (text) txtEl.textContent = text;
    }
  });

  // Dynamic tablón button
  const tabBtn = document.getElementById('btn-nuevo-anuncio');
  if (tabBtn) tabBtn.textContent = t['tablon_nuevo'] || '+ Nuevo anuncio';

  // Settings lang buttons
  const slangEs = document.getElementById('slang-es');
  const slangCa = document.getElementById('slang-ca');
  if (slangEs) slangEs.classList.toggle('active', currentLang === 'es');
  if (slangCa) slangCa.classList.toggle('active', currentLang === 'ca');

  document.documentElement.lang = currentLang === 'ca' ? 'ca' : 'es';
}

// Helper to get a translation string from JS code
function i18n(key) {
  return (TRANSLATIONS[currentLang] || TRANSLATIONS.es)[key] || key;
}


// =============================================
//  CLOUDFLARE WORKER CODE (para BGG API)
//  Crea un Worker en workers.cloudflare.com y pega esto:
//
//  export default {
//    async fetch(request) {
//      const url = new URL(request.url);
//      const target = 'https://boardgamegeek.com/xmlapi2'
//                   + url.pathname + url.search;
//      const resp = await fetch(target, {
//        headers: { 'Authorization': 'Bearer TU_TOKEN_AQUI' }
//      });
//      const text = await resp.text();
//      return new Response(text, {
//        headers: {
//          'Content-Type': 'text/xml',
//          'Access-Control-Allow-Origin': '*',
//        }
//      });
//    }
//  };
//
//  Luego cambia BGG_WORKER_URL en este archivo por la URL de tu Worker.
// =============================================


import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import {
  getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';
import {
  getFirestore, doc, setDoc, getDoc, getDocs, collection, addDoc,
  deleteDoc, updateDoc, serverTimestamp, arrayUnion, arrayRemove,
  query, orderBy, onSnapshot, increment, where
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

// ===== CONFIG =====
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
const CLOUDINARY_CLOUD  = import.meta.env.VITE_CLOUDINARY_CLOUD;
const CLOUDINARY_PRESET = import.meta.env.VITE_CLOUDINARY_PRESET;
const SUPER_ADMIN       = import.meta.env.VITE_SUPER_ADMIN;

const fireApp        = initializeApp(firebaseConfig);
const auth           = getAuth(fireApp);
const db             = getFirestore(fireApp);
const googleProvider = new GoogleAuthProvider();

// ===== STATE =====
let currentUser        = null;
let currentUserData    = null;
let newAvatarFile      = null;
let newLogoFile        = null;
let cpAvatarFile       = null;
let unsubSessions      = null;
let userNamesCache     = {};
let pendingIconChanges = {};
let currentGameDetail  = null;
let allGamesCache      = [];
let flyingHomePos      = null;  // {left, top, fontSize} — posición del flying cuando está en el hero
let firstHomeLoad      = true;  // skip animación voladora en la primera carga

// ===== ICON DEFINITIONS =====
// targets: DOM selectors where this icon appears as <img>
// fallback: emoji shown when no image is set yet
const ICON_DEFS = [
  { key: 'icon_logo',             label: 'Logo principal',          fallback: '🎲', targets: ['#nav-logo-icon','#auth-logo-icon','#admin-logo-preview'] },
  { key: 'icon_nav_games',        label: 'Icono Juegos (nav)',       fallback: '🎮', targets: ['#icon-nav-games','#icon-mob-games'] },
  { key: 'icon_nav_sessions',     label: 'Icono Partidas (nav)',     fallback: '📅', targets: ['#icon-nav-sessions','#icon-mob-sessions'] },
  { key: 'icon_nav_community',    label: 'Icono Ranking (nav)',      fallback: '🏆', targets: ['#icon-nav-community','#icon-mob-community'] },
  { key: 'icon_nav_tablon',       label: 'Icono Tablón (nav)',       fallback: '📢', targets: ['#icon-nav-tablon','#icon-mob-tablon'] },
  { key: 'icon_nav_profile',      label: 'Icono Perfil (nav)',       fallback: '👤', targets: ['#icon-nav-profile','#icon-mob-profile'] },
  { key: 'icon_nav_admin',        label: 'Icono Admin (nav)',        fallback: '⚙️', targets: ['#icon-nav-admin','#icon-mob-admin'] },
  { key: 'icon_nav_logout',       label: 'Icono Cerrar sesión',      fallback: '🚪', targets: ['#icon-mob-logout'] },
  { key: 'icon_games_empty',      label: 'Ludoteca vacía',           fallback: '🎲', targets: [] },
  { key: 'icon_game_default',     label: 'Juego sin foto',           fallback: '🎮', targets: [] },
  { key: 'icon_sessions_empty',   label: 'Sin partidas',             fallback: '📅', targets: [] },
  { key: 'icon_profile_default',  label: 'Avatar por defecto',       fallback: '😀', targets: ['#profile-avatar-preview'] },
  { key: 'icon_game_players',     label: 'Juego: Jugadores',         fallback: '👥', targets: [] },
  { key: 'icon_game_age',         label: 'Juego: Edad mínima',       fallback: '🔞', targets: [] },
  { key: 'icon_game_duration',    label: 'Juego: Duración',          fallback: '⏱',  targets: [] },
];

// ─── Global state ─────────────────────────
let infoCardsData = {};
let currentIcons = {};
// pendingIconFiles stores File objects waiting to be uploaded
let pendingIconFiles = {};
// favicon state
let newFaviconFile = null;
// toggle: usar iconos personalizados (true) o SVG por defecto (false)
let useCustomIcons = false;

// =============================================
//  UTILS
// =============================================
window.toast = function (msg, type = 'info') {
  const c  = document.getElementById('toastContainer');
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  const ic = { success: '✅', error: '❌', info: 'ℹ️' };
  el.innerHTML = `<span>${ic[type] ?? 'ℹ️'}</span><span>${msg}</span>`;
  c.appendChild(el);
  setTimeout(() => el.remove(), 3500);
};

async function uploadToCloudinary(file) {
  const fd = new FormData();
  fd.append('file', file);
  fd.append('upload_preset', CLOUDINARY_PRESET);
  const res  = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/image/upload`, { method: 'POST', body: fd });
  const data = await res.json();
  if (!data.secure_url) throw new Error('Error subiendo imagen');
  return data.secure_url;
}

window.showScreen = function showScreen(id) {
  if (id === 'auth-screen') { openAuthModal(); return; }
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id)?.classList.add('active');
};

window.openAuthModal = function() {
  document.getElementById('auth-screen')?.classList.add('open');
};

window.closeAuthModal = function() {
  document.getElementById('auth-screen')?.classList.remove('open');
  document.getElementById('login-error').textContent = '';
  document.getElementById('reg-error').textContent   = '';
};

function translateError(code) {
  const map = {
    'auth/user-not-found':       'Usuario no encontrado',
    'auth/wrong-password':       'Contraseña incorrecta',
    'auth/email-already-in-use': 'Este correo ya está registrado',
    'auth/weak-password':        'La contraseña debe tener al menos 6 caracteres',
    'auth/invalid-email':        'Correo inválido',
    'auth/popup-closed-by-user': 'Ventana cerrada',
    'auth/invalid-credential':   'Credenciales incorrectas',
  };
  return map[code] ?? 'Error al autenticar';
}

// =============================================
//  ICONS — IMAGE BASED
// =============================================

/** Load icon URLs from Firestore and apply them to the DOM */
async function loadAndApplyIcons() {
  try {
    const snap = await getDoc(doc(db, 'settings', 'icons'));
    if (snap.exists()) {
      const data = snap.data();
      useCustomIcons = data._useCustomIcons === true;
      currentIcons = data;
    }
  } catch (_) {}
  applyAllIcons();
}

/** Render all icons into their target elements */
function applyAllIcons() {
  ICON_DEFS.forEach(def => {
    const url = currentIcons[def.key];
    def.targets.forEach(selector => {
      const el = document.querySelector(selector);
      if (!el) return;
      // Iconos de nav: solo sustituir si useCustomIcons está activo
      const isNavIcon = selector.startsWith('#icon-nav') || selector.startsWith('#icon-mob');
      if (isNavIcon) {
        if (useCustomIcons && url) {
          el.innerHTML = `<img src="${url}" alt="icon" style="width:18px;height:18px;object-fit:contain;display:block">`;
        }
        // Si no hay custom o está desactivado, dejar el SVG intacto del HTML
      } else {
        setIconEl(el, url, def.fallback);
      }
    });
  });
}

/** Set a non-nav element to show an image URL or fallback emoji */
function setIconEl(el, url, fallback) {
  if (url) {
    el.innerHTML = `<img src="${url}" alt="icon" style="width:100%;height:100%;object-fit:contain;display:block">`;
  } else {
    if (!el.querySelector('img') && !el.querySelector('svg')) el.textContent = fallback;
  }
}

/** Build the icon editor grid in the admin panel */
function buildIconsGrid() {
  const grid = document.getElementById('icons-grid');
  if (!grid) return;
  grid.innerHTML = '';

  // Toggle: iconos personalizados vs SVG por defecto
  const toggleRow = document.createElement('div');
  toggleRow.style.cssText = 'grid-column:1/-1;margin-bottom:20px;padding:16px;background:var(--surface2);border-radius:10px;border:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap';
  toggleRow.innerHTML = `
    <div>
      <strong style="font-size:14px;font-weight:700">Tipo de iconos en la navegación</strong>
      <p style="font-size:12px;color:#b3b3b3;margin-top:4px">Elige si usar tus iconos personalizados o los iconos SVG integrados.</p>
    </div>
    <div style="display:flex;gap:8px">
      <button id="btn-icons-svg" class="btn btn-sm ${!useCustomIcons ? 'btn-primary' : 'btn-secondary'}" onclick="setIconMode(false)">SVG integrados</button>
      <button id="btn-icons-custom" class="btn btn-sm ${useCustomIcons ? 'btn-primary' : 'btn-secondary'}" onclick="setIconMode(true)">Personalizados</button>
    </div>`;
  grid.appendChild(toggleRow);

  ICON_DEFS.forEach(def => {
    const url = currentIcons[def.key];
    const row = document.createElement('div');
    row.className = 'icon-row';
    row.innerHTML = `
      <div class="icon-row-preview" id="iprev-${def.key}">
        ${url
          ? `<img src="${url}" alt="${def.label}" style="width:100%;height:100%;object-fit:contain">`
          : def.fallback}
      </div>
      <div class="icon-row-info">
        <label>${def.label}</label>
        <div class="icon-upload-btn">
          <input type="file" id="ifile-${def.key}" accept="image/*" style="display:none"
            onchange="previewIconFile('${def.key}', this)">
          <button class="btn btn-secondary btn-sm"
            onclick="document.getElementById('ifile-${def.key}').click()">
            📁 Subir imagen
          </button>
        </div>
        <div class="icon-status" id="istatus-${def.key}">
          ${url ? '✅ Imagen guardada' : 'Sin imagen personalizada'}
        </div>
      </div>`;
    grid.appendChild(row);
  });
}

window.setIconMode = async function(custom) {
  useCustomIcons = custom;
  await setDoc(doc(db, 'settings', 'icons'), { _useCustomIcons: custom }, { merge: true });
  applyAllIcons();
  buildIconsGrid();
  toast(custom ? 'Usando iconos personalizados' : 'Usando iconos SVG integrados', 'success');
};

/** Preview a selected icon file before saving */
window.previewIconFile = function (key, input) {
  const file = input.files[0];
  if (!file) return;
  pendingIconFiles[key] = file;
  const reader = new FileReader();
  reader.onload = ev => {
    const prev = document.getElementById(`iprev-${key}`);
    if (prev) prev.innerHTML = `<img src="${ev.target.result}" alt="preview" style="width:100%;height:100%;object-fit:contain">`;
    const status = document.getElementById(`istatus-${key}`);
    if (status) status.textContent = '⏳ Pendiente de guardar';
  };
  reader.readAsDataURL(file);
};

/** Upload all pending icon files and save URLs to Firestore */
window.adminSaveIcons = async function () {
  const keys = Object.keys(pendingIconFiles);
  if (keys.length === 0) { toast('No hay cambios pendientes', 'info'); return; }
  toast(`Subiendo ${keys.length} icono(s)...`, 'info');
  const updates = {};
  for (const key of keys) {
    try {
      const url = await uploadToCloudinary(pendingIconFiles[key]);
      updates[key] = url;
      currentIcons[key] = url;
      const status = document.getElementById(`istatus-${key}`);
      if (status) status.textContent = '✅ Guardado';
    } catch (_) {
      toast(`Error subiendo "${key}"`, 'error');
    }
  }
  if (Object.keys(updates).length > 0) {
    await setDoc(doc(db, 'settings', 'icons'), updates, { merge: true });
    applyAllIcons();
    pendingIconFiles = {};
    toast('Iconos actualizados', 'success');
  }
};

// =============================================
//  LOGO
// =============================================
async function loadAppLogo() {
  try {
    const snap = await getDoc(doc(db, 'settings', 'app'));
    if (snap.exists() && snap.data().logoURL) {
      applyLogo(snap.data().logoURL);
    }
  } catch (_) {}
}

function applyLogo(url) {
  const img = `<img src="${url}" alt="logo" style="width:100%;height:100%;object-fit:cover">`;
  ['#nav-logo-icon','#auth-logo-icon','#admin-logo-preview'].forEach(sel => {
    const el = document.querySelector(sel);
    if (el) el.innerHTML = img;
  });
}

window.handleLogoPreview = function (e) {
  const file = e.target.files[0];
  if (!file) return;
  newLogoFile = file;
  const reader = new FileReader();
  reader.onload = ev => {
    document.getElementById('admin-logo-preview').innerHTML =
      `<img src="${ev.target.result}" alt="preview" style="width:100%;height:100%;object-fit:cover">`;
  };
  reader.readAsDataURL(file);
};

window.adminSaveLogo = async function () {
  if (!newLogoFile) { toast('Elige primero una imagen', 'error'); return; }
  try {
    toast('Subiendo logo...', 'info');
    const url = await uploadToCloudinary(newLogoFile);
    await setDoc(doc(db, 'settings', 'app'), { logoURL: url }, { merge: true });
    applyLogo(url);
    newLogoFile = null;
    toast('Logo actualizado', 'success');
  } catch (_) { toast('Error subiendo el logo', 'error'); }
};

// =============================================
//  FAVICON
// =============================================
async function loadFavicon() {
  try {
    const snap = await getDoc(doc(db, 'settings', 'app'));
    if (snap.exists() && snap.data().faviconURL) {
      const data = snap.data();
      const url  = data.faviconVersion
        ? `${data.faviconURL}?_v=${data.faviconVersion}`
        : data.faviconURL;
      applyFavicon(url);
      const box = document.getElementById('admin-favicon-preview');
      if (box) box.innerHTML = `<img src="${data.faviconURL}" alt="favicon" style="width:100%;height:100%;object-fit:contain">`;
    }
  } catch (_) {}
}

function applyFavicon(url) {
  // Remove old favicon links completely to force browser refresh
  document.querySelectorAll('link[rel*="icon"]').forEach(l => l.remove());
  const link = document.createElement('link');
  link.id   = 'favicon';
  link.rel  = 'icon';
  link.type = 'image/png';
  // Add cache-busting param so every browser/device gets the fresh version
  link.href = url.includes('?') ? `${url}&_v=${Date.now()}` : `${url}?_v=${Date.now()}`;
  document.head.appendChild(link);
  // Also set apple touch icon for iOS
  const apple = document.createElement('link');
  apple.rel  = 'apple-touch-icon';
  apple.href = link.href;
  document.head.appendChild(apple);
}

window.handleFaviconPreview = function (e) {
  const file = e.target.files[0];
  if (!file) return;
  newFaviconFile = file;
  const reader = new FileReader();
  reader.onload = ev => {
    const box = document.getElementById('admin-favicon-preview');
    if (box) box.innerHTML = `<img src="${ev.target.result}" alt="preview" style="width:100%;height:100%;object-fit:contain">`;
    applyFavicon(ev.target.result); // live preview in browser tab
  };
  reader.readAsDataURL(file);
};

window.adminSaveFavicon = async function () {
  if (!newFaviconFile) { toast(i18n('btn_elegir_imagen'), 'error'); return; }
  try {
    toast('Subiendo favicon...', 'info');
    const url = await uploadToCloudinary(newFaviconFile);
    const faviconVersion = Date.now();
    await setDoc(doc(db, 'settings', 'app'), { faviconURL: url, faviconVersion }, { merge: true });
    applyFavicon(url);
    newFaviconFile = null;
    toast('Favicon actualizado', 'success');
  } catch (_) { toast('Error subiendo el favicon', 'error'); }
};

// =============================================
//  MOBILE MENU
// =============================================
window.toggleMobileMenu = function () {
  const menu    = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-overlay');
  const btn     = document.getElementById('hamburger-btn');
  const isOpen  = menu.classList.contains('open');
  menu.classList.toggle('open', !isOpen);
  overlay.classList.toggle('open', !isOpen);
  btn.classList.toggle('open', !isOpen);
};
window.closeMobileMenu = function () {
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('mobile-overlay').classList.remove('open');
  document.getElementById('hamburger-btn').classList.remove('open');
};

// =============================================
//  NAVIGATION
// =============================================
// =============================================
//  NAVIGATION
// =============================================
window.showSection = function (name) {
  // Role-based access for guests and normal users
  const isMember = currentUserData?.isMember || currentUserData?.isAdmin || currentUser?.email === SUPER_ADMIN;
  const isLoggedIn = !!currentUser;
  const restricted = ['sessions','tablon','profile'];
  const memberOnly  = ['sessions','tablon'];

  if (memberOnly.includes(name) && !isMember) {
    toast(i18n('toast_members_only'), 'error'); return;
  }
  if (name === 'profile' && !isLoggedIn) {
    toast(i18n('toast_login_required'), 'error'); return;
  }

  document.querySelectorAll('.section-page').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const sec = document.getElementById(`section-${name}`);
  const btn = document.getElementById(`nav-${name}`);
  if (sec) {
    sec.classList.add('active');
    // Fade-in animation
    sec.style.opacity = '0';
    sec.style.transform = 'translateY(12px)';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      sec.style.transition = 'opacity 0.3s ease, transform 0.3s cubic-bezier(.16,1,.3,1)';
      sec.style.opacity = '1';
      sec.style.transform = 'translateY(0)';
      setTimeout(() => { sec.style.transition = ''; sec.style.opacity = ''; sec.style.transform = ''; }, 350);
    }));
  }
  if (btn) btn.classList.add('active');
  // Scroll to top on section change
  const appScreen2 = document.getElementById('app-screen');
  if (appScreen2) appScreen2.scrollTop = 0;

  // ── Brand animation ──────────────────────────────
  const flying      = document.getElementById('brand-flying');
  const staticText  = document.getElementById('nav-logo-text-static');
  const socialIcons = document.getElementById('nav-social-icons');
  const appScreen   = document.getElementById('app-screen');

  // Posición relativa al app-screen (sin depender del scroll)
  function posRel(el) {
    const eR = el.getBoundingClientRect();
    const aR = appScreen.getBoundingClientRect();
    return { left: eR.left - aR.left, top: eR.top - aR.top + appScreen.scrollTop,
             w: eR.width, h: eR.height };
  }

  // Posición del nav logo (donde vive el texto en estado "nav")
  function navPos() {
    const logoEl = document.getElementById('nav-logo-home');
    const iconEl = logoEl.querySelector('.nav-logo-icon');
    const iP = posRel(iconEl);
    const lP = posRel(logoEl);
    return { left: iP.left + iP.w + 8, top: lP.top + lP.h / 2 };
  }

  if (name === 'home') {
    socialIcons?.classList.add('visible');
    if (flying) flying.style.display = 'none';
    if (staticText) staticText.classList.remove('hide');
  } else {
    socialIcons?.classList.remove('visible');
    if (flying) flying.style.display = 'none';
    if (staticText) staticText.classList.remove('hide');
  }
  // ── Fin brand animation ───────────────────────────

  if (name === 'home')      loadHome();
  if (name === 'games')     loadGames();
  if (name === 'sessions')  startSessionsListener();
  if (name === 'community') loadRanking();
  if (name === 'tablon')    loadTablon();
  if (name === 'admin')   { loadAdminUsers(); buildIconsGrid(); loadAdminSocial(); loadAdminCards(); loadAdminRequests(); }
};

window.openModal  = function(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('open');
  const modal = el.querySelector('.modal');
  const isMobile = window.innerWidth <= 600;
  const isSheet = ['modal-info-card','modal-game-detail'].includes(id);
  if (modal) {
    modal.style.transition = 'none';
    modal.style.opacity = '0';
    modal.style.transform = (isMobile && isSheet) ? 'translateY(60px)' : 'translateY(20px) scale(0.97)';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      modal.style.transition = 'opacity 0.3s ease, transform 0.35s cubic-bezier(.16,1,.3,1)';
      modal.style.opacity = '1';
      modal.style.transform = 'translateY(0) scale(1)';
    }));
  }
};

window.closeModal = function(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const modal = el.querySelector('.modal');
  if (modal) {
    modal.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
    modal.style.opacity = '0';
    modal.style.transform = 'translateY(10px) scale(0.98)';
    setTimeout(() => {
      el.classList.remove('open');
      modal.style.transition = '';
      modal.style.opacity = '';
      modal.style.transform = '';
    }, 200);
  } else {
    el.classList.remove('open');
  }
};

window.handleOverlayClick = function(e, id) {
  if (e.target === e.currentTarget) closeModal(id);
};

// ── Settings dropdown ──────────────────────────
window.toggleSettingsMenu = function() {
  const menu = document.getElementById('settings-menu');
  if (!menu) return;
  const isOpen = menu.classList.contains('open');
  if (isOpen) closeSettingsMenu();
  else {
    menu.classList.add('open');
    // Update active states
    const lang = localStorage.getItem('ludoforta_lang') || 'es';
    document.getElementById('slang-es')?.classList.toggle('active', lang === 'es');
    document.getElementById('slang-ca')?.classList.toggle('active', lang === 'ca');
    const theme = localStorage.getItem('ludoforta_theme') || 'light';
    document.getElementById('theme-dark')?.classList.toggle('active', theme === 'dark');
    document.getElementById('theme-light')?.classList.toggle('active', theme === 'light');
    setTimeout(() => document.addEventListener('click', closeSettingsOnClickOutside), 10);
  }
};
window.closeSettingsMenu = function() {
  document.getElementById('settings-menu')?.classList.remove('open');
  document.removeEventListener('click', closeSettingsOnClickOutside);
};
function closeSettingsOnClickOutside(e) {
  const wrap = document.getElementById('settings-wrap');
  if (wrap && !wrap.contains(e.target)) closeSettingsMenu();
}

// ── Theme toggle ──────────────────────────
window.setTheme = function(theme) {
  localStorage.setItem('ludoforta_theme', theme);
  applyTheme(theme);
  document.getElementById('theme-dark')?.classList.toggle('active', theme === 'dark');
  document.getElementById('theme-light')?.classList.toggle('active', theme === 'light');
};
function applyTheme(theme) {
  if (theme === 'light') {
    document.documentElement.style.setProperty('--bg', '#f5f4f0');
    document.documentElement.style.setProperty('--surface', '#ffffff');
    document.documentElement.style.setProperty('--surface2', '#eeede9');
    document.documentElement.style.setProperty('--border', '#d8d6d0');
    document.documentElement.style.setProperty('--text', '#1a1916');
    document.documentElement.style.setProperty('--text2', '#6b6760');
    document.documentElement.style.setProperty('--text3', '#9e9a90');
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.style.setProperty('--bg', '#121212');
    document.documentElement.style.setProperty('--surface', '#1e1e1e');
    document.documentElement.style.setProperty('--surface2', '#2a2a2a');
    document.documentElement.style.setProperty('--border', '#333333');
    document.documentElement.style.setProperty('--text', '#ffffff');
    document.documentElement.style.setProperty('--text2', '#b3b3b3');
    document.documentElement.style.setProperty('--text3', '#777777');
    document.documentElement.removeAttribute('data-theme');
  }
}
// Apply saved theme on load
applyTheme(localStorage.getItem('ludoforta_theme') || 'light');
// Apply cached accent color instantly to avoid flash
const cachedAccent = localStorage.getItem('ludoforta_accent');
if (cachedAccent) applyAccentColor(cachedAccent);

function confirm(title, msg, action) {
  document.getElementById('confirm-title').textContent = title;
  document.getElementById('confirm-msg').textContent   = msg;
  document.getElementById('confirm-action-btn').onclick = () => { closeModal('modal-confirm'); action(); };
  openModal('modal-confirm');
}

// =============================================
//  AUTH TABS
// =============================================
window.showAuthTab = function (tab) {
  const tabs = document.querySelectorAll('.auth-tab');
  tabs[0].classList.toggle('active', tab === 'login');
  tabs[1].classList.toggle('active', tab === 'register');
  document.getElementById('login-form').style.display    = tab === 'login'    ? 'block' : 'none';
  document.getElementById('register-form').style.display = tab === 'register' ? 'block' : 'none';
};

// =============================================
//  AUTH METHODS
// =============================================
window.loginEmail = async function () {
  const email = document.getElementById('login-email').value.trim();
  const pass  = document.getElementById('login-password').value;
  document.getElementById('login-error').textContent = '';
  try { await signInWithEmailAndPassword(auth, email, pass); }
  catch (e) { document.getElementById('login-error').textContent = translateError(e.code); }
};

window.registerEmail = async function () {
  const email = document.getElementById('reg-email').value.trim();
  const pass  = document.getElementById('reg-password').value;
  document.getElementById('reg-error').textContent = '';
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, pass);
    await setDoc(doc(db, 'users', cred.user.uid), {
      uid: cred.user.uid, email: cred.user.email,
      name: '', fullName: '', age: null, photoURL: '',
      isAdmin: cred.user.email === SUPER_ADMIN,
      isMember: false, isBanned: false,
      profileComplete: false, createdAt: serverTimestamp(),
    });
  } catch (e) { document.getElementById('reg-error').textContent = translateError(e.code); }
};

window.loginGoogle = async function () {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const snap   = await getDoc(doc(db, 'users', result.user.uid));
    if (!snap.exists()) {
      // New Google user — create minimal doc, complete-profile will run
      await setDoc(doc(db, 'users', result.user.uid), {
        uid: result.user.uid, email: result.user.email,
        name: '', fullName: result.user.displayName ?? '', age: null,
        photoURL: result.user.photoURL ?? '',
        isAdmin: result.user.email === SUPER_ADMIN,
        isMember: false, isBanned: false,
        profileComplete: false, createdAt: serverTimestamp(),
      });
    }
  } catch (e) { toast(translateError(e.code), 'error'); }
};

window.logout = async function () {
  if (unsubSessions) { unsubSessions(); unsubSessions = null; }
  await signOut(auth);
};

// =============================================
//  AUTH STATE
// =============================================
// Load icons, logo & favicon BEFORE showing auth screen so everything is visible from the start
loadAndApplyIcons();
loadAppLogo();
// Load accent color from Firestore — show body once ready
(async () => {
  try {
    const s = await getDoc(doc(db, 'settings', 'app'));
    if (s.exists() && s.data().accentColor) applyAccentColor(s.data().accentColor);
  } catch(_) {}
  // Show body now that correct colors are applied
  document.body.classList.add('app-ready');
})();
loadFavicon();

// Brand flying: empieza oculto, showSection('home') lo activará
const _flyInit = document.getElementById('brand-flying');
if (_flyInit) _flyInit.style.display = 'none';

// Apply saved language on load
applyTranslations();
document.querySelectorAll('.lang-btn').forEach(b => {
  b.classList.toggle('active', b.id === `lang-${currentLang}`);
});

onAuthStateChanged(auth, async (user) => {
  if (user) {
    let snap = await getDoc(doc(db, 'users', user.uid));
    if (!snap.exists()) {
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid, email: user.email,
        name: user.displayName ?? '', fullName: user.displayName ?? '',
        age: null, photoURL: user.photoURL ?? '',
        isAdmin: user.email === SUPER_ADMIN,
        isMember: false, isBanned: false,
        profileComplete: false, createdAt: serverTimestamp(),
      });
      snap = await getDoc(doc(db, 'users', user.uid));
    }
    currentUser     = user;
    currentUserData = snap.data();

    closeAuthModal(); // cerrar modal de login si estaba abierto

    if (currentUserData.isBanned) { showBannedScreen(); return; }

    if (!currentUserData.profileComplete) {
      prefillCompleteProfile();
      openModal('modal-complete-profile');
      return;
    }

    setupApp();
    showSection('home');
  } else {
    currentUser     = null;
    currentUserData = null;
    if (unsubSessions) { unsubSessions(); unsubSessions = null; }
    closeAuthModal();
    setupGuestNav();
    showSection('home');
  }
});

async function saveUserDoc(user, name) {
  await setDoc(doc(db, 'users', user.uid), {
    uid: user.uid, email: user.email, name,
    fullName: name, age: null,
    photoURL: user.photoURL ?? '',
    isAdmin: user.email === SUPER_ADMIN,
    isBanned: false, profileComplete: true,
    createdAt: serverTimestamp(),
  }, { merge: true });
}

// =============================================
//  COMPLETE PROFILE (step 2)
// =============================================
function prefillCompleteProfile() {
  const pa = document.getElementById('cp-avatar-preview');
  // Pre-fill with Google photo if available
  if (currentUserData.photoURL) {
    pa.innerHTML = `<img src="${currentUserData.photoURL}" alt="avatar">`;
  }
  // Pre-fill full name from Google
  const fn = document.getElementById('cp-fullname');
  if (fn && currentUserData.fullName) fn.value = currentUserData.fullName;
}

window.handleCpAvatarChange = function (e) {
  const file = e.target.files[0];
  if (!file) return;
  cpAvatarFile = file;
  const reader = new FileReader();
  reader.onload = ev => {
    document.getElementById('cp-avatar-preview').innerHTML = `<img src="${ev.target.result}" alt="avatar">`;
  };
  reader.readAsDataURL(file);
};

window.onCpTypeChange = function(value) {
  const notice = document.getElementById('cp-request-notice');
  if (notice) notice.style.display = (value === 'asistente' || value === 'member') ? 'block' : 'none';
};

window.saveCompleteProfile = async function () {
  const username = document.getElementById('cp-username').value.trim();
  const fullName = document.getElementById('cp-fullname').value.trim();
  const age      = parseInt(document.getElementById('cp-age').value);
  const userType = document.querySelector('input[name="cp-usertype"]:checked')?.value ?? 'external';
  document.getElementById('cp-error').textContent = '';

  if (!username) { document.getElementById('cp-error').textContent = 'El nombre de usuario es obligatorio'; return; }
  if (!fullName)  { document.getElementById('cp-error').textContent = 'El nombre completo es obligatorio'; return; }
  if (!age || age < 1) { document.getElementById('cp-error').textContent = 'Introduce una edad válida'; return; }

  let photoURL = currentUserData.photoURL ?? '';
  if (cpAvatarFile) {
    try {
      toast('Subiendo foto...', 'info');
      photoURL = await uploadToCloudinary(cpAvatarFile);
      cpAvatarFile = null;
    } catch (_) { toast('Error subiendo la foto', 'error'); return; }
  }

  await updateDoc(doc(db, 'users', currentUser.uid), {
    name: username, fullName, age, photoURL, profileComplete: true, userType,
  });
  await updateProfile(currentUser, { displayName: username, photoURL });

  currentUserData.name            = username;
  currentUserData.fullName        = fullName;
  currentUserData.age             = age;
  currentUserData.photoURL        = photoURL;
  currentUserData.profileComplete = true;
  currentUserData.userType        = userType;

  // Si pide ser asistente o miembro → crear solicitud pendiente
  if (userType === 'asistente' || userType === 'member') {
    await setDoc(doc(db, 'requests', currentUser.uid), {
      uid:       currentUser.uid,
      name:      username,
      fullName,
      email:     currentUser.email,
      photoURL,
      userType,  // 'asistente' | 'member'
      status:    'pending',
      createdAt: serverTimestamp(),
    });
    toast('¡Solicitud enviada! Los administradores la revisarán pronto.', 'success');
  } else {
    toast(i18n('welcome'), 'success');
  }

  closeModal('modal-complete-profile');
  setupApp();
  showSection('home');
};

function setupApp() {
  const av = document.getElementById('nav-user-avatar');
  if (currentUserData.photoURL) {
    av.innerHTML = `<img src="${currentUserData.photoURL}" alt="avatar">`;
  } else {
    av.textContent = (currentUserData.name ?? 'U')[0].toUpperCase();
  }
  av.style.display = 'flex';

  const isAdmin  = currentUserData.isAdmin || currentUser.email === SUPER_ADMIN;
  const isMember = currentUserData.isMember || isAdmin;

  document.getElementById('nav-admin').style.display        = isAdmin  ? 'flex' : 'none';
  document.getElementById('mobile-nav-admin').style.display = isAdmin  ? 'flex' : 'none';
  document.getElementById('user-admin-badge').style.display = isAdmin  ? 'inline' : 'none';

  // Mostrar/ocultar secciones según rol
  const memberSections = ['nav-sessions','nav-tablon','mobile-nav-sessions','mobile-nav-tablon'];
  memberSections.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = isMember ? 'flex' : 'none';
  });

  // Perfil: siempre visible en móvil si estás logado
  const mobileProfile = document.getElementById('mobile-nav-profile');
  if (mobileProfile) mobileProfile.style.display = 'flex';

  // Show login/logout buttons correctly
  document.querySelectorAll('.btn-login-nav').forEach(b => b.style.display = 'none');
  const settingsWrap = document.getElementById('settings-wrap');
  if (settingsWrap) settingsWrap.style.display = 'flex';
  // Show logout in settings menu
  const logoutBtn = document.getElementById('settings-logout-btn');
  const logoutDiv = document.getElementById('settings-logout-divider');
  if (logoutBtn) logoutBtn.style.display = 'flex';
  if (logoutDiv) logoutDiv.style.display = 'block';

  // Profile prefill
  document.getElementById('profile-name').value     = currentUserData.name     ?? '';
  document.getElementById('profile-fullname').value = currentUserData.fullName  ?? '';
  document.getElementById('profile-age').value      = currentUserData.age       ?? '';
  document.getElementById('profile-email').value    = currentUser.email         ?? '';
  const pa = document.getElementById('profile-avatar-preview');
  if (currentUserData.photoURL) {
    pa.innerHTML = `<img src="${currentUserData.photoURL}" alt="avatar">`;
  } else if (currentIcons['icon_profile_default']) {
    pa.innerHTML = `<img src="${currentIcons['icon_profile_default']}" alt="avatar" style="width:100%;height:100%;object-fit:contain">`;
  } else {
    pa.textContent = (currentUserData.name ?? 'U')[0]?.toUpperCase() ?? 'U';
  }
}

window.setupGuestNav = function setupGuestNav() {
  ['nav-sessions','nav-tablon','nav-admin','nav-profile',
   'mobile-nav-sessions','mobile-nav-tablon','mobile-nav-admin','mobile-nav-profile'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
  const av = document.getElementById('nav-user-avatar');
  if (av) av.style.display = 'none';
  // Hide logout from settings menu for guests
  const logoutBtn = document.getElementById('settings-logout-btn');
  const logoutDiv = document.getElementById('settings-logout-divider');
  if (logoutBtn) logoutBtn.style.display = 'none';
  if (logoutDiv) logoutDiv.style.display = 'none';
  document.querySelectorAll('.btn-login-nav').forEach(b => b.style.display = 'inline-flex');
};

function showBannedScreen() {
  document.body.innerHTML = `
    <div class="banned-screen">
      <h2 style="font-size:48px">✕</h2><h2>Cuenta suspendida</h2>
      <p>Tu cuenta ha sido baneada por un administrador.</p>
    </div>`;
}

// =============================================
//  HOME SECTION
// =============================================
const INFO_CARDS = {
  'que-som':       { es: 'Ludoforta es un proyecto educativo del Institut Torreforta que utiliza los juegos de mesa para fomentar la cohesión social y el aprendizaje competencial en el barrio.', ca: 'Ludoforta és un projecte educatiu de l\'Institut Torreforta que utilitza els jocs de taula per fomentar la cohesió social i l\'aprenentatge competencial al barri.' },
  'que-fem':       { es: 'Aprendemos a jugar y a explicar juegos de mesa. Los alumnos se convierten en monitores que enseñan a otros a jugar, desarrollando habilidades comunicativas y sociales.', ca: 'Aprenem a jugar i a explicar jocs de taula. Els alumnes es converteixen en monitors que ensenyen als altres a jugar, desenvolupant habilitats comunicatives i socials.' },
  'on-participem': { es: 'Participamos en espacios del barrio de Torreforta: centros cívicos, asociaciones de vecinos, residencias y eventos locales donde llevamos los juegos de mesa a la comunidad.', ca: 'Participem en espais del barri de Torreforta: centres cívics, associacions de veïns, residències i esdeveniments locals on portem els jocs de taula a la comunitat.' },
  'historia':      { es: 'Ludoforta nació en el Institut Torreforta como iniciativa para usar el juego como herramienta educativa y de integración social, conectando generaciones y culturas a través del juego.', ca: 'Ludoforta va néixer a l\'Institut Torreforta com a iniciativa per usar el joc com a eina educativa i d\'integració social, connectant generacions i cultures a través del joc.' },
};

async function loadHome() {
  try {
    const snap = await getDoc(doc(db, 'settings', 'home'));
    if (snap.exists()) {
      const data = snap.data();
      infoCardsData = data.cards || {};
      if (data.heroBgURL) applyHeroBg(data.heroBgURL);
      // Hero text
      if (data.heroLine1) {
        const l1 = document.getElementById('home-hero-line1');
        if (l1) l1.textContent = data.heroLine1;
      }
      if (data.heroLine2) {
        const l2 = document.getElementById('home-hero-line2');
        if (l2) l2.textContent = data.heroLine2;
      }
      // Cards
      Object.keys(infoCardsData).forEach(id => {
        const card  = infoCardsData[id];
        const imgEl = document.getElementById(`card-img-${id}`);
        const txtEl = document.getElementById(`card-text-${id}`);
        const titEl = document.querySelector(`#home-card-${id} h3`);
        if (imgEl && card.imgURL) {
          imgEl.innerHTML = `<img src="${card.imgURL}" alt="${id}">`;
          imgEl.classList.add('has-image');
        }
        if (txtEl) {
          const text = card[`text_${currentLang}`] || card.text_es;
          if (text) txtEl.textContent = text;
        }
        if (titEl) {
          const title = card[`title_${currentLang}`] || card.title_es;
          if (title) titEl.textContent = title;
        }
      });
    }
  } catch (_) {}

  // Load accent color from settings/app
  try {
    const appSnap = await getDoc(doc(db, 'settings', 'app'));
    if (appSnap.exists() && appSnap.data().accentColor) {
      applyAccentColor(appSnap.data().accentColor);
    }
  } catch (_) {}

  loadSocialLinks();

  // Scroll reveal para las tarjetas
  const cards = document.querySelectorAll('#section-home .home-card');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.15 });
    cards.forEach(c => observer.observe(c));
  } else {
    cards.forEach(c => c.classList.add('visible'));
  }
}

async function loadSocialLinks() {
  try {
    const snap = await getDoc(doc(db, 'settings', 'app'));
    if (snap.exists()) {
      const d = snap.data();
      const links = { tiktok: d.socialTiktok, instagram: d.socialInstagram, youtube: d.socialYoutube, x: d.socialX };
      Object.entries(links).forEach(([key, url]) => {
        // Nav icons
        const el  = document.getElementById(`social-${key}`);
        if (el)  el.href = url || '#';
        // Mobile icons
        const mob = document.getElementById(`social-mob-${key}`);
        if (mob) mob.href = url || '#';
        // Footer icons
        const ft  = document.getElementById(`footer-social-${key}`);
        if (ft)  ft.href = url || '#';
      });
    }
  } catch (_) {}

  // IntersectionObserver: ocultar iconos nav cuando el footer es visible
  const sentinel = document.getElementById('footer-sentinel');
  const navSocial = document.getElementById('nav-social-icons');
  if (sentinel && navSocial) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navSocial.classList.remove('visible');
        } else {
          // Solo restaurar si seguimos en home
          const homeActive = document.getElementById('section-home')?.classList.contains('active');
          if (homeActive) navSocial.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    obs.observe(sentinel);
  }
}

window.openInfoCard = function (id) {
  const data   = infoCardsData[id] || {};
  const texts  = INFO_CARDS[id] || { es: '', ca: '' };
  const text   = data[`text_${currentLang}`] || data.text_es || texts[currentLang] || texts.es;
  const title  = { 'que-som': i18n('card_que_som'), 'que-fem': i18n('card_que_fem'), 'on-participem': i18n('card_on_participem'), 'historia': i18n('card_historia') }[id] || id;

  const imgEl = document.getElementById('modal-info-card-img');
  if (data.imgURL) {
    imgEl.innerHTML = `<img src="${data.imgURL}" alt="${title}">`;
  } else {
    const emoji = { 'que-som': '🎲', 'que-fem': '🎯', 'on-participem': '📍', 'historia': '📖' }[id] || '🃏';
    imgEl.innerHTML = `<span style="font-size:64px">${emoji}</span>`;
  }
  document.getElementById('modal-info-card-title').textContent = title;
  document.getElementById('modal-info-card-text').textContent  = text;

  // Animación de entrada — slide-up en móvil, scale en desktop
  const modal = document.querySelector('#modal-info-card .modal');
  const isMobile = window.innerWidth <= 600;
  if (modal) {
    modal.style.opacity = '0';
    modal.style.transform = isMobile ? 'translateY(100%)' : 'translateY(24px) scale(0.97)';
    modal.style.transition = 'none';
  }

  openModal('modal-info-card');

  requestAnimationFrame(() => requestAnimationFrame(() => {
    if (modal) {
      modal.style.transition = 'opacity 0.35s ease, transform 0.38s cubic-bezier(.16,1,.3,1)';
      modal.style.opacity    = '1';
      modal.style.transform  = isMobile ? 'translateY(0)' : 'translateY(0) scale(1)';
    }
    // Animar imagen desde arriba
    const img = imgEl.querySelector('img, span');
    if (img) {
      img.style.opacity   = '0';
      img.style.transform = 'scale(1.06)';
      img.style.transition = 'opacity 0.5s ease 0.1s, transform 0.5s cubic-bezier(.16,1,.3,1) 0.1s';
      requestAnimationFrame(() => {
        img.style.opacity   = '1';
        img.style.transform = 'scale(1)';
      });
    }
    // Animar título y texto
    const content = document.querySelector('#modal-info-card .info-card-content');
    if (content) {
      content.style.opacity   = '0';
      content.style.transform = 'translateY(12px)';
      content.style.transition = 'opacity 0.4s ease 0.15s, transform 0.4s cubic-bezier(.16,1,.3,1) 0.15s';
      requestAnimationFrame(() => {
        content.style.opacity   = '1';
        content.style.transform = 'translateY(0)';
      });
    }
  }));
};

// =============================================
//  ADMIN — SOCIAL LINKS
// =============================================
async function loadAdminSocial() {
  try {
    const snap = await getDoc(doc(db, 'settings', 'app'));
    if (snap.exists()) {
      const d = snap.data();
      const f = (id, val) => { const el = document.getElementById(id); if (el && val) el.value = val; };
      f('admin-social-tiktok',    d.socialTiktok);
      f('admin-social-instagram', d.socialInstagram);
      f('admin-social-youtube',   d.socialYoutube);
      f('admin-social-x',         d.socialX);
    }
  } catch (_) {}
}

window.adminSaveSocial = async function () {
  try {
    await setDoc(doc(db, 'settings', 'app'), {
      socialTiktok:    document.getElementById('admin-social-tiktok').value.trim(),
      socialInstagram: document.getElementById('admin-social-instagram').value.trim(),
      socialYoutube:   document.getElementById('admin-social-youtube').value.trim(),
      socialX:         document.getElementById('admin-social-x').value.trim(),
    }, { merge: true });
    toast('Redes sociales guardadas', 'success');
    loadSocialLinks();
  } catch (_) { toast('Error guardando redes sociales', 'error'); }
};

// =============================================
//  ADMIN — INFO CARDS
// =============================================
async function loadAdminCards() {
  try {
    const snap = await getDoc(doc(db, 'settings', 'home'));
    if (!snap.exists()) return;
    const d     = snap.data();
    const cards = d.cards || {};
    const heroPrev = document.getElementById('hero-bg-preview');
    if (heroPrev && d.heroBgURL) {
      heroPrev.innerHTML = `<img src="${d.heroBgURL}" style="width:100%;height:100%;object-fit:cover">`;
    }
    if (d.heroLine1) { const el = document.getElementById('admin-hero-line1'); if (el) el.value = d.heroLine1; }
    if (d.heroLine2) { const el = document.getElementById('admin-hero-line2'); if (el) el.value = d.heroLine2; }
    Object.entries(cards).forEach(([id, cardData]) => {
      const esEl  = document.getElementById(`ace-text-es-${id}`);
      const caEl  = document.getElementById(`ace-text-ca-${id}`);
      const esTit = document.getElementById(`ace-title-es-${id}`);
      const caTit = document.getElementById(`ace-title-ca-${id}`);
      const prev  = document.getElementById(`ace-preview-${id}`);
      if (esEl  && cardData.text_es)  esEl.value  = cardData.text_es;
      if (caEl  && cardData.text_ca)  caEl.value  = cardData.text_ca;
      if (esTit && cardData.title_es) esTit.value = cardData.title_es;
      if (caTit && cardData.title_ca) caTit.value = cardData.title_ca;
      if (prev  && cardData.imgURL)   prev.innerHTML = `<img src="${cardData.imgURL}" alt="${id}" style="max-height:120px;border-radius:8px;object-fit:cover">`;
    });
  } catch (_) {}
  try {
    const appSnap = await getDoc(doc(db, 'settings', 'app'));
    if (appSnap.exists() && appSnap.data().accentColor) {
      const col = appSnap.data().accentColor;
      const inp = document.getElementById('admin-accent-color');
      const hex = document.getElementById('admin-accent-hex');
      if (inp) inp.value = col;
      if (hex) { hex.textContent = col; hex.style.color = col; }
    }
  } catch (_) {}
}

window.previewHeroBg = function(input) {
  const file = input.files[0];
  if (!file) return;
  const prev = document.getElementById('hero-bg-preview');
  const reader = new FileReader();
  reader.onload = e => {
    prev.innerHTML = `<img src="${e.target.result}" style="width:100%;height:100%;object-fit:cover">`;
  };
  reader.readAsDataURL(file);
};

window.adminSaveHeroBg = async function() {
  const input = document.getElementById('hero-bg-input');
  const file  = input?.files[0];
  if (!file) { toast('Elige una imagen primero', 'error'); return; }
  try {
    toast('Subiendo imagen...', 'info');
    const url = await uploadToCloudinary(file);
    await setDoc(doc(db, 'settings', 'home'), { heroBgURL: url }, { merge: true });
    applyHeroBg(url);
    toast('Foto del hero guardada ✓', 'success');
    input.value = '';
  } catch(e) {
    toast('Error subiendo la imagen', 'error');
  }
};

window.adminSaveHeroText = async function() {
  const line1 = document.getElementById('admin-hero-line1')?.value.trim() || '';
  const line2 = document.getElementById('admin-hero-line2')?.value.trim() || '';
  if (!line1 && !line2) { toast('Escribe al menos una línea', 'error'); return; }
  try {
    await setDoc(doc(db, 'settings', 'home'), { heroLine1: line1, heroLine2: line2 }, { merge: true });
    // Apply live
    const l1 = document.getElementById('home-hero-line1');
    const l2 = document.getElementById('home-hero-line2');
    if (l1 && line1) l1.textContent = line1;
    if (l2 && line2) l2.textContent = line2;
    toast('Texto del hero guardado ✓', 'success');
  } catch(e) { toast('Error guardando texto', 'error'); }
};

function getContrastTextColor(hex) {
  // Convert hex to RGB and calculate relative luminance
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  // Perceived luminance formula
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#121212' : '#ffffff';
}

function applyAccentColor(color) {
  document.documentElement.style.setProperty('--accent', color);
  // Auto contrast text color
  try {
    const hex6 = color.length === 4
      ? '#' + color[1]+color[1]+color[2]+color[2]+color[3]+color[3]
      : color;
    const textColor = getContrastTextColor(hex6);
    document.documentElement.style.setProperty('--accent-text', textColor);
  } catch(_) {
    document.documentElement.style.setProperty('--accent-text', '#121212');
  }
  // Cache locally to avoid flash on next load
  localStorage.setItem('ludoforta_accent', color);
  const picker = document.getElementById('admin-accent-color');
  const hexInp = document.getElementById('admin-accent-hex-input');
  const hex    = document.getElementById('admin-accent-hex');
  if (picker) picker.value = color;
  if (hexInp) hexInp.value = color;
  if (hex)  { hex.textContent = color; hex.style.color = color; }
}

window.onHexInput = function(value) {
  // Validate hex color
  if (/^#([0-9A-Fa-f]{3}){1,2}$/.test(value)) {
    applyAccentColor(value);
  }
};

window.setAccentPreset = function(color) {
  applyAccentColor(color);
};

// Live preview when color picker changes
document.addEventListener('DOMContentLoaded', () => {
  const picker = document.getElementById('admin-accent-color');
  if (picker) {
    picker.addEventListener('input', (e) => {
      applyAccentColor(e.target.value);
    });
  }
});

window.adminSaveAccentColor = async function() {
  // Prefer the hex text input if it has a valid value
  const hexInp = document.getElementById('admin-accent-hex-input');
  const picker = document.getElementById('admin-accent-color');
  let color = hexInp?.value.trim() || picker?.value || '#f39c12';
  if (!/^#([0-9A-Fa-f]{3}){1,2}$/.test(color)) {
    color = picker?.value || '#f39c12';
  }
  try {
    await setDoc(doc(db, 'settings', 'app'), { accentColor: color }, { merge: true });
    applyAccentColor(color);
    toast('Color guardado ✓', 'success');
  } catch(e) { toast('Error guardando color', 'error'); }
};

function applyHeroBg(url) {
  const bg = document.getElementById('home-hero-bg');
  if (bg && url) {
    bg.style.backgroundImage  = `url('${url}')`;
    bg.style.backgroundSize   = 'cover';
    bg.style.backgroundPosition = 'center';
    // Quitar el gradient fallback para que se vea la foto real
    bg.style.background = `url('${url}') center/cover no-repeat fixed`;
  }
}

window.previewCardImg = function(id, input) {
  const file = input.files[0];
  if (!file) return;
  const prev = document.getElementById(`ace-preview-${id}`);
  if (!prev) return;
  const reader = new FileReader();
  reader.onload = e => { prev.innerHTML = `<img src="${e.target.result}" style="max-height:120px;border-radius:8px;object-fit:cover">`; };
  reader.readAsDataURL(file);
};

window.adminSaveCard = async function (id) {
  try {
    const esText  = document.getElementById(`ace-text-es-${id}`)?.value.trim() || '';
    const caText  = document.getElementById(`ace-text-ca-${id}`)?.value.trim() || '';
    const esTitle = document.getElementById(`ace-title-es-${id}`)?.value.trim() || '';
    const caTitle = document.getElementById(`ace-title-ca-${id}`)?.value.trim() || '';
    const imgInput = document.getElementById(`ace-img-${id}`);
    const imgFile  = imgInput?.files[0];
    let imgURL = null;
    if (imgFile) {
      toast('Subiendo imagen...', 'info');
      imgURL = await uploadToCloudinary(imgFile);
    }
    const cardData = { text_es: esText, text_ca: caText, title_es: esTitle, title_ca: caTitle };
    if (imgURL) cardData.imgURL = imgURL;
    await setDoc(doc(db, 'settings', 'home'), { cards: { [id]: cardData } }, { merge: true });
    // Actualizar en vivo
    if (imgURL) {
      const imgEl = document.getElementById(`card-img-${id}`);
      if (imgEl) { imgEl.innerHTML = `<img src="${imgURL}" alt="${id}">`; imgEl.classList.add('has-image'); }
    }
    // Actualizar título en home
    const titEl = document.querySelector(`#home-card-${id} h3`);
    if (titEl && (esTitle || caTitle)) {
      titEl.textContent = (currentLang === 'ca' ? caTitle : esTitle) || titEl.textContent;
    }
    infoCardsData[id] = { ...infoCardsData[id], text_es: esText, text_ca: caText, title_es: esTitle, title_ca: caTitle, ...(imgURL ? { imgURL } : {}) };
    toast('Tarjeta guardada ✓', 'success');
    if (imgInput) imgInput.value = '';
  } catch (e) { console.error(e); toast('Error guardando tarjeta', 'error'); }
};

// =============================================
//  ADMIN — MEMBER ROLE TOGGLE
// =============================================
window.toggleMemberRole = async function (uid, currentlyMember) {
  try {
    await updateDoc(doc(db, 'users', uid), { isMember: !currentlyMember });
    toast(currentlyMember ? 'Miembro eliminado' : 'Usuario ascendido a miembro', 'success');
    loadAdminUsers();
  } catch (_) { toast('Error cambiando rol', 'error'); }
};

// =============================================
//  GAMES
// =============================================
async function loadGames() {
  const c = document.getElementById('games-container');
  c.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
  const snap    = await getDocs(collection(db, 'games'));
  const isAdmin = currentUserData?.isAdmin || currentUser?.email === SUPER_ADMIN;
  if (snap.empty) {
    const emptyIcon = currentIcons['icon_games_empty']
      ? `<img src="${currentIcons['icon_games_empty']}" style="width:64px;height:64px;object-fit:contain">`
      : '🎲';
    c.innerHTML = `<div class="empty-state"><div class="icon">${emptyIcon}</div><h3>Sin juegos todavía</h3><p>Los administradores añadirán juegos pronto</p></div>`;
    allGamesCache = [];
    return;
  }
  allGamesCache = [];
  c.innerHTML = '';
  snap.forEach(d => {
    const g = { id: d.id, ...d.data() };
    allGamesCache.push(g);
    const defIcon = currentIcons['icon_game_default']
      ? `<img src="${currentIcons['icon_game_default']}" style="width:64px;height:64px;object-fit:contain">`
      : '🎮';
    const iPlayers  = currentIcons['icon_game_players']  ? `<img src="${currentIcons['icon_game_players']}"  style="width:13px;height:13px;object-fit:contain;vertical-align:middle">` : '👥';
    const iAge      = currentIcons['icon_game_age']      ? `<img src="${currentIcons['icon_game_age']}"      style="width:13px;height:13px;object-fit:contain;vertical-align:middle">` : '🔞';
    const iDuration = currentIcons['icon_game_duration'] ? `<img src="${currentIcons['icon_game_duration']}" style="width:13px;height:13px;object-fit:contain;vertical-align:middle">` : '⏱';
    const chips = [
      g.players  ? `${iPlayers} ${g.players}`   : '',
      g.age      ? `${iAge} ${g.age}`            : '',
      g.duration ? `${iDuration} ${g.duration}`  : '',
    ].filter(Boolean).join(' · ');

    const card = document.createElement('div');
    card.className = 'game-card';
    card.onclick = () => openGameDetail(g);
    card.innerHTML = `
      <div class="game-card-img">
        ${g.photoURL ? `<img src="${g.photoURL}" alt="${g.name}">` : defIcon}
      </div>
      <div class="game-card-body">
        <h4>${g.name}</h4>
        ${chips ? `<p style="font-size:12px;color:var(--text3);margin-top:4px">${chips}</p>` : ''}
      </div>
      ${isAdmin ? `<div class="game-card-actions"><button class="btn btn-danger btn-sm" onclick="event.stopPropagation();deleteGame('${g.id}','${g.name}')">Eliminar</button></div>` : ''}
    `;
    c.appendChild(card);
  });
}

window.openGameDetail = function (g) {
  currentGameDetail = g;
  document.getElementById('gd-name').textContent = g.name;

  const imgEl = document.getElementById('gd-img');
  const defIcon = currentIcons['icon_game_default']
    ? `<img src="${currentIcons['icon_game_default']}" style="width:100%;height:100%;object-fit:contain">`
    : '🎮';
  imgEl.innerHTML = g.photoURL ? `<img src="${g.photoURL}" alt="${g.name}">` : defIcon;

  const tagsEl = document.getElementById('gd-tags');
  tagsEl.innerHTML = [g.category].filter(Boolean)
    .map(t => `<span class="gd-tag">${t}</span>`).join('');

  // Mostrar valoración media si existe
  const ratingRow   = document.getElementById('gd-rating-row');
  const ratingAvgEl = document.getElementById('gd-rating-avg');
  const ratingStars = document.getElementById('gd-rating-stars');
  const ratingCount = document.getElementById('gd-rating-count');
  if (g.ratingCount > 0) {
    const avg = (g.ratingAvg ?? 0).toFixed(1);
    const filled = Math.round(g.ratingAvg ?? 0);
    ratingAvgEl.textContent = avg;
    ratingStars.innerHTML = Array.from({length:10}, (_,i) =>
      `<span style="color:${i < filled ? 'var(--accent)' : '#444'}">★</span>`
    ).join('');
    ratingCount.textContent = `(${g.ratingCount} voto${g.ratingCount !== 1 ? 's' : ''})`;
    ratingRow.style.display = 'flex';
  } else {
    ratingRow.style.display = 'none';
  }

  const iPlayers  = currentIcons['icon_game_players']  ? `<img src="${currentIcons['icon_game_players']}"  style="width:22px;height:22px;object-fit:contain">` : '👥';
  const iAge      = currentIcons['icon_game_age']      ? `<img src="${currentIcons['icon_game_age']}"      style="width:22px;height:22px;object-fit:contain">` : '🔞';
  const iDuration = currentIcons['icon_game_duration'] ? `<img src="${currentIcons['icon_game_duration']}" style="width:22px;height:22px;object-fit:contain">` : '⏱';
  const stats = [
    { icon: iPlayers,  label: i18n('lbl_players'), value: g.players  || '—' },
    { icon: iAge,      label: i18n('lbl_age'),     value: g.age      || '—' },
    { icon: iDuration, label: i18n('lbl_duration'),value: g.duration || '—' },
  ];
  document.getElementById('gd-stats').innerHTML = stats.map(s => `
    <div class="gd-stat">
      <div class="gd-stat-icon">${s.icon}</div>
      <div class="gd-stat-label">${s.label}</div>
      <div class="gd-stat-value">${s.value}</div>
    </div>`).join('');

  const descEl = document.getElementById('gd-desc');
  const desc   = (currentLang === 'ca' && g.description_ca) ? g.description_ca : (g.description || '');
  descEl.textContent = desc;
  descEl.style.display = desc ? 'block' : 'none';

  // Botón valorar — solo si está logado
  const rateBtn = document.getElementById('btn-rate-from-detail');
  if (rateBtn) {
    if (currentUser) {
      rateBtn.style.display = 'inline-flex';
      rateBtn.onclick = () => {
        closeModal('modal-game-detail');
        openRateGame(g.id, g.name);
      };
    } else {
      rateBtn.style.display = 'none';
    }
  }

  // Botón "Me sé este juego" — solo si está logado
  const knowRow = document.getElementById('know-game-row');
  if (knowRow) knowRow.style.display = currentUser ? 'flex' : 'none';

  if (currentUser) {
    const knownGames = currentUserData?.knownGames ?? [];
    updateKnowBtn(knownGames.includes(g.id));
    countPlayersWhoKnow(g.id);
  }

  openModal('modal-game-detail');
};

function updateKnowBtn(isKnown) {
  const btn   = document.getElementById('btn-know-game');
  const icon  = document.getElementById('know-game-icon');
  const label = document.getElementById('know-game-label');
  if (!btn) return;
  btn.classList.toggle('known', isKnown);
  icon.textContent  = isKnown ? '✅' : '⭐';
  label.textContent = isKnown ? '¡Me lo sé!' : 'Me sé este juego';
}

async function countPlayersWhoKnow(gameId) {
  const el = document.getElementById('know-count');
  if (!el) return;
  try {
    const snap = await getDocs(collection(db, 'users'));
    let count = 0;
    snap.forEach(d => { if ((d.data().knownGames ?? []).includes(gameId)) count++; });
    el.textContent = count > 0 ? `${count} jugador${count !== 1 ? 'es' : ''} lo domina${count !== 1 ? 'n' : ''}` : '';
  } catch (_) { el.textContent = ''; }
}

window.toggleKnowGame = async function () {
  if (!currentGameDetail) return;
  const gameId     = currentGameDetail.id;
  const knownGames = currentUserData.knownGames ?? [];
  const isKnown    = knownGames.includes(gameId);

  const newList = isKnown
    ? knownGames.filter(id => id !== gameId)
    : [...knownGames, gameId];

  await updateDoc(doc(db, 'users', currentUser.uid), { knownGames: newList });
  currentUserData.knownGames = newList;

  updateKnowBtn(!isKnown);
  countPlayersWhoKnow(gameId);
  toast(isKnown ? 'Juego eliminado de tu lista' : '¡Juego añadido a tu lista!', isKnown ? 'info' : 'success');
};

window.deleteGame = function (id, name) {
  confirm('Eliminar juego', `¿Eliminar "${name}" de la ludoteca?`, async () => {
    await deleteDoc(doc(db, 'games', id));
    toast('Juego eliminado', 'success');
    loadGames();
  });
};

// ─────────────────────────────────────────
//  IMPORTAR COLECCIÓN BGG
// ─────────────────────────────────────────
window.importarColeccionBGG = async function () {
  const btn    = document.getElementById('btn-import-bgg-col');
  const status = document.getElementById('bgg-import-status');

  btn.disabled    = true;
  btn.textContent = '⏳ Conectando con BGG...';
  status.style.display = 'block';
  status.innerHTML     = '🔐 Iniciando sesión en BoardGameGeek...';

  try {
    // Llamar al Worker con action=bgg-import
    const res = await fetch(`${BGG_WORKER_URL}?action=bgg-import`, {
      signal: AbortSignal.timeout(30000),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: `Error ${res.status}` }));
      throw new Error(err.error || `Error ${res.status}`);
    }

    const xmlText = await res.text();
    status.innerHTML = '📦 Procesando colección...';

    const xml   = new DOMParser().parseFromString(xmlText, 'text/xml');
    const items = [...xml.querySelectorAll('item')];

    if (items.length === 0) {
      status.innerHTML = '⚠️ No se encontraron juegos en tu colección de BGG marcados como "owned".<br>Añade juegos en boardgamegeek.com → busca un juego → botón "Own".';
      btn.disabled = false;
      btn.textContent = '⬇️ Importar mi colección BGG';
      return;
    }

    status.innerHTML = `✅ ${items.length} juego(s) encontrado(s). Importando...`;

    // Obtener juegos ya existentes para no duplicar
    const existingSnap  = await getDocs(collection(db, 'games'));
    const existingNames = new Set();
    existingSnap.forEach(d => existingNames.add(d.data().name?.toLowerCase().trim()));

    let importados = 0, omitidos = 0, errores = 0;

    for (const item of items) {
      try {
        const nameEl = item.querySelector('name[sortindex="1"]') || item.querySelector('name');
        const name   = nameEl?.textContent?.trim() ?? '';
        if (!name) { omitidos++; continue; }

        // Saltar duplicados
        if (existingNames.has(name.toLowerCase().trim())) {
          omitidos++;
          continue;
        }

        // Parsear datos
        const year     = item.querySelector('yearpublished')?.textContent?.trim() ?? '';
        const minP     = item.querySelector('stats')?.getAttribute('minplayers') ?? '';
        const maxP     = item.querySelector('stats')?.getAttribute('maxplayers') ?? '';
        const minAge   = item.querySelector('stats')?.getAttribute('minplayers') ?? '';  // usamos minage de otro campo
        const minAgeEl = item.querySelector('stats[minage]');
        const age      = item.querySelector('stats')?.getAttribute('minage') ?? '';
        const minTime  = item.querySelector('stats')?.getAttribute('minplaytime') ?? '';
        const maxTime  = item.querySelector('stats')?.getAttribute('maxplaytime') ?? '';
        const thumb    = item.querySelector('thumbnail')?.textContent?.trim() ?? '';
        const image    = item.querySelector('image')?.textContent?.trim() ?? '';
        const rawDesc  = item.querySelector('description')?.textContent?.trim() ?? '';
        const desc     = new DOMParser().parseFromString(rawDesc, 'text/html').body.textContent ?? '';

        const players  = minP && maxP ? (minP === maxP ? minP : `${minP}–${maxP}`) : '';
        const ageStr   = age && age !== '0' ? `${age}+` : '';
        const duration = minTime && maxTime
          ? (minTime === maxTime ? `${minTime} min` : `${minTime}–${maxTime} min`)
          : (minTime ? `${minTime} min` : '');

        const fixUrl = u => u?.startsWith('//') ? 'https:' + u : u;
        const imgUrl = fixUrl(image || thumb);

        // Subir imagen a Cloudinary
        let photoURL = '';
        if (imgUrl) {
          try {
            const imgRes = await fetch(imgUrl, { signal: AbortSignal.timeout(8000) });
            if (imgRes.ok) {
              const blob = await imgRes.blob();
              const file = new File([blob], 'bgg.jpg', { type: blob.type || 'image/jpeg' });
              photoURL   = await uploadToCloudinary(file);
            }
          } catch (_) {
            photoURL = imgUrl; // usar URL de BGG como fallback
          }
        }

        await addDoc(collection(db, 'games'), {
          name, photoURL,
          players:     players,
          age:         ageStr,
          duration:    duration,
          category:    '',
          description: desc,
          bggId:       item.getAttribute('objectid') ?? '',
          bggYear:     year,
          createdAt:   serverTimestamp(),
        });

        existingNames.add(name.toLowerCase().trim());
        importados++;
        status.innerHTML = `⏳ Importando... ${importados}/${items.length - omitidos} juegos añadidos`;

      } catch (e) {
        console.warn('Error importando juego:', e);
        errores++;
      }
    }

    status.innerHTML = `
      ✅ <strong>Importación completada</strong><br>
      🎮 Juegos añadidos: <strong>${importados}</strong><br>
      ⏭️ Ya existían (omitidos): <strong>${omitidos}</strong><br>
      ${errores > 0 ? `⚠️ Errores: <strong>${errores}</strong><br>` : ''}
      Recarga la sección Juegos para verlos.
    `;
    toast(`✅ ${importados} juego(s) importados de BGG`, 'success');
    loadGames();

  } catch (err) {
    console.error('BGG import error:', err);
    status.innerHTML = `❌ <strong>Error:</strong> ${err.message}<br><br>
      Comprueba que <strong>BGG_USERNAME</strong> y <strong>BGG_PASSWORD</strong> están configurados como variables secretas en el Worker de Cloudflare.`;
    toast('Error importando colección de BGG', 'error');
  } finally {
    btn.disabled    = false;
    btn.textContent = '⬇️ Importar mi colección BGG';
  }
};

window.adminAddGame = async function () {
  const name      = document.getElementById('admin-game-name').value.trim();
  const fileInput = document.getElementById('admin-game-img');
  if (!name) { toast('Introduce el nombre del juego', 'error'); return; }
  let photoURL = '';
  if (fileInput.files[0]) {
    try { toast('Subiendo imagen...', 'info'); photoURL = await uploadToCloudinary(fileInput.files[0]); }
    catch (_) { toast('Error subiendo imagen', 'error'); return; }
  }
  const players  = document.getElementById('admin-game-players').value.trim();
  const age      = document.getElementById('admin-game-age').value.trim();
  const duration = document.getElementById('admin-game-duration').value.trim();
  const category = document.getElementById('admin-game-category').value.trim();
  const desc     = document.getElementById('admin-game-desc').value.trim();

  await addDoc(collection(db, 'games'), {
    name, photoURL, players, age, duration, category,
    description: desc, createdAt: serverTimestamp(),
  });
  toast(`"${name}" añadido`, 'success');
  ['admin-game-name','admin-game-players','admin-game-age','admin-game-duration','admin-game-category','admin-game-desc']
    .forEach(id => { document.getElementById(id).value = ''; });
  fileInput.value = '';
  loadGames();
};

// =============================================
//  SESSIONS — REALTIME with onSnapshot
// =============================================
function startSessionsListener() {
  const container = document.getElementById('sessions-container');
  container.innerHTML = '<div class="loading"><div class="spinner"></div></div>';

  // Cancel any previous listener
  if (unsubSessions) { unsubSessions(); unsubSessions = null; }

  const q = query(collection(db, 'sessions'), orderBy('createdAt', 'desc'));

  unsubSessions = onSnapshot(q, (snap) => {
    if (snap.empty) {
      const emptyIcon = currentIcons['icon_sessions_empty']
        ? `<img src="${currentIcons['icon_sessions_empty']}" style="width:64px;height:64px;object-fit:contain">`
        : '📅';
      container.innerHTML = `<div class="empty-state"><div class="icon">${emptyIcon}</div><h3>${i18n('sessions_empty')}</h3><p>${i18n('sessions_empty_sub')}</p></div>`;
      return;
    }
    container.innerHTML = '';
    snap.forEach(d => renderSession({ id: d.id, ...d.data() }, container));
  }, (err) => {
    console.error('Sessions listener error:', err);
    toast('Error cargando partidas', 'error');
  });
}

/** Resolve a user name with cache */
async function resolveUserName(uid) {
  if (userNamesCache[uid]) return userNamesCache[uid];
  try {
    const snap = await getDoc(doc(db, 'users', uid));
    const name = snap.exists() ? snap.data().name : 'Usuario';
    userNamesCache[uid] = name;
    return name;
  } catch (_) { return 'Usuario'; }
}

function renderSession(s, container) {
  const isMine   = s.createdBy === currentUser.uid;
  const players  = s.players ?? [];
  const isFull   = players.length >= s.maxPlayers;
  const joined   = players.includes(currentUser.uid);
  const isAdmin  = currentUserData?.isAdmin || currentUser?.email === SUPER_ADMIN;
  const finished = s.status === 'finished';
  const myVote   = s.votes?.[currentUser.uid];
  const hasVoted = !!myVote;

  const date = s.date
    ? new Date(s.date).toLocaleString('es-ES', { dateStyle: 'medium', timeStyle: 'short' })
    : 'Sin fecha';

  // Resultado: mostrar ganador si ya está resuelto
  let resultBadge = '';
  if (finished && s.winner) {
    resultBadge = `<span class="session-tag tag-winner">🏆 ${s.winnerName ?? 'Ganador'}</span>`;
  } else if (finished) {
    resultBadge = `<span class="session-tag tag-open">🗳️ Votación en curso</span>`;
  }

  const card = document.createElement('div');
  card.className = `session-card${finished ? ' session-finished' : ''}`;
  card.id = `scard-${s.id}`;
  card.innerHTML = `
    <div>
      <div class="session-title">${s.gameName ?? 'Juego'}</div>
      <div class="session-tags">
        ${isMine    ? '<span class="session-tag tag-mine">Tuya</span>' : ''}
        ${finished  ? resultBadge : (!isFull ? '<span class="session-tag tag-open">Abierta</span>' : '<span class="session-tag tag-full">Llena</span>')}
      </div>
      <div class="session-meta">
        <span>📅 ${date}</span>
        <span>👥 ${players.length}/${s.maxPlayers}</span>
        ${s.description ? `<span>💬 ${s.description}</span>` : ''}
      </div>
      <div class="players-bar" id="pbar-${s.id}">
        ${players.map(uid => `<span class="player-chip" id="pchip-${s.id}-${uid}">...</span>`).join('')}
      </div>
    </div>
    <div class="session-actions">
      ${!finished && !isMine && !joined && !isFull ? `<button class="btn btn-primary btn-sm" onclick="joinSession('${s.id}')">Unirse</button>` : ''}
      ${!finished && !isMine && joined             ? `<button class="btn btn-outline btn-sm" onclick="leaveSession('${s.id}')">Salir</button>` : ''}
      ${!finished && (isMine || isAdmin) && players.length >= 2
        ? `<button class="btn btn-primary btn-sm" onclick="finishSession('${s.id}')">Finalizar</button>` : ''}
      ${finished && joined && !hasVoted && !s.winner
        ? `<button class="btn btn-primary btn-sm" onclick="openVoteWinner('${s.id}')">🗳️ Votar ganador</button>` : ''}
      ${finished && joined && hasVoted && !s.winner
        ? `<button class="btn btn-outline btn-sm" onclick="openVoteWinner('${s.id}')">Tu voto: ${myVote === 'none' ? 'Empate' : '...'}</button>` : ''}
      ${isMine || isAdmin ? `<button class="btn btn-danger btn-sm" onclick="deleteSession('${s.id}')">🗑️</button>` : ''}
    </div>
  `;
  container.appendChild(card);

  // Resolver nombres — el voto propio mostrar nombre
  players.forEach(async uid => {
    const el = document.getElementById(`pchip-${s.id}-${uid}`);
    if (!el) return;
    const name = await resolveUserName(uid);
    el.textContent = name;
    el.style.cursor = 'pointer';
    el.onclick = async () => {
      const snap = await getDoc(doc(db, 'users', uid));
      if (snap.exists()) openPublicProfile(snap.data());
    };
  });

  // Si hay voto propio, actualizar label del botón con el nombre votado
  if (finished && joined && hasVoted && !s.winner && myVote !== 'none') {
    resolveUserName(myVote).then(name => {
      const btn = card.querySelector('.btn-outline');
      if (btn) btn.textContent = `Tu voto: ${name}`;
    });
  }
}

window.finishSession = function(id) {
  confirm('Finalizar partida', '¿Marcar esta partida como terminada? Los jugadores podrán votar al ganador.', async () => {
    await updateDoc(doc(db, 'sessions', id), { status: 'finished', votes: {}, winner: null });
    toast('Partida finalizada — los jugadores ya pueden votar', 'success');
  });
};

window.openVoteWinner = async function(sessionId) {
  const snap = await getDoc(doc(db, 'sessions', sessionId));
  if (!snap.exists()) return;
  const s       = snap.data();
  const players = s.players ?? [];
  const myVote  = s.votes?.[currentUser.uid];

  const list = document.getElementById('vote-players-list');
  list.innerHTML = '';

  // Contar votos actuales
  const votes  = s.votes ?? {};
  const counts = {};
  Object.values(votes).forEach(v => { if (v !== 'none') counts[v] = (counts[v] ?? 0) + 1; });

  for (const uid of players) {
    const name    = await resolveUserName(uid);
    const vCount  = counts[uid] ?? 0;
    const isMyV   = myVote === uid;
    const btn     = document.createElement('button');
    btn.className = `btn ${isMyV ? 'btn-primary' : 'btn-secondary'} btn-sm`;
    btn.style.cssText = 'justify-content:space-between;width:100%';
    btn.innerHTML = `<span>${name}</span><span style="font-size:12px;opacity:0.7">${vCount} voto${vCount !== 1 ? 's' : ''}</span>`;
    btn.onclick = () => castVote(sessionId, uid);
    list.appendChild(btn);
  }

  // Opción empate/nadie
  const noneBtn = document.createElement('button');
  noneBtn.className = `btn ${myVote === 'none' ? 'btn-primary' : 'btn-outline'} btn-sm`;
  noneBtn.style.cssText = 'width:100%';
  noneBtn.textContent = '🤝 Empate / Nadie';
  noneBtn.onclick = () => castVote(sessionId, 'none');
  list.appendChild(noneBtn);

  // Status votos
  const total   = players.length;
  const voted   = Object.keys(votes).length;
  document.getElementById('vote-status').textContent = `${voted} de ${total} jugadores han votado`;

  // Almacenar sessionId para usarlo en castVote
  document.getElementById('modal-vote-winner').dataset.sessionId = sessionId;
  openModal('modal-vote-winner');
};

window.castVote = async function(sessionId, votedUid) {
  if (!currentUser) return;
  const voteData = { [`votes.${currentUser.uid}`]: votedUid };
  await updateDoc(doc(db, 'sessions', sessionId), voteData);

  // Releer para ver si hay mayoría
  const snap    = await getDoc(doc(db, 'sessions', sessionId));
  const s       = snap.data();
  const players = s.players ?? [];
  const votes   = s.votes ?? {};
  const voted   = Object.keys(votes).length;

  // Mayoría absoluta = más de la mitad de jugadores
  const counts = {};
  Object.values(votes).forEach(v => { counts[v] = (counts[v] ?? 0) + 1; });
  const majority = Math.floor(players.length / 2) + 1;
  const winner   = Object.entries(counts).find(([, c]) => c >= majority);

  if (winner && winner[0] !== 'none') {
    const winnerId   = winner[0];
    const winnerName = await resolveUserName(winnerId);
    // Registrar ganador en la sesión
    await updateDoc(doc(db, 'sessions', sessionId), { winner: winnerId, winnerName });
    // Actualizar stats de todos los jugadores
    for (const uid of players) {
      await updateDoc(doc(db, 'users', uid), {
        gamesPlayed: increment(1),
        ...(uid === winnerId ? { wins: increment(1) } : {})
      });
    }
    toast(`🏆 ¡${winnerName} gana la partida!`, 'success');
    closeModal('modal-vote-winner');
  } else if (voted >= players.length) {
    // Todos votaron pero empate
    await updateDoc(doc(db, 'sessions', sessionId), { winner: 'draw', winnerName: 'Empate' });
    for (const uid of players) {
      await updateDoc(doc(db, 'users', uid), { gamesPlayed: increment(1) });
    }
    toast('🤝 Empate — se han actualizado las estadísticas', 'success');
    closeModal('modal-vote-winner');
  } else {
    toast('Voto registrado ✓', 'success');
    // Refrescar el modal
    openVoteWinner(sessionId);
  }
};

window.openCreateSession = async function () {
  const sel  = document.getElementById('session-game');
  sel.innerHTML = '<option value="">Selecciona un juego...</option>';
  const snap = await getDocs(collection(db, 'games'));
  snap.forEach(d => {
    const o = document.createElement('option');
    o.value = d.id; o.textContent = d.data().name;
    sel.appendChild(o);
  });
  document.getElementById('session-date').value = '';
  document.getElementById('session-max').value  = 4;
  document.getElementById('session-desc').value = '';
  openModal('modal-session');
};

window.createSession = async function () {
  const gameId = document.getElementById('session-game').value;
  const date   = document.getElementById('session-date').value;
  const maxP   = parseInt(document.getElementById('session-max').value);
  const desc   = document.getElementById('session-desc').value.trim();
  if (!gameId || !date) { toast('Completa todos los campos', 'error'); return; }
  const gs = await getDoc(doc(db, 'games', gameId));
  await addDoc(collection(db, 'sessions'), {
    gameId, gameName: gs.exists() ? gs.data().name : 'Juego',
    date, maxPlayers: maxP, description: desc,
    createdBy: currentUser.uid, players: [currentUser.uid],
    createdAt: serverTimestamp(),
  });
  toast('¡Partida creada!', 'success');
  closeModal('modal-session');
  // onSnapshot will update the list automatically
};

window.joinSession = async function (id) {
  await updateDoc(doc(db, 'sessions', id), { players: arrayUnion(currentUser.uid) });
  toast('¡Te has unido!', 'success');
  // onSnapshot updates list automatically
};

window.leaveSession = async function (id) {
  await updateDoc(doc(db, 'sessions', id), { players: arrayRemove(currentUser.uid) });
  toast('Has salido de la partida', 'info');
};

window.deleteSession = function (id) {
  confirm('Eliminar partida', '¿Eliminar esta partida definitivamente?', async () => {
    await deleteDoc(doc(db, 'sessions', id));
    toast('Partida eliminada', 'success');
  });
};

// =============================================
//  PROFILE
// =============================================
window.handleAvatarChange = function (e) {
  const file = e.target.files[0];
  if (!file) return;
  newAvatarFile = file;
  const reader = new FileReader();
  reader.onload = ev => {
    document.getElementById('profile-avatar-preview').innerHTML =
      `<img src="${ev.target.result}" alt="avatar">`;
  };
  reader.readAsDataURL(file);
};

window.saveProfile = async function () {
  const name     = document.getElementById('profile-name').value.trim();
  const fullName = document.getElementById('profile-fullname').value.trim();
  const age      = parseInt(document.getElementById('profile-age').value);
  if (!name) { toast('El nombre de usuario no puede estar vacío', 'error'); return; }
  let photoURL = currentUserData.photoURL ?? '';
  if (newAvatarFile) {
    try {
      toast('Subiendo imagen...', 'info');
      photoURL = await uploadToCloudinary(newAvatarFile);
      newAvatarFile = null;
    } catch (_) { toast('Error subiendo imagen', 'error'); return; }
  }
  await updateDoc(doc(db, 'users', currentUser.uid), { name, fullName, age: age || null, photoURL });
  await updateProfile(currentUser, { displayName: name, photoURL });
  currentUserData.name     = name;
  currentUserData.fullName = fullName;
  currentUserData.age      = age || null;
  currentUserData.photoURL = photoURL;
  userNamesCache[currentUser.uid] = name;
  const av = document.getElementById('nav-user-avatar');
  av.innerHTML = photoURL ? `<img src="${photoURL}" alt="avatar">` : '';
  if (!photoURL) av.textContent = name[0].toUpperCase();
  toast('Perfil actualizado', 'success');
};

// =============================================
//  TABLÓN DE ANUNCIOS
// =============================================

// ── Brevo config ──
// La API key de Brevo se guarda de forma SEGURA en el Worker de Cloudflare.
// Solo necesitas añadirla allí — no va en este archivo.
// Ver instrucciones abajo.

let currentAnuncioTipo = 'noticia';

window.selectTipo = function (tipo) {
  currentAnuncioTipo = tipo;
  document.querySelectorAll('.tipo-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tipo === tipo);
  });
  const hint = document.getElementById('anuncio-tipo-hint');
  if (hint) {
    hint.textContent = tipo === 'noticia'
      ? 'Visible para todo el mundo. No se envía por email.'
      : 'Solo visible para miembros. Se enviará por email a todos los miembros.';
  }
};

async function loadTablon() {
  const c       = document.getElementById('tablon-container');
  const isAdmin = currentUserData?.isAdmin || currentUser?.email === SUPER_ADMIN;
  const isMember = currentUserData?.isMember || isAdmin;

  const section = document.getElementById('section-tablon');
  const header  = section.querySelector('.page-header');
  if (isAdmin && !document.getElementById('btn-nuevo-anuncio')) {
    header.style.cssText = 'display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:12px';
    const btn = document.createElement('button');
    btn.id = 'btn-nuevo-anuncio';
    btn.className = 'btn btn-primary btn-sm';
    btn.textContent = i18n('tablon_nuevo');
    btn.onclick = () => { currentAnuncioTipo = 'noticia'; selectTipo('noticia'); openModal('modal-anuncio'); };
    header.appendChild(btn);
  }

  c.innerHTML = '<div class="loading"><div class="spinner"></div></div>';

  try {
    const q    = query(collection(db, 'anuncios'), orderBy('createdAt', 'desc'));
    const snap = await getDocs(q);

    // Filtrar: noticias públicas siempre; miembros solo si isMember
    const visible = [];
    snap.forEach(d => {
      const a = { id: d.id, ...d.data() };
      if (a.tipo === 'miembros' && !isMember) return;
      visible.push(a);
    });

    if (visible.length === 0) {
      c.innerHTML = `<div class="empty-state"><div class="icon">📢</div><h3>${i18n('tablon_empty')}</h3><p>${i18n('tablon_empty_sub')}</p></div>`;
      return;
    }

    c.innerHTML = '';
    visible.forEach(a => c.appendChild(buildAnuncioCard(a, isAdmin)));
  } catch (err) {
    console.error(err);
    c.innerHTML = '<p style="color:var(--text2)">Error cargando el tablón.</p>';
  }
  applyTranslations();
}

function buildAnuncioCard(a, isAdmin) {
  const tipo      = a.tipo || 'noticia';
  const tipoLabel = { noticia: '🌍 Noticia', miembros: '⭐ Solo miembros' }[tipo] || tipo;
  const fecha     = a.createdAt?.toDate
    ? a.createdAt.toDate().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
    : '—';
  const av = a.autorFoto
    ? `<div class="anuncio-author-av"><img src="${a.autorFoto}" alt="${a.autorNombre}"></div>`
    : `<div class="anuncio-author-av">${(a.autorNombre || 'A')[0].toUpperCase()}</div>`;

  const card = document.createElement('div');
  card.className = `anuncio-card tipo-${tipo}`;
  card.innerHTML = `
    <div class="anuncio-header">
      <div class="anuncio-title">${a.titulo}</div>
      <span class="anuncio-badge badge-${tipo}">${tipoLabel}</span>
    </div>
    <div class="anuncio-body">${a.contenido}</div>
    <div class="anuncio-footer">
      <div class="anuncio-author">
        ${av}
        <span>Por <strong>${a.autorNombre || 'Admin'}</strong></span>
      </div>
      <div style="display:flex;align-items:center;gap:10px">
        <span>${fecha}</span>
        ${isAdmin ? `<button class="anuncio-delete-btn" onclick="eliminarAnuncio('${a.id}')">🗑️ Eliminar</button>` : ''}
      </div>
    </div>
  `;
  return card;
}

window.publicarAnuncio = async function () {
  const titulo    = document.getElementById('anuncio-titulo').value.trim();
  const contenido = document.getElementById('anuncio-contenido').value.trim();
  if (!titulo || !contenido) { toast('Rellena el título y el contenido', 'error'); return; }

  try {
    await addDoc(collection(db, 'anuncios'), {
      titulo, contenido,
      tipo:        currentAnuncioTipo,
      autorId:     currentUser.uid,
      autorNombre: currentUserData.name || 'Admin',
      autorFoto:   currentUserData.photoURL || '',
      createdAt:   serverTimestamp(),
    });

    toast('¡Anuncio publicado!', 'success');
    closeModal('modal-anuncio');
    document.getElementById('anuncio-titulo').value    = '';
    document.getElementById('anuncio-contenido').value = '';
    loadTablon();

    // Solo miembros → enviar email a miembros
    if (currentAnuncioTipo === 'miembros') {
      enviarEmailsAnuncio({ titulo, contenido, tipo: '⭐ Solo miembros', soloMiembros: true });
    }
  } catch (err) {
    console.error(err);
    toast('Error publicando el anuncio', 'error');
  }
};

async function enviarEmailsAnuncio({ titulo, contenido, tipo, soloMiembros = false }) {
  try {
    const snap  = await getDocs(collection(db, 'users'));
    const usuarios = [];
    snap.forEach(d => {
      const u = d.data();
      if (u.isBanned || !u.email || !u.profileComplete) return;
      if (soloMiembros && !u.isMember && !u.isAdmin) return;
      usuarios.push({ email: u.email, name: u.name || u.email });
    });

    if (usuarios.length === 0) { toast('No hay destinatarios para este anuncio', 'info'); return; }
    toast(`Enviando emails a ${usuarios.length} miembro(s)...`, 'info');

    const res = await fetch(`${BGG_WORKER_URL}?action=email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usuarios, titulo, contenido, tipo, autor: currentUserData.name || 'Admin' }),
      signal: AbortSignal.timeout(30000),
    });

    const data = await res.json();
    if (res.ok) {
      toast(`✅ Emails enviados: ${data.enviados}/${usuarios.length}`, 'success');
    } else {
      throw new Error(data.error || 'Error en el Worker');
    }
  } catch (err) {
    console.error('Error enviando emails:', err);
    toast('Error enviando emails: ' + err.message, 'error');
  }
}

window.eliminarAnuncio = function (id) {
  confirm('Eliminar anuncio', '¿Eliminar este anuncio del tablón?', async () => {
    await deleteDoc(doc(db, 'anuncios', id));
    toast('Anuncio eliminado', 'success');
    loadTablon();
  });
};

// =============================================
//  BGG — BoardGameGeek API integration
// =============================================

const BGG_WORKER_URL = 'https://bgg-proxy.yuiopilyas.workers.dev';

async function bggFetch(path, retries = 3) {
  if (BGG_WORKER_URL.includes('TU_WORKER')) throw new Error('NO_WORKER');
  const target = `https://boardgamegeek.com/xmlapi2/${path}`;
  const url    = `${BGG_WORKER_URL}?url=${encodeURIComponent(target)}`;

  for (let i = 0; i < retries; i++) {
    const res  = await fetch(url, { signal: AbortSignal.timeout(20000) });
    const text = await res.text();

    console.log(`BGG attempt ${i+1} — status:${res.status} length:${text.length}`);
    console.log('BGG raw (first 300):', text.slice(0, 300));

    if (!text || text.trim().length === 0) {
      if (i < retries - 1) { await new Promise(r => setTimeout(r, 2000)); continue; }
      throw new Error('Respuesta vacía del servidor');
    }

    const xml = new DOMParser().parseFromString(text, 'text/xml');

    // BGG returns 202 + <message> when the request is queued — retry after delay
    const msg = xml.querySelector('message');
    if (msg) {
      console.log('BGG queued message:', msg.textContent);
      if (i < retries - 1) { await new Promise(r => setTimeout(r, 3000)); continue; }
      throw new Error('BGG tardó demasiado. Inténtalo de nuevo.');
    }

    return xml;
  }
  throw new Error('Sin respuesta tras varios intentos');
}

// Búsqueda con debounce — se dispara 500ms después de dejar de escribir
let _bggDebounceTimer = null;
window.debounceBGGSearch = function(value) {
  clearTimeout(_bggDebounceTimer);
  const q = value.trim();
  if (q.length < 2) return; // mínimo 2 caracteres
  _bggDebounceTimer = setTimeout(() => {
    document.getElementById('bgg-query').value = q;
    searchBGG();
  }, 500);
};

window.searchBGG = async function () {
  const query   = document.getElementById('bgg-query').value.trim();
  const status  = document.getElementById('bgg-status');
  const results = document.getElementById('bgg-results');
  if (!query) return;

  status.textContent = 'Buscando...';
  results.innerHTML  = '<div class="loading"><div class="spinner"></div></div>';

  try {
    // Buscar sin filtro de tipo para máxima compatibilidad
    const searchXml = await bggFetch(`search?query=${encodeURIComponent(query)}`);
    console.log('Search XML root:', searchXml.documentElement?.tagName);

    // Filtrar solo boardgame y boardgameexpansion
    const allItems = [...searchXml.querySelectorAll('item')];
    const items = allItems.filter(i => {
      const type = i.getAttribute('type') ?? '';
      return type === 'boardgame' || type === 'boardgameexpansion' || type === '';
    });

    console.log(`Total items: ${allItems.length}, filtered: ${items.length}`);

    if (items.length === 0) {
      status.textContent = `Sin resultados para "${query}". Prueba en inglés o con otro término.`;
      results.innerHTML  = '';
      return;
    }

    const ids = items.slice(0, 15).map(i => i.getAttribute('id')).join(',');
    status.textContent = `Cargando detalles...`;

    const detailXml = await bggFetch(`thing?id=${ids}&stats=1`);
    console.log('Detail XML root:', detailXml.documentElement?.tagName);
    const things = [...detailXml.querySelectorAll('item')];
    console.log('Things found:', things.length);

    if (things.length === 0) {
      status.textContent = 'No se pudieron cargar los detalles. Inténtalo de nuevo.';
      results.innerHTML  = '';
      return;
    }

    status.textContent = `${things.length} resultado(s) para "${query}"`;
    results.innerHTML  = '';

    const existingSnap  = await getDocs(collection(db, 'games'));
    const existingNames = new Set();
    existingSnap.forEach(d => existingNames.add(d.data().name?.toLowerCase()));

    things.forEach(t => results.appendChild(buildBGGCard(t, existingNames)));

  } catch (err) {
    console.error('BGG error:', err);
    status.textContent = '';
    results.innerHTML = `
      <div style="text-align:center;padding:24px;color:var(--text2)">
        <div style="font-size:32px;margin-bottom:8px">⚠️</div>
        <p style="font-weight:600;margin-bottom:6px">${err.message}</p>
        <p style="font-size:12px;color:var(--text3);margin-bottom:14px">Abre la consola del navegador (F12) para ver más detalles.</p>
        <button class="btn btn-secondary btn-sm" onclick="searchBGG()">Reintentar</button>
      </div>`;
  }
};

function buildBGGCard(t, existingNames) {
  // Parse XML fields
  const id       = t.getAttribute('id');
  const nameEl   = t.querySelector('name[type="primary"]');
  const name     = nameEl ? nameEl.getAttribute('value') : '—';
  const year     = t.querySelector('yearpublished')?.getAttribute('value') ?? '';
  const minP     = t.querySelector('minplayers')?.getAttribute('value') ?? '';
  const maxP     = t.querySelector('maxplayers')?.getAttribute('value') ?? '';
  const minAge   = t.querySelector('minage')?.getAttribute('value') ?? '';
  const minTime  = t.querySelector('minplaytime')?.getAttribute('value') ?? '';
  const maxTime  = t.querySelector('maxplaytime')?.getAttribute('value') ?? '';
  const imgUrl   = t.querySelector('image')?.textContent?.trim() ?? '';
  const thumbUrl = t.querySelector('thumbnail')?.textContent?.trim() ?? '';
  const rawDesc  = t.querySelector('description')?.textContent?.trim() ?? '';

  // Clean HTML entities from description
  const desc = new DOMParser().parseFromString(rawDesc, 'text/html').body.textContent ?? '';

  // Build readable strings
  const players  = minP && maxP ? (minP === maxP ? minP : `${minP}–${maxP}`) : (minP || maxP || '');
  const age      = minAge && minAge !== '0' ? `${minAge}+` : '';
  const duration = minTime && maxTime
    ? (minTime === maxTime ? `${minTime} min` : `${minTime}–${maxTime} min`)
    : (minTime ? `${minTime} min` : '');

  // Categories / mechanics (first 3)
  const categories = [...t.querySelectorAll('link[type="boardgamecategory"]')]
    .slice(0, 3)
    .map(l => l.getAttribute('value'))
    .join(', ');

  const alreadyAdded = existingNames.has(name.toLowerCase());

  // Image: BGG URLs need https prefix sometimes
  const fixUrl = u => u.startsWith('//') ? 'https:' + u : u;
  const thumb  = thumbUrl ? fixUrl(thumbUrl) : '';
  const full   = imgUrl   ? fixUrl(imgUrl)   : thumb;

  const card = document.createElement('div');
  card.className = 'bgg-card';
  card.dataset.bggId = id;

  card.innerHTML = `
    <div class="bgg-thumb">
      ${thumb ? `<img src="${thumb}" alt="${name}" onerror="this.style.display='none'">` : '🎮'}
    </div>
    <div class="bgg-info">
      <div class="bgg-name">${name}${year ? ` <span style="color:var(--text3);font-weight:400;font-size:13px">(${year})</span>` : ''}</div>
      <div class="bgg-meta">
        ${players  ? `<span>👥 ${players}</span>`  : ''}
        ${age      ? `<span>🔞 ${age}</span>`      : ''}
        ${duration ? `<span>⏱ ${duration}</span>` : ''}
        ${categories ? `<span>🏷 ${categories}</span>` : ''}
      </div>
      ${desc ? `<div class="bgg-desc">${desc}</div>` : ''}
    </div>
    <div class="bgg-card-actions" id="bgg-actions-${id}">
      ${alreadyAdded
        ? `<span class="bgg-added-badge">✅ Ya en la ludoteca</span>`
        : `<button class="btn btn-primary btn-sm" onclick="importFromBGG('${id}')">+ Añadir</button>`}
    </div>
  `;

  // Store parsed data on the element for import
  card._bggData = { name, year, players, age, duration, category: categories, description: desc, photoURL: full };

  return card;
}

window.importFromBGG = async function (id) {
  const card = document.querySelector(`[data-bgg-id="${id}"]`);
  if (!card || !card._bggData) return;
  const g = card._bggData;

  const actionsEl = document.getElementById(`bgg-actions-${id}`);
  if (actionsEl) actionsEl.innerHTML = '<span style="color:var(--text2);font-size:13px">Importando...</span>';

  try {
    // 1) Imagen
    let photoURL = '';
    if (g.photoURL) {
      try {
        if (actionsEl) actionsEl.innerHTML = '<span style="color:var(--text2);font-size:13px">Descargando imagen...</span>';
        const imgRes = await fetch(g.photoURL, { signal: AbortSignal.timeout(10000) });
        if (imgRes.ok) {
          const blob = await imgRes.blob();
          const file = new File([blob], 'bgg-cover.jpg', { type: blob.type || 'image/jpeg' });
          photoURL   = await uploadToCloudinary(file);
        } else {
          photoURL = g.photoURL;
        }
      } catch (_) {
        photoURL = g.photoURL;
      }
    }

    // 2) Traducir descripción via Worker (que tiene la API key segura)
    let descES = g.description;
    let descCA = g.description;

    if (g.description && g.description.length > 10) {
      try {
        if (actionsEl) actionsEl.innerHTML = '<span style="color:var(--text2);font-size:13px">Traduciendo descripción...</span>';
        const transRes = await fetch(`${BGG_WORKER_URL}?action=translate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: g.description }),
          signal: AbortSignal.timeout(20000),
        });
        if (transRes.ok) {
          const parsed = await transRes.json();
          if (parsed.es) descES = parsed.es;
          if (parsed.ca) descCA = parsed.ca;
        }
      } catch (transErr) {
        console.warn('Traducción fallida, usando original:', transErr);
      }
    }

    // 3) Guardar en Firestore
    await addDoc(collection(db, 'games'), {
      name:           g.name,
      photoURL,
      players:        g.players,
      age:            g.age,
      duration:       g.duration,
      category:       g.category,
      description:    descES,   // español (campo principal)
      description_ca: descCA,   // catalán
      bggId:          id,
      bggYear:        g.year,
      createdAt:      serverTimestamp(),
    });

    if (actionsEl) actionsEl.innerHTML = '<span class="bgg-added-badge">✅ Añadido</span>';
    toast(`"${g.name}" añadido a la ludoteca`, 'success');
    loadGames();

  } catch (err) {
    console.error(err);
    if (actionsEl) actionsEl.innerHTML = `<button class="btn btn-primary btn-sm" onclick="importFromBGG('${id}')">Reintentar</button>`;
    toast('Error al importar el juego', 'error');
  }
};

// =============================================
//  COMMUNITY — RANKING & PUBLIC PROFILES
// =============================================
// =============================================
//  RANKING — tabs: jugadores / juegos
// =============================================
let currentRankingTab = 'players';

window.switchRankingTab = function(tab) {
  currentRankingTab = tab;
  document.querySelectorAll('.ranking-tab').forEach(t => t.classList.remove('active'));
  document.getElementById(`rtab-${tab}`)?.classList.add('active');
  loadRanking();
};

async function loadRanking() {
  const c = document.getElementById('ranking-container');
  c.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
  try {
    if (currentRankingTab === 'players') await loadPlayersRanking(c);
    else                                  await loadGamesRanking(c);
  } catch(e) {
    console.error('Ranking error:', e);
    c.innerHTML = `<p style="color:var(--danger);padding:16px">${e.message}</p>`;
  }
  applyTranslations();
}

async function loadPlayersRanking(c) {
  const snap  = await getDocs(collection(db, 'users'));
  const users = [];
  snap.forEach(d => {
    const u = d.data();
    if (!u.isBanned && u.profileComplete && (u.isMember || u.isAdmin || u.email === SUPER_ADMIN))
      users.push(u);
  });

  // Ordenar: primero por victorias, luego por partidas jugadas
  users.sort((a, b) => {
    const wDiff = (b.wins ?? 0) - (a.wins ?? 0);
    return wDiff !== 0 ? wDiff : (b.gamesPlayed ?? 0) - (a.gamesPlayed ?? 0);
  });

  if (users.length === 0) {
    c.innerHTML = `<div class="empty-state"><div class="icon"></div><h3>${i18n('ranking_players_empty')}</h3></div>`;
    return;
  }

  const medals  = ['gold','silver','bronze'];
  const list    = document.createElement('div');
  list.className = 'ranking-list';

  users.forEach((u, i) => {
    const wins    = u.wins       ?? 0;
    const played  = u.gamesPlayed ?? 0;
    const posClass = i < 3 ? medals[i] : '';
    const posLabel = i < 3 ? ['🥇','🥈','🥉'][i] : `#${i+1}`;
    const av = u.photoURL
      ? `<div class="rank-avatar"><img src="${u.photoURL}" alt="${u.name}"></div>`
      : `<div class="rank-avatar">${(u.name || 'U')[0].toUpperCase()}</div>`;

    const card = document.createElement('div');
    card.className = 'ranking-card';
    card.onclick   = () => openPublicProfile(u);
    card.innerHTML = `
      <div class="rank-pos ${posClass}">${posLabel}</div>
      ${av}
      <div class="rank-info">
        <div class="rank-name">${u.name || 'Usuario'}</div>
        <div class="rank-sub">${played} ${played !== 1 ? i18n('rank_played_plural') : i18n('rank_played_singular')}</div>
      </div>
      <div class="rank-score">
        <div class="rank-score-num">${wins}</div>
        <div class="rank-score-label">${wins !== 1 ? i18n('rank_wins_plural') : i18n('rank_wins_singular')}</div>
      </div>`;
    list.appendChild(card);
  });
  c.innerHTML = '';
  c.appendChild(list);
}

async function loadGamesRanking(c) {
  const snap  = await getDocs(collection(db, 'games'));
  const games = [];
  snap.forEach(d => {
    const g = d.data();
    if (g.ratingCount > 0) games.push({ id: d.id, ...g });
  });

  games.sort((a, b) => (b.ratingAvg ?? 0) - (a.ratingAvg ?? 0));

  if (games.length === 0) {
    c.innerHTML = `<div class="empty-state"><div class="icon"></div><h3>${i18n('ranking_games_empty')}</h3><p>${i18n('ranking_games_sub')}</p></div>`;
    return;
  }

  const isLoggedIn = !!currentUser;
  const medals     = ['gold','silver','bronze'];
  const list       = document.createElement('div');
  list.className   = 'ranking-list';

  games.forEach((g, i) => {
    const avg      = (g.ratingAvg ?? 0).toFixed(1);
    const count    = g.ratingCount ?? 0;
    const posClass = i < 3 ? medals[i] : '';
    const posLabel = i < 3 ? ['🥇','🥈','🥉'][i] : `#${i+1}`;
    const img = g.photoURL
      ? `<div class="rank-avatar"><img src="${g.photoURL}" alt="${g.name}"></div>`
      : `<div class="rank-avatar">🎲</div>`;

    const card = document.createElement('div');
    card.className = 'ranking-card';
    card.innerHTML = `
      <div class="rank-pos ${posClass}">${posLabel}</div>
      ${img}
      <div class="rank-info">
        <div class="rank-name">${g.name}</div>
        <div class="rank-sub">${count} ${count !== 1 ? i18n('rank_ratings_plural') : i18n('rank_ratings_singular')}</div>
      </div>
      <div class="rank-score">
        <div class="rank-score-num">${avg}</div>
        <div class="rank-score-label">/ 10</div>
      </div>
      ${isLoggedIn ? `<button class="btn btn-outline btn-sm rank-rate-btn" onclick="event.stopPropagation();openRateGame('${g.id}','${g.name.replace(/'/g,"\\'")}')">Valorar</button>` : ''}`;
    list.appendChild(card);
  });

  // Juegos sin valoraciones aún — solo para usuarios logados
  if (isLoggedIn) {
    const ratedIds = new Set(games.map(g => g.id));
    const unratedHeader = document.createElement('p');
    unratedHeader.style.cssText = 'color:var(--text2);font-size:13px;margin:20px 0 8px;padding:0 4px';
    unratedHeader.textContent   = i18n('ranking_unrated');
    const unratedList = document.createElement('div');
    unratedList.className = 'ranking-list';

    snap.forEach(d => {
      if (ratedIds.has(d.id)) return;
      const g = d.data();
      const img = g.photoURL
        ? `<div class="rank-avatar"><img src="${g.photoURL}" alt="${g.name}"></div>`
        : `<div class="rank-avatar">🎲</div>`;
      const card = document.createElement('div');
      card.className = 'ranking-card';
      card.innerHTML = `
        <div class="rank-pos"></div>
        ${img}
        <div class="rank-info"><div class="rank-name">${g.name}</div><div class="rank-sub">${i18n('rank_no_votes')}</div></div>
        <div class="rank-score"><div class="rank-score-num">—</div><div class="rank-score-label">/ 10</div></div>
        <button class="btn btn-outline btn-sm rank-rate-btn" onclick="event.stopPropagation();openRateGame('${d.id}','${g.name.replace(/'/g,"\\'")}')">Valorar</button>`;
      unratedList.appendChild(card);
    });

    if (unratedList.children.length > 0) {
      c.innerHTML = '';
      c.appendChild(list);
      c.appendChild(unratedHeader);
      c.appendChild(unratedList);
      return;
    }
  }

  c.innerHTML = '';
  c.appendChild(list);
}

// ── Valorar juego ─────────────────────────────
let selectedRating = 0;

window.openRateGame = function(gameId, gameName) {
  document.getElementById('rate-game-title').textContent = `⭐ ${gameName}`;
  document.getElementById('rate-game-id').value = gameId;
  selectedRating = 0;
  document.getElementById('rate-selected-label').textContent = '';
  document.querySelectorAll('.star-btn').forEach(s => s.classList.remove('active'));
  openModal('modal-rate-game');

  // Star interaction — works on both mouse and touch
  const stars = document.querySelectorAll('.star-btn');
  stars.forEach(s => {
    // Mouse hover
    s.onmouseenter = () => {
      const v = +s.dataset.v;
      stars.forEach(st => st.classList.toggle('hover', +st.dataset.v <= v));
    };
    s.onmouseleave = () => stars.forEach(st => st.classList.remove('hover'));
    // Click / tap
    s.onclick = (e) => {
      e.preventDefault();
      selectedRating = +s.dataset.v;
      stars.forEach(st => {
        st.classList.toggle('active', +st.dataset.v <= selectedRating);
        st.classList.remove('hover');
      });
      document.getElementById('rate-selected-label').textContent = `${selectedRating} / 10`;
    };
  });
};

window.submitGameRating = async function() {
  if (!selectedRating) { toast('Selecciona una puntuación', 'error'); return; }
  const gameId = document.getElementById('rate-game-id').value;
  if (!gameId || !currentUser) return;

  try {
    // Guardar/sobreescribir voto del usuario en subcolección
    await setDoc(doc(db, 'games', gameId, 'ratings', currentUser.uid), {
      uid: currentUser.uid, value: selectedRating, updatedAt: serverTimestamp()
    });

    // Recalcular media leyendo todos los votos
    const ratSnap = await getDocs(collection(db, 'games', gameId, 'ratings'));
    let sum = 0, count = 0;
    ratSnap.forEach(d => { sum += d.data().value; count++; });
    await updateDoc(doc(db, 'games', gameId), {
      ratingAvg:   sum / count,
      ratingCount: count,
    });

    toast('¡Valoración guardada!', 'success');
    closeModal('modal-rate-game');
    loadRanking();
  } catch(e) {
    console.error(e);
    toast('Error guardando valoración', 'error');
  }
};

async function openPublicProfile(u) {
  // Avatar
  const av = document.getElementById('pub-avatar');
  av.innerHTML = u.photoURL
    ? `<img src="${u.photoURL}" alt="${u.name}">`
    : (u.name || 'U')[0].toUpperCase();

  // Name & fullname
  document.getElementById('pub-name').textContent     = u.name     || '—';
  document.getElementById('pub-fullname').textContent = u.fullName || '';

  // Badges
  const badges = document.getElementById('pub-badges');
  let badgeHTML = '';
  if (u.isAdmin || u.email === SUPER_ADMIN) badgeHTML += '<span class="pub-badge admin">⭐ Admin</span>';
  badgeHTML += `<span class="pub-badge">🎲 ${u.knownGames?.length ?? 0} juegos</span>`;
  if (u.age) badgeHTML += `<span class="pub-badge">🎂 ${u.age} años</span>`;
  badges.innerHTML = badgeHTML;

  // Stats
  document.getElementById('pub-stats').innerHTML = `
    <div class="pub-stat">
      <div class="pub-stat-value">${u.knownGames?.length ?? 0}</div>
      <div class="pub-stat-label">Juegos</div>
    </div>
    ${u.age ? `<div class="pub-stat"><div class="pub-stat-value">${u.age}</div><div class="pub-stat-label">Años</div></div>` : ''}
  `;

  // Known games
  const grid = document.getElementById('pub-games-grid');
  const known = u.knownGames ?? [];

  if (known.length === 0) {
    grid.innerHTML = '<p style="color:var(--text3);font-size:14px">Aún no ha marcado ningún juego.</p>';
  } else {
    // Ensure game cache
    if (allGamesCache.length === 0) {
      const gSnap = await getDocs(collection(db, 'games'));
      gSnap.forEach(d => allGamesCache.push({ id: d.id, ...d.data() }));
    }
    grid.innerHTML = known.map(gid => {
      const g = allGamesCache.find(x => x.id === gid);
      if (!g) return '';
      const thumb = g.photoURL
        ? `<img src="${g.photoURL}" alt="${g.name}">`
        : '🎮';
      return `<span class="pub-game-chip">${thumb} ${g.name}</span>`;
    }).filter(Boolean).join('');
    if (!grid.innerHTML) grid.innerHTML = '<p style="color:var(--text3);font-size:14px">Aún no ha marcado ningún juego.</p>';
  }

  openModal('modal-public-profile');
}
window.openPublicProfile = openPublicProfile;

window.openPublicProfileById = async function (uid) {
  const snap = await getDoc(doc(db, 'users', uid));
  if (snap.exists()) openPublicProfile(snap.data());
};

// =============================================
//  ADMIN — USERS
// =============================================
async function loadAdminRequests() {
  const c = document.getElementById('admin-requests-container');
  if (!c) return;
  c.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
  try {
    const q    = query(collection(db, 'requests'), where('status', '==', 'pending'));
    const snap = await getDocs(q);

    if (snap.empty) {
      c.innerHTML = '<p style="color:var(--text2);font-size:14px">No hay solicitudes pendientes.</p>';
      return;
    }

    let rows = '';
    snap.forEach(d => {
      const r = d.data();
      const typeLabel = r.userType === 'asistente' ? '🎒 Asistente extraescolar' : '⭐ Miembro';
      const av = r.photoURL
        ? `<span class="user-row-avatar"><img src="${r.photoURL}" alt="${r.name}"></span>`
        : `<span class="user-row-avatar">${(r.name || 'U')[0].toUpperCase()}</span>`;
      rows += `
        <tr>
          <td><span style="display:inline-flex;align-items:center;gap:6px">${av}${r.name ?? '—'}</span></td>
          <td style="color:var(--text2)">${r.email}</td>
          <td>${typeLabel}</td>
          <td class="td-actions">
            <button class="btn btn-primary btn-sm" onclick="approveRequest('${r.uid}','${r.userType}')">✅ Aprobar</button>
            <button class="btn btn-danger btn-sm"  onclick="denyRequest('${r.uid}','${r.name}')">✕ Denegar</button>
          </td>
        </tr>`;
    });

    c.innerHTML = `
      <div class="table-wrapper">
        <table class="users-table">
          <thead><tr><th>Usuario</th><th>Correo</th><th>Solicitud</th><th>Acciones</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`;
  } catch(e) {
    console.error(e);
    c.innerHTML = `<p style="color:var(--danger)">Error: ${e.message}</p>`;
  }
}

window.approveRequest = async function(uid, userType) {
  try {
    // Aprobar: poner isMember=true y marcar solicitud como aprobada
    await updateDoc(doc(db, 'users', uid), { isMember: true });
    await updateDoc(doc(db, 'requests', uid), { status: 'approved' });
    toast('Solicitud aprobada — el usuario ya es miembro ✅', 'success');
    loadAdminRequests();
    loadAdminUsers();
  } catch(e) {
    toast('Error aprobando solicitud', 'error');
  }
};

window.denyRequest = function(uid, name) {
  confirm('Denegar solicitud', `¿Denegar la solicitud de "${name}"? Seguirá siendo usuario externo.`, async () => {
    await updateDoc(doc(db, 'requests', uid), { status: 'denied' });
    toast('Solicitud denegada', 'info');
    loadAdminRequests();
  });
};

async function loadAdminUsers() {
  const c = document.getElementById('admin-users-container');
  c.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
  try {
    const snap = await getDocs(collection(db, 'users'));
    if (snap.empty) { c.innerHTML = '<p style="color:var(--text2)">Sin usuarios</p>'; return; }

    let rows = '';
    snap.forEach(d => {
      const u = d.data();
      if (u.uid === currentUser.uid) return;
      const av = u.photoURL
        ? `<span class="user-row-avatar"><img src="${u.photoURL}" alt="${u.name}"></span>`
        : `<span class="user-row-avatar">${(u.name || u.email || 'U')[0].toUpperCase()}</span>`;
      const banned   = u.isBanned ? '<span style="color:var(--danger);font-size:11px;margin-left:4px">⛔</span>' : '';
      const isMember = u.isMember || u.isAdmin;
      const rolLabel = u.isAdmin ? '⭐ Admin' : isMember
        ? `<span class="role-badge member">${i18n('role_member')}</span>`
        : `<span class="role-badge normal">${i18n('role_normal')}</span>`;

      rows += `
        <tr>
          <td>
            <span style="cursor:pointer;display:inline-flex;align-items:center;gap:6px" onclick="openPublicProfileById('${u.uid}')">
              ${av}${u.name ?? '—'}${banned}
            </span>
          </td>
          <td style="color:var(--text2)">${u.email}</td>
          <td>${rolLabel}</td>
          <td class="td-actions">
            ${!u.isAdmin
              ? `<button class="btn ${isMember ? 'btn-secondary' : 'btn-primary'} btn-sm" onclick="toggleMemberRole('${u.uid}',${isMember})">
                  ${isMember ? i18n('btn_make_normal') : i18n('btn_make_member')}
                 </button>`
              : ''}
            ${!u.isAdmin
              ? `<button class="btn btn-secondary btn-sm" onclick="toggleAdmin('${u.uid}',true)">+ Admin</button>`
              : u.email !== SUPER_ADMIN
                ? `<button class="btn btn-secondary btn-sm" onclick="toggleAdmin('${u.uid}',false)">- Admin</button>`
                : ''}
            ${!u.isBanned
              ? `<button class="btn btn-danger btn-sm" onclick="banUser('${u.uid}','${u.name}')">Banear</button>`
              : `<button class="btn btn-outline btn-sm" onclick="unbanUser('${u.uid}','${u.name}')">Desbanear</button>`}
          </td>
        </tr>`;
    });

    c.innerHTML = `
      <div class="table-wrapper">
        <table class="users-table">
          <thead><tr><th>Usuario</th><th>Correo</th><th>Rol</th><th>Acciones</th></tr></thead>
          <tbody>${rows || '<tr><td colspan="4" style="color:var(--text2);text-align:center">No hay otros usuarios</td></tr>'}</tbody>
        </table>
      </div>`;
  } catch (e) {
    console.error('loadAdminUsers error:', e);
    c.innerHTML = `<p style="color:var(--danger)">Error al cargar usuarios: ${e.message}<br><small>Revisa las reglas de Firestore.</small></p>`;
  }
}

window.toggleAdmin = async function (uid, val) {
  await updateDoc(doc(db, 'users', uid), { isAdmin: val });
  toast(val ? 'Ahora es administrador' : 'Rol de admin eliminado', 'success');
  loadAdminUsers();
};
window.banUser = function (uid, name) {
  confirm('Banear usuario', `¿Banear a "${name}"? No podrá acceder a Ludoforta.`, async () => {
    await updateDoc(doc(db, 'users', uid), { isBanned: true });
    toast(`${name} baneado`, 'success');
    loadAdminUsers();
  });
};
window.unbanUser = async function (uid, name) {
  await updateDoc(doc(db, 'users', uid), { isBanned: false });
  toast(`${name} desbaneado`, 'success');
  loadAdminUsers();
};
