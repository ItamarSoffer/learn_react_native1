import React from 'react';
import EventList from './EventList';
import EventForm from './EventForm';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="list" 
          component={EventList}
          options= {{title: "My COOL list"}} />
        <Stack.Screen 
          name="form" 
          component={EventForm}
          options = {{title: "Add new something."}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// export default function App() {
//   return (
//    <EventList />
//   );
// }
