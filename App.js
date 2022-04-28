import React, {useState, useEffect} from 'react';
import LogView from './src/components/LogView/LogView';
import NGLogger from './src/common/logger';
import RNShake from 'react-native-shake';
import {Text, View, StyleSheet} from 'react-native';

const App = () => {
  const objExample = {
    squadName: 'Super hero squad',
    homeTown: 'Metro City',
    formed: 2016,
    secretBase: 'Super tower',
    active: true,
    members: [
      {
        name: 'Molecule Man',
        age: 29,
        secretIdentity: 'Dan Jukes',
        powers: ['Radiation resistance', 'Turning tiny', 'Radiation blast'],
      },
      {
        name: 'Madame Uppercut',
        age: 39,
        secretIdentity: 'Jane Wilson',
        powers: [
          'Million tonne punch',
          'Damage resistance',
          'Superhuman reflexes',
        ],
      },
      {
        name: 'Eternal Flame',
        age: 1000000,
        secretIdentity: 'Unknown',
        powers: [
          'Immortality',
          'Heat Immunity',
          'Inferno',
          'Teleportation',
          'Interdimensional travel',
        ],
      },
    ],
  };

  const [isShowLog, setIsShowLog] = useState(false);

  const logger = new NGLogger();
  console.log('test2');

  logger.init();
  logger.removelog();

  console.log('test1');

  const shake = () => {
    const subscription = RNShake.addListener(() => {
      console.log('test4');
      setIsShowLog(!isShowLog);
      console.log('test5');
      console.log(JSON.stringify(objExample));
    });

    return () => {
      console.log('test3');
      subscription.remove();
    };
  };

  useEffect(() => {
    shake();
  }, []);

  useEffect(() => {
    shake();
  }, [isShowLog]);

  return (
    <View style={styles.app}>
      {isShowLog ? <LogView logger={logger} /> : <Text>No Logs</Text>}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
