import React, { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import Toast from 'react-native-toast-message'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, SignUpScreen } from './screens'
import { useAuth } from './contexts'
import { UserScreen } from './screens/UserScreen'

const Stack = createStackNavigator()

const InnerApp = () => {
  const { isAuthorized } = useAuth()

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/*<Stack.Navigator*/}
        {/*  initialRouteName={'SignIn'}*/}
        {/*  screenOptions={{*/}
        {/*    header: ({ navigation, route, options, back }) => {*/}
        {/*      return (*/}
        {/*        <TitleBar*/}
        {/*          navigation={navigation}*/}
        {/*          route={route}*/}
        {/*          options={options}*/}
        {/*          back={back}*/}
        {/*        />*/}
        {/*      )*/}
        {/*    },*/}
        {/*    headerMode: 'screen'*/}
        {/*  }}*/}
        {/*>*/}
        {/*  //*/}
        {/*  <Stack.Screen name={'Bo'} component={SignInScreen} />*/}
        {/*</Stack.Navigator>*/}
        <Stack.Navigator>
          {isAuthorized ? (
            <>
              <Stack.Screen name={'User'} component={UserScreen} />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <Toast autoHide={true} />
    </SafeAreaProvider>
  )
}

export default InnerApp
