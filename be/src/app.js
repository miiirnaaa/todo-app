import Fastify from "fastify";
import cors from "@fastify/cors";

//inicijalizira fastify server
const fastify = Fastify({
  logger: true,
});

fastify.register(cors, {
  origin: "*",
});

const todos = [
  { name: "shopping", description: "kruh, mlijeko, ...." },
  {
    name: "priprema za parcijalni",
    description:
      "Ponoviti javascript dobro, napraviti sam svoj projektić za vježbicu",
  },
  { name: "Pročitati knjigu", description: "JS clean code - path to mastery" },
];

//postavljamo prvu rutu
fastify.get("/", function (request, reply) {
  reply.send({ data: todos });
});

//počinjemo slušati dolazne zahtijeve na portu 3000
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
