// src/navigation/AppNavigator.js
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./AuthNavigator";
import MenuScreen from "../screens/menu/MenuScreen";
import AttendanceScreen from "../screens/attendance/AttendanceScreen";
import RankingScreen from "../screens/ranking/RankingScreen";
import ViolationScreen from "../screens/violation/ViolationScreen";
import BehaviorScreen from "../screens/behavior/BehaviorScreen";
import { useAuthStore } from "../store/authStore";
import NotificationScreen from "../screens/notification/NotificationScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { user } = useAuthStore();

  if (!user) return <AuthNavigator />;

  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={MenuScreen} options={{title:"Mục lục"}} />
      <Stack.Screen name="Attendance" component={AttendanceScreen} options={{title:"Điểm danh"}} />
      <Stack.Screen name="Ranking" component={RankingScreen} options={{title:"Thi đua"}} />
      <Stack.Screen name="Violation" component={ViolationScreen} options={{title:"Vi phạm"}} />
      <Stack.Screen name="Behavior" component={BehaviorScreen} options={{title:"Hạnh kiểm"}} />
      <Stack.Screen name="Notification" component={NotificationScreen} options={{title:"Thông báo"}} />
    </Stack.Navigator>
  );
}
