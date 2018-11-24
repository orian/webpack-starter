#!/bin/bash
docker run --rm -ti -p 3000:3000 -p 3001:3001 -v $PWD:/usr/src/app -w /usr/src/app node:11 npm run start

# inside docker:
# cd /usr/src/app
# npm init
# npm startstty onlcr
