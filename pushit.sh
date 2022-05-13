#!/bin/bash
echo -e "Do you want to generate a new build? \nY/y: yes \nN/*: no"
read -p "Yes(Y/y)/No(N/*): " answer
if [ "$answer" == "Y" ] || [ "$answer" == "y" ] || [ "$answer" == "Yes" ]; then
    npm run build
fi

git add .
read -p "Commit description: " description
git commit -m "$description"
git push
exit 0