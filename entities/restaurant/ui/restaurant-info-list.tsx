import { FlatList } from 'react-native';

import { RestaurantInfoCard } from './restaurant-info-card';

const DUMMY = [];

export function RestaurantInfoList() {
  return (
    <FlatList
      className="p-1 mb-10"
      data={[...Array(8).fill({})]}
      renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
      keyExtractor={item => item.name}
      contentContainerStyle={{
        padding: 16,
      }}
    />
  );
}
