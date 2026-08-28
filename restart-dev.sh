#!/bin/bash

echo "🧹 Clearing Next.js cache..."
rm -rf .next
echo "✅ Cache cleared"

echo "🔄 Restarting development server..."
npm run dev
