FROM jenkins/jenkins:lts

USER root

# Installer Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

# Installer les dépendances système nécessaires aux navigateurs Playwright
RUN npx --yes playwright install-deps || true

USER jenkins