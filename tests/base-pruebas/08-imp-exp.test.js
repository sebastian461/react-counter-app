import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {
  //test 1
  test("getHeroeById retorna un objeto tipo heroe", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    expect(heroe).toStrictEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById retorna undefine si el ID no existe", () => {
    const id = 100;
    const heroe = getHeroeById(id);

    /* Comprueba el 'undefine' y el 'null' pero también el 'false' */
    expect(heroe).toBeFalsy();
  });

  //test 2
  test("getHeroesByOwners", () => {
    const marvel = "Marvel";
    const dc = "DC";

    const marvelHeroes = getHeroesByOwner(marvel);
    const dcHeroes = getHeroesByOwner(dc);

    expect(marvelHeroes.length).toBe(2);
    expect(dcHeroes.length).toBe(3);

    expect(marvelHeroes).toStrictEqual([
      {
        id: 2,
        name: "Spiderman",
        owner: "Marvel",
      },
      {
        id: 5,
        name: "Wolverine",
        owner: "Marvel",
      },
    ]);

    //test 3
    expect(dcHeroes).toStrictEqual([
      {
        id: 1,
        name: "Batman",
        owner: "DC",
      },
      {
        id: 3,
        name: "Superman",
        owner: "DC",
      },
      {
        id: 4,
        name: "Flash",
        owner: "DC",
      },
    ]);
  });
});
