// Interfaces y tipos
// Clase principal del juego
class TreasureHuntGame {
  constructor() {
    this.gameState = {
      playerName: '',
      completedChallenges: 0,
      mapPieces: [false, false, false, false],
      currentScreen: 'start',
      startTime: null,
      endTime: null,
      totalTime: 0
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

    // Botón de compartir
    const shareBtn = document.getElementById('share-btn');
    shareBtn?.addEventListener('click', () => this.shareResult());
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
    
    // Iniciar el cronómetro
    this.gameState.startTime = Date.now();
    this.gameState.endTime = null;
    this.gameState.totalTime = 0;
    
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
    modal.setAttribute('data-theme', challenge.theme || 'default');
    
    modal.innerHTML = `
      <div class="modal-content challenge-item" data-theme="${challenge.theme || 'default'}">
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
    
    // NO agregar estilos inline para .option-btn - dejar que styles.css los maneje
    // Solo agregamos estilos que NO están en styles.css
    const style = document.createElement('style');
    style.textContent = `
      .challenge-modal .hint {
        margin-top: 15px;
        font-style: italic;
        color: #666;
      }
    `;
    document.head.appendChild(style);

    // Agregar modal al DOM
    document.body.appendChild(modal);

    // Configurar event listeners INMEDIATAMENTE después de agregar al DOM
    const optionButtons = modal.querySelectorAll('.option-btn');
    const modalTheme = modal.getAttribute('data-theme');
    
    optionButtons.forEach((button, index) => {
      // Agregar data-theme a cada botón
      button.setAttribute('data-theme', modalTheme);
      
      // Event listener de click
      button.addEventListener('click', () => {
        this.handleAnswer(challenge, index, modal);
      });
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
    // Calcular el tiempo total del juego
    this.gameState.endTime = Date.now();
    this.gameState.totalTime = this.gameState.endTime - this.gameState.startTime;
    
    this.gameState.currentScreen = 'victory';
    this.showScreen('victory-screen');
    
    // Inicializar el mapa cuando se muestra la pantalla de victoria
    if (!this.mapInitialized) {
      this.initializeMap();
    }
    
    // Actualizar el display del tiempo en la pantalla de victoria
    this.updateVictoryTimeDisplay();
  }

  updateVictoryTimeDisplay() {
    const timeDisplay = document.getElementById('victory-time-display');
    if (timeDisplay) {
      const formattedTime = this.formatTime(this.gameState.totalTime);
      timeDisplay.textContent = `⏱️ Tiempo total: ${formattedTime}`;
    }
  }

  formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    
    if (minutes > 0) {
      return `${minutes}:${seconds.toString().padStart(2, '0')} minutos`;
    } else {
      return `${seconds} segundos`;
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

  async shareResult() {
    try {
      // Generar imagen del resultado
      const imageBlob = await this.generateResultImage();
      
      // Verificar si el navegador soporta Web Share API
      if (navigator.share && navigator.canShare) {
        const shareData = {
          title: '¡Tesoro Encontrado! 🏴‍☠️',
          text: `¡${this.gameState.playerName} completó la búsqueda del tesoro en ${this.formatTime(this.gameState.totalTime)}! ¿Podrás encontrar el tesoro también? 🗺️`,
          files: [new File([imageBlob], 'tesoro-encontrado.png', { type: 'image/png' })]
        };
        
        if (navigator.canShare(shareData)) {
          await navigator.share(shareData);
        } else {
          // Fallback: descargar imagen
          this.downloadImage(imageBlob);
        }
      } else {
        // Fallback: descargar imagen
        this.downloadImage(imageBlob);
      }
    } catch (error) {
      console.error('Error al compartir:', error);
      // Fallback: descargar imagen
      const imageBlob = await this.generateResultImage();
      this.downloadImage(imageBlob);
    }
  }

  // ===== Ajustes generales (puedes cambiarlos) =====
  async generateResultImage() {
    const WIDTH = 1200;  // ideal para compartir en redes (Open Graph)
    const HEIGHT = 630;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    // Fondo estilo mapa
    this.createEpicBackground(ctx, canvas, WIDTH, HEIGHT);

    // Ruta, brújula, olas
    this.drawTreasurePath(ctx, canvas, WIDTH, HEIGHT);
    this.drawCompassRose(ctx, canvas, WIDTH, HEIGHT);
    this.drawSeaWaves(ctx, canvas, WIDTH, HEIGHT);


    // Título, nombre, tiempo
    this.drawHeroTitleFoil(ctx, '¡TESORO ENCONTRADO!', WIDTH, HEIGHT);
    this.drawNamePlate(ctx, 'Aventurero: ' + (this.gameState.playerName || 'Anónimo'), WIDTH, HEIGHT);
    this.drawTimeBadge(ctx, this.formatTime(this.gameState.totalTime), WIDTH, HEIGHT);

    // Subtextos / CTA (ajustados más abajo)
    this.drawSubtexts(ctx, canvas, WIDTH, HEIGHT);

    // Efectos
    this.addVignette(ctx, canvas, WIDTH, HEIGHT);
    this.addSparkles(ctx, canvas, WIDTH, HEIGHT);
    this.addPaperGrain(ctx, canvas, 0.06, WIDTH, HEIGHT);

    return new Promise(resolve => {
      canvas.toBlob(blob => resolve(blob), 'image/png', 0.95);
    });
  }

    // ====== Fondo épico (pergamino sobre mar) ======
    createEpicBackground(ctx, canvas, WIDTH, HEIGHT) {
      // mar
      var sea = ctx.createLinearGradient(0, 0, 0, HEIGHT);
      sea.addColorStop(0, '#0b3a5a');
      sea.addColorStop(0.5, '#0e567e');
      sea.addColorStop(1, '#107ba3');
      ctx.fillStyle = sea;
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      // “sol” suave
      var sun = ctx.createRadialGradient(WIDTH * 0.2, HEIGHT * 0.25, 10, WIDTH * 0.2, HEIGHT * 0.25, WIDTH * 0.6);
      sun.addColorStop(0, 'rgba(255,230,150,0.35)');
      sun.addColorStop(1, 'rgba(255,230,150,0)');
      ctx.fillStyle = sun;
      ctx.beginPath();
      ctx.arc(WIDTH * 0.2, HEIGHT * 0.25, WIDTH * 0.6, 0, Math.PI * 2);
      ctx.fill();

      // pergamino rasgado
      var pad = 40;
      var parchment = new Path2D();
      var x0 = pad, y0 = pad, x1 = WIDTH - pad, y1 = HEIGHT - pad;

      parchment.moveTo(x0 + 20, y0);
      for (var x = x0 + 20; x <= x1 - 20; x += 60) {
        parchment.quadraticCurveTo(x + 20, y0 + (Math.random() * 18 - 9), x + 60, y0 + (Math.random() * 12));
      }
      parchment.lineTo(x1, y0 + 20);
      for (var y = y0 + 20; y <= y1 - 20; y += 60) {
        parchment.quadraticCurveTo(x1 + (Math.random() * 18 - 9), y + 20, x1 + (Math.random() * 12), y + 60);
      }
      parchment.lineTo(x1 - 20, y1);
      for (var x2 = x1 - 20; x2 >= x0 + 20; x2 -= 60) {
        parchment.quadraticCurveTo(x2 - 20, y1 + (Math.random() * 18 - 9), x2 - 60, y1 + (Math.random() * 12));
      }
      parchment.lineTo(x0, y1 - 20);
      for (var y2 = y1 - 20; y2 >= y0 + 20; y2 -= 60) {
        parchment.quadraticCurveTo(x0 + (Math.random() * 18 - 9), y2 - 20, x0 + (Math.random() * 12), y2 - 60);
      }
      parchment.closePath();

      // relleno pergamino
      var pap = ctx.createLinearGradient(0, y0, 0, y1);
      pap.addColorStop(0, '#f8e7c6');
      pap.addColorStop(0.5, '#f1d8a8');
      pap.addColorStop(1, '#eacb91');

      ctx.fillStyle = pap;
      ctx.save();
      ctx.shadowColor = 'rgba(0,0,0,0.25)';
      ctx.shadowBlur = 24;
      ctx.shadowOffsetY = 8;
      ctx.fill(parchment);

      // bordes “quemados”
      ctx.clip(parchment);
      var burn = ctx.createLinearGradient(0, y0, 0, y1);
      burn.addColorStop(0, 'rgba(120,77,30,0.30)');
      burn.addColorStop(0.5, 'rgba(120,77,30,0.10)');
      burn.addColorStop(1, 'rgba(120,77,30,0.30)');
      ctx.strokeStyle = 'rgba(90,50,20,0.6)';
      ctx.lineWidth = 5;
      ctx.stroke(parchment);
      ctx.globalCompositeOperation = 'multiply';
      ctx.fillStyle = burn;
      ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
      ctx.globalCompositeOperation = 'source-over';
      ctx.restore();

      // retícula sutil
      ctx.save();
      ctx.clip(parchment);
      ctx.strokeStyle = 'rgba(80,50,20,0.08)';
      ctx.lineWidth = 1;
      for (var gx = x0 + 50; gx < x1 - 50; gx += 50) {
        ctx.beginPath(); ctx.moveTo(gx, y0 + 50); ctx.lineTo(gx, y1 - 50); ctx.stroke();
      }
      for (var gy = y0 + 50; gy < y1 - 50; gy += 50) {
        ctx.beginPath(); ctx.moveTo(x0 + 50, gy); ctx.lineTo(x1 - 50, gy); ctx.stroke();
      }
      ctx.restore();
    }

    // ===== Ruta punteada y "X" =====
    drawTreasurePath(ctx, canvas, WIDTH, HEIGHT) {
      var points = [
        { x: WIDTH * 0.2, y: HEIGHT * 0.35 },
        { x: WIDTH * 0.35, y: HEIGHT * 0.42 },
        { x: WIDTH * 0.5,  y: HEIGHT * 0.38 },
        { x: WIDTH * 0.65, y: HEIGHT * 0.48 },
        { x: WIDTH * 0.78, y: HEIGHT * 0.56 }
      ];
      ctx.save();
      ctx.setLineDash([10, 12]);
      ctx.lineWidth = 4;
      ctx.strokeStyle = 'rgba(120,40,30,0.85)';
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (var i = 1; i < points.length; i++) {
        ctx.quadraticCurveTo(
          (points[i - 1].x + points[i].x) / 2, points[i - 1].y - 25,
          points[i].x, points[i].y
        );
      }
      ctx.stroke();
      ctx.setLineDash([]);

      // “X” final
      var end = points[points.length - 1];
      ctx.translate(end.x, end.y);
      ctx.rotate(-0.25);
      ctx.strokeStyle = '#8b0000';
      ctx.lineWidth = 10;
      ctx.beginPath(); ctx.moveTo(-20, -20); ctx.lineTo(20, 20); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-20, 20); ctx.lineTo(20, -20); ctx.stroke();
      ctx.restore();
    }

    // ===== Brújula =====
    drawCompassRose(ctx, canvas, WIDTH, HEIGHT) {
      var cx = WIDTH * 0.14, cy = HEIGHT * 0.2, r = 60;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.strokeStyle = 'rgba(60,35,20,0.7)'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(0, 0, r + 10, 0, Math.PI * 2); ctx.stroke();
      for (var i = 0; i < 8; i++) {
        ctx.rotate(Math.PI / 4);
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -r); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(-8, -r * 0.6); ctx.lineTo(0, -r); ctx.lineTo(8, -r * 0.6);
        ctx.closePath();
        ctx.fillStyle = (i % 2 === 0) ? 'rgba(120,60,30,0.7)' : 'rgba(200,150,90,0.7)';
        ctx.fill();
      }
      ctx.fillStyle = 'rgba(60,35,20,0.9)';
      ctx.font = 'bold 22px system-ui, Arial';
      ctx.textAlign = 'center';
      ctx.fillText('N', 0, -r - 16);
      ctx.restore();
    }

    // ===== Olas discretas =====
    drawSeaWaves(ctx, canvas, WIDTH, HEIGHT) {
      ctx.save();
      ctx.globalAlpha = 0.35;
      ctx.strokeStyle = 'rgba(255,255,255,0.35)';
      ctx.lineWidth = 2;
      for (var y = HEIGHT * 0.8; y < HEIGHT; y += 14) {
        ctx.beginPath();
        for (var x = 0; x <= WIDTH; x += 12) {
          var dy = Math.sin((x + y) * 0.02) * 3;
          ctx.lineTo(x, y + dy);
        }
        ctx.stroke();
      }
      ctx.restore();
    }


    // ===== Título con foil dorado =====
    drawHeroTitleFoil(ctx, text, WIDTH, HEIGHT) {
      var x = WIDTH * 0.5, y = HEIGHT * 0.22;
      ctx.save();

      // sombra
      ctx.shadowColor = 'rgba(0,0,0,0.35)';
      ctx.shadowBlur = 24;
      ctx.shadowOffsetY = 8;

      // fondo cinta
      this.roundRect(ctx, x - 430, y - 60, 860, 120, 24);
      ctx.fillStyle = 'rgba(20,12,6,0.25)';
      ctx.fill();

      // gradiente “foil”
      var foil = ctx.createLinearGradient(x - 200, y - 40, x + 200, y + 40);
      foil.addColorStop(0.0, '#a67c00');
      foil.addColorStop(0.2, '#ffdc73');
      foil.addColorStop(0.5, '#fff4c2');
      foil.addColorStop(0.8, '#d5b54a');
      foil.addColorStop(1.0, '#8c6a1f');

      ctx.font = '900 68px system-ui, Segoe UI, Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      ctx.lineWidth = 10; ctx.strokeStyle = 'rgba(60,35,20,0.6)'; ctx.strokeText(text, x, y);
      ctx.lineWidth = 4;  ctx.strokeStyle = 'rgba(255,255,255,0.6)'; ctx.strokeText(text, x, y + 3);
      ctx.fillStyle = foil; ctx.fillText(text, x, y);
      ctx.restore();
    }

    // ===== Placa de nombre =====
    drawNamePlate(ctx, text, WIDTH, HEIGHT) {
      var x = WIDTH * 0.5, y = HEIGHT * 0.34;
      var w = 560, h = 54;
      ctx.save();
      this.roundRect(ctx, x - w/2, y - h/2, w, h, 14);
      ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.fill();
      ctx.strokeStyle = 'rgba(60,35,20,0.35)'; ctx.lineWidth = 2; ctx.stroke();

      ctx.font = '700 26px system-ui, Arial'; ctx.fillStyle = '#2c3e50';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(text, x, y);
      ctx.restore();
    }

    // ===== Insignia de tiempo =====
    drawTimeBadge(ctx, timeText, WIDTH, HEIGHT) {
      var x = WIDTH * 0.5, y = HEIGHT * 0.46;
      var w = 520, h = 86;
      ctx.save();
      this.roundRect(ctx, x - w/2, y - h/2, w, h, 18);
      var grad = ctx.createLinearGradient(x - w/2, y - h/2, x + w/2, y + h/2);
      grad.addColorStop(0, '#e67e22');
      grad.addColorStop(1, '#f1a94e');
      ctx.fillStyle = grad; ctx.fill();
      ctx.strokeStyle = 'rgba(0,0,0,0.2)'; ctx.lineWidth = 3; ctx.stroke();

      // icono reloj
      ctx.fillStyle = 'rgba(255,255,255,0.95)';
      ctx.beginPath(); ctx.arc(x - w/2 + 54, y, 22, 0, Math.PI*2); ctx.fill();
      ctx.strokeStyle = '#e67e22'; ctx.lineWidth = 3; ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x - w/2 + 54, y - 10); ctx.lineTo(x - w/2 + 54, y + 6); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x - w/2 + 54, y); ctx.lineTo(x - w/2 + 66, y + 10); ctx.stroke();

      // texto
      ctx.font = '800 36px system-ui, Arial';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = 'rgba(0,0,0,0.25)'; ctx.shadowBlur = 8; ctx.shadowOffsetY = 3;
      ctx.fillText('Tiempo: ' + timeText, x + 40, y);
      ctx.shadowBlur = 0; ctx.shadowOffsetY = 0;
      ctx.restore();
    }

    // ===== Subtextos / CTA / fecha / URL (QR look opcional) =====
    drawSubtexts(ctx, canvas, WIDTH, HEIGHT) {
      const now = new Date();
      const dateStr = now.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
      const timeStr = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

      ctx.textAlign = 'center';

      // Línea 1
      ctx.font = '600 28px system-ui, Arial';
      ctx.fillStyle = '#5a3b1e';
      ctx.fillText('🗺️ El tesoro ha sido descubierto • ¿Podrás encontrarlo tú también?', WIDTH * 0.5, HEIGHT * 0.64);

      // Línea 2
      ctx.font = '500 24px system-ui, Arial';
      ctx.fillStyle = '#6b4a25';
      ctx.fillText('Completa 4 desafíos y revela la ubicación secreta', WIDTH * 0.5, HEIGHT * 0.69);

      // Fecha
      ctx.font = '500 20px system-ui, Arial';
      ctx.fillStyle = '#7f5a2e';
      ctx.fillText(`Completado el ${dateStr} a las ${timeStr}`, WIDTH * 0.5, HEIGHT * 0.74);

      // CTA
      ctx.font = '800 26px system-ui, Arial';
      ctx.fillStyle = '#2c3e50';
      ctx.fillText('🏴‍☠️ ¡Únete a la aventura! 🏴‍☠️', WIDTH * 0.5, HEIGHT * 0.80);
    }

    // ===== Efectos finales =====
    addVignette(ctx, canvas, WIDTH, HEIGHT) {
      var v = ctx.createRadialGradient(WIDTH/2, HEIGHT/2, WIDTH*0.2, WIDTH/2, HEIGHT/2, WIDTH*0.7);
      v.addColorStop(0, 'rgba(0,0,0,0)');
      v.addColorStop(1, 'rgba(0,0,0,0.35)');
      ctx.fillStyle = v;
      ctx.fillRect(0,0,WIDTH,HEIGHT);
    }

    addSparkles(ctx, canvas, WIDTH, HEIGHT) {
      ctx.save();
      for (var i = 0; i < 30; i++) {
        var x = WIDTH * (0.45 + Math.random() * 0.4);
        var y = HEIGHT * (0.45 + Math.random() * 0.25);
        var r = 1 + Math.random() * 2.2;
        ctx.globalAlpha = 0.4 + Math.random() * 0.6;
        ctx.fillStyle = '#fff6b0';
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI*2); ctx.fill();
      }
      ctx.restore();
    }

    addPaperGrain(ctx, canvas, intensity, WIDTH, HEIGHT) {
      if (typeof intensity !== 'number') intensity = 0.05;
      var imgData = ctx.getImageData(0, 0, WIDTH, HEIGHT);
      var d = imgData.data;
      for (var i = 0; i < d.length; i += 4) {
        var n = (Math.random() - 0.5) * 255 * intensity;
        d[i]   = Math.min(255, Math.max(0, d[i]   + n));
        d[i+1] = Math.min(255, Math.max(0, d[i+1] + n));
        d[i+2] = Math.min(255, Math.max(0, d[i+2] + n));
      }
      ctx.putImageData(imgData, 0, 0);
    }

    // ===== Utilidad =====
    roundRect(ctx, x, y, w, h, r) {
      var rr = Math.min(r, w/2, h/2);
      ctx.beginPath();
      ctx.moveTo(x + rr, y);
      ctx.arcTo(x + w, y, x + w, y + h, rr);
      ctx.arcTo(x + w, y + h, x, y + h, rr);
      ctx.arcTo(x, y + h, x, y, rr);
      ctx.arcTo(x, y, x + w, y, rr);
      ctx.closePath();
    }



  downloadImage(imageBlob) {
    const url = URL.createObjectURL(imageBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tesoro-encontrado-${this.gameState.playerName}-${Date.now()}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  restartGame() {
    // Resetear estado del juego completamente
    this.gameState = {
      playerName: this.gameState.playerName, // Mantener el nombre del jugador
      completedChallenges: 0,
      mapPieces: [false, false, false, false],
      currentScreen: 'start',
      startTime: null,
      endTime: null,
      totalTime: 0
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
  console.log('🚀 Inicializando juego...');
  console.log('📄 CSS cargado:', document.querySelector('link[href*="styles.css"]') ? 'Sí' : 'No');
  console.log('📄 Versión CSS:', document.querySelector('link[href*="styles.css"]')?.href);
  
  // Verificar si los estilos temáticos están disponibles
  const testDiv = document.createElement('div');
  testDiv.className = 'challenge-item';
  testDiv.setAttribute('data-theme', 'color');
  document.body.appendChild(testDiv);
  const testStyle = window.getComputedStyle(testDiv);
  console.log('🎨 Test de estilos temáticos:');
  console.log('  - Background:', testStyle.background);
  console.log('  - Border-color:', testStyle.borderColor);
  document.body.removeChild(testDiv);
  
  window.treasureHuntGame = new TreasureHuntGame();
});

