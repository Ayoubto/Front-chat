# Utilisez une image récente de Node.js
FROM node:18

# Créez un répertoire de travail
WORKDIR /app

# Installez Angular CLI globalement
RUN npm install -g @angular/cli

# Copiez les fichiers package.json et package-lock.json
COPY package*.json ./

# Installez les dépendances
RUN npm install
RUN npm install @auth0/angular-jwt
RUN npm install jwt-decode        
# Copiez le reste du code source
COPY . .

# Exposez le port 4200
EXPOSE 4200

# Démarrez l'application Angular en mode développement
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]

