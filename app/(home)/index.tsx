import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from '~features/search/ui';

import { RestaurantInfoList } from '~entities/restaurant/ui';

function Restaurants() {
  return (
    <SafeAreaView>
      <SearchBar />

      <RestaurantInfoList />
    </SafeAreaView>
  );
}

export default Restaurants;
