import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
    const [search, setSearch] = React.useState('');
    const navigation = useNavigation();

    return (
        <View style={styles.bottomContainer}>
            <SearchBar
            placeholder="Buscar"
            containerStyle={styles.searchBarContainer}
            inputContainerStyle={styles.searchBarInputContainer}
            inputStyle={styles.searchBarInput}
            searchIcon={<Icon name="search" size={18} color="#ABABAB" />}
            value={search}
            onChangeText={setSearch}
            />
            <View style={styles.iconContainer}>
                <Pressable onPress={() => navigation.navigate('Seg')}>
                    <Icon
                    name="home"
                    type="font-awesome"
                    size={40}
                    color="#ABABAB"
                    containerStyle={styles.icon}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('MapView')}>
                    <Icon
                    name="compass"
                    type="font-awesome"
                    size={40}
                    color="#ABABAB"
                    containerStyle={styles.icon}
                    />
                </Pressable> 
                <Pressable onPress={() => navigation.navigate('FavoriteScreen')}> 
                    <Icon
                    name="heart"
                    type="font-awesome"
                    size={40}
                    color="#ABABAB"
                    containerStyle={styles.icon}
                    />
                </Pressable>
                <Pressable onPress={() => console.log('bomba')}>
                    <Icon
                    name="gear"
                    type="font-awesome"
                    size={40}
                    color="#ABABAB"
                    containerStyle={styles.icon}
                    />
                </Pressable>
            </View>
        </View>
    );
}

export default Footer;

const styles = StyleSheet.create({
    bottomContainer: {
    flex: 1,
    bottom: 0,
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'black',
    width: '100%',
    height: 150,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  searchBarContainer: {
    marginTop: 10,
    width: '90%',
    backgroundColor: 'black',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    paddingHorizontal: 16,
  },
  searchBarInputContainer: {
    backgroundColor: '#333232',
  },
  searchBarInput: {
    color: '#ABABAB',
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 15,
    width: '100%',
    height: '30%',
    justifyContent: 'space-evenly',
  },
  icon: {
    flex: 1,
    color: '#333232',
    justifyContent: 'center',
    alignItems: 'center',
  },
});