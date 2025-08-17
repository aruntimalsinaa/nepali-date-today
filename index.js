function loadNepaliScript() {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      return reject(new Error("Nepali date functions are only available in the browser."));
    }

    if (!window.NepaliFunctions) {
      const script = document.createElement("script");
      script.src = new URL("./nepali-date-today.arun.min.js", import.meta.url).href;
      script.onload = () => resolve(window.NepaliFunctions);
      script.onerror = () => reject(new Error("Failed to load Nepali date script."));
      document.head.appendChild(script);
    } else {
      resolve(window.NepaliFunctions);
    }
  });
}

async function getTodayNepaliDate() {
  try {
    const NepaliFunctions = await loadNepaliScript();
    return NepaliFunctions.BS.GetCurrentDate("YYYY-MM-DD");
  } catch (error) {
    console.error(error);
    return null;
  }
}

export { getTodayNepaliDate };
