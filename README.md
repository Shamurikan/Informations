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

Finally you have to add icon to your PWA through adding two photos images, the first image must be `192x192` and the second image must be `512x512` to make responsive banner.

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
