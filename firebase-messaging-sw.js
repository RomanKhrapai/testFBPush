const channel = new BroadcastChannel('fcm_notifications');

self.addEventListener("push", (event) => {
    const data = event.data.json();
    console.log("Отримано push-повідомлення", data);

    channel.postMessage(data);

    self.registration.showNotification(data.notification.title, {
        body: data.notification.body,
        icon: "/icon.png",
    });
});