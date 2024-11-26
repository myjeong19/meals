import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from '~features/search/ui';

import { RestaurantInfoList } from '~entities/restaurant/ui';

function Restaurants() {
  return (
    <SafeAreaView className="flex-1">
      <SearchBar />

      <RestaurantInfoList />
    </SafeAreaView>
  );
}

export default Restaurants;
