// Interfaces y tipos
// Clase principal del juego
class TreasureHuntGame {
  constructor() {
    this.gameState = {
      playerName: '',
      completedChallenges: 0,
      mapPieces: [false, false, false, false],
      currentScreen: 'start'
    };

    // Banco de 10 desafíos - se seleccionarán 4 aleatoriamente
    this.allChallenges = [
      {
        id: 1,
        title: "🎨 Color Favorito de B0rrA",
        description: "¿Cuál es el color favorito de B0rrA?",
        type: 'question',
        question: "¿Qué color representa mejor la personalidad de B0rrA?",
        options: ["Azul", "Rojo", "Verde", "Amarillo", "Morado"],
        correctAnswer: 0,
        hint: "Es el color del cielo y el mar",
        theme: "color",
        successMessage: "¡Correcto! El azul es su color favorito, representa calma y creatividad"
      },
      {
        id: 2,
        title: "🎵 Grupo Favorito de B0rrA",
        description: "¿Cuál es el grupo musical favorito de B0rrA?",
        type: 'question',
        question: "¿Qué banda británica de rock progresivo es la favorita de B0rrA?",
        options: ["Pink Floyd", "The Beatles", "Queen", "Led Zeppelin", "AC/DC"],
        correctAnswer: 0,
        hint: "Conocidos por 'The Dark Side of the Moon'",
        theme: "music",
        videoLink: "https://www.youtube.com/watch?v=7jMlFXouPk8",
        successMessage: "¡Exacto! Pink Floyd es su banda favorita, especialmente 'The Dark Side of the Moon'"
      },
      {
        id: 4,
        title: "🎵 Canción de B0rrA",
        description: "¿Cuántos años cumple la canción de B0rrA en 2026?",
        type: 'question',
        question: "¿Cuántos años cumple la canción 'Si tan solo supiera' de B0rrA en 2026?",
        options: ["10 años", "11 años", "12 años", "13 años", "14 años"],
        correctAnswer: 2,
        hint: "Piensa en cuántos años han pasado desde su lanzamiento",
        theme: "music",
        songLink: "http://bit.ly/SiTanSoloSupiera",
        successMessage: "¡Correcto! Se publicó el 5 de enero de 2014"
      },
      {
        id: 5,
        title: "🎒 Gira Ñembo Mochilero",
        description: "¿Qué aventuras vivió B0rrA en su gira?",
        type: 'question',
        question: "¿Qué evento le pasó a B0rrA cuando hizo su gira ñembo mochilero?",
        options: ["Le robaron su calzado", "Le robaron su plata", "Durmió en la plaza uruguaya", "Eligió si moverse o quedarse en un lugar lanzando una moneda", "Caminó 15 km de noche porque se bajó mal del bus", "Todas son correctas"],
        correctAnswer: 5,
        hint: "Las aventuras de mochilero pueden ser muy variadas",
        theme: "travel",
        successMessage: "¡Exacto! Todas esas aventuras le pasaron en su gira ñembo mochilero"
      },
      {
        id: 6,
        title: "🚴 Paseo en Bici de B0rrA",
        description: "¿Cuántas veces dijo B0rrA 'acá me muero'?",
        type: 'question',
        question: "¿Cuántas veces dijo B0rrA 'acá me muero' durante su paseo por el país en bici?",
        options: ["1 vez", "2 veces", "3 veces", "4 veces", "5 veces", "Nunca lo dijo"],
        correctAnswer: 1,
        hint: "Las aventuras en bici pueden ser agotadoras",
        theme: "sport",
        bookLink: "http://bit.ly/UnPaseoEnBici",
        successMessage: "¡Correcto! Dijo 'acá me muero' exactamente 2 veces durante su paseo en bici"
      },
      {
        id: 7,
        title: "🦴 Clavícula de B0rrA",
        description: "¿Cómo se rompió la clavícula?",
        type: 'question',
        question: "¿Cómo se rompió la clavícula de B0rrA?",
        options: ["Se cayó de la bici en una bajada", "Se resbaló en el baño", "Se golpeó con una puerta", "Se cayó de las escaleras", "Se lesionó jugando fútbol", "Se cayó de un árbol"],
        correctAnswer: 0,
        hint: "Las bajadas en bici pueden ser peligrosas",
        theme: "sport",
        successMessage: "¡Exacto! Se cayó de la bici en una bajada y se rompió la clavícula"
      },
      {
        id: 8,
        title: "🎭 Profesiones de B0rrA",
        description: "¿Cuál profesión NO ha intentado B0rrA aún?",
        type: 'question',
        question: "¿Cuáles de estas profesiones NO ha intentado ser B0rrA aún?",
        options: ["Escritor", "Músico", "Pintor", "Fotógrafo", "Actor", "Profesor", "Cineasta", "Chef", "Poeta", "Escultor"],
        correctAnswer: 9,
        hint: "Todavía no llegó esa etapa en su vida",
        theme: "career",
        successMessage: "¡Correcto! Aún no ha intentado ser escultor, pero quién sabe qué vendrá después"
      },
      {
        id: 9,
        title: "😰 Mayor Miedo de B0rrA",
        description: "¿Cuál es el mayor miedo de B0rrA?",
        type: 'question',
        question: "¿Cuál es el mayor miedo de B0rrA?",
        options: ["Perder a sus seres queridos", "Envejecer solo", "Morir y no ser recordado", "No cumplir sus sueños", "Fallar en sus proyectos", "Quedarse sin inspiración"],
        correctAnswer: 2,
        hint: "Es algo más profundo que los miedos comunes",
        theme: "fear",
        successMessage: "¡Correcto! Su mayor miedo es morir y no ser recordado, por eso crea tanto arte y contenido"
      },
      {
        id: 10,
        title: "🏠 Mudanza a Luque",
        description: "¿En qué año se mudó B0rrA a Luque?",
        type: 'question',
        question: "¿En qué año se mudó B0rrA a vivir a Luque?",
        options: ["2016", "2017", "2018", "2019", "2020", "2021"],
        correctAnswer: 2,
        hint: "Fue hace algunos años, en la segunda mitad de la década pasada",
        theme: "location",
        successMessage: "¡Correcto! Se mudó a Luque en 2018, un cambio importante en su vida"
      }
    ];

    // Desafíos seleccionados aleatoriamente (se inicializarán en startGame)
    this.challenges = [];

    // Ubicación final del tesoro (Los Lopez - Bar de Rio)
    this.finalLocation = "🏴‍☠️ Los Lopez - Bar de Rio 🏴‍☠️";
    this.treasureLocation = [-25.274328541734576, -57.62935516572914];
    this.mapInitialized = false;
    
    this.initializeEventListeners();
  }

  initializeEventListeners() {
    // Formulario de inicio
    const playerForm = document.getElementById('player-form');
    playerForm?.addEventListener('submit', (e) => this.handlePlayerSubmit(e));

    // Botón de reinicio
    const restartBtn = document.getElementById('restart-btn');
    restartBtn?.addEventListener('click', () => this.restartGame());

    // Botón de cómo llegar
    const directionsBtn = document.getElementById('directions-btn');
    directionsBtn?.addEventListener('click', () => this.openDirections());
  }

  handlePlayerSubmit(e) {
    e.preventDefault();
    const playerNameInput = document.getElementById('player-name');
    const playerName = playerNameInput.value.trim();

    if (playerName) {
      this.gameState.playerName = playerName;
      this.startGame();
    } else {
      alert('Por favor ingresa tu nombre de aventurero/a');
    }
  }

  startGame() {
    // Seleccionar 4 desafíos aleatorios
    this.selectRandomChallenges();
    
    this.gameState.currentScreen = 'game';
    this.showScreen('game-screen');
    this.updatePlayerDisplay();
    this.renderChallenges();
    this.updateProgress();
    
    // Inicializar mapa progresivo
    this.initializeProgressiveMap();
    
    // Hacer scroll hacia arriba de la pantalla del juego
    setTimeout(() => {
      const gameScreen = document.getElementById('game-screen');
      if (gameScreen) {
        gameScreen.scrollTop = 0;
      }
    }, 100);
  }

  selectRandomChallenges() {
    // Crear una copia del array de desafíos y mezclarlo
    const shuffled = [...this.allChallenges].sort(() => Math.random() - 0.5);
    
    // Seleccionar los primeros 4 y agregar propiedades de estado
    this.challenges = shuffled.slice(0, 4).map((challenge, index) => {
      // Aleatorizar las opciones de respuesta
      const randomizedOptions = this.randomizeOptions(challenge.options, challenge.correctAnswer);
      
      return {
        ...challenge,
        id: index + 1, // Renumerar del 1 al 4
        originalId: challenge.id, // Guardar el ID original del desafío
        completed: false,
        options: randomizedOptions.options,
        correctAnswer: randomizedOptions.correctAnswer
      };
    });
    
    console.log('Desafíos seleccionados:', this.challenges.map(c => c.title));
  }

  randomizeOptions(options, correctAnswerIndex) {
    // Crear array de índices
    const indices = options.map((_, index) => index);
    
    // Mezclar los índices
    const shuffledIndices = indices.sort(() => Math.random() - 0.5);
    
    // Crear nuevas opciones en orden aleatorio
    const newOptions = shuffledIndices.map(index => options[index]);
    
    // Encontrar el nuevo índice de la respuesta correcta
    const newCorrectAnswerIndex = shuffledIndices.indexOf(correctAnswerIndex);
    
    return {
      options: newOptions,
      correctAnswer: newCorrectAnswerIndex
    };
  }

  initializeProgressiveMap() {
    // Inicializar el mapa progresivo
    const mapElement = document.getElementById('progressive-map');
    if (mapElement && !this.progressiveMapInitialized) {
      // Coordenadas de Asunción (vista general)
      const asuncionCenter = [-25.2637, -57.5759];
      
      // Crear el mapa
      this.progressiveMap = L.map('progressive-map').setView(asuncionCenter, 12);
      
      // Agregar capa de OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
      }).addTo(this.progressiveMap);
      
      // Deshabilitar interacción del mapa inicialmente
      this.progressiveMap.dragging.disable();
      this.progressiveMap.touchZoom.disable();
      this.progressiveMap.doubleClickZoom.disable();
      this.progressiveMap.scrollWheelZoom.disable();
      this.progressiveMap.boxZoom.disable();
      this.progressiveMap.keyboard.disable();
      
      this.progressiveMapInitialized = true;
    }
  }

  showScreen(screenId) {
    // Ocultar todas las pantallas
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
      screen.classList.remove('active');
    });

    // Mostrar la pantalla actual
    const currentScreen = document.getElementById(screenId);
    if (currentScreen) {
      currentScreen.classList.add('active');
      currentScreen.classList.add('fade-in');
    }
  }

  updatePlayerDisplay() {
    const playerDisplay = document.getElementById('player-display-name');
    if (playerDisplay) {
      playerDisplay.textContent = `Aventurero/a: ${this.gameState.playerName}`;
    }
  }

  renderChallenges() {
    const challengesList = document.getElementById('challenges-list');
    if (!challengesList) return;

    challengesList.innerHTML = '';

    this.challenges.forEach(challenge => {
      const challengeElement = this.createChallengeElement(challenge);
      challengesList.appendChild(challengeElement);
    });
  }

  createChallengeElement(challenge) {
    const challengeDiv = document.createElement('div');
    challengeDiv.className = `challenge-item ${challenge.completed ? 'completed' : ''}`;
    challengeDiv.setAttribute('data-theme', challenge.theme || 'default');
    
    // Crear respuesta correcta y enlaces solo si está completado
    let completedInfoHtml = '';
    if (challenge.completed) {
      // Mostrar respuesta correcta
      const correctAnswer = challenge.options[challenge.correctAnswer];
      completedInfoHtml += `<div class="challenge-answer">✅ Respuesta correcta: <strong>${correctAnswer}</strong></div>`;
      
      // Mostrar enlaces si existen
      if (challenge.videoLink) {
        completedInfoHtml += `<div class="challenge-link"><a href="${challenge.videoLink}" target="_blank" rel="noopener noreferrer">🎬 Ver videoclip de "High Hopes"</a></div>`;
      }
      if (challenge.songLink) {
        completedInfoHtml += `<div class="challenge-link"><a href="${challenge.songLink}" target="_blank" rel="noopener noreferrer">🎵 Escuchar "Si tan solo supiera" en SoundCloud</a></div>`;
      }
      if (challenge.bookLink) {
        completedInfoHtml += `<div class="challenge-link"><a href="${challenge.bookLink}" target="_blank" rel="noopener noreferrer">📖 Leer "Un Paseo en Bici"</a></div>`;
      }
    }
    
    challengeDiv.innerHTML = `
      <div class="challenge-title">${challenge.title}</div>
      <div class="challenge-description">${challenge.description}</div>
      ${completedInfoHtml}
      <div class="challenge-status">
        <span class="status-icon">${challenge.completed ? '✅' : '❌'}</span>
        <button class="challenge-button" ${challenge.completed ? 'disabled' : ''}>
          ${challenge.completed ? 'Completado' : 'Comenzar'}
        </button>
      </div>
    `;

    // Agregar evento click si no está completado
    if (!challenge.completed) {
      const button = challengeDiv.querySelector('.challenge-button');
      button.addEventListener('click', () => this.startChallenge(challenge));
    }

    return challengeDiv;
  }

  startChallenge(challenge) {
    if (challenge.type === 'question') {
      this.showQuestionModal(challenge);
    }
  }

  showQuestionModal(challenge) {
    // Crear modal para la pregunta
    const modal = document.createElement('div');
    modal.className = 'challenge-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h3>${challenge.title}</h3>
          <button class="close-modal">&times;</button>
        </div>
        <div class="modal-body">
          <p class="question">${challenge.question}</p>
          <div class="options">
            ${challenge.options?.map((option, index) => 
              `<button class="option-btn" data-index="${index}">${option}</button>`
            ).join('')}
          </div>
          ${challenge.hint ? `<p class="hint">💡 ${challenge.hint}</p>` : ''}
        </div>
      </div>
    `;

    // Estilos del modal
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    `;

    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.cssText = `
      background: white;
      padding: 30px;
      border-radius: 15px;
      max-width: 500px;
      width: 90%;
      text-align: center;
      border: 3px solid #8B4513;
    `;

    // Agregar estilos para los botones de opciones
    const style = document.createElement('style');
    style.textContent = `
      .challenge-modal .options {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 20px 0;
      }
      .challenge-modal .option-btn {
        padding: 12px 20px;
        border: 2px solid #8B4513;
        background: #f8f9fa;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 1rem;
      }
      .challenge-modal .option-btn:hover {
        background: #DAA520;
        color: white;
        transform: translateY(-2px);
      }
      .challenge-modal .hint {
        margin-top: 15px;
        font-style: italic;
        color: #666;
      }
       .challenge-modal .close-modal {
         background: none;
         border: none;
         font-size: 1.5rem;
         cursor: pointer;
         float: right;
       }
       .challenge-modal .video-link {
         margin-top: 15px;
         text-align: center;
       }
       .challenge-modal .video-link a {
         color: #DAA520;
         text-decoration: none;
         font-weight: bold;
         padding: 8px 16px;
         border: 2px solid #DAA520;
         border-radius: 20px;
         display: inline-block;
         transition: all 0.3s ease;
       }
       .challenge-modal .video-link a:hover {
         background: #DAA520;
         color: white;
         transform: translateY(-2px);
       }
       .challenge-modal .song-link {
         margin-top: 15px;
         text-align: center;
       }
       .challenge-modal .song-link a {
         color: #FF6B35;
         text-decoration: none;
         font-weight: bold;
         padding: 8px 16px;
         border: 2px solid #FF6B35;
         border-radius: 20px;
         display: inline-block;
         transition: all 0.3s ease;
       }
       .challenge-modal .song-link a:hover {
         background: #FF6B35;
         color: white;
         transform: translateY(-2px);
       }
    `;
    document.head.appendChild(style);

    document.body.appendChild(modal);

    // Event listeners para las opciones
    const optionButtons = modal.querySelectorAll('.option-btn');
    optionButtons.forEach((button, index) => {
      button.addEventListener('click', () => this.handleAnswer(challenge, index, modal));
    });

    // Event listener para cerrar modal
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn?.addEventListener('click', () => this.closeModal(modal));
  }

  handleAnswer(challenge, selectedIndex, modal) {
    const isCorrect = selectedIndex === challenge.correctAnswer;
    
    if (isCorrect) {
      this.completeChallenge(challenge);
      // Mostrar mensaje personalizado si existe, sino el mensaje genérico
      const message = challenge.successMessage || '¡Correcto! 🎉 Has ganado una pieza del mapa!';
      this.showMessage(message, 'success');
      this.closeModal(modal);
    } else {
      // Mensaje personalizado para desafíos específicos
      let errorMessage = '❌ Respuesta incorrecta. Cambiando de desafío...';
      if (challenge.theme === 'career') {
        const selectedOption = challenge.options[selectedIndex];
        errorMessage = `❌ Incorrecto, ya intentó ser ${selectedOption}. Cambiando de desafío...`;
      } else if (challenge.title === "🎒 Gira Ñembo Mochilero") {
        errorMessage = "❌ Bueno, sí también, pero no es la respuesta correcta. Cambiando de desafío...";
      } else if (challenge.title === "🎨 Color Favorito de B0rrA") {
        const selectedOption = challenge.options[selectedIndex];
        errorMessage = `❌ No, su color favorito no es ${selectedOption}. Cambiando de desafío...`;
      } else if (challenge.title === "🎵 Grupo Favorito de B0rrA") {
        const selectedOption = challenge.options[selectedIndex];
        errorMessage = `❌ No, ${selectedOption} no es su banda favorita. Cambiando de desafío...`;
      } else if (challenge.title === "😰 Mayor Miedo de B0rrA") {
        const selectedOption = challenge.options[selectedIndex];
        errorMessage = `❌ No, su mayor miedo no es ${selectedOption.toLowerCase()}. Cambiando de desafío...`;
      } else if (challenge.title === "🏠 Mudanza a Luque") {
        const selectedOption = challenge.options[selectedIndex];
        errorMessage = `❌ No, no se mudó en ${selectedOption}. Cambiando de desafío...`;
      } else if (challenge.title === "🎵 Canción de B0rrA") {
        const selectedOption = challenge.options[selectedIndex];
        errorMessage = `❌ No, la canción no cumple ${selectedOption} en 2026. Cambiando de desafío...`;
      } else if (challenge.title === "🚴 Paseo en Bici de B0rrA") {
        const selectedOption = challenge.options[selectedIndex];
        errorMessage = `❌ No, no dijo 'acá me muero' ${selectedOption.toLowerCase()}. Cambiando de desafío...`;
      } else if (challenge.title === "🦴 Clavícula de B0rrA") {
        const selectedOption = challenge.options[selectedIndex];
        errorMessage = `❌ No, no se rompió la clavícula ${selectedOption.toLowerCase()}. Cambiando de desafío...`;
      }
      
      this.showMessage(errorMessage, 'error');
      this.closeModal(modal);
      
      // Cambiar a un desafío diferente después de 2 segundos
      setTimeout(() => {
        this.changeToRandomChallenge(challenge);
      }, 2000);
    }
  }

  completeChallenge(challenge) {
    challenge.completed = true;
    this.gameState.completedChallenges++;
    this.gameState.mapPieces[challenge.id - 1] = true;

    this.updateProgress();
    this.renderChallenges();
    this.updateProgressiveMap();

    // Hacer scroll hacia el mapa para mostrar el progreso
    setTimeout(() => {
      scrollToSection('map-section');
    }, 500);

    // Verificar si se completó el juego
    if (this.gameState.completedChallenges === 4) {
      setTimeout(() => this.showVictoryScreen(), 2000);
    }
  }

  updateProgress() {
    const progressCount = document.getElementById('progress-count');
    const progressFill = document.getElementById('progress-fill');
    
    if (progressCount) {
      progressCount.textContent = this.gameState.completedChallenges.toString();
    }
    
    if (progressFill) {
      const percentage = (this.gameState.completedChallenges / 4) * 100;
      progressFill.style.width = `${percentage}%`;
    }
  }


  updateProgressiveMap() {
    const completedCount = this.gameState.completedChallenges;
    const overlay = document.getElementById('map-reveal-overlay');
    
    if (completedCount === 0) {
      // Mostrar overlay completo
      if (overlay) {
        overlay.classList.remove('hidden');
        const h3 = overlay.querySelector('.reveal-text h3');
        const p = overlay.querySelector('.reveal-text p');
        if (h3) h3.textContent = '🔍 Buscando el tesoro...';
        if (p) p.textContent = 'Completa los desafíos para revelar la ubicación';
        overlay.style.opacity = '1';
      }
    } else if (completedCount === 1) {
      // Primera pista - mostrar área general de Asunción
      if (overlay) {
        const h3 = overlay.querySelector('.reveal-text h3');
        const p = overlay.querySelector('.reveal-text p');
        if (h3) h3.textContent = '🗺️ Primera pista encontrada!';
        if (p) p.textContent = 'El tesoro está en Asunción...';
        overlay.style.opacity = '0.8';
      }
      // Mostrar vista general de Asunción
      if (this.progressiveMap) {
        this.progressiveMap.setView([-25.2637, -57.5759], 11);
      }
    } else if (completedCount === 2) {
      // Segunda pista - mostrar zona de la costanera
      if (overlay) {
        overlay.querySelector('.reveal-text h3').textContent = '🏴‍☠️ Segunda pista!';
        overlay.querySelector('.reveal-text p').textContent = 'Está cerca del río Paraguay...';
        overlay.style.opacity = '0.6';
      }
      // Zoom a la zona de la costanera (más cerca de la ubicación real)
      if (this.progressiveMap) {
        this.progressiveMap.setView([-25.2750, -57.6300], 13);
      }
    } else if (completedCount === 3) {
      // Tercera pista - mostrar área específica
      if (overlay) {
        overlay.querySelector('.reveal-text h3').textContent = '🎯 Tercera pista!';
        overlay.querySelector('.reveal-text p').textContent = 'Muy cerca... en la costanera...';
        overlay.style.opacity = '0.4';
      }
      // Zoom más específico a la zona de Los Lopez
      if (this.progressiveMap) {
        this.progressiveMap.setView([-25.2750, -57.6290], 15);
      }
    } else if (completedCount === 4) {
      // ¡Tesoro encontrado! - Ocultar overlay completamente y mostrar marcador
      if (overlay) {
        overlay.classList.add('hidden');
      }
      // Mostrar ubicación exacta con marcador
      if (this.progressiveMap) {
        this.progressiveMap.setView(this.treasureLocation, 17);
        
        // Limpiar marcadores existentes
        this.progressiveMap.eachLayer((layer) => {
          if (layer instanceof L.Marker) {
            this.progressiveMap.removeLayer(layer);
          }
        });
        
        // Crear marcador X hecha a mano
        const handDrawnXIcon = L.divIcon({
          html: `
            <div style="
              position: relative;
              width: 40px;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 28px;
              color: #FF0000;
              font-weight: bold;
              text-shadow: 
                2px 2px 0px #000,
                -1px -1px 0px #000,
                1px -1px 0px #000,
                -1px 1px 0px #000;
              transform: rotate(-15deg);
              filter: drop-shadow(0 3px 6px rgba(0,0,0,0.5));
              animation: pulse 2s infinite;
            ">✗</div>
          `,
          className: 'hand-drawn-x-marker',
          iconSize: [40, 40],
          iconAnchor: [20, 20]
        });
        
        L.marker(this.treasureLocation, { icon: handDrawnXIcon }).addTo(this.progressiveMap)
          .bindPopup(`
            <div style="text-align: center; padding: 5px;">
              <h4 style="margin: 0 0 8px 0; color: #8B4513;">🏴‍☠️ Los Lopez - Bar de Rio 🏴‍☠️</h4>
              <p style="margin: 0; color: #2F4F4F; font-size: 12px;">📍 Costanera de Asunción</p>
              <p style="margin: 4px 0 0 0; color: #DAA520; font-weight: bold; font-size: 11px;">🎂 ¡La fiesta de cumpleaños!</p>
            </div>
          `);
        
        // Habilitar interacción del mapa cuando se complete el juego
        this.progressiveMap.dragging.enable();
        this.progressiveMap.touchZoom.enable();
        this.progressiveMap.doubleClickZoom.enable();
        this.progressiveMap.scrollWheelZoom.enable();
        this.progressiveMap.boxZoom.enable();
        this.progressiveMap.keyboard.enable();
      }
    }
  }

  showVictoryScreen() {
    this.gameState.currentScreen = 'victory';
    this.showScreen('victory-screen');
    
    // Inicializar el mapa cuando se muestra la pantalla de victoria
    if (!this.mapInitialized) {
      this.initializeMap();
    }
  }

  initializeMap() {
    // Inicializar OpenStreetMap
    const mapElement = document.getElementById('map');
    if (mapElement && !this.mapInitialized) {
      // Coordenadas exactas de Los Lopez - Bar de Rio en Asunción
      const location = this.treasureLocation;
      
      // Crear el mapa
      const map = L.map('map').setView(location, 16);
      
      // Agregar capa de OpenStreetMap con estilo personalizado
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
      }).addTo(map);
      
      // Crear marcador X hecha a mano
      const handDrawnXIcon = L.divIcon({
        html: `
          <div style="
            position: relative;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 36px;
            color: #FF0000;
            font-weight: bold;
            text-shadow: 
              3px 3px 0px #000,
              -2px -2px 0px #000,
              2px -2px 0px #000,
              -2px 2px 0px #000;
            transform: rotate(-15deg);
            filter: drop-shadow(0 4px 8px rgba(0,0,0,0.6));
            animation: pulse 2s infinite;
          ">✗</div>
        `,
        className: 'hand-drawn-x-marker',
        iconSize: [50, 50],
        iconAnchor: [25, 25]
      });
      
      // Agregar marcador del tesoro
      const marker = L.marker(location, { icon: handDrawnXIcon }).addTo(map);
      
      // Agregar popup con información
      marker.bindPopup(`
        <div style="text-align: center; padding: 10px;">
          <h3 style="color: #8B4513; margin: 0 0 10px 0;">🏴‍☠️ Los Lopez - Bar de Rio 🏴‍☠️</h3>
          <p style="margin: 5px 0; color: #2F4F4F;">📍 Costanera de Asunción, Paraguay</p>
          <p style="margin: 5px 0; color: #DAA520; font-weight: bold;">🎂 ¡La fiesta de cumpleaños te espera aquí!</p>
        </div>
      `);
      
      this.mapInitialized = true;
    }
  }

  showMessage(message, type) {
    // Crear elemento de mensaje
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    // Determinar color de fondo según el tipo
    let backgroundColor;
    switch(type) {
      case 'success':
        backgroundColor = '#32CD32';
        break;
      case 'error':
        backgroundColor = '#FF6347';
        break;
      case 'info':
        backgroundColor = '#4169E1';
        break;
      default:
        backgroundColor = '#FF6347';
    }
    
    messageDiv.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 15px 20px;
      border-radius: 8px;
      color: white;
      font-weight: bold;
      z-index: 1001;
      animation: slideIn 0.3s ease;
      background: ${backgroundColor};
    `;

    // Agregar animación
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);

    document.body.appendChild(messageDiv);

    // Remover mensaje después de 3 segundos
    setTimeout(() => {
      messageDiv.remove();
    }, 3000);
  }

  closeModal(modal) {
    modal.remove();
  }

  changeToRandomChallenge(currentChallenge) {
    // Encontrar desafíos no completados de todos los 10 desafíos
    const availableChallenges = this.allChallenges.filter(c => {
      // Verificar que no esté ya en los 4 desafíos seleccionados
      const isNotInSelected = !this.challenges.find(selected => selected.originalId === c.id);
      const isNotCurrent = c.id !== currentChallenge.originalId;
      return isNotInSelected && isNotCurrent;
    });
    
    if (availableChallenges.length > 0) {
      // Seleccionar un desafío aleatorio de todos los disponibles
      const randomIndex = Math.floor(Math.random() * availableChallenges.length);
      const newChallenge = availableChallenges[randomIndex];
      
      // Encontrar el índice del desafío actual en los 4 seleccionados
      const currentIndex = this.challenges.findIndex(c => c.id === currentChallenge.id);
      
      if (currentIndex !== -1) {
        // Aleatorizar las opciones del nuevo desafío
        const randomizedOptions = this.randomizeOptions(newChallenge.options, newChallenge.correctAnswer);
        
        // Reemplazar el desafío actual con el nuevo desafío
        this.challenges[currentIndex] = {
          ...newChallenge,
          id: currentChallenge.id, // Mantener el ID original para la numeración 1-4
          originalId: newChallenge.id, // Guardar el ID original del desafío
          completed: false,
          options: randomizedOptions.options,
          correctAnswer: randomizedOptions.correctAnswer
        };
        
        // Actualizar la visualización
        this.renderChallenges();
      }
    } else {
      // Si no hay más desafíos disponibles, mostrar mensaje
      this.showMessage('🎯 ¡Intenta con los desafíos restantes!', 'info');
    }
  }

  openDirections() {
    // Coordenadas de Los Lopez - Bar de Rio
    const latitude = this.treasureLocation[0];
    const longitude = this.treasureLocation[1];
    
    // Crear URL para Google Maps con direcciones
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}&travelmode=driving`;
    
    // Abrir en nueva pestaña
    window.open(googleMapsUrl, '_blank');
  }

  restartGame() {
    // Resetear estado del juego completamente
    this.gameState = {
      playerName: this.gameState.playerName, // Mantener el nombre del jugador
      completedChallenges: 0,
      mapPieces: [false, false, false, false],
      currentScreen: 'start'
    };

    // Limpiar desafíos completados
    this.challenges.forEach(challenge => {
      challenge.completed = false;
    });

    // Seleccionar nuevos desafíos aleatorios
    this.selectRandomChallenges();

    // Limpiar el mapa progresivo
    if (this.progressiveMap) {
      this.progressiveMap.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          this.progressiveMap.removeLayer(layer);
        }
      });
      
      // Deshabilitar interacción del mapa al reiniciar
      this.progressiveMap.dragging.disable();
      this.progressiveMap.touchZoom.disable();
      this.progressiveMap.doubleClickZoom.disable();
      this.progressiveMap.scrollWheelZoom.disable();
      this.progressiveMap.boxZoom.disable();
      this.progressiveMap.keyboard.disable();
    }

    // Resetear el overlay del mapa
    const overlay = document.getElementById('map-reveal-overlay');
    if (overlay) {
      overlay.classList.remove('hidden');
      const h3 = overlay.querySelector('.reveal-text h3');
      const p = overlay.querySelector('.reveal-text p');
      if (h3) h3.textContent = '🔍 Buscando el tesoro...';
      if (p) p.textContent = 'Completa los desafíos para revelar la ubicación';
      overlay.style.opacity = '1';
    }

    // Actualizar la interfaz
    this.updateProgress();
    this.renderChallenges();
    this.updateProgressiveMap();

    // Limpiar el campo de nombre
    const playerNameInput = document.getElementById('player-name');
    if (playerNameInput) {
      playerNameInput.value = '';
    }

    // Volver a la pantalla de inicio
    this.showScreen('start-screen');
  }
}

// Función global para scroll suave entre secciones
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  const gameScreen = document.getElementById('game-screen');
  
  if (element && gameScreen) {
    // Esperar un poco para que el DOM se actualice
    setTimeout(() => {
      const elementTop = element.offsetTop;
      
      gameScreen.scrollTo({
        top: elementTop - 20,
        behavior: 'smooth'
      });
    }, 100);
  }
}

// Función global para mostrar respuestas completadas
function showCompletedAnswers() {
  const game = window.treasureHuntGame;
  if (!game) return;
  
  const completedChallenges = game.challenges.filter(c => c.completed);
  
  if (completedChallenges.length === 0) {
    alert('No hay desafíos completados aún. ¡Completa algunos desafíos para ver las respuestas!');
    return;
  }
  
  let answersHtml = '<div style="text-align: center; padding: 20px; background: #f8f9fa; border-radius: 10px; margin: 20px;">';
  answersHtml += '<h3 style="color: #8B4513; margin-bottom: 20px;">📋 Respuestas Completadas</h3>';
  
  completedChallenges.forEach(challenge => {
    const correctAnswer = challenge.options[challenge.correctAnswer];
    answersHtml += `<div style="background: white; padding: 15px; margin: 10px 0; border-radius: 8px; border-left: 4px solid #4CAF50;">`;
    answersHtml += `<strong style="color: #8B4513;">${challenge.title}</strong><br>`;
    answersHtml += `<span style="color: #2E7D32;">✅ ${correctAnswer}</span><br>`;
    
    // Mostrar enlaces si existen
    if (challenge.videoLink) {
      answersHtml += `<a href="${challenge.videoLink}" target="_blank" style="color: #DAA520; text-decoration: none; margin-right: 10px;">🎬 Ver videoclip</a>`;
    }
    if (challenge.songLink) {
      answersHtml += `<a href="${challenge.songLink}" target="_blank" style="color: #FF6B35; text-decoration: none; margin-right: 10px;">🎵 Escuchar canción</a>`;
    }
    if (challenge.bookLink) {
      answersHtml += `<a href="${challenge.bookLink}" target="_blank" style="color: #F44336; text-decoration: none;">📖 Leer libro</a>`;
    }
    
    answersHtml += `</div>`;
  });
  
  answersHtml += '</div>';
  
  // Crear modal para mostrar respuestas
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `;
  
  modal.innerHTML = `
    <div style="background: white; padding: 30px; border-radius: 15px; max-width: 600px; max-height: 80vh; overflow-y: auto; position: relative;">
      <button onclick="this.parentElement.parentElement.remove()" style="position: absolute; top: 10px; right: 15px; background: none; border: none; font-size: 1.5rem; cursor: pointer;">&times;</button>
      ${answersHtml}
    </div>
  `;
  
  document.body.appendChild(modal);
}

// Función global para inicializar el mapa (requerida por Google Maps)
function initMap() {
  // Esta función se llama automáticamente cuando Google Maps se carga
  // El mapa se inicializará cuando se muestre la pantalla de victoria
}

// Inicializar el juego cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
  window.treasureHuntGame = new TreasureHuntGame();
});

