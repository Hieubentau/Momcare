import React, { useContext, useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import Toast from 'react-native-toast-message'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, SignUpScreen } from './screens'
import { useAuth } from './contexts'
import { PatientNavigator } from './navigators'
import { ROLE } from './config'
import SearchDoctor from './screens/SearchDoctor'
import HospitalScreen from './screens/HospitalScreen'
import DoctorInfoManagementScreen from './screens/DoctorInfoManagementScreen'
import HospitalManagementDoctor from './components/HospitalScreen/HospitalManagementDoctor/HospitalManagementDoctor'
import AppointmentInfoManagementScreen from './screens/AppointmentInfoManagementScreen'

const Stack = createStackNavigator()

const InnerApp = () => {
  const { isAuthorized, user } = useAuth()
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
        <Stack.Navigator initialRouteName={'Login'}>
          {isAuthorized ? (
            user.role === ROLE.PATIENT ? (
              <Stack.Screen
                name={'PatientNavigation'}
                component={PatientNavigator}
                options={{ headerShown: false }}
              />
            ) : (
              <></>
            )
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
          <Stack.Screen
            name="Hospital"
            component={HospitalScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HospitalManagementDoctor"
            component={HospitalManagementDoctor}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DoctorInfoManagement"
            component={DoctorInfoManagementScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Chi tiết lịch đặt khám"
            component={AppointmentInfoManagementScreen}
          />
          <Stack.Screen name="SearchDoctor" component={SearchDoctor} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast autoHide={true} />
    </SafeAreaProvider>
  )
}

export default InnerApp
