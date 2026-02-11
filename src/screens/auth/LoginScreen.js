// src/screens/auth/LoginScreen.js
import { View, TextInput, Button, Text } from "react-native";
import { useState } from "react";
import { useAuthStore } from "../../store/authStore";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore(s => s.login);

  return (
    <View style={{ padding: 20 }}>
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} />

      <Text>Mật khẩu</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />

      <Button title="Đăng nhập" onPress={() => login(email, password)} />
    </View>
  );
}
