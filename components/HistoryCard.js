import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const HistoryCard = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id :"#ADYX9-TM404",
          imgUrl:"https://links.papareact.com/wru",
          title:"My Package",
          rating:"4.0",
          genre:"delivered",
          address:"home",
          short_description:"#ADYX9-TM404",
          dishes:[],
          long:"1.0001",
          lat:"1.0001",
        });
      }}
      className="bg-white m-2 shadow-sm rounded-lg"
    >
      <View className="p-2 flex-row justify-evenly">   
        <View className="bg-gray-300 rounded-lg p-4 justify-evenly items-center"> 
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-16 w-16 rounded-sm px-3 pb-4"
          />
        </View>
        <View className="flex-col h-max justify-items-center items-center justify-evenly"> 
          <Text className="font-bold text-lg">{"#ADYX9-TM404"}</Text>
          <View className="flex-row items-center space-x-1">
            <MapPinIcon color="gray" opacity={0.4} size={22} />
            <Text className="text-md text-black">{"Nairobi, Kenya"}</Text>
          </View>
        </View>

        {/* LocationMarker */}
        <View className="flex-row items-center space-x-1">
          <Text className="font-semibold text-xs px-2 py-1 bg-sky-600 rounded-xl text-white uppercase">{"shipping"}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HistoryCard;
