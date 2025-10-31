import { View,Text } from "react-native";

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Image
        source={{ uri: "https://randomuser.me/api/portraits/men/75.jpg" }}
        style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 20 }}
      /> */}
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>John Doe</Text>
      <Text style={{ fontSize: 16, color: "gray" }}>mintsenot bizuayehw@example.com</Text>
    </View>
  );
}

export default ProfileScreen