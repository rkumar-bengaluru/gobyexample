// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyDco3fGTjwyHXdz_21cqcoWweaTcy6WflE",
    authDomain: "vlocalshop.firebaseapp.com",
    projectId: "vlocalshop",
    storageBucket: "vlocalshop.appspot.com",
    messagingSenderId: "37312558405",
    appId: "1:37312558405:web:4f4ecddd943cb05afbba2c"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();



messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);
    const { title, body, icon, image, badge, url } = payload.data;
    const options = {
        data: url,
        body: body,
        icon: icon,
        vibrate: [200, 100, 200],
        image: image,
        badge: badge,
        requireInteraction: true,
        actions: [{ action: "Detail", title: "View", icon: icon }]
    };
    
    
    self.registration.showNotification(title,
        options);
});

self.addEventListener("notificationclick", openPushNotification);

function openPushNotification(event) {
    console.log("[Service Worker] Notification click Received.", event.notification.data);
    event.notification.close();
    event.waitUntil(clients.openWindow(event.notification.data));
}


