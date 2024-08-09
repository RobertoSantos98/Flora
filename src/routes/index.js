import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';
import Menu from '../pages/Menu';
import Formulario from '../pages/Formulario';

const Stack = createNativeStackNavigator();


export default function Routes(){
    return(
        <Stack.Navigator>

            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
                />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{headerShown: false}}
                />
                
            <Stack.Screen
                    name="Menu"
                    component={Menu}
                    options={{headerShown: false}}
                    />

            <Stack.Screen
                    name="Formulario"
                    component={Formulario}
                    options={{headerShown: false}}
                    />

        </Stack.Navigator>

    )
}