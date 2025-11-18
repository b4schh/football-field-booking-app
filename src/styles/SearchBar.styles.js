import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // để search + nút vuông nằm cạnh nhau
    alignItems: 'center',
    position: 'absolute',  // có thể di chuyển toàn bộ thanh
    top: -27,
    left: 3,
  },

  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },

  // 2 nút nhỏ bên trong thanh search
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  smallButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    backgroundColor: '#fff',
  },

  icon: {
    width: 18,
    height: 16,
    resizeMode: 'contain',
  },

  // Nút vuông cạnh thanh search
  squareButton: {
    width: 50,
    height: 50,
    borderRadius: 8,  // bo góc nhẹ
    marginLeft: 10,
    backgroundColor: '#fff', // tạm thời, bạn có thể thêm ảnh
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  squareIcon: {
    width: 24,   // kích thước icon bên trong nút
    height: 24,
    resizeMode: 'contain',
  },
});

export default styles;
