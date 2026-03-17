const channel = new BroadcastChannel('fcm_notifications');

self.addEventListener("push", (event) => {
    let data = {};
    try {
        data = event.data.json();
    } catch (e) {
        data = { notification: { title: "Тестовий пуш", body: event.data.text() } };
    }

    console.log("SW: Отримано push", data);

    channel.postMessage(data);

    const title = data.notification?.title || "Нове повідомлення";
    const options = {
        body: data.notification?.body || "",
        icon: "/icon.png",
    };

    event.waitUntil(self.registration.showNotification(title, options));
});