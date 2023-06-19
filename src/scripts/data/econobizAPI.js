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

  static async filterProduct(searchname, category, location, pricesort) {
    try {
      const response = await fetch(`${API_ENDPOINT.LIST}?searchname=${encodeURIComponent(searchname)}&category=${encodeURIComponent(category)}&location=${encodeURIComponent(location)}&pricesort=${encodeURIComponent(pricesort)}`);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

export default EconobizAPI;
