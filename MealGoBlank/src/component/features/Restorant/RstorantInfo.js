import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons"; // icons

// Styled Components
const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
  margin: 10px;
  border-radius: 10px;

  /* Shadow for iOS */
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  shadow-offset: 0px 2px;

  /* Elevation for Android */
  elevation: 5;
`;

const CardCover = styled(Card.Cover)`
  margin: 10px;
  border-radius: 10px;
`;

const CardContainer = styled(View)`
  padding: 12px;
`;

const Name = styled(Text)`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Address = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 6px;
`;

const TypeRow = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
`;

const TypeText = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const StatusRow = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 6px;
`;

const Closed = styled(Text)`
  color: red;
  font-weight: bold;
`;

const Open = styled(Text)`
  color: green;
  font-weight: bold;
`;

const Rating = styled(View)`
  flex-direction: row;
  margin-vertical: 4px;
`;

// Main Component
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
    isresurant = true,
    iscafee = false,
    ishotel = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />

      <CardContainer>
       <View style={{display:'flex' ,flexDirection:'row', gap:5 }}>
         <Name>{name}</Name>

        {/* Type Icons */}
        <TypeRow>
          {isresurant && (
            <>
              <FontAwesome5 name="utensils" size={16} color="#2182BD" />
              <TypeText>Restaurant</TypeText>
            </>
          )}
          {iscafee && (
            <>
              <FontAwesome5 name="coffee" size={16} color="#F28B00" />
              <TypeText>Cafe</TypeText>
            </>
          )}
          {ishotel && (
            <>
              <MaterialIcons name="hotel" size={16} color="#4CAF50" />
              <TypeText>Hotel</TypeText>
            </>
          )}
        </TypeRow>
       </View>

        {/* Rating Stars */}
        <Rating  style={{justifyContent:"center"}}>
          {ratingArray.map((_, index) => (
            <FontAwesome
              key={`star-${index}`}
              name="star"
              size={18}
              color="#FFD700"
              style={{ marginRight: 4 }}
            />
          ))}
        </Rating>

        {/* Address */}
        <Address style={{}}>{address}</Address>

        {/* Open / Closed Status */}
        <StatusRow>
          {isClosedTemporarily && (
            <Closed>
              CLOSED TEMPORARILY{" "}
              <MaterialIcons name="error-outline" size={16} color="red" />
            </Closed>
          )}
          {isOpenNow && (
            <Open>
              OPEN NOW <MaterialIcons name="check-circle" size={16} color="green" />
            </Open>
          )}
        </StatusRow>
      </CardContainer>
    </RestaurantCard>
  );
}
