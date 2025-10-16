const path = require("path");
const fs = require("fs");

let puppeteer;
let usingCore = false;
try {
  puppeteer = require("puppeteer");
} catch (e1) {
  try {
    puppeteer = require("puppeteer-core");
    usingCore = true;
  } catch (e2) {
    console.error("\nPuppeteer non installé.");
    console.error("Exécutez : npm install puppeteer");
    console.error(
      "Ou installez puppeteer-core et fournissez CHROME_PATH vers votre binaire Chrome/Chromium."
    );
    process.exit(1);
  }
}

(async () => {
  try {
    const launchOptions = { headless: true };

    // If puppeteer-core is used, we need a local Chrome executable path
    const envChrome = process.env.CHROME_PATH;
    const defaultChromePaths = [
      "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
      "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
      "C:\\Program Files\\Chromium\\Application\\chrome.exe",
    ];

    if (usingCore) {
      let exe = envChrome || null;
      if (!exe) {
        for (const p of defaultChromePaths) {
          if (fs.existsSync(p)) {
            exe = p;
            break;
          }
        }
      }
      if (!exe) {
        console.error(
          "puppeteer-core utilisé mais aucun Chrome local trouvé. Définissez la variable d'environnement CHROME_PATH avec le chemin vers chrome.exe"
        );
        process.exit(1);
      }
      launchOptions.executablePath = exe;
    }

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();
    const file = path.resolve(__dirname, "SylvainMbeumouCV.html");
    await page.goto("file://" + file, { waitUntil: "networkidle0" });
    await page.pdf({
      path: "SylvainMbeumouCV.pdf",
      format: "A4",
      printBackground: true,
      margin: { top: "10mm", right: "10mm", bottom: "10mm", left: "10mm" },
    });
    await browser.close();
    console.log("PDF généré : SylvainMbeumouCV.pdf");
  } catch (err) {
    console.error("Erreur lors de la génération du PDF :", err);
    process.exit(1);
  }
})();
