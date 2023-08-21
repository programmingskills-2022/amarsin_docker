# Amarsin
This Project include Payroll, Warehouse software
Amarsin is a Web-based project

## Technologies:
•	Next.js 13
•	Typescript
•	Tailwind
•	Redux


## Demo Images
### Login Page(Desktop)
 
![image](https://github.com/programmingskills-2022/amarsin_docker/assets/119696712/dac43ccf-fc78-4698-b35c-fc18772ee7df)

### Login Page(Mobile)
![image](https://github.com/programmingskills-2022/amarsin_docker/assets/119696712/6c0b2354-f169-48e0-afc1-b1f4c2d85984)

### Login Page(Desktop – Dark mode)
![image](https://github.com/programmingskills-2022/amarsin_docker/assets/119696712/c5fc779c-be32-4ad9-b71f-be57165c12c0)

### Login page(Mobile – Dark mode)
![image](https://github.com/programmingskills-2022/amarsin_docker/assets/119696712/1becb669-67f0-4598-ae08-2a297bb2ae48)

### Sample Page(Desktop)
![image](https://github.com/programmingskills-2022/amarsin_docker/assets/119696712/7a5e6f7b-de51-4015-aab4-112572fc52d9)

### Sample Page(Mobile)
![image](https://github.com/programmingskills-2022/amarsin_docker/assets/119696712/a12f4ce1-a1bd-4736-bf62-9563c17b5366)

### Sample Page(Desktop – Dark mode) 
![image](https://github.com/programmingskills-2022/amarsin_docker/assets/119696712/8ed459ee-b1d6-4ef8-b7d6-131330007a61)

### Sample page(Mobile – Dark mode)
![image](https://github.com/programmingskills-2022/amarsin_docker/assets/119696712/792b78a8-f0b4-4a7c-ba62-52bb05b5f5f0)



# With Docker Compose

This example contains everything needed to get a Next.js development and production environment up and running with Docker Compose.

## Benefits of Docker Compose

- Develop locally without Node.js or TypeScript installed ✨
- Easy to run, consistent development environment across macOS, Windows, and Linux teams
- Run multiple Next.js apps, databases, and other microservices in a single deployment
- Multistage builds combined with [Output Standalone](https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files) outputs up to 85% smaller apps (Approximately 110 MB compared to 1 GB with create-next-app)
- Easy configuration with YAML files

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-docker-compose with-docker-compose-app
```

```bash
yarn create next-app --example with-docker-compose with-docker-compose-app
```

```bash
pnpm create next-app --example with-docker-compose with-docker-compose-app
```

Optionally, after the installation is complete:

- Run `cd next-app`, then run `npm install` or `yarn install` or `pnpm install` to generate a lockfile.

It is recommended to commit a lockfile to version control. Although the example will work without one, build errors are more likely to occur when using the latest version of all dependencies. This way, we're always using a known good configuration to develop and run in production.

## Prerequisites

Install [Docker Desktop](https://docs.docker.com/get-docker) for Mac, Windows, or Linux. Docker Desktop includes Docker Compose as part of the installation.

## Development

First, run the development server:

```bash
# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create my_network

# Build dev
docker compose -f docker-compose.dev.yml build

# Up dev
docker compose -f docker-compose.dev.yml up
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Production

Multistage builds are highly recommended in production. Combined with the Next [Output Standalone](https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files) feature, only `node_modules` files required for production are copied into the final Docker image.

First, run the production server (Final image approximately 110 MB).

```bash
# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create my_network

# Build prod
docker compose -f docker-compose.prod.yml build

# Up prod in detached mode
docker compose -f docker-compose.prod.yml up -d
```

Alternatively, run the production server without without multistage builds (Final image approximately 1 GB).

```bash
# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create my_network

# Build prod without multistage
docker compose -f docker-compose.prod-without-multistage.yml build

# Up prod without multistage in detached mode
docker compose -f docker-compose.prod-without-multistage.yml up -d
```

Open [http://localhost:3000](http://localhost:3000).

## Useful commands

```bash
# Stop all running containers
docker kill $(docker ps -aq) && docker rm $(docker ps -aq)

# Free space
docker system prune -af --volumes
```
