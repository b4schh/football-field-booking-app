import React, { useMemo, useRef, forwardRef, useImperativeHandle } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

const ComplexSheet = forwardRef(({ field }, ref) => {
  const sheetRef = useRef(null);

  const snapPoints = useMemo(() => ["30%", "80%"], []);

  // expose API ra ngoài
  useImperativeHandle(ref, () => ({
    openPreview: () => {
      sheetRef.current?.snapToIndex(0);
    },
    openFull: () => {
      sheetRef.current?.snapToIndex(1);
    },
    close: () => {
      sheetRef.current?.close();
    },
  }));

  return (
    <BottomSheet
      ref={sheetRef}
      index={-1} // ẩn khi chưa có field
      snapPoints={snapPoints}
      enablePanDownToClose
    >
      {field ? (
        <View style={styles.container}>
          <View style={styles.handleBar} />

          <Text style={styles.name}>{field.name}</Text>
          <Text style={styles.address}>{field.address}</Text>
          <Text style={styles.info}>⏰ {field.openTime}</Text>
          <Text style={styles.info}>📞 {field.phone}</Text>

          <TouchableOpacity
            style={styles.expandButton}
            onPress={() => sheetRef.current?.snapToIndex(1)}
          >
            <Text style={styles.expandText}>Xem chi tiết</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </BottomSheet>
  );
});

export default ComplexSheet;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  handleBar: {
    width: 40,
    height: 4,
    backgroundColor: "#ccc",
    borderRadius: 20,
    alignSelf: "center",
    marginBottom: 12,
  },
  name: { fontSize: 20, fontWeight: "700" },
  address: { fontSize: 14, marginTop: 6 },
  info: { fontSize: 14, marginTop: 4 },
  expandButton: {
    marginTop: 16,
    backgroundColor: "#1E88E5",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  expandText: { color: "#fff", fontWeight: "600" },
});
