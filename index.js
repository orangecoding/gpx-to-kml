const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const download = require('download');
const tj = require('@mapbox/togeojson');
const DOMParser = require('xmldom').DOMParser;
const toKml = require('tokml');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('./'));


app.listen(5000, () => {
    console.log('Server is running at 5000');
});

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.render( 'index.html' );
});

app.post('/', (req, res) => {
    const url = req.body.url;
    download(url).then(data => {
        const rawData = new DOMParser().parseFromString(data.toString('utf8'));
        const kml = toKml(tj.gpx(rawData));
        res.setHeader('Content-type', "application/octet-stream");
        res.setHeader('Content-disposition', 'attachment; filename=kml-track.kml');
        res.send(kml);
    }).catch((err)=>{
        console.error(err);
        res.sendStatus( 500 );
    })
});
