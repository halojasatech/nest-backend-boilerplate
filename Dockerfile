FROM node:12-alpine

# Install package
RUN apk update \
	&& apk add bash \
	&& apk add wget curl \
	&& apk add coreutils

# Set workdir to /app
WORKDIR /app

# Copy Package.json
COPY package.json ./

# Install Package
RUN npm i

# Copy all files ( except that listed in .dockerignore )
COPY . .

# Build app
RUN npm run build

RUN ls -la

EXPOSE 3000:3000

CMD [ "npm" , "run" , "start:prod"]
