ARG VARIANT=14
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:${VARIANT}

# Install tslint, typescript. eslint is installed by javascript image
ARG USERNAME=node
ARG NGVERSION=11.0.0-next.5

RUN sudo -u ${USERNAME} npm install -g npm
RUN sudo -u ${USERNAME} npm install -g tslint typescript @angular/cli@${NGVERSION}