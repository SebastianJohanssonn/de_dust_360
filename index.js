import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  asset
} from 'react-360';
import Entity from 'Entity';
// Säg till lyresten att react natives Animated Api fungerar här
/**
 * ```ts
 * const scale = new Animated.Value(1)
 * Animated.loop(
 *  scale,
 *  {
 *    toValue: 0,
 *    duration: 500
 *  }
 * ).start()
 * const value = scale.interpolate({
 *  inputRange: [0, 1],
 *  outputRange: [0.1, 10]
 * })
 * ```
 */

/*<Entity 
        source={{obj: asset('de_dust2/de_dust2.obj'), mtl: asset('de_dust2/de_dust2.mtl')}}
        style={styles['world']}
        />*/
export default class Hello360 extends React.Component {
  render() {
    return (
      <View onInput={(e) => { console.log(e); }} >
        <Entity
          source={{ obj: asset('Desert_City/desert city.obj'), mtl: asset('Desert_City/desert city.mtl') }}
          style={styles.world}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
  world: {
    transform: [
      { translate: [0, -40, -100] }
    ]
  }
});

AppRegistry.registerComponent('Hello360', () => Hello360);
