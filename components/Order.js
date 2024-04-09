import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import PackageCard from "./PackageCard";
import sanityClient, { urlFor } from "../sanity";
import OrderCard from "./OrderCard";

const Order = () => {
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
    <View className="mt-4 flex-row items-center justify-evenly px-1">      
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {/* {categories.map((category) => ( */}
          <OrderCard title="Order"/>
          <OrderCard title="Package"/>
          <OrderCard title="Call Center"/>
          <OrderCard title="Calculator"/>
        {/* // ))} */}
      </ScrollView>
    </View>
  );
};

export default Order;
