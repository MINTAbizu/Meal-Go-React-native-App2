import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity, Alert } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

// Styled Components
const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const Section = styled.View`
  margin-bottom: 30px;
`;

const SectionTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 10px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const RowText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const LogoutButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: red;
  padding: 12px;
  border-radius: 8px;
`;

const LogoutText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
`;

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const toggleNotifications = () => setNotificationsEnabled((prev) => !prev);
  const toggleDarkMode = () => setDarkModeEnabled((prev) => !prev);

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", style: "destructive", onPress: () => console.log("Logged out!") },
    ]);
  };

  return (
    <Container>
      {/* Profile Section */}
      <Section>
        <SectionTitle>Profile</SectionTitle>
        <Row>
          <RowText>John Doe</RowText>
          <MaterialIcons name="edit" size={22} color="#2182BD" />
        </Row>
        <Row>
          <RowText>johndoe@example.com</RowText>
        </Row>
      </Section>

      {/* Preferences Section */}
      <Section>
        <SectionTitle>Preferences</SectionTitle>
        <Row>
          <RowText>Enable Notifications</RowText>
          <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
        </Row>
        <Row>
          <RowText>Dark Mode</RowText>
          <Switch value={darkModeEnabled} onValueChange={toggleDarkMode} />
        </Row>
      </Section>

      {/* Logout */}
      <LogoutButton onPress={handleLogout}>
        <MaterialIcons name="logout" size={22} color="white" />
        <LogoutText>Logout</LogoutText>
      </LogoutButton>
    </Container>
  );
}
