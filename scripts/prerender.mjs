import { build } from "vite";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

async function prerender() {
  // Build client bundle first (already done by `vite build` in the npm script)
  // Build SSR bundle
  await build({
    root,
    logLevel: "warn",
    build: {
      ssr: "src/entry-server.jsx",
      outDir: "dist/server",
      rollupOptions: { output: { format: "esm" } },
    },
  });

  const { render } = await import(resolve(root, "dist/server/entry-server.js"));
  const appHtml = render("/");

  let template = readFileSync(resolve(root, "dist/index.html"), "utf-8");
  const output = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );
  writeFileSync(resolve(root, "dist/index.html"), output);

  console.log("Prerendering complete — dist/index.html updated.");
}

prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});
