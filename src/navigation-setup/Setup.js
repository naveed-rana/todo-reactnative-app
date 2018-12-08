import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../screens/Home";
import Try from '../screens/Try';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Try:Try
});

export default createAppContainer(AppNavigator);