import CONFIG from '../globals/config';

class EconobizAPI {
  static async listProduct() {
    try {
      const response = await fetch(`${CONFIG.BASE_URL}/product`);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  static async getAllFeedback() {
    try {
      const response = await fetch(`${CONFIG.BASE_URL}/feedback`);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  static async feedback() {
    try {
      const response = await fetch('https://mocki.io/v1/64672391-2b6b-462c-8bde-df448ee9d8b8');
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

export default EconobizAPI;
