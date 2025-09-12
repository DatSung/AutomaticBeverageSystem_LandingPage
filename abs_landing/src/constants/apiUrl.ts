const baseApiUrl = 'https://autobrew.funnydev.id.vn/api/v1'

export const API_URL = {
    benefits: {
        gets: baseApiUrl + '/landing/benefits'
    },
    features: {
        gets: baseApiUrl + '/landing/features'
    },
    kioskModels: {
        gets: baseApiUrl + '/landing/kiosk-models',
        get: (id: string) => baseApiUrl + '/landing/kiosk-models/' + id
    },
    cooperateRequest: {
        post: baseApiUrl + '/cooperate-request'
    }
}