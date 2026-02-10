import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PPCHomePage from '@controleonline/ui-ppc/src/react/pages/displays/displayPage';
import ShopHomePage from '@controleonline/ui-shop/src/react/pages/home/index';
import ManagerHomePage from '@controleonline/ui-manager/src/react/pages/home/index';
import CRMHomePage from '@controleonline/ui-crm/src/react/pages/home/index';

import loginRoutes from '@controleonline/ui-login/src/react/router/routes';
import managerRoutes from '@controleonline/ui-manager/src/react/router/routes';
import DefaultLayout from '@controleonline/ui-layout/src/react/layouts/DefaultLayout';
import commonRoutes from '@controleonline/ui-common/src/react/router/routes'
import customersRoutes from '@controleonline/ui-customers/src/react/router/routes'
import ordersRoutes from '@controleonline/ui-orders/src/react/router/routes'
import peopleRoutes from '@controleonline/ui-people/src/react/router/routes'




import { env } from '@env';
const Stack = createNativeStackNavigator();

const allRoutes = [
  ...loginRoutes,
  ...managerRoutes,
  ...commonRoutes,
  ...customersRoutes,
  ...peopleRoutes,
  ...ordersRoutes
];



const WrappedComponent = (Component) => ({ navigation, route }) => (
  <DefaultLayout navigation={navigation} route={route}>
    <Component navigation={navigation} route={route} />
  </DefaultLayout>
);

if (env.APP_TYPE == 'MANAGER') {
  allRoutes.push({
    name: 'HomePage',
    component: ManagerHomePage,
    options: { headerShown: false, title: 'Menu' },
  })
}

if (env.APP_TYPE == 'SHOP') {
  allRoutes.push({
    name: 'HomePage',
    component: ShopHomePage,
    options: {
      headerShown: false,
      title: 'Menu',
    },
  },)
}


if (env.APP_TYPE == 'PPC') {
  allRoutes.push({
    name: 'HomePage',
    component: PPCHomePage,
    options: {
      headerShown: false,
      title: 'Menu',
    },
  })
}


if (env.APP_TYPE == 'CRM') {
  allRoutes.push({
    name: 'HomePage',
    component: CRMHomePage,
    options: {
      headerShown: false,
      title: 'Menu',
    },
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
