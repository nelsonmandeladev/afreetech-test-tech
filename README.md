# **INTIA Assurance - Web Application**

## **Description**

Cette application web permet à INTIA Assurance de gérer ses agences, clients et contrats d’assurance. Elle offre une interface utilisateur intuitive avec une gestion basée sur les rôles (Admin, Manager, Agent, Client). Les clients peuvent accéder à leur espace personnel pour consulter leurs assurances.

---

## **Installation et Lancement du Projet**

### **Prérequis**

Assurez-vous d'avoir installé les outils suivants :

- [Node.js](https://nodejs.org/en/download/) (version 14 ou supérieure)
- [Git](https://git-scm.com/)
- [Prisma CLI](https://www.prisma.io/docs/getting-started)

### **1. Clonez le Repository**

```bash
git clone <url-du-repository>
cd <nom-du-repository>
```

### **2. Installation des Dépendances**

Installez les dépendances du projet avec npm :

```bash
npm install
```

### **3. Configuration de la Base de Données**

#### **MongoDB Atlas (Cloud)**

1. Créez un compte MongoDB Atlas [ici](https://www.mongodb.com/cloud/atlas).
2. Créez un **Cluster** et une **base de données**.
3. Configurez un **utilisateur** et ajoutez votre adresse IP à la whitelist.
4. Récupérez l'URI de connexion (format : `mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>?retryWrites=true&w=majority`).
5. Ajoutez cette URI dans le fichier `.env` du projet.

```bash
# .env
DATABASE_URL="mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>?retryWrites=true&w=majority"
NEXTAUTH_SECRET="<votre_secret>"
NEXTAUTH_URL="http://localhost:3000"
```

#### **MongoDB en Local (via Docker)**

Si vous souhaitez utiliser MongoDB localement, vous pouvez utiliser Docker :

```bash
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

Configurez ensuite l'URI pour votre base de données locale dans `.env` :

```bash
# .env
DATABASE_URL="mongodb://localhost:27017/intia-assurance"
NEXTAUTH_SECRET="<votre_secret>"
NEXTAUTH_URL="http://localhost:3000"
SESSION_SECRET_KEY=""
SESSION_COOKIE_NAME=""
```

### **4. Initialisation de Prisma**

#### **Synchronisation avec la Base de Données**

Appliquez les modèles Prisma à la base de données avec la commande suivante :

```bash
npm run db:push
```

#### **Générer les Types Prisma**

Après toute modification des modèles, assurez-vous de régénérer les types Prisma :

```bash
npm run db:gen
```

### **5. Seed de la Base de Données**

Pour insérer des données initiales dans la base de données (seed), exécutez la commande :

```bash
npm run db:seed
```

### **6. Lancer Prisma Studio**

Pour explorer votre base de données graphiquement, utilisez Prisma Studio :

```bash
npm run db:studio
```

### **7. Lancer l'Application en Développement**

Pour démarrer l'application en mode développement, exécutez la commande suivante :

```bash
npm run dev
```

L'application sera disponible sur `http://localhost:3000`.

---

## **Scripts Disponibles**

Les commandes suivantes sont disponibles pour gérer et développer l'application :

```json
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "db:push": "prisma db push --accept-data-loss",
    "db:studio": "prisma studio",
    "db:gen": "prisma generate",
    "db:seed": "npx prisma db seed",
    "db:format": "npx prisma format",
    "postinstall": "prisma generate"
}
```

- **`dev`** : Démarre le serveur en mode développement.
- **`build`** : Construit l'application pour la production.
- **`start`** : Démarre l'application en production.
- **`lint`** : Exécute ESLint pour vérifier la qualité du code.
- **`db:push`** : Synchronise les modèles Prisma avec la base de données (sans perte de données).
- **`db:studio`** : Lance Prisma Studio pour visualiser la base de données.
- **`db:gen`** : Génère les types Prisma après les modifications des modèles.
- **`db:seed`** : Exécute le script de seed pour insérer des données dans la base de données.
- **`db:format`** : Formatte les fichiers Prisma.

---

## **Outils et Bibliothèques Utilisés**

### **1. Frameworks**

- **[Next.js](https://nextjs.org/)** : Framework React pour le rendu côté serveur et les API routes.
- **[TypeScript](https://www.typescriptlang.org/)** : Superset de JavaScript pour la sécurité de type.

### **2. Gestion de la Base de Données**

- **[Prisma](https://www.prisma.io/)** : ORM pour interagir avec MongoDB, avec migration, génération de types, et seed.
- **[MongoDB](https://www.mongodb.com/)** : Base de données NoSQL utilisée pour stocker les données des agences, clients et assurances.

### **3. Authentification**

- **[NextAuth.js](https://next-auth.js.org/)** : Solution d'authentification pour Next.js avec support JWT et gestion des rôles.

### **4. Autres Outils**

- **[ESLint](https://eslint.org/)** : Linter pour maintenir la qualité du code.
- **[Prettier](https://prettier.io/)** : Outil de formatage de code.
- **[Docker](https://www.docker.com/)** : Utilisé pour exécuter MongoDB en local (optionnel).

---

## **Déploiement**

### **1. Déploiement sur Vercel**

Pour déployer l'application sur Vercel (plateforme recommandée pour les projets Next.js) :

1. Créez un compte sur [Vercel](https://vercel.com/).
2. Connectez votre repository Git.
3. Configurez les variables d'environnement sur Vercel (`DATABASE_URL`, `NEXTAUTH_SECRET`, etc.).
4. Déployez directement via l'interface Vercel.

### **2. Déploiement sur Heroku (Optionnel)**

Pour déployer l'application sur Heroku :

1. Créez un compte sur [Heroku](https://www.heroku.com/).
2. Ajoutez les variables d'environnement.
3. Connectez votre repository et déployez via Heroku CLI ou l'interface web.

---

## **Support et Contributions**

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue ou à soumettre une pull request sur le repository GitHub du projet.

---
