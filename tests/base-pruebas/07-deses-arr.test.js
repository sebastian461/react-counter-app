import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Pruebas en 07-deses-arr", () => {
  test("retornaArreglo devuelve un arreglo de letras y números", () => {
    const [letras, numeros] = retornaArreglo();

    expect(letras).toBe("ABC");
    expect(numeros).toBe(123);

    /* También se podría comparar el tipo que retorna en caso de no saber el valor */
    expect(typeof letras).toBe("string");
    expect(typeof numeros).toBe("number");
  });
});
