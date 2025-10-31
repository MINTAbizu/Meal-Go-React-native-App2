import React from 'react';
import { Platform, StatusBar, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Searchbar } from "react-native-paper";
import RstorantInfo from '../Restorant/RstorantInfo';
import styled from 'styled-components/native';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #f8f9fa;
  margin-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

const SearchBarContainer = styled.View`
  background-color: #f8f9fa;
  margin: 12px;
  elevation: 5;

  shadow-color: #000;
  shadow-opacity: 0.15;
  shadow-radius: 3.5px;
  shadow-offset: 0px 2px;
`;

const data = [
  {
    id: "1",
    name: "Burger Place",
    rating: 4,
    isOpenNow: true,
    isClosedTemporarily: false,
    photos: ["https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop"],
    address: "Addis Ababa",
  },
  {
    id: "2",
    name: "Pizza House",
    rating: 5,
    isOpenNow: false,
    isClosedTemporarily: true,
    photos: ["https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop"],
    address: "Shashamane",
  },
  {
    id: "3",
    name: "Pizza House",
    rating: 5,
    isOpenNow: false,
    isClosedTemporarily: true,
    photos: ["https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop"],
    address: "Shashamane",
  },
  {
    id: "4",
    name: "Pizza House",
    rating: 5,
    isOpenNow: false,
    isClosedTemporarily: true,
    photos: ["https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop"],
    address: "Shashamane",
  },
  {
    id: "5",
    name: "Pizza House",
    rating: 5,
    isOpenNow: false,
    isClosedTemporarily: true,
    photos: ["https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop"],
    address: "Shashamane",
  },
  {
    id: "6",
    name: "Pizza House",
    rating: 5,
    isOpenNow: false,
    isClosedTemporarily: true,
    photos: ["https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop"],
    address: "Shashamane",
     iscafee : true,
    ishotel :true,
  },
];

export default function RstorantScreen() {
  return (
    <SafeArea>
      {/* Searchbar */}
      <SearchBarContainer>
        <Searchbar
          placeholder="Search..."
          style={{ borderRadius: 12, backgroundColor: "white" }}
          inputStyle={{ fontSize: 16 }}
        />
      </SearchBarContainer>

      {/* Restaurant List */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RstorantInfo restaurant={item} />}
        contentContainerStyle={{ paddingBottom: 12 }}
      />
    </SafeArea>
  );
}
