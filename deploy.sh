git pull

echo "Building server"
docker-compose-f ./backend/docker-compose.yml up -d --build