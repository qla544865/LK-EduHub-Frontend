// src/screens/auth/LoginScreen.js
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity  } from "react-native";
import { useState } from "react";
import { useAuthStore } from "../../store/authStore";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2196f3",
    paddingVertical: 7,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    height: 35
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore(s => s.login);

  return (
    <View style={{ padding: 20 }}>
        <View style={{height:10}}></View>
        <TextInput 
            value={email} 
            onChangeText={setEmail} 
            placeholder="Tên đăng nhập" 
            style={{backgroundColor:"#ffffff", borderRadius:10, height:35, paddingLeft:10, paddingTop:5}} />

        <View style={{height:5}}></View>

        <TextInput 
                value={password} 
                onChangeText={setPassword} 
                secureTextEntry 
                placeholder="Mật khẩu" style={{backgroundColor:"#ffffff", borderRadius:10, height:35, paddingLeft:10, paddingTop:5}} />
        <View style={{height:5}}></View>


        <TouchableOpacity style={styles.button} onPress={() => login(email, password)} >
            <Text style={styles.buttonText}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
    </View>
  );
}
