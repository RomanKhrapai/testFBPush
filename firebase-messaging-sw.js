const channel = new BroadcastChannel('fcm_notifications');

self.addEventListener("push", (event) => {
    
    let payload;
    try {
        payload = event.data.json();
    } catch (e) {
        payload = { notification: { title: "Raw Data", body: event.data.text() } };
    }

    channel.postMessage(payload);

    const title = payload.notification?.title || "Нове сповіщення";
    const options = {
        body: payload.notification?.body || "",
        data: payload 
    };

    event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
});