/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Section } from './components/section';
import { styles } from './components/section/style';
import InstaStory from 'react-native-insta-story';
import { CatGrid } from './components/catgrid/view';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const data = [
    {
      user_id: 1,
      user_image:
        'https://picsum.photos/200/200',
      user_name: 'Test1',
      stories: [
        {
          story_id: 1,
          story_image:
            'https://picsum.photos/600/1200',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 1 swiped'),
        },
        {
          story_id: 2,
          story_image:
            'https://picsum.photos/600/1200',
        },
      ],
    },
    {
      user_id: 2,
      user_image:
        'https://picsum.photos/200/200',
      user_name: 'Test2',
      stories: [
        {
          story_id: 1,
          story_image:
            'https://picsum.photos/600/1200',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 1 swiped'),
        },
        {
          story_id: 2,
          story_image:
            'https://picsum.photos/600/1200',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 2 swiped'),
        },
      ],
    },
    {
      user_id: 3,
      user_image:
        'https://picsum.photos/200/200',
      user_name: 'Test3',
      stories: [
        {
          story_id: 1,
          story_image:
            'https://picsum.photos/600/1200',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 1 swiped'),
        },
        {
          story_id: 2,
          story_image:
            'https://picsum.photos/600/1200',
        },
      ],
    },
    {
      user_id: 4,
      user_image:
        'https://picsum.photos/200/200',
      user_name: 'Test1',
      stories: [
        {
          story_id: 1,
          story_image:
            'https://picsum.photos/600/1200',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 1 swiped'),
        },
        {
          story_id: 2,
          story_image:
            'https://picsum.photos/600/1200',
        },
      ],
    },
    {
      user_id: 5,
      user_image:
        'https://picsum.photos/200/200',
      user_name: 'Test1',
      stories: [
        {
          story_id: 1,
          story_image:
            'https://picsum.photos/600/1200',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 1 swiped'),
        },
        {
          story_id: 2,
          story_image:
            'https://picsum.photos/600/1200',
        },
      ],
    },
    {
      user_id: 6,
      user_image:
        'https://picsum.photos/200/200',
      user_name: 'Test1',
      stories: [
        {
          story_id: 1,
          story_image:
            'https://picsum.photos/600/1200',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 1 swiped'),
        },
        {
          story_id: 2,
          story_image:
            'https://picsum.photos/600/1200',
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
            <InstaStory
              data={data}
              duration={10}
            />
          <CatGrid title='test3'></CatGrid>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


export default App;
