#! /bin/sh

# echo $0
cd $(dirname $0)
BASE=$(pwd)

cd $BASE/packages/huatian-utils
yarn link

cd $BASE/packages/huatian-components
yarn link
yarn link @huatian/utils

cd $BASE/packages/huatian-app
yarn link @huatian/components
yarn link @huatian/utils