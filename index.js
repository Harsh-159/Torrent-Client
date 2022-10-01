'use strict';

const tracker = require('./src/tracker');
const torrentParser = require('./src/torrent-parser');
const download = require('./src/download');
const torrent = torrentParser.open('./torrents/parrot.torrent');

tracker.getPeers(torrent,peers=>{
    console.log('list of peers: ',peers);
});


download(torrent, torrent.info.name);

