/* Esta es la sintaxis para escribri una prueba (callback) */
describe("Pruebas en <Demo>", () => {
  test("Esta prueba no debe fallar", () => {
    //1. inicialización
    const message = "Hola mundo";

    //2. estímulo
    const message2 = message.trim();

    //3. observar el comportamiento
    expect(message).toBe(message2); //esto es una comparación entre el mensaje orgiginal y el segundo
  });
});
