/**
 * Main Application Controller - Bipes Boys Asheville Mountain Trip
 */
(function () {
  'use strict';

  // Application State
  const App = {
    activeTab: 'hq',
    activeItineraryDay: 'thu',
    activeExploreCategory: 'all',
    onlyWalkable: false,
    exploreSearchQuery: '',
    favorites: new Set(),
    checkoutState: {},

    init: function () {
      this.loadStorage();
      this.bindNavigation();
      this.renderHQ();
      this.renderItinerary();
      this.renderExplore();
      this.renderPlaylists();
      this.renderCrew();
      this.setupQuietHoursBadge();
      this.registerServiceWorker();

      // Initialize sub-modules
      if (window.GamesModule) window.GamesModule.init();
      if (window.BourbonModule) window.BourbonModule.init();

      // Check URL hash for direct tab linking
      const hash = window.location.hash.replace('#', '');
      if (hash && ['hq', 'itinerary', 'explore', 'lounge'].includes(hash)) {
        this.switchTab(hash);
      }
    },

    loadStorage: function () {
      try {
        const savedFavs = localStorage.getItem('bipes_fav_places');
        if (savedFavs) {
          this.favorites = new Set(JSON.parse(savedFavs));
        }
        const savedCheckout = localStorage.getItem('bipes_checkout_state');
        if (savedCheckout) {
          this.checkoutState = JSON.parse(savedCheckout);
        }
      } catch (e) {
        console.warn('Storage load error', e);
      }
    },

    saveFavorites: function () {
      try {
        localStorage.setItem('bipes_fav_places', JSON.stringify([...this.favorites]));
      } catch (e) {}
    },

    saveCheckout: function () {
      try {
        localStorage.setItem('bipes_checkout_state', JSON.stringify(this.checkoutState));
      } catch (e) {}
    },

    // --- NAVIGATION & TABS ---
    bindNavigation: function () {
      const self = this;
      
      // Tab buttons (bottom nav and desktop nav)
      document.querySelectorAll('[data-tab-target]').forEach(btn => {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          const target = this.getAttribute('data-tab-target');
          self.switchTab(target);
        });
      });

      // Hamburger menu drawer
      const menuBtn = document.getElementById('menu-toggle-btn');
      const drawer = document.getElementById('nav-drawer');
      const backdrop = document.getElementById('drawer-backdrop');
      const closeBtn = document.getElementById('drawer-close-btn');

      function openDrawer() {
        drawer.classList.add('open');
        backdrop.classList.add('visible');
      }
      function closeDrawer() {
        drawer.classList.remove('open');
        backdrop.classList.remove('visible');
      }

      if (menuBtn) menuBtn.addEventListener('click', openDrawer);
      if (backdrop) backdrop.addEventListener('click', closeDrawer);
      if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

      // Close drawer on link click
      document.querySelectorAll('#nav-drawer a').forEach(a => {
        a.addEventListener('click', closeDrawer);
      });
    },

    switchTab: function (tabName) {
      if (!tabName) tabName = 'hq';
      let activeView = document.getElementById('view-' + tabName);
      if (!activeView) {
        tabName = 'hq';
        activeView = document.getElementById('view-hq');
      }
      this.activeTab = tabName;
      if (window.location.hash !== '#' + tabName) {
        window.location.hash = tabName;
      }

      // Update tab contents
      document.querySelectorAll('.tab-view').forEach(view => {
        view.classList.remove('active');
      });
      if (activeView) activeView.classList.add('active');

      // Update button active states
      document.querySelectorAll('[data-tab-target]').forEach(btn => {
        if (btn.getAttribute('data-tab-target') === tabName) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      // Scroll top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    // --- COPY TO CLIPBOARD HELPER ---
    copyText: function (text, label) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          this.showToast(`Copied ${label || text} to clipboard!`);
        }).catch(() => {
          this.fallbackCopy(text, label);
        });
      } else {
        this.fallbackCopy(text, label);
      }
    },

    fallbackCopy: function (text, label) {
      const el = document.createElement('textarea');
      el.value = text;
      el.setAttribute('readonly', '');
      el.style.position = 'fixed';
      el.style.left = '-9999px';
      el.style.fontSize = '16px';
      document.body.appendChild(el);
      el.focus();
      el.select();
      el.setSelectionRange(0, 99999);
      try {
        const success = document.execCommand('copy');
        if (success) {
          this.showToast(`Copied ${label || text}!`);
        } else {
          this.showToast(`Text: ${text}`);
        }
      } catch (err) {
        this.showToast(`Text: ${text}`);
      }
      document.body.removeChild(el);
    },

    showToast: function (msg) {
      const toast = document.getElementById('toast-notification');
      if (!toast) return;
      toast.textContent = msg;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 2600);
    },

    // --- HQ RENDERING ---
    renderHQ: function () {
      const h = window.TRIP_DATA.house;

      // Generate Wi-Fi QR Code
      const qrContainer = document.getElementById('wifi-qr-box');
      if (qrContainer && window.QRCode) {
        // Standard Wi-Fi connection QR payload
        const wifiString = `WIFI:T:WPA;S:${h.wifi.ssid};P:${h.wifi.password};;`;
        qrContainer.innerHTML = window.QRCode.generateSVG(wifiString, {
          size: 160,
          margin: 2,
          fgColor: '#1e293b',
          bgColor: '#ffffff'
        });
      }

      this.renderCheckoutChecklist();
    },

    renderCheckoutChecklist: function () {
      const container = document.getElementById('checkout-rules-list');
      const progressFill = document.getElementById('checkout-progress-fill');
      const progressLabel = document.getElementById('checkout-progress-label');
      if (!container) return;

      const rules = window.TRIP_DATA.house.checkoutRules;
      let completedCount = 0;

      const html = rules.map((r, i) => {
        const isChecked = !!this.checkoutState[r.id];
        if (isChecked) completedCount++;
        return `
          <div class="checklist-item ${isChecked ? 'completed' : ''}" onclick="App.toggleCheckoutRule('${r.id}')">
            <div class="checkbox-circle ${isChecked ? 'checked' : ''}">
              ${isChecked ? '✓' : ''}
            </div>
            <div class="checklist-text">
              <span class="rule-number">${i + 1}.</span> ${r.text}
            </div>
          </div>
        `;
      }).join('');

      container.innerHTML = html;

      // Progress
      const pct = Math.round((completedCount / rules.length) * 100);
      if (progressFill) progressFill.style.width = pct + '%';
      if (progressLabel) {
        progressLabel.innerHTML = `${completedCount} of ${rules.length} completed (${pct}%)`;
      }
    },

    toggleCheckoutRule: function (ruleId) {
      this.checkoutState[ruleId] = !this.checkoutState[ruleId];
      this.saveCheckout();
      this.renderCheckoutChecklist();
    },

    resetCheckoutList: function () {
      if (!confirm('Reset checkout checklist?')) return;
      this.checkoutState = {};
      this.saveCheckout();
      this.renderCheckoutChecklist();
    },

    setupQuietHoursBadge: function () {
      const badge = document.getElementById('quiet-hours-status');
      if (!badge) return;

      function updateStatus() {
        const now = new Date();
        const hour = now.getHours(); // 0 - 23
        // Quiet hours: 10:00 PM (22) to 8:00 AM (8)
        const isQuiet = (hour >= 22 || hour < 8);
        if (isQuiet) {
          badge.className = 'quiet-badge quiet-active';
          badge.innerHTML = `🌙 Quiet Hours Active (10pm - 8am)`;
        } else {
          badge.className = 'quiet-badge quiet-inactive';
          badge.innerHTML = `☀️ Quiet Hours begin at 10:00 PM`;
        }
      }

      updateStatus();
      setInterval(updateStatus, 60000);
    },

    // --- CREW & GEAR ---
    renderCrew: function () {
      const crewContainer = document.getElementById('crew-roster-list');
      if (crewContainer && window.TRIP_DATA.crew) {
        crewContainer.innerHTML = window.TRIP_DATA.crew.map(c => `
          <div class="crew-card">
            <div class="crew-emoji">${c.emoji}</div>
            <div class="crew-details">
              <div class="crew-name">${c.name}</div>
              <div class="crew-sub">${c.role} • ${c.location}</div>
            </div>
            <span class="badge-role">${c.badge}</span>
          </div>
        `).join('');
      }

      const gearContainer = document.getElementById('gear-roster-list');
      if (gearContainer && window.TRIP_DATA.gear) {
        gearContainer.innerHTML = window.TRIP_DATA.gear.map(g => `
          <div class="gear-chip">
            <span class="gear-icon">✓</span>
            <div class="gear-info">
              <strong>${g.item}</strong>
              <small>Brought by ${g.broughtBy} • ${g.status}</small>
            </div>
          </div>
        `).join('');
      }
    },

    // --- ITINERARY ---
    renderItinerary: function () {
      const self = this;
      const days = window.TRIP_DATA.itinerary;
      const navContainer = document.getElementById('itinerary-days-nav');
      const timelineContainer = document.getElementById('itinerary-timeline');

      if (!navContainer || !timelineContainer) return;

      // Render Day Selectors
      navContainer.innerHTML = days.map(d => `
        <button class="day-tab-btn ${d.dayId === self.activeItineraryDay ? 'active' : ''}" onclick="App.selectItineraryDay('${d.dayId}')">
          <span class="d-name">${d.dayName}</span>
          <span class="d-sub">${d.dayId === 'thu' ? 'Arrival' : d.dayId === 'sun' ? 'Checkout' : 'Full Day'}</span>
        </button>
      `).join('');

      // Find active day
      const currentDay = days.find(d => d.dayId === self.activeItineraryDay) || days[0];

      let html = `
        <div class="itinerary-header-card">
          <div class="itinerary-date-title">${currentDay.dateLabel}</div>
          <div class="itinerary-tagline">${currentDay.tagline}</div>
        </div>

        <div class="timeline-v">
          ${currentDay.events.map(ev => {
            let iconBadge = '📍';
            if (ev.type === 'brewery') iconBadge = '🍺';
            if (ev.type === 'food') iconBadge = '🥩';
            if (ev.type === 'pool') iconBadge = '🎱';
            if (ev.type === 'games') iconBadge = '🎯';
            if (ev.type === 'relax') iconBadge = '💨';
            if (ev.type === 'provisions') iconBadge = '🛒';
            if (ev.type === 'hq') iconBadge = '🏠';

            return `
              <div class="timeline-node">
                <div class="node-time-col">
                  <span class="node-badge">${iconBadge}</span>
                  <span class="node-time">${ev.time}</span>
                </div>
                <div class="node-card">
                  <div class="node-header">
                    <h4 class="node-title">${ev.title}</h4>
                    <span class="node-location">${ev.location}</span>
                  </div>
                  <p class="node-notes">${ev.notes}</p>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;

      timelineContainer.innerHTML = html;
    },

    selectItineraryDay: function (dayId) {
      this.activeItineraryDay = dayId;
      this.renderItinerary();
    },

    // --- EXPLORE DIRECTORY ---
    renderExplore: function () {
      const container = document.getElementById('explore-cards-grid');
      if (!container) return;

      const places = window.TRIP_DATA.places;
      const query = this.exploreSearchQuery.toLowerCase();

      const filtered = places.filter(p => {
        // Category filter
        if (this.activeExploreCategory !== 'all' && p.category !== this.activeExploreCategory) {
          return false;
        }
        // Walkable filter
        if (this.onlyWalkable && !p.tags.includes('Walkable')) {
          return false;
        }
        // Search filter
        if (query) {
          const matchName = p.name.toLowerCase().includes(query);
          const matchVibe = p.vibe.toLowerCase().includes(query);
          const matchDesc = p.description.toLowerCase().includes(query);
          const matchTags = p.tags.some(t => t.toLowerCase().includes(query));
          return matchName || matchVibe || matchDesc || matchTags;
        }
        return true;
      });

      if (filtered.length === 0) {
        container.innerHTML = `
          <div class="empty-state">
            <p>No spots match your filter. Try adjusting your search.</p>
          </div>
        `;
        return;
      }

      container.innerHTML = filtered.map(p => {
        const isFav = this.favorites.has(p.id);
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.name + ' ' + p.address)}`;

        return `
          <div class="explore-card">
            <div class="card-top-row">
              <div class="card-meta">
                <span class="cat-pill cat-${p.category}">${p.category.toUpperCase()}</span>
                <span class="dist-pill">${p.distance} • ${p.walkTime}</span>
              </div>
              <button class="fav-btn ${isFav ? 'active' : ''}" onclick="App.toggleFavorite('${p.id}')" title="Bookmark">
                ${isFav ? '★' : '☆'}
              </button>
            </div>

            <h3 class="place-name">${p.name}</h3>
            <div class="place-vibe">${p.vibe}</div>
            
            <p class="place-desc">${p.description}</p>

            ${p.mustTry ? `
              <div class="must-try-box">
                <strong>Insider Picks:</strong> ${p.mustTry}
              </div>
            ` : ''}

            <div class="place-tags">
              ${p.tags.map(t => `<span class="tag-chip">${t}</span>`).join('')}
            </div>

            <div class="place-actions">
              <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                🧭 Open in Maps
              </a>
              <button class="btn btn-secondary btn-sm" onclick="App.copyText('${p.address}', 'Address')">
                📋 Copy Address
              </button>
            </div>
          </div>
        `;
      }).join('');
    },

    setExploreCategory: function (cat) {
      this.activeExploreCategory = cat;
      document.querySelectorAll('.filter-chip').forEach(btn => {
        if (btn.getAttribute('data-cat') === cat) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
      this.renderExplore();
    },

    toggleWalkableFilter: function () {
      this.onlyWalkable = !this.onlyWalkable;
      const toggleBtn = document.getElementById('toggle-walkable-btn');
      if (toggleBtn) {
        toggleBtn.classList.toggle('active', this.onlyWalkable);
      }
      this.renderExplore();
    },

    handleSearchInput: function (e) {
      this.exploreSearchQuery = e.target.value.trim();
      this.renderExplore();
    },

    toggleFavorite: function (id) {
      if (this.favorites.has(id)) {
        this.favorites.delete(id);
      } else {
        this.favorites.add(id);
      }
      this.saveFavorites();
      this.renderExplore();
    },

    // --- SPOTIFY PLAYLIST ---
    renderPlaylists: function () {
      const container = document.getElementById('sonos-playlists-container');
      const sp = window.TRIP_DATA.spotifyPlaylist;
      if (!container || !sp) return;

      container.innerHTML = `
        <div class="playlist-featured-card">
          <div class="spotify-banner-row">
            <div class="spotify-logo-badge">🟢 Spotify • Sonos Ready</div>
            <a href="${sp.url}" target="_blank" rel="noopener noreferrer" class="btn btn-spotify btn-sm">
              ▶ Open in App
            </a>
          </div>
          <h4 class="spotify-pl-title">${sp.name}</h4>
          <p class="spotify-pl-desc">${sp.description}</p>
          
          <div class="spotify-embed-wrap">
            <iframe style="border-radius:12px; border:none;" src="${sp.embedUrl}" width="100%" height="152" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <div class="spotify-actions">
            <a href="${sp.url}" target="_blank" rel="noopener noreferrer" class="btn btn-spotify" style="width: 100%; justify-content: center;">
              ▶ Open Ben's Playlist on Spotify
            </a>
          </div>
        </div>
      `;
    },

    // --- SERVICE WORKER FOR OFFLINE / PWA ---
    registerServiceWorker: function () {
      if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
        navigator.serviceWorker.register('./sw.js').catch(err => {
          console.log('SW registration note:', err);
        });
      }
    }
  };

  // Expose to window
  window.App = App;

  // DOM Content Loaded
  document.addEventListener('DOMContentLoaded', () => {
    App.init();
  });
})();
