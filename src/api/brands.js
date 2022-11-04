import api from './api';
import mockData from './mockData';

const brandsApi = {
  async getTags() {
    try {
      const res = await api.get(mockData.tags);
      return res.data;
    } catch (err) {
      throw err.response.data;
    }
  },

  async getAllBrands() {
    try {
      const res = await api.get(mockData.brands);
      return res.data;
    } catch (err) {
      throw err.response.data;
    }
  },

  async getBrandsByTags(tags) {
    try {
      const brands = mockData.brands.filter(
        brand => brand.tags.findIndex(t => tags.includes(t)) !== -1
      );
      const res = await api.get(brands);
      return res.data;
    } catch (err) {
      throw err.response.data;
    }
  },
};

export default brandsApi;
