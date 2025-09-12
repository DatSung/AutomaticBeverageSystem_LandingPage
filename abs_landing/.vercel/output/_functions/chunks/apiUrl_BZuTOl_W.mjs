const baseApiUrl = "https://autobrew.funnydev.id.vn/api/v1";
const API_URL = {
  benefits: {
    gets: baseApiUrl + "/landing/benefits"
  },
  features: {
    gets: baseApiUrl + "/landing/features"
  },
  kioskModels: {
    gets: baseApiUrl + "/landing/kiosk-models",
    get: (id) => baseApiUrl + "/landing/kiosk-models/" + id
  },
  cooperateRequest: {
    post: baseApiUrl + "/cooperate-request"
  }
};

export { API_URL as A };
