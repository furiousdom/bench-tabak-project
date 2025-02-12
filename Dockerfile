FROM node:22-bookworm-slim@sha256:83fdfa2a4de32d7f8d79829ea259bd6a4821f8b2d123204ac467fbe3966450fc AS base
RUN apt update && apt install -y --no-install-recommends dumb-init
ENTRYPOINT ["dumb-init", "--"]
