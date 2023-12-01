import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Pruebas en 11-async-await", () => {
  test("getImage retorna un URL de la imagen", async () => {
    const url = await getImagen();
    console.log(url);
    expect(typeof url).toBe("string");
  });

  test("getImage retorna un error sino encuentra el URL de la imagen", async () => {
    const url = await getImagen();
    console.log(url);
    expect(url).toBe("No se encontro la imagen");
  });
});
