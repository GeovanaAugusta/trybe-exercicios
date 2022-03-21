// 3 - A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet , de forma que Marte seja impresso assincronamente, depois de 4 segundos.

const getPlanet = () => {
    const mars = {
        name: "Mars",
        distanceFromSun: {
            value: 227900000,
            measurementUnit: "kilometers",
        },
    };
    setTimeout(() => console.log("Returned planet: ", mars), 4000);
};

getPlanet(); // imprime Marte depois de 4 segundos

//   4 - Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature , que imprime a temperatura em Marte.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
const getResultOfFunction = getMarsTemperature();
setTimeout(() => console.log(`Mars temperature is: ${getResultOfFunction} degree Celcius`), messageDelay());
};
sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

