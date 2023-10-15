import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';


export default function LoginScreen() {
    const navigation = useNavigation();
  return (
    <View className="w-full h-full bg-white">
      <StatusBar style="light" />
      <Image
        className="h-full w-full absolute"
        source={require("../assets/images/background.png")}
      />
      {/* lights  */}
      <View className="flex-row justify-around w-full absolute ">
        <Animated.Image
        entering={FadeInUp.delay(200).duration(1000).springify()} 
          className="h-[225] w-[90]"
          source={require("../assets/images/light.png")}
        />
        <Animated.Image
        entering={FadeInUp.delay(400).duration(1000).springify()} 

          className="h-[160] w-[65]"
          source={require("../assets/images/light.png")}
        />
      </View>
      <View className="h-full w-full flex justify-around pt-40 pb-10">
        <View className="flex items-center">
          <Animated.Text
           entering={FadeInUp.duration(1000).springify()} 
          className="text-white font-bold tracking-wider text-4xl">
            Login
          </Animated.Text>
        </View>
        <View className="flex items-center mx-4 space-y-4">
          <Animated.View 
          entering={FadeInDown.duration(1000).springify()}
          className=" bg-black/5 p-5 w-full rounded-2xl">
            <TextInput placeholder="Email" placeholderTextColor={"gray"} />
          </Animated.View>
          <Animated.View 
          entering={FadeInDown.delay(200).duration(1000).springify()}
          
          className=" bg-black/5 p-5 w-full rounded-2xl">
            <TextInput
              placeholder="Password"
              placeholderTextColor={"gray"}
              secureTextEntry
            />
          </Animated.View>
          <Animated.View 
          entering={FadeInDown.delay(400).duration(1000).springify()}
          
          className="w-full">
            <TouchableOpacity className="w-full bg-sky-400 rounded-2xl p-2 mb-3  ">
              <Text className="font-bold text-center text-xl text-white ">
                Login
              </Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View 
          entering={FadeInDown.delay(600).duration(1000).springify()}
          
          className="flex-row">
            <Text>Don't have an account?</Text>
            <TouchableOpacity
            onPress={() =>  navigation.navigate("Signup")}
            >
              <Text className="text-sky-600"> SignUp</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
