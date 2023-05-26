let links = document.links;
let linksCount = links.length;

console.log(linksCount);

for (let i = 0; i < linksCount; i++) {
  console.log(links[i].href);
}
