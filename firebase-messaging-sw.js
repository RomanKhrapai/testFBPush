const channel = new BroadcastChannel('fcm_notifications');

self.addEventListener("push", (event) => {
    console.log("SW: Отримано Push-івент");
    
    let payload;
    try {
        payload = event.data.json();
    } catch (e) {
        payload = { notification: { title: "Raw Data", body: event.data.text() } };
    }

    // Відправляємо в канал
    channel.postMessage(payload);

    // Візуальне сповіщення
    const title = payload.notification?.title || "Нове сповіщення";
    const options = {
        body: payload.notification?.body || "",
        data: payload // зберігаємо всередині нативного пуша
    };

    event.waitUntil(self.registration.showNotification(title, options));
});

// Додатково: обробка кліку на пуш
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    // При кліку можна фокусувати вікно
});