import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const Search = props => {
  const [text, onChangeText] = React.useState('');
  const {onSearch} = props;

  const onHandleChangeText = val => {
    onChangeText(val);
    onSearch(val);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onHandleChangeText}
        value={text}
        placeholder="search log"
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderRadius: 15,
    borderWidth: 1,
    padding: 10,
  },
});
