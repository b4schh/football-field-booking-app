import * as ImageManipulator from "expo-image-manipulator";

export const convertToWebP = async (uri) => {
  const result = await ImageManipulator.manipulateAsync(
    uri,
    [{ resize: { width: 800 } }],
    {
      compress: 0.7,
      format: ImageManipulator.SaveFormat.WEBP,
    }
  );

  return result.uri;
};
