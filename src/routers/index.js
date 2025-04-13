import {createNativeStackNavigator} from '@react-navigation/native-stack';
import loginRoutes from '@controleonline/ui-login/src/react/router/routes';
import managerRoutes from '@controleonline/ui-manager/src/react/router/routes';

const Stack = createNativeStackNavigator();

const allRoutes = [
  ...loginRoutes,
  ...managerRoutes,
];

export default function Routes() {
  return (
    <Stack.Navigator detachInactiveScreens={true}>
      {allRoutes.map((route, index) => (
        <Stack.Screen
          key={index}
          name={route.name}
          component={route.component}
          options={route.options}
          initialParams={route.initialParams}
        />
      ))}
    </Stack.Navigator>
  );
}
