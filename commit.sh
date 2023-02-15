#!/bin/bash
COMMIT=$1
BRANCH=$2

git add .
git commit -m "$COMMIT"
git push origin $BRANCH
