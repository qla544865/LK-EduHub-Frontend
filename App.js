import { useRef, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { SafeAreaProvider } from "react-native-safe-area-context";

import MainApp from "./components/main";

export default function App() {
  return (
    <SafeAreaProvider>
      <MainApp/>
    </SafeAreaProvider>
  );
}

