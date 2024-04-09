import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import PackageCard from "./PackageCard";
import sanityClient, { urlFor } from "../sanity";

const Arrive = () => {
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   sanityClient
  //     .fetch(
  //       `
  //   *[_type == "category"]
  //   `
  //     )
  //     .then((data) => {
  //       setCategories(data);
  //     });
  // }, []);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg ">{"Arriving Today"}</Text>
        {/* <ArrowRightIcon color="#00CCBB" /> */}
      </View>

      <Text className="text-xs text-gray-500 px-4">{"List of todays arrivals"}</Text>
      
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {/* {categories.map((category) => ( */}
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
        {/* // ))} */}
      </ScrollView>
    </View>
  );
};

export default Arrive;
