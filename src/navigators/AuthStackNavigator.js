import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {LoginScreen} from '../screens/LoginScreen';
import {RegistrationScreen} from '../screens/RegistrationScreen';
import {WelcomeScreen} from '../screens/WelcomeScreen';
import {UserslistScreen} from '../screens/UserslistScreen';
import {UserDetailScreen} from '../screens/UserDetailScreen';
import {SalaScreen} from '../screens/Sala';
import {BathScreen} from '../screens/Bath';
import {ComedorScreen} from '../screens/Comedor';
import {HabitacionScreen} from '../screens/Habitacion';
import {AgregarSalas} from '../screens/AgregarSalas';
import {MostrarSalas} from '../screens/MostrarSalas';
import {AgregarComedor} from '../screens/AgregarComedor';
import {MostrarComedor} from '../screens/MostrarComedor';
import {AgregarHabitacion} from '../screens/AgregarHabitacion';
import {MostrarHabitacion} from '../screens/MostrarHabitacion';
import {AgregarBath} from '../screens/AgregarBath';
import {MostrarBath} from '../screens/MostrarBath';
import {SalaDetailScreen} from '../screens/SalaDetail';
import {ComedorDetailScreen} from '../screens/ComedorDetails';
import {HabitacionDetailScreen} from '../screens/HabitacionDetails';
import {BathDetailScreen} from '../screens/BathDetails';

const AuthStack = createStackNavigator();

export function AuthStackNavigator(){
  return(
      <AuthStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        
        <AuthStack.Screen name={'Welcome'} component={WelcomeScreen} />
        <AuthStack.Screen name={'Userslist'} component={UserslistScreen} />
        <AuthStack.Screen name={'Userdetail'} component={UserDetailScreen} />
        <AuthStack.Screen name={'Sala'} component={SalaScreen} />
        <AuthStack.Screen name={'Comedor'} component={ComedorScreen} />
        <AuthStack.Screen name={'Habitacion'} component={HabitacionScreen} />
        <AuthStack.Screen name={'Baño'} component={BathScreen} />
        <AuthStack.Screen name={'AgregarSalas'} component={AgregarSalas} />
        <AuthStack.Screen name={'MostrarSalas'} component={MostrarSalas} />
        <AuthStack.Screen name={'AgregarComedor'} component={AgregarComedor} />
        <AuthStack.Screen name={'MostrarComedor'} component={MostrarComedor} />
        <AuthStack.Screen name={'AgregarHabitacion'} component={AgregarHabitacion} />
        <AuthStack.Screen name={'MostrarHabitacion'} component={MostrarHabitacion} />
        <AuthStack.Screen name={'AgregarBath'} component={AgregarBath} />
        <AuthStack.Screen name={'MostrarBath'} component={MostrarBath} />
        <AuthStack.Screen name={'SalaDetail'} component={SalaDetailScreen} />
        <AuthStack.Screen name={'ComedorDetails'} component={ComedorDetailScreen} />
        <AuthStack.Screen name={'HabitacionDetails'} component={HabitacionDetailScreen} />
        <AuthStack.Screen name={'BathDetails'} component={BathDetailScreen} />
        
      </AuthStack.Navigator>
  );
}
