import { useRef, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Platform } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1 },
  preview: { flex: 1 },
  controls: {
    paddingVertical: 16,
        alignItems: "center",
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});


export default function MainApp() {
  const [camera_permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [uploading, setUploading] = useState(false);

  if (!camera_permission) return <View />;

  if (!camera_permission.granted) {
    return (
          <SafeAreaView style={styles.center}>
            <Text>Need camera permission</Text>
            <Button title="Grant permission" onPress={requestPermission} />
          </SafeAreaView>
    );
  }

  const takePhoto = async () => {
    const result = await cameraRef.current.takePictureAsync({
      quality: 0.8,
      skipProcessing: true,
    });
    console.log("PHOTO:", result.uri);
    setPhoto(result);
  };

  const uploadPhoto = async () => {
  setUploading(true);

  const formData = new FormData();

  if (Platform.OS === "web") {
    const res = await fetch(photo.uri);
    const blob = await res.blob();
    formData.append("file", blob, "photo.jpg");
  } else {
    formData.append("file", {
        uri: photo.uri,
        name: "photo.jpg",
        type: "image/jpeg",
    });
  }

  const res = await fetch("http://192.168.1.228:3000/upload", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  setUploading(false);
};


  if (photo) {
    return (
      <SafeAreaView style={styles.container}>
        <Image source={{ uri: photo.uri }} style={styles.preview} />

        <View style={styles.controls}>
            <Button title="Upload" onPress={uploadPhoto} disabled={uploading} />
            <View style={{ height: 10 }} />
            <Button title="Retake" onPress={() => setPhoto(null)} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <CameraView style={styles.camera} ref={cameraRef} />

      <View style={styles.controls}>
        <Button title="Take Photo" onPress={takePhoto} />
      </View>
    </SafeAreaView>
  );
}