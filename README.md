# 🏔️ Bipes Boys Asheville Mountain Reunion Web App

> **A custom mobile-friendly mountain trip guide & clubhouse for Tom (Buffalo, MN), Dan (Raleigh, NC), and Ben (Kingsport, TN) for their 3-night stay in Asheville, NC.**

---

## 📍 Quick Townhouse Reference (98 Southside Ave)

- **Address:** 98 Southside Avenue, Asheville, NC 28801 *(South Slope Brewing District)*
- **Public Preview URL (Anywhere / Cell / Home):** [https://mag-putting-arlington-classroom.trycloudflare.com](https://mag-putting-arlington-classroom.trycloudflare.com)
- **Check-In:** Thursday @ 4:00 PM
- **Check-Out:** Sunday @ 11:00 AM
- **Unit Door Key Code:** `4791#` *(Door keypad beside the garage)*
- **Garage Code:** `0115 ENTER`
- **Wi-Fi Network:** `98Southside`
- **Wi-Fi Password:** `beercity828`
- **Parking:** 2 Dedicated Spots (1 inside garage, 1 dedicated outdoor spot marked #98: turn left behind townhomes, third parallel spot)
- **Quiet Hours:** 10:00 PM nightly

## 🌐 Permanent 24/7 Hosting: GitHub Pages

To keep the site active 24/7 without needing your laptop powered on:

1. Create a new repository on GitHub (e.g. `bipes-boys-asheville`).
2. Push this directory:
   ```bash
   cd /Users/ben/.gemini/antigravity/scratch/BipesBoysAsheville
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/bipes-boys-asheville.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings** ➔ **Pages**:
   - Source: **Deploy from a branch**
   - Branch: `main` / `/ (root)`
   - Click **Save**.
4. GitHub Pages will publish the site live at:
   `https://<YOUR_GITHUB_USERNAME>.github.io/bipes-boys-asheville/`

---

## 🚀 How to Run Locally & Share with Dad & Dan

This web app requires **zero build steps** and runs on any device.

### 1. Launch the Local Server
In your terminal, navigate to the folder and run:
```bash
npm start
# or
node server.js
# or
python3 -m http.server 3000
```

The server will output:
```
==================================================
🏔️  Bipes Boys Asheville Mountain Trip Web App
==================================================
Local:   http://localhost:3000
Network: http://192.168.1.xxx:3000
(Dad & Dan can visit the Network URL on their phones!)
==================================================
```

### 2. Open on Phones (iPhone / Android)
1. Ensure everyone's phone is connected to the townhouse Wi-Fi (`98Southside`).
2. Open Safari (iOS) or Chrome (Android) and navigate to the **Network URL** (e.g. `http://192.168.1.xxx:3000`).
3. **Install as App ("Add to Home Screen"):**
   - **iPhone (Safari):** Tap the **Share** button (box with upward arrow) ➔ Scroll down and tap **"Add to Home Screen"**.
   - **Android (Chrome):** Tap the **three-dot menu** (top-right) ➔ Tap **"Install app"** or **"Add to Home screen"**.
   - It will now display as a native app icon titled **"Bipes AVL"** with full-screen experience and offline caching!

---

## 📱 App Features & Structure

### 🏠 1. Townhouse HQ & Codes
- **1-Tap Access Codes:** Instant copy buttons for `4791#` (Door) and `0115 ENTER` (Garage).
- **Wi-Fi Fast Connect:** One-tap copy for SSID and Password + **automatic Wi-Fi QR code** (scan with phone camera to connect immediately).
- **Parking Guide:** Step-by-step visual instructions for Garage Spot #1 and Outdoor Spot #98.
- **Interactive Check-Out Checklist:** Real-time completion progress tracking with local storage persistence for all 5 host departure rules.
- **Trip Crew & Gear Roster:** Gear tracking for Ben's cigars, dart board, Sonos speakers, meal fixings, and bourbon stash (Buffalo Trace & Old Forester 1920 Prohibition Style).

### 📅 2. 3-Day Mountain Itinerary
- **Thursday (Day 1):** Ben arrives ~4:30 PM (setup Sonos & dart board, prep dinner); Dad (Tom) & Dan arrive ~6:00 PM (welcome bourbon toast); optional South Slope brewery stroll (Burial/Green Man); welcome dinner cooked by Ben at HQ (French Dips, au jus, green beans, potato salad); late-night porch cigars & inaugural darts match.
- **Friday (Day 2):** Hearty mountain breakfast cooked by Ben at HQ (homemade sausage gravy & warm biscuits with scrambled eggs, ready ~9:00 AM); Blue Ridge Parkway scenic drive (Craggy Gardens) or River Arts District stroll; afternoon pool & darts tournament upstairs at **Barley's Taproom & Billiards** (8 regulation tables & steel darts!); Friday feast at **Cúrate** or **Storm Rhum Bar**; post-dinner Belgian ales in the cellar at **Thirsty Monk**; late-night porch chill, bourbon flight & Johann's Folly at HQ.
- **Saturday (Day 3):** Morning run to **The Chop Shop Butchery** for thick-cut dry-aged ribeyes, South Slope brewery crawl (Funkatorium, DSSOLVR, Hi-Wire), afternoon darts bracket, grand townhouse steak & bourbon cook-in feast, fireside cigars and card showdown.
- **Sunday (Day 4):** Farewell breakfast/brunch at Early Girl Eatery or Biscuit Head, interactive checkout checklist walkthrough, checkout at 11:00 AM.

### 🧭 3. Curated Asheville & South Slope Guide
- Filterable directory (Breweries, Dining & BBQ, Pool & Darts, Cigars & Drinks, Provisions/Butcher).
- "Walkable from HQ" quick filter toggle.
- Search by name, cuisine, vibe, or dish.
- One-tap **"Open in Maps"** with exact address pre-filled for turn-by-turn navigation.
- Curated insider tips for every venue (e.g. Barley's upstairs gaming hall, Chop Shop dry-aged ribeyes, Burial's outdoor beer garden, Casablanca's walk-in humidor).

### 🎯 4. Boys' Lounge & Clubhouse Utilities
- **Digital Dart Scoreboard:**
  - **Cricket Mode:** Real-time scoring on 15, 16, 17, 18, 19, 20 & Bullseye. Single (+1), Double (x2), and Triple (x3) tap controls, automatic closed-mark tracking (`/`, `✕`, `⨂`), points calculation, undo button, and turn management for Tom, Dan, and Ben.
  - **501 / 301 Countdown Mode:** Total score tracking, bust detection, quick score chips (26, 41, 60, 81, 100, 140, 180 🎯), and checkout detection.
- **Johann's Folly (Ben's Dart Game):** Direct link to launch Ben's custom web dart game: [https://benbipes.github.io/johannsfolly/](https://benbipes.github.io/johannsfolly/).
- **Bourbon Tasting Flight Journal:** Rate and review the bourbon bottles brought on the trip — pre-loaded with Ben's purchased bottles: **Buffalo Trace Kentucky Straight** (90°) and **Old Forester 1920 Prohibition Style** (115°) with ratings 1.0 to 10.0, nose/palate notes, and quick edit/add.
- **Sonos Mountain Music:** Integrated player and direct link to Ben's official Asheville trip Spotify playlist: [https://open.spotify.com/playlist/5bmnGiwp6n9l1j5UUCIgBz](https://open.spotify.com/playlist/5bmnGiwp6n9l1j5UUCIgBz?si=2bafa98738694ae7).

---

## 🛠️ Tech Highlights
- **100% Vanilla ES6+ & CSS3:** No build tooling, zero external runtime dependencies, ultra-lightweight and fast.
- **PWA Ready:** Includes `manifest.json`, custom mountain SVG icons, and `sw.js` for offline operation in spotty mountain signal areas.
- **Persistent LocalStorage:** All checklist completions, bourbon ratings, bookmarks, and game scores remain saved even when closing the browser.
