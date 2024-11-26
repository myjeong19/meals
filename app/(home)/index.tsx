import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from '~features/search/ui';

import { RestaurantInfoCard } from '~entities/restaurant/ui';

function Restaurants() {
  return (
    <SafeAreaView>
      <SearchBar />

      <RestaurantInfoCard restaurant={{}} />
    </SafeAreaView>
  );
}

export default Restaurants;
