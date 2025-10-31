import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";


const Name = styled(Text)`
  color: ${({ theme }) => theme.colors.ui.error};
`

const RestaurantCard=styled(Card)`
  background-color: ${({theme})=>theme.colors.bg.primary};
   margin: 10px;
  border-radius: 10px;

  /* Shadow for iOS */
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  shadow-offset: 0px 2px;

  /* Elevation for Android */
  elevation: 5;
 

`
const CardCover=styled(Card.Cover)`
margin:10px;
`
const Address=styled(Text)`
  font-size: 14px;
  color: hsla(162, 93%, 35%, 1.00);
  margin-bottom: 6px;

`
const Closed=styled(Text)`
  
  color: red;
 

`
const Open=styled(Text)`
  
  color: green;

`

const StatusRow=styled(View)`
flex-direction: row;
  align-items: center;
  gap: 10px;
`
const CardContainer =styled(View)`
padding:12px
`
export default function RestaurantInfo({ restaurant = {} }) {
  const {
    name = "Some Restaurant",
    photos = [
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop",
    ],
    address = "Shashamane, Ethiopia",
    rating = 5,
    isClosedTemporarily = true,
    isOpenNow = true,
  } = restaurant;

  return (
    <RestaurantCard elevation={5} >
      <CardCover key={name}  source={{ uri: photos[0] }} />
      <CardContainer >
        <Name >{name}</Name>
        <Address >{address}</Address>

        <StatusRow >
          {isClosedTemporarily && (
            <Closed >CLOSED TEMPORARILY</Closed>
          )}
          {isOpenNow && <Open >OPEN NOW</Open>}
        </StatusRow>
      </CardContainer>
    </RestaurantCard>
  );
}

// const styles = StyleSheet.create({
// //   card: {
// //     // backgroundColor: "#fff",
//     margin: 10,
//     borderRadius: 10,
//     elevation: 5,
//     shadowColor: "#000",
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     shadowOffset: { width: 0, height: 2 },
// //   },
//   cover: {
//     // borderTopLeftRadius: 10,
//     // borderTopRightRadius: 10,
//     margin:10
//   },
//   info: {
//     padding: 12,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 4,
//   },
//   address: {
//     fontSize: 14,
//     color: "#666",
//     marginBottom: 6,
//   },
//   statusRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 10,
//   },
//   closed: {
//     color: "red",
//     fontWeight: "bold",
//   },
//   open: {
//     color: "green",
//     fontWeight: "bold",
//   },
// });
