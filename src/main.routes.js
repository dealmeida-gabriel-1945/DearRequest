import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";

import {HomePage} from "./pages/home/home.page";
import {DrawerContentComponent} from "./components/drawer-content/drawer-content.component";
import {NavigationContainer} from "@react-navigation/native";
import {RequestFormPage} from "./pages/request/request-form.page";
import {SettingsPage} from "./pages/settings/settings.page";

const Drawer = createDrawerNavigator();
export const MainRoutes = () => (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="HOME" drawerContent={props => <DrawerContentComponent {...props}/>}>
            <Drawer.Screen name="HOME" component={HomePage} />
            <Drawer.Screen name="REQUEST_GET" component={RequestFormPage} />
            <Drawer.Screen name="REQUEST_POST" component={RequestFormPage} />
            <Drawer.Screen name="REQUEST_PUT" component={RequestFormPage} />
            <Drawer.Screen name="REQUEST_DELETE" component={RequestFormPage} />
            <Drawer.Screen name="SETTINGS" component={SettingsPage} />
        </Drawer.Navigator>
    </NavigationContainer>
);
