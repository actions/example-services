name: Redis Service Example

on:
  push:
    branches:
    - main
  pull_request:
    branches:
    - main

jobs:
  container-job:
    runs-on: ubuntu-latest

    container:
      image:  node:10.16-jessie

    services:
      redis:
        image: redis
        ports:
        - 6379:6379
        options: --entrypoint redis-server

    steps:
    - uses: actions/checkout@v1

    - run: npm ci
      working-directory: ./redis

    - run: node client.js
      working-directory: ./redis
      env:
        REDIS_HOST: redis
        REDIS_PORT: ${{ job.services.redis.ports[6379] }}

  vm-job:
    runs-on: ubuntu-latest

    services:
      redis:
        image: redis
        ports:
        - 6379/tcp
        options: --entrypoint redis-server

    steps:
    - uses: actions/checkout@v1

    - run: npm ci
      working-directory: ./redis

    - run: node client.js
      working-directory: ./redis
      env:
        REDIS_HOST: localhost
        REDIS_PORT: ${{ job.services.redis.ports[6379] }}
