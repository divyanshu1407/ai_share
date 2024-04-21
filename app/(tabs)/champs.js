import { FlatList, ImageBackground, ScrollView, View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Background from '../../assets/images/back2.jpg'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

import hulk from '../../assets/images/hulk.jpg'
import magneto from '../../assets/images/magneto.jpg'
import shang_chi from '../../assets/images/shang_chi.jpg'
import loki from '../../assets/images/loki.jpg'


const champs = () => {

    
  const data = [
    {
        id: 0,
        name: "Hulk",
        img: hulk
    },
    {
        id: 1,
        name: "Shang Chi",
        img: shang_chi
    },
    {
        id: 2,
        name: "Magneto",
        img: magneto
    },
    {
        id: 3,
        name: "Loki",
        img: loki
    }
  ]

  return (
    <SafeAreaView className="bg-primary">
    <View className="items-center justify-center">
        <FlatList 
        className="w-full"
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <View className="mt-8 w-full items-center justify-center">
                <Image className="w-full h-[200]" resizeMode='contain' source={item.img}></Image>
                <Text className="text-2xl text-white align-middle">{item.name}</Text>
            </View>
        )}
        ListHeaderComponent={()=> (
            <View className="my-8 p-4 space-y-6">
                <View className="justify-between items-start flex-row mb-6">
                    <View>
                        <Text className="text-white">Welcome</Text>
                    </View>
                </View>
            </View>
        )}
        />

    </View>
    <StatusBar barStyle="dark-content" ></StatusBar>

</SafeAreaView>

  )
}

export default champs