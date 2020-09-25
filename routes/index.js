var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.json(presentation);
});



var presentation = `<p>Jag är student i webbprogrammering (120 hp), BTH och denna sida finns i studiesyfte för kursen “jsramverk”. Jag är 28 år gammal och bor i Malmö, alltså pluggar jag på distans: det passar mig bra då jag gärna själv bestämmer tid och plats för min sysselsättning, även om ergonomin här hemma lämnar en del att önska…</p>

<p>Förutom att programmera gillar jag att vara kreativ på andra sätt: främst inom foto och grafisk design, det senare har jag lagt tid på att lära mig lite mer av under sommaren som gått, och när jag bara slappar gör jag det helst i soffan framför fotboll eller en bra film. Jag tycker också mycket om att laga mat, och så fort möjlighet ges reser jag och min kille runt i vår renoverade campingvan, allra helst bland alla uuunderbara vingårdar i norra Italien.</p>

<p>Tidigare har jag jobbat inom bar/restaurang och butik, bott i Oslo och i Rom för att plugga språk, och så har jag läst två år på juristprogrammet innan jag insåg att det praktiskt problemlösande och kreativa är vad jag hellre sysslar med! Därav webbprogrammering - och jag är inte besviken, även om studierna kräver en heeeel del tid för att jag ska hänga med!</p>

<p>Efter ett intensivt första år på utbildningen, och en välbehövd sommarledighet är det nu alltså dags igen! Pepp!</p>

`;

module.exports = router;
