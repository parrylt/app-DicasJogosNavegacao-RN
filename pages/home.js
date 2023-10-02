import { Text, View, StyleSheet, Image } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { useNavigation } from '@react-navigation/native';
import {
  useFonts,
  PressStart2P_400Regular,
} from '@expo-google-fonts/press-start-2p';

export default function Home() {
  const navigation = useNavigation();

  const Data = ['FPS', 'Luta', 'Roguelike', 'Sandbox'];

  const escolhaDropdown = (index, value) => {
    switch (value) {
      case 'FPS':
        navigation.navigate('FPS');
        break;
      case 'Luta':
        navigation.navigate('Luta');
        break;
      case 'Roguelike':
        navigation.navigate('Roguelike');
        break;
      case 'Sandbox':
        navigation.navigate('Sandbox');
        break;
      default:
        break;
    }
  };

  let [fontsLoaded, fontError] = useFonts({
    PressStart2P_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/home/phone-wallpaper.gif')}
        style={styles.backgroundImage}
      />

      <View style={styles.containerTitulo}>
        <Image
          source={require('../assets/home/icone.png')}
          style={styles.icone}
        />
        <Text style={styles.titulo}> Dicas de Jogos </Text>
        <Image
          source={require('../assets/home/icone.png')}
          style={styles.icone}
        />
      </View>

      <View style={styles.containerCentralizado}>
        <View
          style={[
            styles.containerDropdown,
            { marginRight: 120, marginTop: 650 },
          ]}>
          <ModalDropdown
            options={Data}
            defaultValue="Gêneros de Jogos Aqui"
            textStyle={{
              fontSize: 10,
              color: 'white',
              fontFamily: 'PressStart2P_400Regular',
            }}
            dropdownTextStyle={{
              fontSize: 16,
              color: 'red',
              textAlign: 'center',
              fontFamily: 'PressStart2P_400Regular',
            }}
            dropdownStyle={{ width: 210 }}
            onSelect={(index, value) => {
              escolhaDropdown(index, value);
            }}
          />
        </View>
      </View>

      <View style={styles.containerFallout}>
        <Image
          source={require('../assets/home/fallout.png')}
          style={styles.fallout}
        />
      </View>

      <View style={styles.containerMaria}>
        <Image
          source={require('../assets/home/Maria.png')}
          style={styles.maria}
        />
      </View>

      <View style={styles.containerNoMan}>
        <Image
          source={require('../assets/home/sky.png')}
          style={styles.noman}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },

  containerTitulo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    backgroundColor: 'rgba(255, 12, 62, 0.6)',
    borderRadius: 45,
    elevation: 3,
    zIndex: 5,
  },

  titulo: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 15,
    paddingTop: 10,
    color: 'Black',
    fontFamily: 'PressStart2P_400Regular',
  },

  icone: {
    width: 50,
    height: 50,
  },

  containerCentralizado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
  },

  containerDropdown: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45,
    backgroundColor: 'rgba(255, 12, 62, 0.6)',
  },

  containerFallout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    marginLeft: 250,
    marginBottom: 130,
  },

  fallout: {
    width: 120,
    height: 120,
  },

  containerMaria: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
    marginLeft: 300,
    marginTop: 210,
  },

  maria: {
    width: 350,
    height: 640,
  },

  containerNoMan: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 4,
    marginBottom: 150,
  },

  noman: {
    width: 350,
    height: 350,
  },
});
