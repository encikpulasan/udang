#!/bin/bash

# Clean any previous build files
rm -rf ./_fresh >/dev/null 2>&1

# Start the development server with file watching
deno run -A --watch=static/,routes/ dev.ts
