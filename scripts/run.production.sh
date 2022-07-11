#!/usr/bin/env bash

set -a
source ~/.astro/.env

export METEOR_SETTINGS=$(cat settings.json)
export ROOT_HOST=koad.sh
export ROOT_URL=https://$ROOT_HOST/
export PORT=14122

TERM_TITLE="$ROOT_HOST on $HOSTNAME"
echo -e '\033]2;'$TERM_TITLE'\007'

cd builds/latest && node main.js 
