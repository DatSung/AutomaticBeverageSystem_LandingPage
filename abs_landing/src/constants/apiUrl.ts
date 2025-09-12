const baseApiUrl = 'https://localhost:30475/api/v1'

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
    }
}