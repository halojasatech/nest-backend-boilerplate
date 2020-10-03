FROM node:12-alpine

# Install package
RUN apk update \
	&& apk add bash \
	&& apk add wget curl \
	&& apk add coreutils

# Create workdir
RUN mkdir /home/app

# Set workdir to /app
WORKDIR /home/app

# Copy Package.json
COPY package.json /home/app

# Install Package
RUN npm i

# Copy all files ( except that listed in .dockerignore )
COPY . .

# Build app
RUN npm run build

RUN ls -la ]

EXPOSE 3000:3000

CMD [ "npm" , "run" , "start:prod"]
