import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  /* ===== Container tổng thể ===== */
  container: {
    flex: 1,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 30,
  },

  /* ===== Box 1: Search ===== */
  searchBox: {
    width: 350,
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 4,
    paddingHorizontal: 4,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 30,
  },
  iconButton: {
    width: 15,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: 15,
    height: 15,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchText: {
    fontSize: 14,
    color: '#02A51E',
  },

  /* ===== Box 2: Filter ===== */
  filterBox: {
    width: 350,
    height: 468,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)', // viền mờ
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  label: {
    fontSize: 14,
    color: '#063C24',
    marginBottom: 6,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  dropdown: {
    width: 150, // ~ nửa box
    height: 36,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center',
    paddingHorizontal: 8,
    backgroundColor: '#ffffffff',
  },
  
  dropdownText: {
    fontSize: 14,
    color: '#ccc',
  },
  input: {
    width: 150, // ~ nửa box
    height: 36,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },

  inputFull: {
    width: 325, // ~ nửa box
    height: 36,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },

/* Box 3: Nút Tìm kiếm */
  searchButton: {
    width: 350,
    height: 51,
    backgroundColor: '#08AE02',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 30,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },

  locationRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 12,
},

});
