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
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';

export default function Home() {
  const navigation = useNavigation();
  const voltaHome = () => {
    navigation.navigate('Home');
  };

  let [fontsLoaded, fontError] = useFonts({
    BebasNeue_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/luta/Portal.gif')}
        style={styles.backgroundImage}
      />

      <View style={styles.containerTitulo}>
        <Image
          source={require('../assets/luta/luta.png')}
          style={styles.icone}
        />
        <Text style={styles.titulo}> Luta </Text>
        <Image
          source={require('../assets/luta/luta.png')}
          style={styles.icone}
        />
      </View>

      <ScrollView>
        <View style={styles.container1}>
          <Image
            source={require('../assets/luta/KI-1.jpg')}
            style={styles.foto1}
            resizeMode="contain"
          />
          <Text style={styles.nome1}>
            {'\n'}Killer Instinct{'\n'}
          </Text>
          <Text style={styles.texto1}>
            {'\n'}
            {'    '}Killer Instinct é um eletrizante jogo de luta desenvolvido
            pela Double Helix Games e Iron Galaxy Studios. Lançado originalmente
            nos fliperamas em 1994 e depois revivido em 2013 para Xbox One e PC,
            o jogo se tornou uma referência no gênero de luta. Com um elenco
            diversificado de personagens, cada um com habilidades e golpes
            únicos, os jogadores podem participar de combates intensos e cheios
            de adrenalina. A jogabilidade rápida e fluida permite a criação de
            combos impressionantes e combos especiais, tornando cada luta
            emocionante e estratégica. Além do modo história cativante, o jogo
            oferece modos competitivos offline e online, onde os jogadores podem
            testar suas habilidades contra outros lutadores ao redor do mundo.
            Com visuais estilizados e uma trilha sonora memorável, Killer
            Instinct mantém a chama acesa para os fãs de jogos de luta,
            oferecendo uma experiência viciante e desafiadora no campo de
            batalha virtual.{'\n'}
          </Text>

          <View>
            <Image
              source={require('../assets/luta/KI-2.jpg')}
              style={styles.fotinhas}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/luta/KI-3.png')}
              style={styles.fotinhas}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/luta/KI-4.jpg')}
              style={styles.fotinhasFinal}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.container1}>
          <Image
            source={require('../assets/luta/SF-1.jpg')}
            style={styles.foto1}
            resizeMode="contain"
          />
          <Text style={styles.nome1}>
            {'\n'}Ultra Street Fighter 4{'\n'}
          </Text>
          <Text style={styles.texto1}>
            {'\n'}
            {'    '}Ultra Street Fighter 4 é um empolgante jogo de luta
            desenvolvido pela Capcom, lançado em 2014. Como parte da renomada
            franquia Street Fighter, o jogo traz de volta personagens icônicos e
            adiciona novos lutadores ao elenco. Com uma jogabilidade clássica
            baseada em combos, movimentos especiais e estratégia, os jogadores
            enfrentam desafiadores oponentes em duelos emocionantes e
            competitivos. Além do extenso elenco de personagens, Ultra Street
            Fighter 4 apresenta melhorias e ajustes no sistema de combate,
            garantindo um equilíbrio ainda maior entre os lutadores. Com belos
            gráficos, animações fluidas e uma comunidade ativa de jogadores,
            Ultra Street Fighter 4 continua a cativar tanto os veteranos da
            série quanto os novos adeptos do gênero de luta.{'\n'}
          </Text>

          <View>
            <Image
              source={require('../assets/luta/SF-2.jpg')}
              style={styles.fotinhas}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/luta/SF-3.jpg')}
              style={styles.fotinhas}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/luta/SF-4.jpg')}
              style={styles.fotinhasFinal}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.container1}>
          <Image
            source={require('../assets/luta/TEKKEN-1.jpg')}
            style={styles.foto1}
            resizeMode="contain"
          />
          <Text style={styles.nome1}>
            {'\n'}Tekken 7{'\n'}
          </Text>
          <Text style={styles.texto1}>
            {'\n'}
            {'    '}Tekken 7 é um eletrizante jogo de luta desenvolvido pela
            Bandai Namco Entertainment, lançado em 2015 nos fliperamas japoneses
            e em 2017 para outras plataformas. Como a mais recente adição à
            lendária série Tekken, o jogo continua a saga de combates épicos
            entre diversos personagens, cada um com seu estilo de luta único e
            história pessoal. Com uma jogabilidade dinâmica e acessível, Tekken
            7 oferece a oportunidade de criar combos elaborados e executar
            golpes especiais impressionantes. Além do modo história cativante, o
            jogo também traz uma série de modos de jogo competitivos, tanto
            offline quanto online, para os jogadores mostrarem suas habilidades
            em batalhas emocionantes. Com gráficos deslumbrantes e uma trilha
            sonora marcante, Tekken 7 continua a ser uma escolha popular entre
            os fãs de jogos de luta, proporcionando uma experiência intensa e
            emocionante para os entusiastas de combates virtuais.{'\n'}
          </Text>

          <View>
            <Image
              source={require('../assets/luta/TEKKEN-2.jpg')}
              style={styles.fotinhas}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/luta/TEKKEN-3.jpg')}
              style={styles.fotinhas}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/luta/TEKKEN-4.jpg')}
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
    marginLeft: 110,
    marginRight: 110,
    marginBottom: 20,
    backgroundColor: 'rgba(250, 0, 0, 0.6)',
    borderRadius: 45,
    elevation: 3,
    zIndex: 5,
  },

  titulo: {
    marginTop: 8,
    marginBottom: 15,
    fontSize: 35,
    paddingTop: 10,
    color: 'white',
    fontFamily: 'BebasNeue_400Regular',
  },

  icone: {
    width: 30,
    height: 30,
  },

  container1: {
    flex: 1,
    backgroundColor: 'rgba(182, 10, 10, 1)',
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
    fontFamily: 'BebasNeue_400Regular',
    textAlign: 'center',
    marginBottom: -30,
    color: 'white',
  },

  texto1: {
    textAlign: 'justify',
    lineHeight: 22,
    fontSize: 16,
    marginBottom: -40,
    color: 'white',
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
    backgroundColor: 'rgba(220, 10, 10, 1)',
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
    padding: 10,
    borderRadius: 5,
  },

  textoBotao: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bolder',
  },
});
