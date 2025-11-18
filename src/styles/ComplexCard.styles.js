import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    width: 330,
    height: 185,
    borderRadius: 12,
    backgroundColor: '#fff',
    overflow: 'hidden',
    marginVertical: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignSelf: 'center',
  },

  // Container ảnh sân
  fieldImageContainer: {
    width: '100%',
    height: '50%',
    position: 'relative', // overlay
  },

  fieldImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  // Overlay ô đánh giá
  ratingBox: {
    position: 'absolute',
    top: 8,
    left: 8,
    width: 60,
    height: 30,
    backgroundColor: '#ffffffff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ratingText: {
    color: '#000',
    fontSize: 12,
  },

  // Overlay hình tròn bên phải
  topRightButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Thông tin sân 50% dưới
  infoContainer: {
    flexDirection: 'row',
    padding: 10,
    height: '50%',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    alignItems: 'center',
    
  },

  column1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -10,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  column2: {
    flex: 4,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginLeft: -10,
  },

  fieldName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000',
  },

  address: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },

  openTime: {
    fontSize: 12,
    color: '#777',
  },

  column3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bookButton: {
    backgroundColor: '#239969',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bookButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default styles;
