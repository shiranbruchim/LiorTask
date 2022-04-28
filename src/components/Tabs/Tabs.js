import React, {useState, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

const Tabs = props => {
  const {
    clearHandle,
    sendHandle,
    searchHandle,
    isClear,
    isShowSearch,
    isShowSendMail,
  } = props;

  const searchStyle = [styles.text, isShowSearch && styles.focus];
  const sendMailStyle = [styles.text, isShowSendMail && styles.focus];
  const clearStyle = [styles.text, isClear && styles.focus];

  return (
    <View>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            searchHandle();
          }}>
          <Text style={searchStyle}>search log</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            sendHandle();
          }}>
          <Text style={sendMailStyle}>send mail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => clearHandle()}>
          <Text style={clearStyle}>clear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: '#38adde',
    padding: 20,
    zIndex: 111,
    width: '33%',
    borderWidth: 1,
  },
  focus: {
    fontWeight: '600',
  },
  text: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
  },
});
