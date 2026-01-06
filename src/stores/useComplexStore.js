import { create } from "zustand";
import { complexApi } from "../services/APIs/getComplex";
import { getAverageRating } from "../services/APIs/getComplexAverageRating";

export const useComplexStore = create((set) => ({
  complexes: [],       // dữ liệu hiển thị trên Home
  searchResults: [],   // lưu kết quả tìm kiếm
  loading: false,
  error: null,

  mapComplexData: (data) =>
    (data || []).map((x) => ({
      id: x.id,
      name: x.name,
      address: `${x.street}, ${x.ward}, ${x.province}`,
      openTime: x.openingTime,
      closeTime: x.closingTime,
      phone: x.phone,
      description: x.description,
      imageUrl:
        x.imageUrl ??
        "https://upload.wikimedia.org/wikipedia/commons/4/43/Old_Trafford_inside_20060726_1.jpg",
      avatarUrl:
        x.avatarUrl ??
        "https://upload.wikimedia.org/wikipedia/vi/thumb/a/a1/Man_Utd_FC_.svg/758px-Man_Utd_FC_.svg.png",
      rating: x.rating ?? "4.5",
    })),

  fetchComplexes: async (pageIndex = 1, pageSize = 10) => {
    try {
      set({ loading: true });
      const res = await complexApi.getComplexes(pageIndex, pageSize);
      let data = res?.data || [];
      data = await Promise.all(
        data.map(async (c) => {
          try {
            const ratingData = await getAverageRating(c.id);
            return { ...c, rating: ratingData.averageRating ?? "0" };
          } catch {
            return { ...c, rating: "0" };
          }
        })
      );
      set({ complexes: useComplexStore.getState().mapComplexData(data), loading: false });
    } catch (err) {
      console.log("🔥 Fetch complex error:", err);
      set({ error: err.message, loading: false });
    }
  },

  searchComplexes: async (filters) => {
  try {
    set({ loading: true });
    const res = await complexApi.searchComplexes(filters);
    let data = res?.data || [];

    data = await Promise.all(
      data.map(async (c) => {
        try {
          const ratingData = await getAverageRating(c.id);
          return { ...c, rating: ratingData.averageRating ?? "0" };
        } catch {
          return { ...c, rating: "0" };
        }
      })
    );

    const mappedData = useComplexStore.getState().mapComplexData(data);
    console.log("🔍 Search returned", mappedData.length, "results");
    mappedData.forEach((c, i) =>
      console.log(`${i + 1}. ${c.name} - ${c.address}`)
    );

    set({
      searchResults: mappedData, // lưu dữ liệu đã map
      loading: false,
      error: null,
    });
  } catch (err) {
    console.log("🔥 Search complex error:", err);
    set({ error: err.message, loading: false });
  }
},


  clearSearch: () => set({ searchResults: [] }),
}));
