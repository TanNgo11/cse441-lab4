import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {BottomNavigation} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AddProducts from './Product_Add';
import Details from './Product_Detail';
import Search from './Product_Search';
import Products from './Products';

const App = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'Products', title: 'Products', focusedIcon: 'database'},
    {key: 'AddProducts', title: 'Add', focusedIcon: 'folder'},
    {key: 'Search', title: 'Search', focusedIcon: 'find'},
    {key: 'Details', title: 'Detail', focusedIcon: 'calendar'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Products: Products,
    AddProducts: AddProducts,
    Search: Search,
    Details: Details,
  });

  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
};

export default App;
