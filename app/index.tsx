import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SearchBar } from '~shared/ui';

export default function HomeScreen() {
  return (
    <>
      <SafeAreaView className="flex-1">
        <View className="p-5 bg-teal-700">
          <SearchBar />
        </View>
        <View className="flex-1 p-5 bg-blue-600">
          <Text>List</Text>

          <Link href="/(home)">Home</Link>
        </View>
      </SafeAreaView>

      <StatusBar style="auto" />
    </>
  );
}
