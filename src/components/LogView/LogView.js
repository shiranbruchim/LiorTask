import React, {useState, useEffect} from 'react';
import {
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import Tabs from '../Tabs/Tabs';
import qs from 'qs';
import Search from '../Search/Search';
import SendMail from '../SendMail/SendMail';

const LogView = props => {
  const [logData, setLogData] = useState();
  const [logDataNew, setLogDataNew] = useState();
  const [isShowSearch, setIsShowSearch] = useState(false);
  const [isShowSendMail, setIsShowSendMail] = useState(false);
  const [isClear, setIsClear] = useState(false);

  useEffect(() => {
    setLogDataNew(logData);
  }, [logData]);

  const {logger} = props;
  console.log('test7');

  useEffect(() => {
    logger.readLog(0).then(logText => {
      console.log('test6: ', logText);
      setLogData(logText.split('\n'));
    });
  }, []);

  const onSearch = value => {
    console.log('logData:', logData);
    const afterFilter = logData
      ? logData.filter(x => {
          const item = String(x).toLowerCase();
          const valSearched = value.toLowerCase();
          return item.includes(valSearched);
        })
      : '';
    console.log(afterFilter);
    setLogDataNew(afterFilter);
  };

  const onSendClick = val => {
    click(val, 'logs from app', logData.join()).then(() => {
      alert('The email was sent successfully');
    });
  };

  const click = (to, subject, body) => {
    let url = `mailto:${to}`;

    // Create email link query
    const query = qs.stringify({
      subject: subject,
      body: body,
    });

    if (query.length) {
      url += `?${query}`;
    }

    return Linking.openURL(url);
  };

  const clearHandle = () => {
    // logger.removelog();
    setLogData('');
    setIsShowSearch(false);
    setIsShowSendMail(false);
    setIsClear(true);
  };

  const sendHandle = () => {
    setIsShowSearch(false);
    setIsShowSendMail(true);
    setIsClear(false);
  };

  const searchHandle = () => {
    setIsShowSearch(true);
    setIsShowSendMail(false);
    setIsClear(false);
  };
  console.log('test66: ', logData);

  return (
    <SafeAreaView style={styles.app}>
      <Image source={require('../../Images/logo.png')} style={styles.img} />
      <Tabs
        isClear={isClear}
        isShowSearch={isShowSearch}
        isShowSendMail={isShowSendMail}
        clearHandle={clearHandle}
        sendHandle={sendHandle}
        searchHandle={searchHandle}
        onSearch={onSearch}
        onSendClick={onSendClick}
      />
      {(isShowSearch || isShowSendMail) && (
        <View style={styles.showTabsInfo}>
          {isShowSearch && <Search onSearch={onSearch} />}
          {isShowSendMail && <SendMail onSendClick={onSendClick} />}
        </View>
      )}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scroll}>
        <View>
          <Text>{logDataNew || 'no logs'}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LogView;

const styles = StyleSheet.create({
  app: {
    padding: 20,
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
  },
  img: {
    height: 80,
  },
  scroll: {
    marginTop: 20,
  },
  showTabsInfo: {
    backgroundColor: 'white',
    padding: 15,
    marginTop: 20,
    borderWidth: 1,
  },
});
