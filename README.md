# Get started

---

to make progressive web application you must to add the two pages above, then you have to copy the code below and paste in the main page in your project.

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

Now you have to add icon to your PWA through adding two photos images, the first image must be `192x192` and the second image must be `512x512` to make responsive banner
