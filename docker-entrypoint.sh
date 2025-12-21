#!/bin/sh
set -e

if [ "$(id -u)" = "0" ]; then
  mkdir -p /usr/src/app/uploads
  chown -R nextjs:nodejs /usr/src/app/uploads
  exec su-exec nextjs "$@"
fi

exec "$@"
