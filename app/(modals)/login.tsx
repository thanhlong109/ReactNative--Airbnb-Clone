import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useWarmUpBrowser } from '@/Hooks/useWarmUpBrowser'
import { defaultStyles } from '@/constants/Style'

const Page = () => {
  useWarmUpBrowser()
  return (
    <View style={style.container}>
      <TextInput autoCapitalize="none" placeholder="Email" style={[defaultStyles.inputField, { marginBottom: 30 }]} />
      <TouchableOpacity style={defaultStyles.btn}>
        <Text style={defaultStyles.btnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 26
  }
})

export default Page
