import API_ENDPOINT from '../globals/api-endpoint';

class EconobizAPI {
  static async getAllProduct() {
    try {
      const response = await fetch(API_ENDPOINT.LIST);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  static async getDetailProduct(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  static async getAllFeedback() {
    try {
      const response = await fetch(API_ENDPOINT.REVIEW);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  static async filterProduct(category) {
    try {
      const response = await fetch(`${API_ENDPOINT.LIST}?category=${category}`);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

export default EconobizAPI;
