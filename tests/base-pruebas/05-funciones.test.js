import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    /* Para comparar objetos no se usa 'toBe' sino
    'toEqual' o 'toStrictEqual' */
    expect(testUser).toStrictEqual(user);
  });

  test("getUsuarioActivo retorna un objeto", () => {
    const name = "Sebastián";
    const userActive = getUsuarioActivo(name);

    expect(userActive).toStrictEqual({
      uid: "ABC567",
      username: name,
    });
  });
});
