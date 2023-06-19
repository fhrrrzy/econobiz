import CONFIG from './config';

const API_ENDPOINT = {
  LOGIN: `${CONFIG.BASE_URL}/login`,
  LIST: `${CONFIG.BASE_URL}/product`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/product/${id}`,
  PROFILE: (id) => `${CONFIG.BASE_URL}/profile/${id}`,
  REVIEW: `${CONFIG.BASE_URL}/feedback`,
};

export default API_ENDPOINT;
