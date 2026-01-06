import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 149,
    flexDirection: 'row',
    backgroundColor: '#239969',
    alignItems: 'center',
    paddingHorizontal: 0, // loại lề mặc định để dịch toàn bộ sang trái
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  // Cột 1: Avatar
  column1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -20, // dịch sang trái
    marginTop: 20,
  },

logo: {
  width: 44,
  height: 44,
  borderRadius: 8, // bo nhẹ cho hiện đại
},


  // Cột 2: Thứ/ngày + tên user
  column2: {
    flex: 2,
    justifyContent: 'center',
    marginLeft: -40,
    marginTop: 20, // dịch sang trái
  },

  dateText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 6,
  },

  userNameText: {
    color: '#fff',
    fontSize: 16,
  },

  // Cột 3: Nút thông báo
  column3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  notifyButton: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 16, // giữ cách lề phải 16
  },

  notifyIcon: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
});

export default styles;
