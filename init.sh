docker-compose run app npx create-next-app .
docker-compose run app npm install -D typescript @types/react @types/node
docker-compose run app npm i -D dotenv fork-ts-checker-webpack-plugin
# install tailwindcss
docker-compose run app npm i tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
touch tsconfig.json