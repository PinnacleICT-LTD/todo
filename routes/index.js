import { createStackNavigator } from 'react-navigation-stack';
import Getting_Started from '../components/login';
import Register from '../components/register';
import AddTask from '../components/addTask';
import Welcome from '../components/home';
import { createAppContainer } from 'react-navigation';

const screens = {
    Home: {
        screen: Welcome
    },
    Register: {
        screen: Register
    },
    getting_started: {
        screen: Getting_Started
    },
    AddTask: {
        screen: AddTask
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);