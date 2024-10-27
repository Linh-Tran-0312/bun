import { Elysia, t } from 'elysia';
import { staticPlugin } from '@elysiajs/static';
import { note } from './plugins/note';
import { user } from './plugins/user';
import swagger from '@elysiajs/swagger';

const PORT = Bun.env.PORT!;

const app = new Elysia()
  .use(swagger)
  .use(user)
  .use(note)
  .use(staticPlugin())
  .use(staticPlugin({ assets: './assets/assets', prefix: '/assets' }));

app.get('/', () => {
  return Bun.file('./public/home.html');
});

app.get('/react-app', () => {
  return Bun.file('./assets/index.html');
});


app.listen(PORT);
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
