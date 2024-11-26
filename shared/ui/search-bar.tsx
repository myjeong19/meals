import { View } from 'react-native';
import { Search } from '~shared/icons';

export function SearchBar() {
  return (
    <View className="relative">
      <Search className="text-white absolute" />
    </View>
  );
}
