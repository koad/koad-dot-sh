#!/usr/bin/env bash

export CURRENTDATETIME=`date +"%Y-%m-%d-%H-%M"`
[[ ! $ENTITY ]] && export ENTITY=alice

set -a
[[ -f .env ]] && source .env
[[ -f .credentials ]] && source .credentials

echo "listening: $KOAD_IO_BIND_IP:$KOAD_IO_PORT"
echo -ne "\033]0;$ENTITY $KOAD_IO_APP_NAME on $HOSTNAME\007"

yarn dev -p $KOAD_IO_PORT -H $KOAD_IO_BIND_IP
