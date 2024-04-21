import React from 'react'

import { Tabs } from 'expo-router'
import {icons} from '../../constants'
import { Image, View, Text } from 'react-native'

const TabIcon = ({icon, color, name, focused}) => {

    console.log(color)

    return (<View className="items-center justify-center gap-2">
        <Image source={icon} resizeMode='contain' tintColor={color} className="w-6 h-6"></Image>
        <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs text-black` } style={{ color: color}}>
            {name}
        </Text>
    </View>) 
}

const TabsLayout = () => {
  return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#FFA001',
                    tabBarInactiveTintColor: '#CDCDA0',
                    tabBarStyle: {
                        backgroundColor: '#161622',
                        borderTopWidth: 1,
                        borderTopColor: '#232533',
                        height: 84,
                    }
                }}>
                <Tabs.Screen name='champs' 
                options={{
                    title: "Champs",
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                        icon={icons.home}
                        name="Home"
                        color={color}
                        focused={focused}
                        />
                    )
                }}>

                </Tabs.Screen>

                <Tabs.Screen name='crystal' 
                options={{
                    title: "Crystals",
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                        icon={icons.bookmark}
                        name="Crystals"
                        color={color}
                        focused={focused}
                        />
                    )
                }}>

                </Tabs.Screen>

                <Tabs.Screen name='rankings' 
                options={{
                    title: "Rankings",
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                        icon={icons.play}
                        name="Home"
                        color={color}
                        focused={focused}
                        />
                    )
                }}>

                </Tabs.Screen>

            </Tabs>
        </>
        
  )
}

export default TabsLayout