import * as fs from "https://deno.land/std@0.216.0/fs/mod.ts";
import * as path from "https://deno.land/std@0.216.0/path/mod.ts";
import postcss from "npm:postcss@8.4.31";
import tailwindcss from "npm:tailwindcss@3.4.1";
import autoprefixer from "npm:autoprefixer@10.4.16";

// Read input CSS with Tailwind directives
const inputCss = await Deno.readTextFile("./static/styles.css");

// Process CSS with Tailwind and PostCSS
const result = await postcss([
  tailwindcss("./tailwind.config.ts"),
  autoprefixer,
]).process(inputCss, {
  from: "./static/styles.css",
  to: "./static/styles.processed.css",
});

// Write processed CSS to output file
await Deno.writeTextFile("./static/styles.processed.css", result.css);
console.log("CSS processing complete!");

// Move the processed file to replace the original
await Deno.rename("./static/styles.processed.css", "./static/styles.css");
console.log("CSS file replaced successfully!");
