import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./Pages/HomePage";
import MoviesPage from "./Pages/MoviesPage";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Topbar from "./Components/Topbar";


const Tab = createBottomTabNavigator();   

export default function App(){
  return(
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Topbar />
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Movies" component={MoviesPage} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>

  )
}