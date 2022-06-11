import {
  createServer,
  Factory,
  Model,
  Response,
  ActiveModelSerializer,
} from "miragejs";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email(i: number) {
          return `User${i + 1}@email.com`;
        },
        createdAt() {
          return `${new Date().toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}`;
        },
      }),
    },

    seeds(server) {
      server.createList("user", 8);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;
      //this.get("/users");
      this.get("/users", function (schema, req) {
        const { page = 1, per_page = 10 } = req.queryParams;

        const total = schema.all("user").length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all("user")).users.slice(
          pageStart,
          pageEnd
        );

        return new Response(200, { "x-total-count": String(total) }, { users });
      });

      this.get("/users/:id");
      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
