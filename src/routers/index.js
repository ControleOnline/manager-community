import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginRoutes from '@controleonline/ui-login/src/react/router/routes';
import managerRoutes from '@controleonline/ui-manager/src/react/router/routes';
import HomePage from '@controleonline/ui-manager/src/react/pages/home/index';
import DefaultLayout from '@controleonline/ui-layout/src/react/layouts/DefaultLayout';
import commonRoutes from  '@controleonline/ui-common/src/react/router/routes'
import peopleRoutes from  '@controleonline/ui-customers/src/react/router/routes'

import { env } from '@env';

const Stack = createNativeStackNavigator();

const allRoutes = [
  ...loginRoutes,
  ...managerRoutes,
  ...commonRoutes
];



const WrappedComponent = (Component) => ({ navigation, route }) => (
  <DefaultLayout navigation={navigation} route={route}>
    <Component navigation={navigation} route={route} />
  </DefaultLayout>
);

if (env.app_type == 'manager') {
  allRoutes.push({
    name: 'HomePage',
    component: HomePage,
    options: { headerShown: false, title: 'Menu' },
  })
}


export default function Routes() {
  return (
    <Stack.Navigator detachInactiveScreens={true}>
      {allRoutes.map((route, index) => (
        <Stack.Screen
          key={index}
          name={route.name}
          component={WrappedComponent(route.component)}
          options={route.options}
          initialParams={route.initialParams}
        />
      ))}
    </Stack.Navigator>
  );
}
