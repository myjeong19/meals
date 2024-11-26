import { View } from 'react-native';
import { Controller } from 'react-hook-form';

import { Search } from '~shared/icons';
import { Button, Input } from '~shared/rnr/ui';
import { useSearch } from '../model';

export function SearchBar() {
  const { control, onSubmit, errors } = useSearch();

  return (
    <View className="flex flex-row p-1">
      <Controller
        name="searchValue"
        control={control}
        render={({ field }) => (
          <Input className="w-10/12" placeholder="검색어를 입력해주세요." {...field} />
        )}
      />

      <Button className="w-2/12" onPress={onSubmit}>
        <Search className="text-white" />
      </Button>
    </View>
  );
}
