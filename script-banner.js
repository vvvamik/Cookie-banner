// Přidání posluchačů událostí pro tlačítka
document.getElementById("accept-btn").addEventListener("click", acceptCookies);
document.getElementById("reject-btn").addEventListener("click", rejectCookies);
document.getElementById("preferences-btn").addEventListener("click", showPreferences);

// Funkce pro přijetí cookies
function acceptCookies() {
  // Přijetí cookies - můžete zde provést další akce
  hideBanner();
  disableGdprBar();
}

// Funkce pro odmítnutí cookies
function rejectCookies() {
  // Odmítnutí cookies - můžete zde provést další akce
  hideBanner();
  disableGdprBar();
}

// Funkce pro zobrazení předvoleb
function showPreferences() {
  // Vytvoření dialogu s předvolbami
  var preferences = document.createElement("div");
  preferences.id = "preferences-dialog";
  preferences.innerHTML = `
    <div class="dialog-content">
      <h3>Předvolby cookies</h3>
      <label><input type="checkbox" name="necessary-cookies" checked> Nezbytně nutné cookies</label><br>
      <label><input type="checkbox" name="analytical-cookies"> Analytické cookies</label><br>
      <label><input type="checkbox" name="advertising-cookies"> Reklamní cookies</label><br>
      <button onclick="savePreferences()">Uložit</button>
    </div>
  `;
  
  document.body.appendChild(preferences);
  
  // Posunutí lišty do viditelné oblasti
  document.getElementById("gdpr-bar").classList.add("open");
}

// Funkce pro uložení předvoleb
function savePreferences() {
  var necessaryCookies = document.getElementsByName("necessary-cookies")[0].checked;
  var analyticalCookies = document.getElementsByName("analytical-cookies")[0].checked;
  var advertisingCookies = document.getElementsByName("advertising-cookies")[0].checked;
  
  // Uložení předvoleb - můžete zde provést další akce
  
  hidePreferences();
}

// Funkce pro skrytí lišty
function hideBanner() {
  document.getElementById("gdpr-bar").style.display = "none";
}

// Funkce pro skrytí dialogu s předvolbami
function hidePreferences() {
  document.getElementById("preferences-dialog").remove();
  
  // Posunutí lišty mimo obrazovku
  document.getElementById("gdpr-bar").classList.remove("open");
}

// Funkce pro deaktivaci lišty GDPR
function disableGdprBar() {
  localStorage.setItem("gdprDisabled", "true");
}

// Funkce pro kontrolu stavu lišty GDPR
function checkGdprBarStatus() {
  if (localStorage.getItem("gdprDisabled") === "true") {
    hideBanner();
  }
}

// Kontrola stavu lišty GDPR při načtení stránky
document.addEventListener("DOMContentLoaded", checkGdprBarStatus);
