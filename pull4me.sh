#!/bin/bash
read -p "Commit description: " desc
git checkout master
git add -A && \
git commit -am "$desc" && \
git push
ssh myspacethenet@myspacethenet.cloudapp.net 'bash -s' < ./pull4me-scripts.sh
