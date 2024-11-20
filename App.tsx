import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import NativeLocalStorage from './src/specs/NativeLocalStorage';

const App = () => {
  const saveDataToSharedPrefs = React.useCallback(() => {
    const userData = {
      name: 'Shubham',
      role: 'Developer',
    };

    NativeLocalStorage.setItem('USER_DATA', JSON.stringify(userData));
    console.log('SAVED SUCCESSFULLY');
  }, []);

  const getDataFromSharedPrefs = React.useCallback(() => {
    const userDataString = NativeLocalStorage.getItem('USER_DATA');
    console.log('USER_DATA ===> ', userDataString);
    console.log('RETREIVED SUCCESSFULLY');
  }, []);

  const updateDataIntoSharedPrefs = React.useCallback(() => {
    const userData = {
      name: 'Jetha Lal',
      role: 'Businessman',
    };
    NativeLocalStorage.setItem('USER_DATA', JSON.stringify(userData));
    console.log('SAVED SUCCESSFULLY');
  }, []);

  const deleteDataFromSharedPrefs = React.useCallback(() => {
    NativeLocalStorage.removeItem('USER_DATA');
    console.log('REMOVED SUCCESSFULLY');
  }, []);

  return (
    <SafeAreaView style={style.screenContainer}>
      <Text style={{...style.btnText, color: '#000', marginBottom: 15}}>
        {'Turbo Module Implementation'}
      </Text>

      <TouchableOpacity
        activeOpacity={0.85}
        style={style.button}
        onPress={saveDataToSharedPrefs}
        children={<Text style={style.btnText}>{'Set Value'}</Text>}
      />
      <TouchableOpacity
        activeOpacity={0.85}
        style={style.button}
        onPress={getDataFromSharedPrefs}
        children={<Text style={style.btnText}>{'Get Value'}</Text>}
      />
      <TouchableOpacity
        activeOpacity={0.85}
        style={style.button}
        onPress={updateDataIntoSharedPrefs}
        children={<Text style={style.btnText}>{'Update Value'}</Text>}
      />
      <TouchableOpacity
        activeOpacity={0.85}
        style={style.button}
        onPress={deleteDataFromSharedPrefs}
        children={<Text style={style.btnText}>{'Delete Value'}</Text>}
      />
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },
  button: {
    width: 200,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#776567',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      height: 5,
      width: 0,
    },
    elevation: 2,
    marginVertical: 15,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
