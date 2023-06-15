class EconobizAPI {
  static async listProduct() {
    try {
      const response = await fetch('https://mocki.io/v1/bc983a18-6926-4009-a745-b8306cf4de57');
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

export default EconobizAPI;
