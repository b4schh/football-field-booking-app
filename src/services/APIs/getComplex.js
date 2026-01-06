import axiosClient from "../axiosClient";

export const complexApi = {
  // 📋 Lấy danh sách complexes (mặc định)
  getComplexes: async (pageIndex = 1, pageSize = 10) => {
    const res = await axiosClient.get("/complexes", {
      params: { pageIndex, pageSize },
    });
    return res.data;
  },

  // 🔍 Tìm kiếm theo filters
  searchComplexes: async (filters = {}) => {
    // filters = { name, street, ward, province, minPrice, maxPrice }
    const res = await axiosClient.get("/complexes/search", {
      params: {
        name: filters.name,
        street: filters.street,
        ward: filters.ward,
        province: filters.province,
        minPrice: filters.minPrice,
        maxPrice: filters.maxPrice,
      },
    });
    return res.data;
  },
};
