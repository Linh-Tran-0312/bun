import { Elysia, t } from 'elysia';
const tasks = [
    "Complete the project documentation",
    "Review pull requests",
    "Update UI components",
    "Optimize database queries",
    "Plan the next sprint",
    "Fix bugs in authentication module",
    "Refactor legacy code"
  ];
class Note {
  constructor(public data: string[] = tasks) {}
  add(note: string) {
    this.data.push(note);

    return this.data;
  }

  remove(index: number) {
    return this.data.splice(index, 1);
  }

  update(index: number, note: string) {
    return (this.data[index] = note);
  }
}

// decorate allow us to inject a singleton class into the Elysia instance, allowing us to access it in the route handler.
export const note = new Elysia({ prefix: '/note' }) // declare prefix for note plugin
  .decorate('note', new Note())
  .onTransform(function log({ body, params, path, request: { method } }) {
    console.log(`${method} ${path}`, {
      body,
      params,
    });
  })
  .group('', (app) =>
    app
      .get('/', ({ note }) => note.data)
      .put('/', ({ note, body: { data } }) => note.add(data), {
        body: t.Object({
          data: t.String(),
        }),
      })
      .guard({
        params: t.Object({
          index: t.Number(), // We import t from Elysia to and define a schema for the path parameter and resovle TS warning
        }),
      })
      .get('/:index', ({ note, params: { index }, error }) => {
        return note.data[index] ?? error(404, 'Custom message: Page not found'); // status code
      })
      .delete('/:index', ({ note, params: { index }, error }) => {
        if (index in note.data) return note.remove(index);
        return error(422);
      })
      .patch(
        '/:index',
        ({ note, params: { index }, body: { data }, error }) => {
          if (index in note.data) return note.update(index, data);

          return error(422);
        },
        {
          body: t.Object({
            data: t.String(),
          }),
        }
      )
  );
