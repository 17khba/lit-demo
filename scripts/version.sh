if [ "$1" ];
then
    VERSION=$1
else
    VERSION=$(node -p  "require('./package.json').version")
fi
    node scripts/appVersion.js  $VERSION