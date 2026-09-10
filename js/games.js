/**
 * Bipes Boys - Dart & Card Game Scorekeepers
 */
const GamesModule = (function () {
  // Cricket state
  const CRICKET_TARGETS = [20, 19, 18, 17, 16, 15, 25]; // 25 is Bull
  let cricketState = {
    players: ['Tom', 'Dan', 'Ben'],
    activePlayerIndex: 0,
    history: [],
    // marks[playerIndex][target] = count (0..3)
    marks: [[0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0]],
    scores: [0, 0, 0],
    winner: null
  };

  // Countdown (501/301) state
  let x01State = {
    startScore: 501,
    players: ['Tom', 'Dan', 'Ben'],
    activePlayerIndex: 0,
    scores: [501, 501, 501],
    history: [],
    winner: null
  };

  // Card Game state
  let cardsState = {
    gameName: 'Euchre / Spades',
    players: [
      { name: 'Tom', score: 0 },
      { name: 'Dan', score: 0 },
      { name: 'Ben', score: 0 }
    ],
    rounds: []
  };

  function loadSavedState() {
    try {
      const savedCricket = localStorage.getItem('bipes_cricket_state');
      if (savedCricket) cricketState = JSON.parse(savedCricket);
      const savedX01 = localStorage.getItem('bipes_x01_state');
      if (savedX01) x01State = JSON.parse(savedX01);
      const savedCards = localStorage.getItem('bipes_cards_state');
      if (savedCards) cardsState = JSON.parse(savedCards);
    } catch (e) {
      console.warn('Could not load saved game state', e);
    }
  }

  function saveCricket() {
    try { localStorage.setItem('bipes_cricket_state', JSON.stringify(cricketState)); } catch (e) {}
  }
  function saveX01() {
    try { localStorage.setItem('bipes_x01_state', JSON.stringify(x01State)); } catch (e) {}
  }
  function saveCards() {
    try { localStorage.setItem('bipes_cards_state', JSON.stringify(cardsState)); } catch (e) {}
  }

  // --- CRICKET LOGIC ---
  function hitCricketTarget(playerIdx, targetIdx, multiplier) {
    if (cricketState.winner !== null) return;
    // Snapshot history for undo
    cricketState.history.push({
      marks: JSON.parse(JSON.stringify(cricketState.marks)),
      scores: [...cricketState.scores],
      activePlayerIndex: cricketState.activePlayerIndex
    });

    const targetVal = CRICKET_TARGETS[targetIdx];
    const currentMarks = cricketState.marks[playerIdx][targetIdx];
    const neededToClose = Math.max(0, 3 - currentMarks);

    if (multiplier <= neededToClose) {
      cricketState.marks[playerIdx][targetIdx] += multiplier;
    } else {
      // Closes the number, excess scores if any other player hasn't closed it
      cricketState.marks[playerIdx][targetIdx] = 3;
      const excess = multiplier - neededToClose;
      
      // Check if open for other players
      const allOthersClosed = cricketState.players.every((_, idx) => {
        return idx === playerIdx || cricketState.marks[idx][targetIdx] >= 3;
      });

      if (!allOthersClosed) {
        cricketState.scores[playerIdx] += excess * targetVal;
      }
    }

    checkCricketWin();
    saveCricket();
    renderCricket();
  }

  function checkCricketWin() {
    for (let p = 0; p < cricketState.players.length; p++) {
      const allClosed = cricketState.marks[p].every(m => m >= 3);
      if (allClosed) {
        // Player has closed all numbers. Do they also have highest score?
        const highestScore = Math.max(...cricketState.scores);
        if (cricketState.scores[p] >= highestScore) {
          cricketState.winner = cricketState.players[p];
          break;
        }
      }
    }
  }

  function nextCricketTurn() {
    cricketState.activePlayerIndex = (cricketState.activePlayerIndex + 1) % cricketState.players.length;
    saveCricket();
    renderCricket();
  }

  function undoCricket() {
    if (cricketState.history.length === 0) return;
    const prev = cricketState.history.pop();
    cricketState.marks = prev.marks;
    cricketState.scores = prev.scores;
    cricketState.activePlayerIndex = prev.activePlayerIndex;
    cricketState.winner = null;
    saveCricket();
    renderCricket();
  }

  function resetCricket() {
    if (!confirm('Start a new Cricket dart game?')) return;
    cricketState.marks = cricketState.players.map(() => [0,0,0,0,0,0,0]);
    cricketState.scores = cricketState.players.map(() => 0);
    cricketState.history = [];
    cricketState.winner = null;
    cricketState.activePlayerIndex = 0;
    saveCricket();
    renderCricket();
  }

  function getMarkSymbol(count) {
    if (count === 0) return '<span class="mark-empty">•</span>';
    if (count === 1) return '<span class="mark-one">/</span>';
    if (count === 2) return '<span class="mark-two">✕</span>';
    return '<span class="mark-closed">⨂</span>';
  }

  function renderCricket() {
    const container = document.getElementById('cricket-board-container');
    if (!container) return;

    let html = `
      <div class="game-turn-banner ${cricketState.winner ? 'winner-banner' : ''}">
        ${cricketState.winner 
          ? `🎉 <strong>${cricketState.winner} Wins Cricket!</strong>` 
          : `🎯 Throwing: <span class="active-player-tag">${cricketState.players[cricketState.activePlayerIndex]}</span>`}
      </div>

      <div class="cricket-table-wrapper">
        <table class="cricket-table">
          <thead>
            <tr>
              <th class="target-col">Target</th>
              ${cricketState.players.map((p, idx) => `
                <th class="${idx === cricketState.activePlayerIndex ? 'col-active' : ''}">
                  <div class="p-header-name">${p}</div>
                  <div class="p-header-score">${cricketState.scores[idx]} pts</div>
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
            ${CRICKET_TARGETS.map((target, tIdx) => {
              const label = target === 25 ? 'BULL' : target;
              return `
                <tr>
                  <td class="target-cell">
                    <span class="target-badge">${label}</span>
                  </td>
                  ${cricketState.players.map((_, pIdx) => {
                    const marks = cricketState.marks[pIdx][tIdx];
                    const isClosed = marks >= 3;
                    const isActive = pIdx === cricketState.activePlayerIndex;
                    return `
                      <td class="mark-cell ${isClosed ? 'target-closed' : ''} ${isActive ? 'active-player-cell' : ''}">
                        <div class="mark-display">${getMarkSymbol(marks)}</div>
                        <div class="dart-quick-btns">
                          <button class="dart-hit-btn" onclick="GamesModule.hitCricketTarget(${pIdx}, ${tIdx}, 1)" title="Single">+1</button>
                          <button class="dart-hit-btn btn-dbl" onclick="GamesModule.hitCricketTarget(${pIdx}, ${tIdx}, 2)" title="Double">x2</button>
                          ${target !== 25 ? `<button class="dart-hit-btn btn-tpl" onclick="GamesModule.hitCricketTarget(${pIdx}, ${tIdx}, 3)" title="Triple">x3</button>` : ''}
                        </div>
                      </td>
                    `;
                  }).join('')}
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>

      <div class="game-actions-bar">
        <button class="btn btn-secondary btn-sm" onclick="GamesModule.undoCricket()" ${cricketState.history.length === 0 ? 'disabled' : ''}>
          ↩ Undo
        </button>
        <button class="btn btn-primary btn-sm" onclick="GamesModule.nextCricketTurn()">
          Next Turn ➔
        </button>
        <button class="btn btn-outline-danger btn-sm" onclick="GamesModule.resetCricket()">
          New Game
        </button>
      </div>
    `;

    container.innerHTML = html;
  }

  // --- 501 / 301 LOGIC ---
  function submitX01Round(points) {
    if (x01State.winner !== null) return;
    const pIdx = x01State.activePlayerIndex;
    const currentScore = x01State.scores[pIdx];
    const newScore = currentScore - points;

    x01State.history.push({
      scores: [...x01State.scores],
      activePlayerIndex: x01State.activePlayerIndex
    });

    if (newScore === 0) {
      x01State.scores[pIdx] = 0;
      x01State.winner = x01State.players[pIdx];
    } else if (newScore < 0 || newScore === 1) {
      alert(`Bust! ${x01State.players[pIdx]} scored ${points} (cannot end on 1 or negative). Score stays at ${currentScore}.`);
    } else {
      x01State.scores[pIdx] = newScore;
    }

    x01State.activePlayerIndex = (x01State.activePlayerIndex + 1) % x01State.players.length;
    saveX01();
    renderX01();
  }

  function undoX01() {
    if (x01State.history.length === 0) return;
    const prev = x01State.history.pop();
    x01State.scores = prev.scores;
    x01State.activePlayerIndex = prev.activePlayerIndex;
    x01State.winner = null;
    saveX01();
    renderX01();
  }

  function resetX01(startScore) {
    x01State.startScore = startScore || x01State.startScore;
    x01State.scores = x01State.players.map(() => x01State.startScore);
    x01State.history = [];
    x01State.winner = null;
    x01State.activePlayerIndex = 0;
    saveX01();
    renderX01();
  }

  function renderX01() {
    const container = document.getElementById('x01-board-container');
    if (!container) return;

    let html = `
      <div class="x01-top-bar">
        <div class="mode-pills">
          <button class="pill ${x01State.startScore === 301 ? 'active' : ''}" onclick="GamesModule.resetX01(301)">301</button>
          <button class="pill ${x01State.startScore === 501 ? 'active' : ''}" onclick="GamesModule.resetX01(501)">501</button>
        </div>
        <div class="game-turn-banner ${x01State.winner ? 'winner-banner' : ''}">
          ${x01State.winner 
            ? `🏆 <strong>${x01State.winner} Checked Out!</strong>` 
            : `🎯 Current Turn: <span class="active-player-tag">${x01State.players[x01State.activePlayerIndex]}</span>`}
        </div>
      </div>

      <div class="x01-players-grid">
        ${x01State.players.map((p, idx) => `
          <div class="x01-card ${idx === x01State.activePlayerIndex ? 'x01-card-active' : ''}">
            <div class="x01-name">${p}</div>
            <div class="x01-score-val">${x01State.scores[idx]}</div>
            <div class="x01-sub">${x01State.startScore - x01State.scores[idx]} thrown</div>
          </div>
        `).join('')}
      </div>

      <div class="x01-input-area">
        <div class="input-group-row">
          <input type="number" id="x01-turn-points" class="form-input" placeholder="Points this turn (e.g. 60)" min="0" max="180">
          <button class="btn btn-primary" onclick="GamesModule.handleX01Submit()">Submit</button>
        </div>
        <div class="quick-points-bar">
          <button class="btn-chip" onclick="document.getElementById('x01-turn-points').value=26">26</button>
          <button class="btn-chip" onclick="document.getElementById('x01-turn-points').value=41">41</button>
          <button class="btn-chip" onclick="document.getElementById('x01-turn-points').value=60">60</button>
          <button class="btn-chip" onclick="document.getElementById('x01-turn-points').value=81">81</button>
          <button class="btn-chip" onclick="document.getElementById('x01-turn-points').value=100">100</button>
          <button class="btn-chip" onclick="document.getElementById('x01-turn-points').value=140">140</button>
          <button class="btn-chip" onclick="document.getElementById('x01-turn-points').value=180">180 🎯</button>
        </div>
      </div>

      <div class="game-actions-bar">
        <button class="btn btn-secondary btn-sm" onclick="GamesModule.undoX01()" ${x01State.history.length === 0 ? 'disabled' : ''}>
          ↩ Undo
        </button>
        <button class="btn btn-outline-danger btn-sm" onclick="GamesModule.resetX01()">
          Reset ${x01State.startScore}
        </button>
      </div>
    `;

    container.innerHTML = html;
  }

  function handleX01Submit() {
    const input = document.getElementById('x01-turn-points');
    if (!input) return;
    const pts = parseInt(input.value, 10);
    if (isNaN(pts) || pts < 0 || pts > 180) {
      alert('Please enter a valid dart score between 0 and 180');
      return;
    }
    submitX01Round(pts);
    input.value = '';
    input.focus();
  }

  // --- CARDS SCOREPAD LOGIC ---
  function addCardPoints(playerIdx, delta) {
    cardsState.players[playerIdx].score += delta;
    saveCards();
    renderCards();
  }

  function setCustomCardPoints(playerIdx) {
    const val = prompt(`Enter points adjustment for ${cardsState.players[playerIdx].name} (positive or negative):`, "5");
    if (val === null) return;
    const num = parseInt(val, 10);
    if (!isNaN(num)) {
      addCardPoints(playerIdx, num);
    }
  }

  function resetCards() {
    if (!confirm('Reset card game scorepad?')) return;
    cardsState.players.forEach(p => p.score = 0);
    saveCards();
    renderCards();
  }

  function renderCards() {
    const container = document.getElementById('cards-board-container');
    if (!container) return;

    // Sort players for display leaderboard
    const sorted = [...cardsState.players].map((p, i) => ({ ...p, origIdx: i }))
      .sort((a, b) => b.score - a.score);

    let html = `
      <div class="cards-players-list">
        ${sorted.map((p, rank) => `
          <div class="card-player-row ${rank === 0 && p.score > 0 ? 'leader-row' : ''}">
            <div class="c-rank">${rank === 0 && p.score > 0 ? '👑' : '#' + (rank + 1)}</div>
            <div class="c-info">
              <div class="c-name">${p.name}</div>
              <div class="c-score">${p.score} <span class="c-unit">pts</span></div>
            </div>
            <div class="c-controls">
              <button class="btn-mod" onclick="GamesModule.addCardPoints(${p.origIdx}, -1)">-1</button>
              <button class="btn-mod" onclick="GamesModule.addCardPoints(${p.origIdx}, 1)">+1</button>
              <button class="btn-mod btn-mod-accent" onclick="GamesModule.addCardPoints(${p.origIdx}, 5)">+5</button>
              <button class="btn-mod" onclick="GamesModule.setCustomCardPoints(${p.origIdx})">±</button>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="cards-actions">
        <button class="btn btn-outline-danger btn-sm" onclick="GamesModule.resetCards()">Reset Scores</button>
      </div>
    `;

    container.innerHTML = html;
  }

  return {
    init: function () {
      loadSavedState();
      renderCricket();
      renderX01();
      renderCards();
    },
    hitCricketTarget,
    nextCricketTurn,
    undoCricket,
    resetCricket,
    submitX01Round,
    handleX01Submit,
    undoX01,
    resetX01,
    addCardPoints,
    setCustomCardPoints,
    resetCards,
    renderCricket,
    renderX01,
    renderCards
  };
})();

if (typeof window !== 'undefined') {
  window.GamesModule = GamesModule;
}
