if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("firebase-messaging-sw.js")
    .then(registration => {
      console.log("Service Worker зареєстровано:", registration);
    })
    .catch(error => {
      console.error("Помилка реєстрації Service Worker:", error);
      alert("Помилка реєстрації Service Worker:")
    });
}