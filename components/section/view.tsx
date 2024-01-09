import { Button, Text, View, useColorScheme } from "react-native";
import { Props } from "./type";
import { styles } from "./style";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useEffect, useState } from "react";

export function Section({children, title}: Props): React.JSX.Element {
    const [state, setState] = useState(0);
    const isDarkMode = useColorScheme() === 'dark';

    const req = () => {
        console.log('request state ' + state);
    }

    useEffect(() => {
        req();
    },
    [state]
    );

    return (
      <View style={styles.sectionContainer}>
        <Button
        onPress={() => {
            setState(prev => prev + 1);
        }}
        title="+"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
        <Text>
            {state}
        </Text>
        <Button
        onPress={() => {
            setState(prev => prev - 1);
        }}
        title="-"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.sectionDescription,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>
          {children}
        </Text>
      </View>
    );
}