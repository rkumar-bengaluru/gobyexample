/*
*
*  Push Notifications codelab
*  Copyright 2015 Google Inc. All rights reserved.
*
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*
*      https://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License
*
*/

/* eslint-env browser, serviceworker, es6 */
/** example payload
 * {"title":"New Launch from vLocalShop.in", "icon": "https://www.vlocalshop.in/logo.png",
 * "body": "Buy Yonex™ Nanoray Light 18i Graphite Badminton Racquet",
 * "img":"https://www.vlocalshop.in/catalog/0ENJMZAXX2/01.jpg",
 * "url":"https://www.vlocalshop.in/product/U6SN164LII"}
 */

/**
 * https://web-push-codelab.glitch.me/
 */
function receivePushNotification(event) {
    console.log("[Service Worker] Push Received.");

    const { title, body, icon, tag, img, badge, url } = event.data.json();
    const options = {
        data: url,
        body: body,
        icon: icon,
        vibrate: [200, 100, 200],
        tag: tag,
        image: img,
        badge: badge,
        requireInteraction: true,
        actions: [{ action: "Detail", title: "View", icon: icon }]
    };
    event.waitUntil(self.registration.showNotification(title, options));
}
function openPushNotification(event) {
    console.log("[Service Worker] Notification click Received.", event.notification.data);
    event.notification.close();
    event.waitUntil(clients.openWindow(event.notification.data));
}


self.addEventListener("push", receivePushNotification);
self.addEventListener("notificationclick", openPushNotification);

// 'use strict';
// self.addEventListener('push', function (event) {
//     console.log('[Service Worker] Push Received.');
//     console.log(`[Service Worker] Push had this data: ${event.data.text()}`);
//     var payload = JSON.parse(event.data.text());
//     console.log(payload);
//     const title = payload.title;
//     const options = {
//         body: payload.body,
//         icon: payload.icon,
//         vibrate: [200, 100, 200],
//         tag: "new-product",
//         image: payload.img,
//         badge: "https://spyna.it/icons/android-icon-192x192.png",
//         actions: [{ action: "Detail", title: "View", icon: "https://via.placeholder.com/128/ff0000" }],
//         data: {
//             time: new Date(Date.now()).toString(),
//             url: payload.url
//         }
//     };

//     event.waitUntil(self.registration.showNotification(title, options));
// });

// self.addEventListener('notificationclick', function (event) {
//     console.log(`[Service Worker] Notification click received:`);
//     const notificationData = event.notification.data;
//     console.log('');
//     console.log('The notification data has the following parameters:');
//     Object.keys(notificationData).forEach((key) => {
//         console.log(`  ${key}: ${notificationData[key]}`);
//     });
//     console.log('');
//     event.notification.close();

//     event.waitUntil(
//         clients.openWindow(event.notification.data.url)
//     );
// });

