import { AsyncStorage } from 'react-native';

const _storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(
      key,
      value
    );
    console.log(`Saved value succesfuly ${key} => ${value}`)

  } catch (error) {
    // Error saving data
    console.log(`Error when save user ${error}}`)
  }
};

const _retrieveData = async (key: string): Promise<any> => {
  try {
    return await AsyncStorage.getItem(key)
  } catch (error) {
    return (error)
  }
};

const _removeItem = async (key: string): Promise<string> => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (error) {
    console.log(error);
    return error;
  }
}

export { _retrieveData, _storeData, _removeItem }