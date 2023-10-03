import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Oswald_700Bold } from '@expo-google-fonts/oswald';

export default function Home() {
  const navigation = useNavigation();
  const voltaHome = () => {
    navigation.navigate('Home');
  };

  let [fontsLoaded, fontError] = useFonts({
    Oswald_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/fps/4CND.gif')}
        style={styles.backgroundImage}
      />

      <View style={styles.containerTitulo}>
        <Image
          source={require('../assets/fps/jogo-de-tiro.png')}
          style={styles.icone}
        />
        <Text style={styles.titulo}> FPS - First Person Shooter </Text>
        <Image
          source={require('../assets/fps/jogo-de-tiro.png')}
          style={styles.icone}
        />
      </View>

      <ScrollView>
        <View style={styles.container1}>
          <Image
            source={require('../assets/fps/BORDERLANDS-1.jpg')}
            style={styles.foto1}
            resizeMode="contain"
          />
          <Text style={styles.nome1}>
            {'\n'}Borderlands 2{'\n'}
          </Text>
          <Text style={styles.texto1}>
            {'\n'}
            {'    '}Borderlands 2 é um eletrizante jogo de tiro em primeira
            pessoa (FPS) desenvolvido pela Gearbox Software. Situado em um mundo
            pós-apocalíptico de ficção científica, o jogo coloca os jogadores no
            papel de um dos quatro caçadores de tesouros, cada um com
            habilidades únicas, em busca de riquezas e glória em Pandora. Com
            uma jogabilidade intensa e repleta de ação, os jogadores enfrentam
            hordas de inimigos variados e desafiadores enquanto exploram vastos
            cenários, cumprindo missões e aprimorando suas habilidades com uma
            ampla variedade de armas e equipamentos. Além disso, o humor
            característico da série Borderlands e a narrativa envolvente tornam
            a experiência ainda mais cativante, fazendo de Borderlands 2 um dos
            mais populares e queridos FPS da sua época.{'\n'}
          </Text>

          <View>
            <Image
              source={require('../assets/fps/BORDERLANDS-2.jpg')}
              style={styles.fotinhas}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/fps/BORDERLANDS-3.jpg')}
              style={styles.fotinhas}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/fps/BORDERLANDS-4.jpg')}
              style={styles.fotinhasFinal}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.container1}>
          <Image
            source={require('../assets/fps/BIOSHOCK-1.jpg')}
            style={styles.foto1}
            resizeMode="contain"
          />
          <Text style={styles.nome1}>
            {'\n'}Bioshock{'\n'}
          </Text>
          <Text style={styles.texto1}>
            {'\n'}
            {'    '}BioShock é um aclamado jogo de tiro em primeira pessoa (FPS)
            desenvolvido pela 2K Games. Ambientado em uma cidade subaquática
            chamada Rapture, o jogo oferece uma experiência única e imersiva. Os
            jogadores assumem o papel de Jack, um sobrevivente de um acidente
            aéreo que acaba descobrindo esse misterioso e decadente mundo
            subaquático. Rapture, uma utopia distópica criada pelo visionário
            Andrew Ryan, agora está repleta de perigos e mutantes após uma série
            de eventos trágicos. Para sobreviver e desvendar os segredos de
            Rapture, os jogadores usam uma variedade de armas e poderes chamados
            Plasmids, que concedem habilidades especiais, como controle do fogo
            e eletricidade. Além do gameplay envolvente, a narrativa complexa e
            os elementos de horror e suspense contribuem para tornar BioShock
            uma obra-prima do gênero, aclamada tanto pela crítica quanto pelos
            jogadores.{'\n'}
          </Text>

          <View>
            <Image
              source={require('../assets/fps/BIOSHOCK-2.jpg')}
              style={styles.fotinhas}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/fps/BIOSHOCK-3.jpg')}
              style={styles.fotinhas}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/fps/BIOSHOCK-4.jpg')}
              style={styles.fotinhasFinal}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.container1}>
          <Image
            source={require('../assets/fps/DOOM-1.png')}
            style={styles.foto1}
            resizeMode="contain"
          />
          <Text style={styles.nome1}>
            {'\n'}DOOM{'\n'}
          </Text>
          <Text style={styles.texto1}>
            {'\n'}
            {'    '}Doom Eternal é um eletrizante jogo de tiro em primeira
            pessoa (FPS) desenvolvido pela id Software e publicado pela Bethesda
            Softworks. Continuando a icônica saga Doom, o jogo coloca os
            jogadores no papel do Doom Slayer, um guerreiro imparável em uma
            missão para salvar a Terra do exército demoníaco do Inferno. Com uma
            ação frenética e intensa, os jogadores enfrentam hordas de demônios
            com uma vasta gama de armas poderosas e habilidades avançadas. Além
            dos combates desafiadores, Doom Eternal também apresenta um enredo
            envolvente e expande o universo do jogo, mergulhando os jogadores em
            cenários infernais e mundos alienígenas. Com gráficos
            impressionantes, trilha sonora pesada e uma jogabilidade empolgante,
            Doom Eternal oferece uma experiência FPS visceral e repleta de
            adrenalina, satisfazendo os fãs de ação e jogadores em busca de
            desafios épicos.{'\n'}
          </Text>

          <View>
            <Image
              source={require('../assets/fps/DOOM-2.png')}
              style={styles.fotinhas}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/fps/DOOM-3.jpg')}
              style={styles.fotinhas}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/fps/DOOM-4.png')}
              style={styles.fotinhasFinal}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.containerBotao}>
          <TouchableOpacity styles={styles.botao} onPress={voltaHome}>
            <Text styles={styles.textoBotao}> Voltar </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: -1,
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
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    backgroundColor: 'rgba(255, 253, 47, 0.6)',
    borderRadius: 45,
    elevation: 3,
    zIndex: 5,
  },

  titulo: {
    marginTop: 8,
    marginBottom: 15,
    fontSize: 22,
    paddingTop: 10,
    color: 'Black',
    fontFamily: 'Oswald_700Bold',
  },

  icone: {
    width: 30,
    height: 30,
  },

  container1: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 25,
    marginBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 18,
    width: 340,
  },

  foto1: {
    width: 300,
    height: 300,
    marginBottom: -70,
  },

  nome1: {
    fontSize: 30,
    fontFamily: 'Oswald_700Bold',
    textAlign: 'center',
    marginBottom: -30,
  },

  texto1: {
    textAlign: 'justify',
    lineHeight: 22,
    fontSize: 16,
    marginBottom: -40,
  },

  fotinhas: {
    width: 300,
    height: 300,
    marginBottom: -100,
  },

  fotinhasFinal: {
    width: 300,
    height: 300,
    marginBottom: -30,
  },

  containerBotao: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 150,
    padding: 10,
    borderRadius: 18,
    width: 100,
  },

  botao: {
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 5,
  },

  textoBotao: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
