import { copyFile, mkdir } from "node:fs/promises";

await mkdir("dist", { recursive: true });
await Promise.all(["index.html", "styles.css", "app.js"].map((file) => copyFile(file, `dist/${file}`)));
console.log("Static site prepared in dist/");
