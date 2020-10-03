FROM node:12-alpine

# Install package
RUN apk update \
	&& apk add bash \
	&& apk add wget curl \
	&& apk add coreutils

# Create app directory
RUN mkdir -p /app

# Set workdir to /app
WORKDIR /app

# Copy Package.json
COPY ./package*.json /app/

# Install Package
RUN npm i

# Copy all files ( except that listed in .dockerignore )
COPY . /app

# Build app
RUN npm run build

RUN ls -la /app

EXPOSE 3000:3000

CMD ["node", "dist/main"]
