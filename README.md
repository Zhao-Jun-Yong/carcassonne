# 卡卡頌規則典籍 · Carcassonne Rules Reference

Carcassonne Big Box 雙語規則速查（繁體中文 ＋ English），涵蓋主遊戲及全部 13 款擴充。  
A bilingual quick-reference for Carcassonne Big Box — Traditional Chinese and English — covering the base game and all 13 expansions.

---

## 功能 · Features

| 功能 | Feature |
|------|---------|
| 互動回合流程 — 選擇使用中的擴充，即時更新每回合步驟 | Interactive turn flow — select active expansions to update steps in real time |
| 擴充篩選 — 回合流程的擴充切換同步隱藏未使用的規則章節 | Expansion filter — toggles in the turn flow also hide unused rule sections |
| 裁判手冊 — 涵蓋跨擴充的常見爭議與官方裁定 | Referee's Handbook — common disputes and official rulings across expansions |
| 全文搜尋 — 浮動按鈕開啟，按 Esc 關閉 | Full-text search — floating button to open, Esc to close |
| 底部導覽列 Scroll Spy — 自動跟蹤目前閱讀位置 | Bottom nav scroll-spy — auto-highlights the current section while scrolling |
| PWA 可安裝 — 支援離線使用，無需網路 | Installable PWA — works fully offline after first visit |
| 手機優先設計 — 桌遊進行中可單手操作 | Mobile-first — designed for one-handed use at the game table |

---

## 涵蓋擴充 · Expansions Covered

主遊戲 ＋ 以下 13 款擴充（Carcassonne Big Box 收錄版本）：

1. 河流 · The River
2. 修道院長 · The Abbot
3. 教堂餐館（酒館與大教堂）· Inns & Cathedrals
4. 建築師與豬（商人與建築師）· Traders & Builders
5. 飛行器 · Flying Machines
6. 聖旨 · Messengers
7. 擺渡人 · Ferries
8. 金礦 · Gold Mines
9. 法師女巫 · Mage & Witch
10. 土匪 · Robbers
11. 麥田圈 · Crop Circles
12. 公主火龍（公主與火龍）· The Princess & The Dragon
13. 橋樑山城（橋樑、山城與市集）· Bridges, Castles & Bazaars

---

## 使用方式 · Usage

直接在手機或桌面瀏覽器開啟對應語言的頁面：

- **繁體中文**：`index.html`
- **English**：`en.html`

首次開啟後，Service Worker 會快取所有資源（含 Google Fonts），之後可在無網路環境下完整使用。  
On first visit, the service worker caches all assets including Google Fonts — the app works fully offline afterwards.

### 安裝為 App · Install as App

在 iOS Safari 選擇「加入主畫面」；在 Android Chrome 點選「安裝應用程式」，即可像原生 App 一樣使用。  
On iOS Safari tap "Add to Home Screen"; on Android Chrome tap "Install app" to use it like a native app.

---

## 本地執行 · Run Locally

Service Worker 需要透過 HTTP 伺服器才能正常運作（直接開啟 `file://` 無法啟用離線功能）：

```bash
# Python 3
python3 -m http.server 8000

# Node.js (npx)
npx serve .
```

開啟 `http://localhost:8000` 即可。

---

## 技術說明 · Tech Notes

- 純 HTML / CSS / JavaScript，無任何框架或建置工具
- 字型：繁中版使用 Noto Serif TC ＋ DM Sans；英文版使用 Lora ＋ DM Sans（均透過 Google Fonts 載入，首次後快取離線）
- PWA：`manifest.json` ＋ `sw.js`，採 Network-first（頁面）＋ Cache-first（字型）策略
- Scroll Spy：`IntersectionObserver` 自動同步底部導覽列
- 擴充篩選：與回合流程的切換按鈕共用同一狀態，無額外設定

---

## 檔案結構 · File Structure

```
├── index.html      # 繁體中文版
├── en.html         # English version
├── manifest.json   # PWA manifest
├── sw.js           # Service worker (offline caching)
├── icon.svg        # App icon
└── README.md
```
