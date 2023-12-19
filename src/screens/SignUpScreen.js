import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextComponent } from 'react-native'
import { Button, Icon, RadioButton, TextInput, useTheme } from 'react-native-paper'
import { LoadableButton } from '../components/Basics/LoadableButton';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [next, setNext] = useState(true);
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('Male');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const theme = useTheme();

    const navigation = useNavigation();

  return (
    <SafeAreaView style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px'
    }}>
        <View>
            <Text style={{fontWeight: 'bold', fontSize: '32'}}>
                Sign Up
            </Text>
        </View>
        {next ? 
            <View style={{width: '100%', alignItems: 'center', gap: '12px'}}>
                <TextInput
                    autoFocus={true}
                    mode="outlined"
                    label="Họ và tên"
                    placeholder="Điền tên"
                    value={name}
                    onChangeText={setName}
                    left={<TextInput.Icon icon={'account'} />}
                    style={{width: '80%'}}
                />
                <TextInput
                    mode="outlined"
                    label="Email"
                    placeholder="Điền email"
                    value={email}
                    onChangeText={setEmail}
                    left={<TextInput.Icon icon={'email'} />}
                    style={{width: '80%'}}
                />
                <TextInput
                    mode="outlined"
                    label="Mật khẩu"
                    placeholder="Điền mật khẩu"
                    value={password}
                    onChangeText={setPassword}
                    left={<TextInput.Icon icon={'lock'} />}
                    style={{width: '80%'}}
                />
            </View> 
        :   <View style={{width: '100%', alignItems: 'center', gap: '12px'}}>
                <View style={{width: '80%', flexDirection: 'row', alignItems: 'center', gap: '25px'}}>
                    <TextInput
                        autoFocus={true}
                        mode="outlined"
                        label="Tuổi"
                        keyboardType = 'numeric'
                        placeholder="Điền tuổi"
                        value={age}
                        onChangeText={setAge}
                        left={<TextInput.Icon icon={'calendar-account-outline'} />}
                        style={{width: '50%'}}
                    />
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text>Male</Text>
                        <RadioButton.Android
                            value="Male"
                            status={ gender === 'Male' ? 'checked' : 'unchecked' }
                            onPress={() => setGender("Male")}
                            color='blue'
                        />
                        <Text>Female</Text>
                        <RadioButton.Android
                            value="Female"
                            status={ gender === 'Female' ? 'checked' : 'unchecked' }
                            onPress={() => setGender("Female")}
                            color='blue'
                        />
                    </View>
                </View>
                <TextInput
                    mode="outlined"
                    label="Số điện thoại"
                    keyboardType = 'phone-pad'
                    placeholder="Điền số điện thoại"
                    value={phone}
                    onChangeText={setPhone}
                    left={<TextInput.Icon icon={'phone'} />}
                    style={{width: '80%'}}
                />

                <TextInput
                    mode="outlined"
                    label="Địa chỉ"
                    placeholder="Điền địa chỉ"
                    maxLength={1000}
                    value={address}
                    onChangeText={setAddress}
                    left={<TextInput.Icon icon={'home'} />}
                    style={{width: '80%'}}
                />
            </View>
        }
        <View style={{width: '80%', alignItems: 'flex-end'}}>
            <Button icon={next ? 'arrow-right' : 'arrow-left'} contentStyle={{flexDirection: next ? 'row-reverse' : 'row'}}
                onPress={() => setNext(prev => !prev)}
            >
                {next ? 'Tiếp' : 'Trở lại'}
            </Button>
        </View>
        {!next && <View style={{width: '100%', alignItems: 'center', gap: '12px'}}>
            <LoadableButton 
                buttonColor={theme.colors.primary}
                textColor={theme.colors.background}
                style={{ width: '80%',
                height: 50,
                borderRadius: 25,
                marginTop: 10}}
                mode="elevated"
            >
                Sign up
            </LoadableButton>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: 'gray'}}>Have an account ? </Text>
                <Text style={{fontWeight: 'bold', fontSize:'16', color: theme.colors.primary}}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    Sign in
                </Text>
            </View>
        </View>}
    </SafeAreaView>

  )
}

export default SignUpScreen