const axios = require('axios');

module.exports = class programmingQuotesAPI {
    constructor() {

    }

    /**
     * Get all quotes. / Obtener todas las frases.
     */

    async quotes() {
        let quotes = await axios.get("https://programming-quotes-api.herokuapp.com/quotes");
        return quotes.data;
    }

    /**
     * Get all quotes with a specific language. / Obtener todas las frases con un idioma específico.
     * @param {string} lang - Quotes language, available languages: en, sr / Idioma de las frases, idiomas disponibles: en, sr
     */

    async quotesByLang(lang) {
        let quote = await axios.get(`https://programming-quotes-api.herokuapp.com/quotes/lang/${lang}`);
        return quote.data;
    }

    /**
     * Get all quotes in a especific page. / Obtener todas las frases en una página específica.
     * @param {number} page - Page number. / Número de la página. 
     */

    async quotesByPage(page) {
        let quotes = await axios.get(`https://programming-quotes-api.herokuapp.com/quotes/page/${page}`);
        return quotes.data;
    }

    /**
     * Get a random quote. / Obtiene una frase aleatoria.
     */

    async randomQuote() {
        let quote = await axios.get("https://programming-quotes-api.herokuapp.com/quotes/random");
        return quote.data;
    }

    /**
     * Get a random quote with a specific language. / Obtiene una frase aleatoria con un idioma específico.
     * @param {string} lang - Quote language, available languages: en, sr / Idioma de la frase, idiomas disponibles: en, sr
     */

    async randomQuoteByLang(lang) {
        let quote = await axios.get(`https://programming-quotes-api.herokuapp.com/quotes/random/lang/${lang}`);
        return quote.data;
    }

    /**
     * Get a quote with a specific ID. / Obtiene una frase con una ID específica.
     * @param {string} id - Quote ID - ID de la frase. 
     */

    async quoteByID(id) {
        let quote = await axios.get(`https://programming-quotes-api.herokuapp.com/quotes/id/${id}`);
        return quote.data;
    }
}