FROM gitpod/workspace-full:latest

# Install PostgreSQL
RUN sudo apt-get update \
 && sudo apt-get install -y postgresql-12 postgresql-contrib-12 \
 && sudo apt-get clean \
 && sudo rm -rf /var/cache/apt/* /var/lib/apt/lists/* /tmp/*

# Setup PostgreSQL server for user gitpod
ENV PATH="$PATH:/usr/lib/postgresql/12/bin"
ENV PGDATA="/workspace/.pgsql/data"
RUN mkdir -p ~/.pg_ctl/bin ~/.pg_ctl/sockets \
 && printf '#!/bin/bash\n[ ! -d $PGDATA ] && mkdir -p $PGDATA && initdb -D $PGDATA\npg_ctl -D $PGDATA -l ~/.pg_ctl/log -o "-k ~/.pg_ctl/sockets" start\n' > ~/.pg_ctl/bin/pg_start \
 && printf '#!/bin/bash\npg_ctl -D $PGDATA -l ~/.pg_ctl/log -o "-k ~/.pg_ctl/sockets" stop\n' > ~/.pg_ctl/bin/pg_stop \
 && chmod +x ~/.pg_ctl/bin/*
ENV PATH="$PATH:$HOME/.pg_ctl/bin"
ENV DATABASE_URL="postgresql://gitpod@localhost"
ENV DATABASE_USER=postgres
ENV DATABASE_PASSWORD=123456
ENV DATABASE_NAME=database
ENV PGHOSTADDR="127.0.0.1"
ENV PGDATABASE="postgres"

# This is a bit of a hack. At the moment we have no means of starting background
# tasks from a Dockerfile. This workaround checks, on each bashrc eval, if the
# PostgreSQL server is running, and if not starts it.
RUN printf "\n# Auto-start PostgreSQL server.\n[[ \$(pg_ctl status | grep PID) ]] || pg_start > /dev/null\n" >> ~/.bashrc
    
# Install Node and Yarn
ENV NODE_VERSION=12.18.3
RUN bash -c ". .nvm/nvm.sh && \
        nvm install ${NODE_VERSION} && \
        nvm alias default ${NODE_VERSION} && \
        npm install -g yarn"
ENV PATH=/home/gitpod/.nvm/versions/node/v${NODE_VERSION}/bin:$PATH

# Install Redis.
RUN sudo apt-get update \
  && sudo apt-get install -y \
  redis-server \
  && sudo rm -rf /var/lib/apt/lists/*

# Install Elasticsearch
ARG ES_REPO=https://artifacts.elastic.co/downloads/elasticsearch
ARG ES_ARCHIVE=elasticsearch-oss-7.5.2-linux-x86_64.tar.gz
RUN wget "${ES_REPO}/${ES_ARCHIVE}" \
  && wget "${ES_REPO}/${ES_ARCHIVE}.sha512" \
  && shasum -a 512 -c ${ES_ARCHIVE}.sha512 \
  && tar -xzf ${ES_ARCHIVE}
