import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useWarmUpBrowser } from '@/Hooks/useWarmUpBrowser'
import { defaultStyles } from '@/constants/Style'
import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { useOAuth } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'

enum Strategy {
  Facebook = 'oauth_facebook',
  Google = 'oauth_google',
  Apple = 'oauth_apple'
}

const Page = () => {
  //useWarmUpBrowser()
  const router = useRouter()

  const { startOAuthFlow: appleAuth } = useOAuth({ strategy: 'oauth_apple' })
  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: 'oauth_google' })
  const { startOAuthFlow: facebookAuth } = useOAuth({ strategy: 'oauth_facebook' })

  const onSelectAuth = async (strategy: Strategy) => {
    const selectedAuth = {
      [Strategy.Google]: googleAuth,
      [Strategy.Apple]: appleAuth,
      [Strategy.Facebook]: facebookAuth
    }[strategy]

    try {
      const { createdSessionId, setActive } = await selectedAuth()
      console.log('section id:', createdSessionId)
      if (createdSessionId) {
        setActive!({ session: createdSessionId })
        router.back()
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <View style={[defaultStyles.container, { padding: 20 }]}>
      <TextInput autoCapitalize="none" placeholder="Email" style={[defaultStyles.inputField, { marginBottom: 30 }]} />
      <TouchableOpacity style={defaultStyles.btn}>
        <Text style={defaultStyles.btnText}>Continue</Text>
      </TouchableOpacity>
      <View style={defaultStyles.seperatorView}>
        <View style={defaultStyles.seperatorLine} />
        <Text style={defaultStyles.seperatorText}>or</Text>
        <View style={defaultStyles.seperatorLine} />
      </View>
      <View style={{ gap: 20 }}>
        <TouchableOpacity style={defaultStyles.btnOutline}>
          <Feather style={{ position: 'absolute', left: 30 }} name="phone-call" size={20} />
          <Text style={defaultStyles.btnOutlineText}>Continue With Phone</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onSelectAuth(Strategy.Apple)} style={defaultStyles.btnOutline}>
          <AntDesign style={{ position: 'absolute', left: 30 }} name="apple-o" size={22} />
          <Text style={defaultStyles.btnOutlineText}>Continue With Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onSelectAuth(Strategy.Google)} style={defaultStyles.btnOutline}>
          <AntDesign style={{ position: 'absolute', left: 30 }} name="google" size={22} />
          <Text style={defaultStyles.btnOutlineText}>Continue With Google</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onSelectAuth(Strategy.Facebook)} style={defaultStyles.btnOutline}>
          <AntDesign style={{ position: 'absolute', left: 30 }} name="facebook-square" size={22} />
          <Text style={defaultStyles.btnOutlineText}>Continue With Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const style = StyleSheet.create({})

export default Page
