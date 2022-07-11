#!/usr/bin/env bash
CURRENTDATETIME=`date +"%Y-%m-%d-%H-%M"`

cwd=$PWD
SOURCE=src
DATADIR=$HOME/.astro/sites/koad.sh
BUILDDIR=$DATADIR/builds/$CURRENTDATETIME

[ ! -f $DATADIR/builds/inbound/koad-on-wonderland/src.tar.gz ] && echo "No inbound package found, not deploying..." && exit 1
cd $DATADIR/builds/inbound/koad-on-wonderland/ && tar -xvzf src.tar.gz
cd $DATADIR/builds/inbound/koad-on-wonderland/bundle/programs/server/ && npm install && npm update && npm install --save @babel/runtime

cd $DATADIR
[[ ! -d archive ]] && echo 'Archive directory not found, creating it now...' && mkdir archive

cd $DATADIR/builds/inbound/koad-on-wonderland/
mv bundle $BUILDDIR

mv src.tar.gz $DATADIR/archive/koad-on-wonderland-$CURRENTDATETIME.tar.gz

[[ -d $DATADIR/builds/latest ]] && rm $DATADIR/builds/latest

ln -s -f $BUILDDIR $DATADIR/builds/latest

echo 'Your built package is linked to $BUILDDIR $DATADIR/builds/latest'
echo 'enjoy!'
echo 
echo './run to run the package'

