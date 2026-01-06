// services/APIs/getWeeklySlot.js
import axiosClient from "../axiosClient";

export const weeklySlotApi = {
  getWeeklySlot: async (complexId, startDate, endDate) => {
    const format = (d) => d.toISOString().split("T")[0];

    const res = await axiosClient.get(
      `/complexes/${complexId}/weekly-details`,
      {
        params: {
          startDate: format(startDate),
          endDate: format(endDate),
        },
      }
    );

    return res.data.data; // { id, name, fields: [...] }
  },
};
