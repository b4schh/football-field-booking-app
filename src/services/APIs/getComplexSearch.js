import axiosClient from './axiosClient';

export const complexApi = {
  searchComplexes: async ({ name, street, ward, province, minPrice, maxPrice }) => {
    const params = {
      name,
      street,
      ward,
      province,
      minPrice,
      maxPrice,
    };

    // lọc undefined hoặc null để API không bị lỗi
    Object.keys(params).forEach(key => params[key] == null && delete params[key]);

    return axiosClient.get('/complex/search', { params });
  },
};
