rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git remote add origin git@github.com:TravisWongX/pika-ui-website.git &&
git push -f -u origin master &&
cd -
echo https://traviswongx.github.io/pika-ui-website/index.html