import React from 'react';
import {
  TouchableOpacity,
  TextInput,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const SendMail = props => {
  const [text, onChangeText] = React.useState('');
  const {onSendClick} = props;

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="mail address"
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          onSendClick(text);
        }}>
        <Text style={styles.text}>send mail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SendMail;

const styles = StyleSheet.create({
  input: {
    borderRadius: 15,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#38adde',
    padding: 20,
  },
  text: {
    textAlign: 'center',
  },
});
