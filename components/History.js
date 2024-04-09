import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import HistoryCard from "./HistoryCard";

const History = () => {
//   const [restaurants, setRestaurants] = useState([]);
//   useEffect(() => {
//     sanityClient
//       .fetch(
//         `
//     *[_type == 'featured' && _id == $id] {
//         ...,
//         restaurants[]->{
//         ...,
//         dishes[]->,
// type-> {
//   name
// }
//         }
//       }[0]
// `,
//         { id }
//       )
//       .then((data) => {
//         setRestaurants(data?.restaurants);
//       });
//   }, [id]);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg ">{"History"}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{"List of previous packages"}</Text>

      {/* <ScrollView
        vertical
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      > */}
        {/* {restaurants?.map((restaurant) => ( */}
        <View className="pt-4">
          <HistoryCard/>
          <HistoryCard/>
          <HistoryCard/>
          <HistoryCard/>
          <HistoryCard/>
          <HistoryCard/>
          <HistoryCard/>
          <HistoryCard/>
          <HistoryCard/>
          <HistoryCard/>
          <HistoryCard/>
          <HistoryCard/>
          <HistoryCard/>
          <HistoryCard/>
          <HistoryCard/>
          <HistoryCard/>
          <HistoryCard/>
          <HistoryCard/>
          <HistoryCard/>
          <HistoryCard/>
          <HistoryCard/>
          <HistoryCard/>
          <HistoryCard/>
          <HistoryCard/>
          <HistoryCard/>
        </View>
        {/* ))} */}
      {/* </ScrollView> */}
    </View>
  );
};

export default History;
