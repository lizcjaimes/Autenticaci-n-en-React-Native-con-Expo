import { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { router } from 'expo-router';
import { useSession } from '../ctx';

export default function SignIn() {
  const { signIn } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Credenciales fijas (sin usar Api externa)
  const hardcodedCredentials = {
    email: 'jaimeslizbeth1228@gmail.com',
    password: 'Lizbeth123',
  };

  //Como tal este inicio de sesion valida que las credenciales fijas sean las correctas, en dado caso de que no sean correctas se mostrara la alerta de error
  const handleLogin = () => {
    if (email === hardcodedCredentials.email && password === hardcodedCredentials.password) {
      signIn();
      router.replace('/'); 
    } else {
      Alert.alert('Error', 'Correo o contraseña incorrectos');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Iniciar Sesión</Text>
      <TextInput
        placeholder='Correo electrónico'
        value={email}
        onChangeText={setEmail}
        style={{ width: '100%', height: 40, borderBottomWidth: 1, marginBottom: 20 }}
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <TextInput
        placeholder='Contraseña'
        value={password}
        onChangeText={setPassword}
        style={{ width: '100%', height: 40, borderBottomWidth: 1, marginBottom: 20 }}
        secureTextEntry
      />
      <Button title='Ingresar' onPress={handleLogin} />
    </View>
  );
}
