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
import { useFonts, NovaMono_400Regular } from '@expo-google-fonts/nova-mono';

export default function Home() {
  const navigation = useNavigation();
  const voltaHome = () => {
    navigation.navigate('Home');
  };

  let [fontsLoaded, fontError] = useFonts({
    NovaMono_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/roguelike/Moon.gif')}
        style={styles.backgroundImage}
      />

      <View style={styles.containerTitulo}>
        <Image
          source={require('../assets/roguelike/labirinto.png')}
          style={styles.icone}
        />
        <Text style={styles.titulo}> Roguelike e Roguelite </Text>
        <Image
          source={require('../assets/roguelike/labirinto.png')}
          style={styles.icone}
        />
      </View>

      <ScrollView>
        <View style={styles.container1}>
          <Image
            source={require('../assets/roguelike/HADES-1.png')}
            style={styles.foto1}
            resizeMode="contain"
          />
          <Text style={styles.nome1}>
            {'\n'}Hades{'\n'}
          </Text>
          <Text style={styles.texto1}>
            {'\n'}
            {'    '}Hades é um empolgante jogo de ação e RPG lançado pela
            Supergiant Games em 2020. Ambientado na mitologia grega, os
            jogadores assumem o papel de Zagreus, filho de Hades, em uma busca
            para escapar do Submundo. Com uma jogabilidade ágil e desafiadora,
            os jogadores enfrentam inimigos mitológicos e desvendam a história
            rica e envolvente do jogo. Hades recebeu elogios por sua narrativa
            cativante, visuais impressionantes e sistema de progressão
            gratificante, tornando-se um destaque no gênero rogue-lite.{'\n'}
          </Text>

          <View>
            <Image
              source={require('../assets/roguelike/HADES-2.jpg')}
              style={styles.fotinhas}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/roguelike/HADES-3.jpg')}
              style={styles.fotinhas}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/roguelike/HADES-4.jpg')}
              style={styles.fotinhasFinal}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.container1}>
          <Image
            source={require('../assets/roguelike/MOON-1.jpg')}
            style={styles.foto1}
            resizeMode="contain"
          />
          <Text style={styles.nome1}>
            {'\n'}Moonlighter{'\n'}
          </Text>
          <Text style={styles.texto1}>
            {'\n'}
            {'    '}Moonlighter é um encantador jogo de ação e aventura com
            elementos roguelike, lançado em 2018 pela Digital Sun. Os jogadores
            assumem o papel de Will, um comerciante que administra uma loja
            durante o dia e se aventura em masmorras à noite. A jogabilidade
            combina gerenciamento de loja e exploração de masmorras, onde os
            jogadores enfrentam inimigos e coletam saque valioso para vender na
            loja. Com visuais atraentes, jogabilidade viciante e uma trilha
            sonora encantadora, Moonlighter é uma experiência única que combina
            estratégia, ação e simulação.{'\n'}
          </Text>

          <View>
            <Image
              source={require('../assets/roguelike/MOON-2.jpg')}
              style={styles.fotinhas}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/roguelike/MOON-3.png')}
              style={styles.fotinhas}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/roguelike/MOON-4.png')}
              style={styles.fotinhasFinal}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.container1}>
          <Image
            source={require('../assets/roguelike/WIZARD-1.png')}
            style={styles.foto1}
            resizeMode="contain"
          />
          <Text style={styles.nome1}>
            {'\n'}Wizard of Legend{'\n'}
          </Text>
          <Text style={styles.texto1}>
            {'\n'}
            {'    '}Wizard of Legend é um eletrizante jogo de ação e RPG
            desenvolvido pela Contingent99 e lançado em 2018. No jogo, os
            jogadores controlam um feiticeiro poderoso que deve enfrentar
            desafios e inimigos em batalhas mágicas. Com uma jogabilidade
            frenética e combates baseados em magias, os jogadores podem combinar
            habilidades para criar combos devastadores. Com visuais pixelizados
            elegantes e uma trilha sonora empolgante, Wizard of Legend é um RPG
            de ação revigorante e desafiador.{'\n'}
          </Text>

          <View>
            <Image
              source={require('../assets/roguelike/WIZARD-2.png')}
              style={styles.fotinhas}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/roguelike/WIZARD-3.png')}
              style={styles.fotinhas}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/roguelike/WIZARD-4.jpg')}
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
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 20,
    backgroundColor: 'rgba(250, 250, 250, 0.6)',
    borderRadius: 45,
    elevation: 3,
    zIndex: 5,
  },

  titulo: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 22,
    fontFamily: 'NovaMono_400Regular',
    paddingTop: 10,
    color: 'Black',
  },

  icone: {
    width: 30,
    height: 30,
  },

  container1: {
    flex: 1,
    backgroundColor: 'rgba(250, 250, 250, 0.6)',
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
    fontSize: 45,
    fontFamily: 'NovaMono_400Regular',
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
    backgroundColor: 'white',
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
    backgroundColor: 'white',
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
