import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StatusBar, StyleSheet, Platform } from "react-native";

import { Searchbar } from "react-native-paper";
import RstorantInfo from '../Restorant/RstorantInfo';
import styled from 'styled-components';
 const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #f8f9fa;
  margin-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`
 const SearchBarContainer = styled(View)`
  background-color: #f8f9fa;
  margin: 12px;
  elevation: 5;

  
  shadow-color: #000;
  shadow-opacity: 0.15;
  shadow-radius: 3.5px;
  shadow-offset: 0px 2px;
`;
function RstorantScreen() {
  return (
    <>
    <SafeArea >
        {/* Searchbar Section */}
        <SearchBarContainer >
          <Searchbar
            placeholder="Search..."
            style={styles.searchbar}
            inputStyle={{ fontSize: 16 }}
          />
        </SearchBarContainer>
       

        {/* Main Content */}
        <View  >
          <RstorantInfo/>
        </View>
      </SafeArea>

      
    </>
  )
}

export default RstorantScreen
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#f8f9fa",
  //   marginTop: StatusBar.currentHeight || 0,
  // },

  // searchbarContainer: {
  //   // paddingHorizontal: 16,
  //   // paddingVertical: 12,
  //   backgroundColor: "#f8f9fa",
  //   // iOS Shadow
  //   shadowColor: "#000",
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.15,
  //   shadowRadius: 3.5,
  //   // Android Shadow
  //   elevation: 5,
   
  //   margin:12
  // },

  // searchbar: {
  //   borderRadius: 12,
  //   backgroundColor: "white",
  // },

  // content: {
  //   flex: 1,
  //   backgroundColor: "green",
  //   borderTopLeftRadius: 20,
  //   borderTopRightRadius: 20,
  //   marginTop: 10,
  //   padding: 20,
  // },

 
});