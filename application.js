var codes = {
    '13': '\n', // 'Enter' - new line
    '32': ' ', // 'Space' - space

    '126': '~',
    '33': '!',
    '64': '@',
    '35': '#',
    '36': '$',
    '37': '%',
    '94': '^',
    '38': '&',
    '42': '*',
    '40': '(',
    '41': ')',
    '95': '-',
    '45': '_',
    '43': '=',
    '61': '+',
    '91': '[',
    '123': '{',
    '93': ']',
    '125': '}',
    '92': '\\',
    '124': '|',
    '59': ';',
    '58': ':',
    '39': '\'',
    '34': '\"',
    '44': ',',
    '60': '<',
    '46': '.',
    '62': '>',
    '47': '/',
    '63': '?',

    '48': '0',
    '49': '1',
    '50': '2',
    '51': '3',
    '52': '4',
    '53': '5',
    '54': '6',
    '55': '7',
    '56': '8',
    '57': '9',
}

var languages = {                     //supported languages by 'x-webkit-speech' 
    'Afrikaans': 'af',
    'Basque': 'eu',
    'Bulgarian': 'bg',
    'Catalan': 'ca',
    'Arabic (Egypt)': 'ar-EG',
    'Arabic (Jordan)': 'ar-JO',
    'Arabic (Kuwait)': 'ar-KW',
    'Arabic (Lebanon)': 'ar-LB',
    'Arabic (Qatar)': 'ar-QA',
    'Arabic (UAE)': 'ar-AE',
    'Arabic (Morocco)': 'ar-MA',
    'Arabic (Iraq)': 'ar-IQ',
    'Arabic (Algeria)': 'ar-DZ',
    'Arabic (Bahrain)': 'ar-BH',
    'Arabic (Lybia)': 'ar-LY',
    'Arabic (Oman)': 'ar-OM',
    'Arabic (Saudi Arabia)': 'ar-SA',
    'Arabic (Tunisia)': 'ar-TN',
    'Arabic (Yemen)': 'ar-YE',
    'Czech': 'cs',
    'Dutch': 'nl-NL',
    'English (Australia)': 'en-AU',
    'English (Canada)': 'en-CA',
    'English (India)': 'en-IN',
    'English (New Zealand)': 'en-NZ',
    'English (South Africa)': 'en-ZA',
    'English(UK)': 'en-GB',
    'English(US)': 'en-US',
    'Finnish': 'fi',
    'French': 'fr-FR',
    'Galician': 'gl',
    'German': 'de-DE',
    'Hebrew': 'he',
    'Hungarian': 'hu',
    'Icelandic': 'is',
    'Italian': 'it-IT',
    'Indonesian': 'id',
    'Japanese': 'ja',
    'Korean': 'ko',
    'Latin': 'la',
    'Mandarin Chinese': 'zh-CN',
    'Traditional Taiwan': 'zh-TW',
    'Simplified China': 'zh-CN',
    'Simplified Hong Kong': 'zh-HK',
    'Yue Chinese (Traditional Hong Kong)': 'zh-yue',
    'Malaysian': 'ms-MY',
    'Norwegian': 'no-NO',
    'Polish': 'pl',
    'Pig Latin': 'xx-piglatin',
    'Portuguese': 'pt-PT',
    'Portuguese (brasil)': 'pt-BR',
    'Romanian': 'ro-RO',
    'Russian': 'ru',
    'Serbian': 'sr-SP',
    'Slovak': 'sk',
    'Spanish (Argentina)': 'es-AR',
    'Spanish(Bolivia)': 'es-BO',
    'Spanish( Chile)': 'es-CL',
    'Spanish (Colombia)': 'es-CO',
    'Spanish(Costa Rica)': 'es-CR',
    'Spanish(Dominican Republic)': 'es-DO',
    'Spanish(Ecuador)': 'es-EC',
    'Spanish(El Salvador)': 'es-SV',
    'Spanish(Guatemala)': 'es-GT',
    'Spanish(Honduras)': 'es-HN',
    'Spanish(Mexico)': 'es-MX',
    'Spanish(Nicaragua)': 'es-NI',
    'Spanish(Panama)': 'es-PA',
    'Spanish(Paraguay)': 'es-PY',
    'Spanish(Peru)': 'es-PE',
    'Spanish(Puerto Rico)': 'es-PR',
    'Spanish(Spain)': 'es-ES',
    'Spanish(US)': 'es-US',
    'Spanish(Uruguay)': 'es-UY',
    'Spanish(Venezuela)': 'es-VE',
    'Swedish': 'sv-SE',
    'Turkish': 'tr',
    'Zulu': 'zu',
}

var redirect_langs = {                  //unsupported languages by 'x-webkit-speech' but most similar to the adjacent supported 
    'Ukrainian': 'Russian',
}

var countries = {
    OINA: {url: 'http://www.acropolis.org/', logo: 'oina', lang: 'English(US)'},
    Argentina: {url: 'http://www.nueva-acropolis.org.ar/', logo: 'oina', lang: 'Spanish (Argentina)'},
    Australia: {url: 'http://www.acropolis.org.au/', logo: 'oina', lang: 'English (Australia)'},
    Austria: {url: 'http://www.neueakropolis.org/', logo: 'oina', lang: 'German'},
    Belgium: {url: 'http://www.nouvelle-acropole.be/', logo: 'oina', lang: 'English(US)'},                         //?
    Bolivia: {url: 'http://www.acropolis.com.bo/', logo: 'oina', lang: 'Spanish(Bolivia)'},
    Brazil: {url: 'http://www.acropole.org.br/', logo: 'oina', lang: 'Portuguese (brasil)'},
    Bulgaria: {url: 'http://www.akropol.bg/', logo: 'oina', lang: 'Bulgarian'},
    Canada: {url: 'http://www.newacropolis.ca/', logo: 'oina', lang: 'English (Canada)'},
    Chile: {url: 'http://www.nueva-acropolischile.org/', logo: 'oina', lang: 'Spanish( Chile)'},
    Colombia: {url: 'http://www.acropoliscolombia.org/', logo: 'oina', lang: 'Spanish (Colombia)'},
    'Costa Rica': {url: 'http://www.acropolis.or.cr/', logo: 'oina', lang: 'Spanish(Costa Rica)'},
    Croatia: {url: 'http://www.nova-akropola.hr/', logo: 'oina', lang: 'English(US)'},                             //?
    'Czech Republic': {url: 'http://www.akropolis.cz/', logo: 'oina', lang: 'Czech'},
    'Dominican Republic': {url: 'http://www.acropolis.org.do/', logo: 'oina', lang: 'Spanish(Dominican Republic)'},
    Ecuador: {url: 'http://www.oinae.org/', logo: 'oina', lang: 'Spanish(Ecuador)'},
    'El Salvador': {url: 'http://www.acropolis.org.sv/', logo: 'oina', lang: 'Spanish(El Salvador)'},
    France: {url: 'http://www.nouvelle-acropole.fr/', logo: 'oina', lang: 'French'},
    Germany: {url: 'http://www.neueakropolis.de/', logo: 'oina', lang: 'German'},
    Greece: {url: 'http://www.nea-acropoli.gr/', logo: 'oina', lang: 'English(US)'},                              //?
    Guatemala: {url: 'http://www.nuevaacropolis.org.gt/', logo: 'oina', lang: 'Spanish(Guatemala)'},
    Honduras: {url: 'http://www.acropolishonduras.org/', logo: 'oina', lang: 'Spanish(Honduras)'},
    Hungary: {url: 'http://www.ujakropolisz.hu/', logo: 'oina', lang: 'Hungarian'},
    India: {url: 'http://www.acropolis.org.in/', logo: 'oina', lang: 'English(US)'},                      //?
    //Ireland: {url: 'http://www.newacropolis-ireland.org/', logo: 'oina', lang: 'English(US)'},                    //?
    Israel: {url: 'http://www.newacropolis.org.il/', logo: 'oina', lang: 'Hebrew'},
    Italy: {url: 'http://www.nuovaacropoli.it/', logo: 'oina', lang: 'Italian'},
    Japan: {url: 'http://www.acropolis.jp/', logo: 'oina', lang: 'Japanese'},
    Mexico: {url: 'http://www.acropolis.org.mx/', logo: 'oina', lang: 'Spanish(Mexico)'},
    Nicaragua: {url: 'http://www.acropolisnicaragua.org/', logo: 'oina', lang: 'Spanish(Nicaragua)'},
    Panama: {url: 'http://www.acropolis.org.pa/', logo: 'oina', lang: 'Spanish(Panama)'},
    Paraguay: {url: 'http://www.acropolisparaguay.org/', logo: 'oina', lang: 'Spanish(Paraguay)'},
    Peru: {url: 'http://www.acropolisperu.org/', logo: 'oina', lang: 'Spanish(Peru)'},
    Poland: {url: 'http://www.nowa-akropolis.pl/', logo: 'oina', lang: 'Polish'},
    Portugal: {url: 'http://www.nova-acropole.pt/', logo: 'oina', lang: 'Portuguese'},
    Romania: {url: 'http://www.noua-acropola.ro/', logo: 'oina', lang: 'Romanian'},
    'Russian Federation': {url: 'http://www.newacropol.ru/', logo: 'oina', lang: 'Russian'},
    Serbia: {url: 'http://www.nova-akropola.rs/', logo: 'oina', lang: 'Serbian'},
    Slovakia: {url: 'http://www.akropolis.sk/', logo: 'oina', lang: 'Slovak'},
    Slovenia: {url: 'http://www.akropola.org/', logo: 'oina', lang: 'English(US)'},                               //?
    'South Africa': {url: 'http://www.newacropolis.org.za/', logo: 'oina', lang: 'English (South Africa)'},
    Spain: {url: 'http://www.nueva-acropolis.es/', logo: 'oina', lang: 'Spanish(Spain)'},
    Switzerland: {url: 'http://www.nouvelle-acropole.ch/', logo: 'oina', lang: 'German'},
    Ukraine: {url: 'http://www.newacropolis.org.ua/', logo: 'oina', lang: 'Ukrainian'},
    'United Kingdom': {url: 'http://www.newacropolisuk.org/', logo: 'oina', lang: 'English(UK)'},
    Uruguay: {url: 'http://www.acropolis.org.uy/', logo: 'oina', lang: 'Spanish(Uruguay)'},
    'United States': {url: 'http://www.newacropolisusa.org/', logo: 'oina', lang: 'English(US)'},
}

$(document).ready(function() {
    var detected = detectLocation();
    console.log(detected);
    if (detected.country)
        $('#country').html(detected.country);

    var html_lang = 'select#language'
    _.each(languagesList(detected.lang), function(el){
        $(html_lang).append(el);
    });

    $('#reconized_string').attr('lang', detected.lang);

    $(html_lang).change(function() {
        $('#reconized_string').attr('lang', $(html_lang).val());
    });

    $('#logo').attr('src', 'images/oina/oina_logo_' + detected.logo + '.png');
    $('#site').attr('href', detected.url);

    $('#reconized_string').focus();
    var text = [];
    $('body').keypress(function(e) {
        //console.log(e.which);
        e.preventDefault();
        var phrase;

        switch(e.which){
            case 112: // 'p' - paste
              phrase = $('#reconized_string').val();
              if (phrase != '')
                  add_phrase(' ' + phrase);
              break;
            case 114: // 'r' - remove
              text.pop();
              render_text();
              break;
            case 109: //'m' - manual entering
              phrase = prompt('Enter string: ');
              if (phrase != '')
                  add_phrase(' ' + phrase);
              break;
            default:
              var code = codes[e.which];
              if(typeof(code) !== 'undefined')
                  add_phrase(code);
        }
    });

    function add_phrase(phrase) {
        text.push(phrase);
        render_text();
    };

    function render_text() {
        var html = '';
        _.each(text, function(phrase){
            html += phrase;
        });
        $('#page').html(html);
    };

    function detectLocation() {
        var detected = {
            country: geoip_country_name(),
            lang: window.navigator.userLanguage || window.navigator.language
        };

        _.each(countries, function(value, key){
            var pattern = RegExp(detected.country, 'i');
            try {
                if (pattern.exec(key).length > 0){
                    if (_.has(redirect_langs, value.lang)) {
                        if (_.has(languages, redirect_langs[value.lang]))
                            detected.lang = languages[redirect_langs[value.lang]];
                    } else {
                        if (_.has(languages, value.lang))
                            detected.lang = languages[value.lang];
                    }

                    if (detected.country && countries[detected.country]) {
                        detected.logo = countries[detected.country].logo;
                        detected.url = countries[detected.country].url;
                    }
                    //console.log(country);
                }
            }
            catch(err) {
                //console.log(err);
            }
        });

        if (!detected.logo) {
            detected.logo = countries['OINA'].logo;
            detected.url = countries['OINA'].url;
        }
        return detected;
    };

    function languagesList(lang) {
        var list = [];
        var selected = '';
        _.each(languages, function(value, key ){
            selected = ((value == lang) ? " selected='selected' " : '');
            list.push("<option value='" + value + "'" + selected + ">" +  key + "</option>");
        });
        return list;
    };
});
