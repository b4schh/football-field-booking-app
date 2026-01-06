const BASE_URL = 'https://tinhthanhpho.com/api/v1';

export const getProvinces = async () => {
  const res = await fetch(`${BASE_URL}/new-provinces?limit=50`);
  return res.json();
};

export const getDistrictsByProvince = async (provinceCode) => {
  const res = await fetch(
    `${BASE_URL}/new-provinces/${provinceCode}/wards?limit=150`
  );
  return res.json();
};
