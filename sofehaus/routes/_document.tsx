import { Head, asset } from "$fresh/runtime.ts";
import { type ComponentChildren } from "preact";

interface DocumentProps {
  children: ComponentChildren;
}

export default function Document({ children }: DocumentProps) {
  return (
    <html lang="en" class="scroll-smooth">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href={asset("/styles.css")} />
      </Head>
      <body class="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
} 