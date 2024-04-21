import {  Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { images } from '../constants'
import mcoc from '../assets/images/mcoc.png'
import deadpool from '../assets/images/deadpool.png'

const Index = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{ height: '100%'}}>
            <View className="w-full h-full justify-center items-center px-4 ">
                <Image 
                    source={mcoc}
                    className="w-[230] h-[100]"
                    resizeMode='contain'
                    />
                <Image 
                    source={deadpool}
                    className="w-full h-[300] max-w-[380] mt-16"
                    resizeMode='contain'
                    />
                <View className="mt-16 border-2 border-yellow-50 py-8 px-16">
                <Link href="/champs">
                    <Text className="text-3xl text-white mt-16">Enter</Text>
                </Link>
                </View>
            </View>
        </ScrollView>
        <StatusBar backgroundColor='#161622' style='light'></StatusBar>
    </SafeAreaView>
    
  )
}

export default Index

