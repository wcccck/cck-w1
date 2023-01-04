#! /bin/sh

# echo $0
cd $(dirname $0)
BASE=$(pwd)

projects=(huatian-app huatian-components huatian-domain huatian-rest huatian-service huatian-utils)

for project in ${projects[@]}
do
  echo "install $project"
  cd $BASE/packages/$project
  npm install
done

cd $BASE/packages/huatian-utils
yarn link

cd $BASE/packages/huatian-domain
yarn link
yarn link @huatian/utils

cd $BASE/packages/huatian-rest
yarn link

cd $BASE/packages/huatian-components
yarn link
yarn link @huatian/utils

cd $BASE/packages/huatian-app
yarn link @huatian/components
yarn link @huatian/utils
yarn link @huatian/rest
yarn link @huatian/domain

cd $BASE/packages/huatian-service
yarn link @huatian/domain
yarn link @huatian/utils