self.addEventListener("push", (event) => {
    const data = event.data.json();
    console.log("Отримано push-повідомлення", data);

    self.registration.showNotification(data.notification.title, {
        body: data.notification.body,
        icon: "/icon.png", // Замініть шлях на ваш значок
    });
});