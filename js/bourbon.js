/**
 * Bipes Boys - Bourbon Flight & Tasting Journal
 */
const BourbonModule = (function () {
  let bottles = [];

  function init() {
    loadBottles();
    renderBottles();
  }

  function loadBottles() {
    try {
      const saved = localStorage.getItem('bipes_bourbon_bottles_v3');
      if (saved) {
        bottles = JSON.parse(saved);
      } else if (window.TRIP_DATA && window.TRIP_DATA.starterBourbons) {
        bottles = [...window.TRIP_DATA.starterBourbons];
      }
    } catch (e) {
      console.warn('Could not load bourbon data', e);
      bottles = window.TRIP_DATA ? [...window.TRIP_DATA.starterBourbons] : [];
    }
  }

  function saveBottles() {
    try {
      localStorage.setItem('bipes_bourbon_bottles_v3', JSON.stringify(bottles));
    } catch (e) {}
  }

  function resetToDefaults() {
    if (!confirm("Reset to Ben's purchased bottles (Buffalo Trace & Old Forester 1920)?")) return;
    bottles = window.TRIP_DATA && window.TRIP_DATA.starterBourbons ? [...window.TRIP_DATA.starterBourbons] : [];
    saveBottles();
    renderBottles();
  }

  function addBottle(newBottle) {
    bottles.push({
      id: 'b_' + Date.now(),
      name: newBottle.name || 'Unnamed Bourbon',
      distiller: newBottle.distiller || 'Unknown',
      proof: newBottle.proof || '90°',
      owner: newBottle.owner || 'Ben',
      rating: parseFloat(newBottle.rating) || 8.0,
      notes: newBottle.notes || 'Smooth with oak and caramel notes.'
    });
    saveBottles();
    renderBottles();
  }

  function deleteBottle(id) {
    if (!confirm('Remove this bottle from the flight?')) return;
    bottles = bottles.filter(b => b.id !== id);
    saveBottles();
    renderBottles();
  }

  function updateRating(id, delta) {
    const b = bottles.find(item => item.id === id);
    if (!b) return;
    let newRate = Math.round((b.rating + delta) * 10) / 10;
    if (newRate < 1.0) newRate = 1.0;
    if (newRate > 10.0) newRate = 10.0;
    b.rating = newRate;
    saveBottles();
    renderBottles();
  }

  function renderBottles() {
    const container = document.getElementById('bourbon-cards-container');
    if (!container) return;

    if (bottles.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <p>No bottles logged yet. Add Ben's bourbon stash below!</p>
        </div>
      `;
      return;
    }

    let html = bottles.map(b => {
      return `
        <div class="bourbon-card">
          <div class="bourbon-card-header">
            <div>
              <h3 class="bourbon-name">${b.name}</h3>
              <div class="bourbon-sub">${b.distiller} • ${b.proof} • Brought by ${b.owner}</div>
            </div>
            <div class="bourbon-badge-wrapper">
              <div class="bourbon-rating-badge">★ ${b.rating.toFixed(1)}</div>
              <div class="rating-quick-adjust">
                <button class="btn-micro" onclick="BourbonModule.updateRating('${b.id}', -0.5)">-</button>
                <button class="btn-micro" onclick="BourbonModule.updateRating('${b.id}', 0.5)">+</button>
              </div>
            </div>
          </div>
          
          <div class="bourbon-notes-body">
            <p class="bourbon-notes-text">"${b.notes}"</p>
          </div>

          <div class="bourbon-footer">
            <span class="whiskey-icon">🥃 Flight Review</span>
            <button class="btn-text-danger" onclick="BourbonModule.deleteBottle('${b.id}')">Delete</button>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = html;
  }

  function showAddModal() {
    const modal = document.getElementById('add-bourbon-modal');
    if (modal) {
      modal.classList.add('active');
    }
  }

  function hideAddModal() {
    const modal = document.getElementById('add-bourbon-modal');
    if (modal) {
      modal.classList.remove('active');
    }
  }

  function handleAddSubmit(e) {
    if (e) e.preventDefault();
    const name = document.getElementById('b-name-input').value.trim();
    if (!name) return alert('Please enter a bottle name.');
    const distiller = document.getElementById('b-distiller-input').value.trim() || 'Kentucky Straight';
    const proof = document.getElementById('b-proof-input').value.trim() || '90°';
    const owner = document.getElementById('b-owner-select').value;
    const rating = parseFloat(document.getElementById('b-rating-input').value) || 8.5;
    const notes = document.getElementById('b-notes-input').value.trim() || 'Tasted on the patio at 98 Southside.';

    addBottle({ name, distiller, proof, owner, rating, notes });

    // Reset fields & close
    document.getElementById('b-name-input').value = '';
    document.getElementById('b-distiller-input').value = '';
    document.getElementById('b-proof-input').value = '';
    document.getElementById('b-notes-input').value = '';
    hideAddModal();
  }

  return {
    init,
    updateRating,
    deleteBottle,
    resetToDefaults,
    showAddModal,
    hideAddModal,
    handleAddSubmit
  };
})();

if (typeof window !== 'undefined') {
  window.BourbonModule = BourbonModule;
}
