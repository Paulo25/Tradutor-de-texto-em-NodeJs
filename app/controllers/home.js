const {Translate} = require('@google-cloud/translate');
const projectId = '************';
const translate = new Translate({projectId});

module.exports.index = function (application, req, res) {+
    translate
        .getLanguages()
        .then(resultLanguages => {
            res.render("home/index", {languages: resultLanguages[0]});
        });
}

module.exports.traduzir_texto = async function (application, req, res) {
    var dados = req.body;

    const text = dados.texto;

    const target = dados.para;

    var detect;
    if (dados.de === "detec_language") {
        detect = await translate.detect(text);
        detect = detect[0].language;
        console.log('Linguagem Detectada:' + detect);
    }

    const [translation] = await translate.translate(text, target);
    console.log(`Texto: ${text}`);
    console.log(`Tradução: ${translation}`);

    return res.json({"texto": `${text}`, "traducao": `${translation}`, "linguagemDetectada":detect});
}