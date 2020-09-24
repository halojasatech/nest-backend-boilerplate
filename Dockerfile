FROM node:12-alpine

# Install package
RUN apk update \
	&& apk add bash \
	&& apk add wget curl \
	&& apk add coreutils

# Copy Package.json
COPY package.json ./app/package.json

# Set workdir to /app
WORKDIR /app

# Copy all files ( except that listed in .dockerignore )
COPY . .

EXPOSE 3000:3000

CMD [ "npm" ,"start"]
