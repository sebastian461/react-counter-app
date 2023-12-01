import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas en 09-promesas", () => {
  test("getHeroesByIdAsync devuelve una promesa con un objeto heroe", (done) => {
    const id = 1;
    /* También se puede evitar el uso de 'then' usando 'async-await' */
    getHeroeByIdAsync(id).then((h) => {
      expect(h).toStrictEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      /* Se recibe el argumento 'done' y se llama al método para que JETS espere a la respuesta
      de la función asíncrona para poder terminar el testing */
      done();
    });
  });

  test("getHeroesByIdAsync devuelve un error sino encuentra el heroe", (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
