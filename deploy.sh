rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:PoyapLi/shiki-ui-website.git &&
git push -f -u origin master &&
cd -
echo https://poyapli.github.io/shiki-ui-website/index.html