#!/usr/bin/env bash
# Script pour environnements Unix/WSL
cd "$(dirname "$0")"
echo "Installing dependencies..."
npm install
echo "Starting dev server..."
npm run dev
