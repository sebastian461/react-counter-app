import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Pruebas en 06-deses-obj", () => {
  test("usContext retorna un objeto", () => {
    const character = {
      clave: "Iron-man",
      nombre: "Tony Stark",
      edad: 30,
    };

    const characterTest = usContext(character);

    expect(characterTest).toStrictEqual({
      nombreClave: character.clave,
      anios: character.edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    });
  });
});
