import React from "react";
import { View, FlatList, Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const data = [
  { id: "1", image: "https://source.unsplash.com/random/800x600?sig=1" },
  { id: "2", image: "https://source.unsplash.com/random/800x600?sig=2" },
  { id: "3", image: "https://source.unsplash.com/random/800x600?sig=3" },
];

export default function CarouselPage() {
  return (
    <View style={{ flex: 1, backgroundColor: "#f8f9fa", justifyContent: "center" }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{ width, justifyContent: "center", alignItems: "center" }}>
            <Image
              source={{ uri: item.image }}
              style={{ width: width * 0.8, height: 250, borderRadius: 12 }}
            />
          </View>
        )}
      />
    </View>
  );
}
