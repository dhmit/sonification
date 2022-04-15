#!/bin/bash

# This script expects the project venv to be inside the project root directory

# TODO(ra): automatically generate nginx, gunicorn, and supervisor conf files
#           from this deploy script, based on $PROJECT_NAME

PROJECT_NAME="exploratorium"

echo 'Run as sudo'

# exit this script if any command returns a non-zero exit code
set -e
REPO_ROOT_DIR="/home/ubuntu/"$PROJECT_NAME

GIT_SSH_COMMAND="ssh -i /home/ubuntu/.ssh/id_rsa" git pull
chown -hR ubuntu "$REPO_ROOT_DIR"

source "$REPO_ROOT_DIR"/venv/bin/activate

echo 'Building frontend'
cd "$REPO_ROOT_DIR"/frontend
npm ci
npm run build

cd ../backend

python manage.py collectstatic --noinput

supervisorctl restart "$PROJECT_NAME"
