import { Text, View } from 'react-native';

import '../global.css';
import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';

const RootLayout = () => {
  nowPlayingAction();
  
  return (
    <View>
      <Text className='text-3xl mt-10'>RootLayout</Text>
    </View>
  )
}

export default RootLayout