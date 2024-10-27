# Bun Demo

This project was created to explore and gain hands-on experience with Bun and its growing ecosystem. By integrating a React front-end with a back-end powered by the Elysia framework, this setup provides a practical way to understand how Bun can optimize both development and runtime performance.
## Getting Started
### Required Bun Version
This project requires Bun version v1.0.0 or later.
You can check your Bun version with:


```bash
bun -v
```

### Clone the repository

```bash
git clone https://github.com/Linh-Tran-0312/bun.git
```

###  Install Dependencies

```bash
cd react
bun install

cd ../elysia-app
bun install
```
### Environment variables
Create a .env file in the root of each app directory with the required environment variables based on env.sample file.
### Run the Applications
#### React app
```bash
bun run dev
```
#### Elysia app
Build React app and serve it with backend
```bash
cd react
bun run build
```
Start server app
```bash
bun run dev
```

## License

[MIT](https://choosealicense.com/licenses/mit/)