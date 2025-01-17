import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  UserIcon,
  ChevronDownIcon,
  NotificationIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
  BellIcon
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import Arrive from "../components/Arrive";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";
import History from "../components/History";
import Order from "../components/Order";

export default function HomeScreen() {
  const navigation = useNavigation();
  // const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // useEffect(() => {
  //   sanityClient
  //     .fetch(
  //       `
  //   *[_type == 'featured'] {
  //       ...,
  //       restaurants[]->{
  //       ...,
  //       dishes[]->,
  //       }
  //     }`
  //     )
  //     .then((data) => {
  //       setFeaturedCategories(data);
  //     });
  // }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 pt-1 items-center mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          {/* <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text> */}
        </View>

        <BellIcon size={32} color="#000000" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2  bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Serch Package ID"
            keyboardType="default"
          />
        </View>

        <AdjustmentsVerticalIcon color="#000000" />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >

        {/* Categories */}
        <Arrive />

         {/* Categories */}
         <Order />

        {/* Categories */}
        {/* <Categories /> */}

        {/* Featured */}

        <History/>

        {/* {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
            featuredCategory="featured"
          />
        ))} */}
      </ScrollView>
    </SafeAreaView>
  );
}
