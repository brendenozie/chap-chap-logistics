import { View, Text, TouchableOpacity, Image } from "react-native";
import { MapPinIcon } from "react-native-heroicons/outline";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const PackageCard = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => {
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
     className="mr-2 bg-white w-72 h-40 rounded-lg justify-around">
      {/* <Image source={{ uri: "https://links.papareact.com/wru" }} className="h-36 w-64 rounded-sm" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {"#ADYXB-TM909"}
      </Text> */}
      <View className="px-3 pb-4 justify-around">
        <View className="flex-row items-center space-x-1 justify-between">
          <Text className="font-bold text-lg pt-2">{"#ADYXB-TM909"}</Text>
          <Text className="font-semibold text-xs px-2 py-1 bg-sky-600 rounded-xl text-white uppercase">{"Transit"}</Text>
        </View>
        <Text className="text-xs text-gray-500">
            <Text className="text-gray-500">{"Location"}</Text>
          </Text>
        <View className="items-center space-x-1 flex-row">    
          <MapPinIcon color="gray" opacity={0.4} size={18} />      
          <Text className="font-bold text-md text-gray-500">
            <Text className="text-green-500">{"Nairobi,Kenya"}</Text>
          </Text>
        </View>
        <Text className="text-xs text-gray-500">
            <Text className="text-gray-500">{"Estimated Arrival"}</Text>
          </Text>

        {/* LocationMarker */}
        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" opacity={0.4} size={18} />
          <Text className="font-bold text-md text-gray-500">April 13, {"2024"}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PackageCard;
