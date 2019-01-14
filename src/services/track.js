import platziMusicServie from './platzi-music'

const trackService = {}

trackService.search = function (q) {
    const type = 'track'

    return platziMusicServie.get('/search', {
        params: {q, type}
    })
    .then( res => res.data)
}

export default trackService