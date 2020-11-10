# UniWrapper - Wrapper universal. 

UniWrapper es un wrapper "universal" para la mayoría de APIs que existen. (todavía faltan muchas por agregar), nuestra misión es facilitar el uso de APIs en masa para no tener que estar instalando muchos paquetes.

## APIs disponibles:

[<uniwrapper>.quotes.programmingQuotesAPI()](###programmingQuotesAPI()) - [skolakoda/programming-quotes-api](https://github.com/skolakoda/programming-quotes-api)

## Uso de los wrappers:

### programmingQuotesAPI()

Funciones disponibles:

- programmingQuotesAPI().quotes() - Esta función obtiene todas las frases de todos los idiomas. Ejemplo:
	```js
	const uniwrapper = require('uniwrapper');
	const pqapi = new uniwrapper.quotes.programmingQuotesAPI();
	
	//Fuera de una función asíncrona:
	
	(async function() {
		console.log(await pqapi.quotes()); //Array con 400+ frases.
	})();
	
	//Dentro de una función asíncrona:
	
	console.log(await pqapi.quotes()); //Array con 400+ frases.
	```
	
- programmingQuotesAPI().quotesByLang(lang) - Esta función obtiene todas las frases con un idioma específico. (idiomas disponibles: `en`, `sr`) Ejemplo:
	```js
	const uniwrapper = require('uniwrapper');
	const pqapi = new uniwrapper.quotes.programmingQuotesAPI();
	
	//Fuera de una función asíncrona:
	
	(async function() {
		console.log(await pqapi.quotesByLang('en')); //Array con 200+ frases.
	})();
	
	//Dentro de una función asíncrona:
	
	console.log(await pqapi.quotesByLang('en')); //Array con 200+ frases.
	```
	
- programmingQuotesAPI().quotesByPage(page) - Esta función obtiene todas las frases de una página específica. Ejemplo:
	```js
	const uniwrapper = require('uniwrapper');
	const pqapi = new uniwrapper.quotes.programmingQuotesAPI();
	
	//Fuera de una función asíncrona:
	
	(async function() {
		console.log(await pqapi.quotesByPage(3)); //Array con 25+ frases.
	})();
	
	//Dentro de una función asíncrona:
	
	console.log(await pqapi.quotesByPage(3)); //Array con 25+ frases.
	```

- programmingQuotesAPI().randomQuote() - Esta función obtiene una frase aleatoria. Ejemplo:
	```js
	const uniwrapper = require('uniwrapper');
	const pqapi = new uniwrapper.quotes.programmingQuotesAPI();
	
	//Fuera de una función asíncrona:
	
	(async function() {
		console.log(await pqapi.randomQuote()); //Objeto con la frase.
	})();
	
	//Dentro de una función asíncrona:
	
	console.log(await pqapi.randomQuote()); //Objeto con la frase.
	```
	
- programmingQuotesAPI().randomQuoteByLang(lang) - Esta función obtiene una frase aleatoria con un idioma específico. Ejemplo:
	```js
	const uniwrapper = require('uniwrapper');
	const pqapi = new uniwrapper.quotes.programmingQuotesAPI();
	
	//Fuera de una función asíncrona:
	
	(async function() {
		console.log(await pqapi.randomQuoteByLang('en')); //Objeto con la frase.
	})();
	
	//Dentro de una función asíncrona:
	
	console.log(await pqapi.randomQuoteByLang('en')); //Objeto con la frase.
	```

- programmingQuotesAPI().quoteByID(id) - Esta función obtiene una frase aleatoria con una ID específica. Ejemplo:
	```js
	const uniwrapper = require('uniwrapper');
	const pqapi = new uniwrapper.quotes.programmingQuotesAPI();
	
	//Fuera de una función asíncrona:
	
	(async function() {
		console.log(await pqapi.quoteByID('5a9137d72141d30004b42e59')); //Objeto con la frase.
	})();
	
	//Dentro de una función asíncrona:
	
	console.log(await pqapi.quoteByID('5a9137d72141d30004b42e59')); //Objeto con la frase.
	```

## Sobre el paquete:

El código fuente de este paquete también está en GitHub [anventech/uniwrapper](https://github.com/anventech/uniwrapper).

## Sobre el creador:

Este paquete fue desarrollador por [anventech](https://github.com/anventec), si encuentras un error o simplemente quieres sugerir qué otras APIs podría añadir, puedes contactarte con él mediante sus redes sociales:

Twitter: [@anventec](https://www.twitter.com/anventec)
Instagram: [@anventec](https://instagram.com/anventec)
Discord: **Anventec#3735**
GitHub: [@anventech](https://github.com/anventech)