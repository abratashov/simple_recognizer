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

var languages = {
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
    'Russian Federation': 'ru',
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

var logos = {
    OINA: {url: 'http://www.acropolis.org/', logo: 'oina'},
    Argentina: {url: 'http://www.nueva-acropolis.org.ar/', logo: 'oina'},
    Australia: {url: 'http://www.acropolis.org.au/', logo: 'oina'},
    Austria: {url: 'http://www.neueakropolis.org/', logo: 'oina'},
    Belgium: {url: 'http://www.nouvelle-acropole.be/', logo: 'oina'},
    Bolivia: {url: 'http://www.acropolis.com.bo/', logo: 'oina'},
    'Brazil North': {url: 'http://www.acropole.org.br/', logo: 'oina'},
    'Brazil South': {url: 'http://www.nova-acropole.org.br/', logo: 'oina'},
    Bulgaria: {url: 'http://www.akropol.bg/', logo: 'oina'},
    Canada: {url: 'http://www.newacropolis.ca/', logo: 'oina'},
    Chile: {url: 'http://www.nueva-acropolischile.org/', logo: 'oina'},
    Colombia: {url: 'http://www.acropoliscolombia.org/', logo: 'oina'},
    'Costa Rica': {url: 'http://www.acropolis.or.cr/', logo: 'oina'},
    Croatia: {url: 'http://www.nova-akropola.hr/', logo: 'oina'},
    'Czech Republic': {url: 'http://www.akropolis.cz/', logo: 'oina'},
    'Dominican Republic': {url: 'http://www.acropolis.org.do/', logo: 'oina'},
    Ecuador: {url: 'http://www.oinae.org/', logo: 'oina'},
    'El Salvador': {url: 'http://www.acropolis.org.sv/', logo: 'oina'},
    France: {url: 'http://www.nouvelle-acropole.fr/', logo: 'oina'},
    Germany: {url: 'http://www.neueakropolis.de/', logo: 'oina'},
    Greece: {url: 'http://www.nea-acropoli.gr/', logo: 'oina'},
    Guatemala: {url: 'http://www.nuevaacropolis.org.gt/', logo: 'oina'},
    Honduras: {url: 'http://www.acropolishonduras.org/', logo: 'oina'},
    Hungary: {url: 'http://www.ujakropolisz.hu/', logo: 'oina'},
    'India North': {url: 'http://www.acropolis.org.in/', logo: 'oina'},
    'India South': {url: 'http://www.newacropolis.in/', logo: 'oina'},
    Ireland: {url: 'http://www.newacropolis-ireland.org/', logo: 'oina'},
    Israel: {url: 'http://www.newacropolis.org.il/', logo: 'oina'},
    Italy: {url: 'http://www.nuovaacropoli.it/', logo: 'oina'},
    Japan: {url: 'http://www.acropolis.jp/', logo: 'oina'},
    Mexico: {url: 'http://www.acropolis.org.mx/', logo: 'oina'},
    Nicaragua: {url: 'http://www.acropolisnicaragua.org/', logo: 'oina'},
    Panama: {url: 'http://www.acropolis.org.pa/', logo: 'oina'},
    Paraguay: {url: 'http://www.acropolisparaguay.org/', logo: 'oina'},
    Peru: {url: 'http://www.acropolisperu.org/', logo: 'oina'},
    Poland: {url: 'http://www.nowa-akropolis.pl/', logo: 'oina'},
    Portugal: {url: 'http://www.nova-acropole.pt/', logo: 'oina'},
    Romania: {url: 'http://www.noua-acropola.ro/', logo: 'oina'},
    'Russian Federation': {url: 'http://www.newacropol.ru/', logo: 'oina'},
    'Serbia Republic': {url: 'http://www.nova-akropola.rs/', logo: 'oina'},
    Slovakia: {url: 'http://www.akropolis.sk/', logo: 'oina'},
    Slovenia: {url: 'http://www.akropola.org/', logo: 'oina'},
    'South Africa': {url: 'http://www.newacropolis.org.za/', logo: 'oina'},
    Spain: {url: 'http://www.nueva-acropolis.es/', logo: 'oina'},
    Switzerland: {url: 'http://www.nouvelle-acropole.ch/', logo: 'oina'},
    Ukraine: {url: 'http://www.newacropolis.org.ua/', logo: 'oina'},
    'United Kingdom': {url: 'http://www.newacropolisuk.org/', logo: 'oina'},
    Uruguay: {url: 'http://www.acropolis.org.uy/', logo: 'oina'},
    USA: {url: 'http://www.newacropolisusa.org/', logo: 'oina'},
}

$(document).ready(function() {
    var detected = detectLocation();
    
    var html_lang = 'select#language'
     _.each(languagesList(detected.lang), function(el){
        $(html_lang).append(el);
    });

    $(html_lang).change(function() {
        $('#reconized_string').attr('lang', $(html_lang).val());
    });

    $('#logo').attr('src', 'images/oina/oina_logo_' + detected.logo + '.png');
    $('#site').attr('href', detected.url);

    if (geoip_country_name())
        $('#country').html(geoip_country_name());

    $('#reconized_string').focus();
    var text = [];
    $('body').keypress(function(e) {
        console.log(e.which);
        // && e.srcElement.id == 'search_string'){
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
        var country_name = geoip_country_name();

        var detected = {lang: window.navigator.userLanguage || window.navigator.language};

        _.each(languages, function(value, key){
            var pattern = RegExp(country_name, 'i');
            try {
                if (pattern.exec(key).length > 0)
                    detected.lang = value;
            }
            catch(err) {
                //console.log(err);
            }
        });

        _.each(logos, function(value, key){
            var pattern = RegExp(country_name, 'i');
            try {
                if (pattern.exec(key).length > 0) {
                    if (country_name && logos[country_name]) {
                        detected.logo = logos[country_name].logo;
                        detected.url = logos[country_name].url;
                    }
                    console.log(country);
                }
            }
            catch(err) {
                //console.log(err);
            }
        });

        if (!detected.logo) {
            detected.logo = logos['OINA'].logo;
            detected.url = logos['OINA'].url;
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
