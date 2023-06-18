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
}

export default EconobizAPI;
