import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";

import {HomePage} from "./pages/home/home.page";
import {DrawerContentComponent} from "./components/drawer-content/drawer-content.component";
import {NavigationContainer} from "@react-navigation/native";

const Drawer = createDrawerNavigator();
export const MainRoutes = () => (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="HOME" drawerContent={props => <DrawerContentComponent {...props}/>}>
            <Drawer.Screen name="HOME" component={HomePage} />
        </Drawer.Navigator>
    </NavigationContainer>
);
