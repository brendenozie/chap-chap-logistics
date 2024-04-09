import { View, Text, TouchableOpacity, Image } from "react-native";
import { MapPinIcon } from "react-native-heroicons/outline";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const OrderCard = ({title}) => {
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
     className="w-24 h-20 justify-around items-center">
      <View className="p-1 flex-col justify-evenly items-center">   
        <View className="bg-white rounded-full p-4 justify-evenly items-center"> 
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-8 w-8 "
          />
          </View>
          <View className="flex-col h-max justify-items-center items-center justify-evenly mt-2"> 
            <Text className="font-bold text-xs uppercase">{title}</Text>
          </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderCard;
