import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { getProvinces, getDistrictsByProvince } from '../services/APIs/location';

export default function LocationDropdown({
  styles,
  onProvinceChange,
  onDistrictChange,
}) {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);

  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const [provinceVisible, setProvinceVisible] = useState(false);
  const [districtVisible, setDistrictVisible] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProvinces();
  }, []);

  const fetchProvinces = async () => {
    try {
      setLoading(true);
      const res = await getProvinces();
      setProvinces(res.data || res);
    } finally {
      setLoading(false);
    }
  };

  const fetchDistricts = async (provinceCode) => {
    try {
      setLoading(true);
      const res = await getDistrictsByProvince(provinceCode);
      setDistricts(res.data || res);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ width: '100%' }}>
      {/* ===== TỈNH / QUẬN – NGANG HÀNG ===== */}
      <View style={styles.locationRow}>
        {/* Province */}
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setProvinceVisible(true)}
        >
          <Text
            style={[
              styles.dropdownText,
              selectedProvince && { color: '#063C24' },
            ]}
          >
            {selectedProvince?.name || 'Tỉnh/Thành phố'}
          </Text>
        </TouchableOpacity>

        {/* District */}
        <TouchableOpacity
          style={styles.dropdown}
          disabled={!selectedProvince}
          onPress={() => setDistrictVisible(true)}
        >
          <Text
            style={[
              styles.dropdownText,
              selectedDistrict && { color: '#063C24' },
              !selectedProvince && { color: '#ccc' },
            ]}
          >
            {selectedDistrict?.name || 'Quận/Huyện'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* ===== Province Modal ===== */}
      <Modal visible={provinceVisible} animationType="slide">
        <View style={{ flex: 1, padding: 20 }}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={provinces}
              keyExtractor={(item) => item.code.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedProvince(item);
                    setSelectedDistrict(null);
                    onProvinceChange?.(item);
                    fetchDistricts(item.code);
                    setProvinceVisible(false);
                  }}
                >
                  <Text style={{ paddingVertical: 15 }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      </Modal>

      {/* ===== District Modal ===== */}
      <Modal visible={districtVisible} animationType="slide">
        <View style={{ flex: 1, padding: 20 }}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={districts}
              keyExtractor={(item) => item.code.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedDistrict(item);
                    onDistrictChange?.(item);
                    setDistrictVisible(false);
                  }}
                >
                  <Text style={{ paddingVertical: 15 }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      </Modal>
    </View>
  );
}
