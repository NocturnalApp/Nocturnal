import WebTorrent from 'webtorrent'

const client = new WebTorrent()

const magnetURI = 'magnet: ...'

client.add(magnetURI, { path: '/path/to/folder' }, torrent => {
  torrent.on('done', () => {
    console.log('torrent download finished')
  })
})

