import React from "react";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RstorantScreen from "./src/component/features/Screen/RstorantScreen";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/themee/inde";
// import RstorantScreen from './src/component/features'
export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}> 
      <RstorantScreen/>
    </ThemeProvider>
    
   
     

      <ExpoStatusBar style="auto" />
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f8f9fa",
//     marginTop: StatusBar.currentHeight || 0,
//   },

//   searchbarContainer: {
//     // paddingHorizontal: 16,
//     // paddingVertical: 12,
//     backgroundColor: "#f8f9fa",
//     // iOS Shadow
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.15,
//     shadowRadius: 3.5,
//     // Android Shadow
//     elevation: 5,
   
//     margin:12
//   },

//   searchbar: {
//     borderRadius: 12,
//     backgroundColor: "white",
//   },

//   // content: {
//   //   flex: 1,
//   //   backgroundColor: "green",
//   //   borderTopLeftRadius: 20,
//   //   borderTopRightRadius: 20,
//   //   marginTop: 10,
//   //   padding: 20,
//   // },

 
// });
