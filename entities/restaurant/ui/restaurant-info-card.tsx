import { Image, Text, View } from 'react-native';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~shared/rnr/ui';

import { Star } from '~shared/icons';

type Restaurant = {
  name: string;
  icon: string;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: Date;
};

type RestaurantInfoProps = {
  restaurant: Restaurant;
};

export function RestaurantInfoCard({
  restaurant: {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://plus.unsplash.com/premium_photo-1670984939096-f3cfd48c7408?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily,
  },
}: RestaurantInfoProps) {
  return (
    <Card>
      <CardHeader className="relative">
        <Image className="w-full h-48 max-h-fit " source={{ uri: photos[0] }} />
        {isOpenNow && (
          <View className="absolute top-10 right-10 z-10 bg-teal-400 p-1 rounded-md">
            <Text className="text-white">Open</Text>
          </View>
        )}
      </CardHeader>
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          <Text className="font-bold">{address}</Text>
        </CardDescription>
      </CardContent>
      <CardFooter>
        <View className="flex flex-row">
          {[...Array(rating)].map((_star, index) => (
            <Star className="fill-red-400 m-1" key={name + index} />
          ))}
        </View>
      </CardFooter>
    </Card>
  );
}
