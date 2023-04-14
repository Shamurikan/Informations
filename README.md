# Get started

---

to make progressive web application you must to create a page and name it `sw.js`

Then copy the code below code and paste in the page we created.

---

```JS
// On install - caching the application shell
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('sw-cache').then(function(cache) {
      // cache any static files that make up the application shell
      return cache.add('index.html');
    })
  );
});

// On network request
self.addEventListener('fetch', function(event) {
  event.respondWith(
    // Try the cache
    caches.match(event.request).then(function(response) {
      //If response found return it, else fetch again
      return response || fetch(event.request);
    })
  );
});
```

---

Then create another page and name it `manifest.json` and also copy the code below and paste it in the page.

Note: you can change the information below.

---

```JSON
{
    "short_name": "short name you want",
    "name": "name you want",
    "icons": [
      {
        "src": "icons-192.png",
        "type": "image/png",
        "sizes": "192x192"
      },
      {
        "src": "icons-512.png",
        "type": "image/png",
        "sizes": "512x512"
      }
    ],
    "start_url": "/index.html",
    "background_color": "color you want",
    "display": "standalone",
    "theme_color": "color you want"
  }
```

---

Then you have to copy the code below and paste in the main page in your project.

---

```JS
//if browser support service worker

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
};
```

---

After that you must link the manifest page in the main page in your project.

---

```HTML
<link rel="manifest" href="manifest.json">
```

---

Now your project is progressive web application and the output should be like the code below.

---

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PWA</title>
    <meta name="theme-color" content="#000000"/>
    <link rel="manifest" href="manifest.json">
    <script>
        //if browser support service worker
        if('serviceWorker' in navigator) {
          navigator.serviceWorker.register('sw.js');
        };
      </script>
</head>
<body>

</body>
</html>
```

---

Note: Make sure the changes coincide with each other.

---
