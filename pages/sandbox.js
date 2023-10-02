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
import { useFonts, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';

export default function Home() {
  const navigation = useNavigation();
  const voltaHome = () => {
    navigation.navigate('Home');
  };

  let [fontsLoaded, fontError] = useFonts({
    AmaticSC_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/sandbox/Espaco.gif')}
        style={styles.backgroundImage}
      />

      <View style={styles.containerTitulo}>
        <Image
          source={require('../assets/sandbox/sand-bucket.png')}
          style={styles.icone}
        />
        <Text style={styles.titulo}> Sandbox </Text>
        <Image
          source={require('../assets/sandbox/sand-bucket.png')}
          style={styles.icone}
        />
      </View>

      <ScrollView>
        <View style={styles.container1}>
          <Image
            source={require('../assets/sandbox/NoMansSky-1.png')}
            style={styles.foto1}
            resizeMode="contain"
          />
          <Text style={styles.nome1}>
            {'\n'}No Man's Sky{'\n'}
          </Text>
          <Text style={styles.texto1}>
            {'\n'}
            {'    '}No Man's Sky é um jogo de exploração espacial e
            sobrevivência, amplamente reconhecido como um sandbox. Desenvolvido
            pela Hello Games, o jogo oferece uma experiência única ao permitir
            que os jogadores explorem um vasto universo gerado proceduralmente,
            com bilhões de planetas, estrelas e sistemas solares. Os jogadores
            podem pilotar naves espaciais, explorar planetas desconhecidos,
            coletar recursos, interagir com diferentes formas de vida e
            construir bases. A liberdade de escolha é um dos principais pilares
            do jogo, pois os jogadores podem seguir sua própria trajetória, seja
            desvendando mistérios cósmicos, negociando com facções alienígenas
            ou simplesmente viajando para o horizonte desconhecido. Com
            atualizações regulares que adicionam novos recursos e conteúdos, No
            Man's Sky oferece uma experiência em constante evolução para os
            aventureiros espaciais.{'\n'}
          </Text>

          <View>
            <Image
              source={require('../assets/sandbox/NoMansSky-2.jpg')}
              style={styles.fotinhas}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/sandbox/NoMansSky-3.png')}
              style={styles.fotinhas}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/sandbox/NoMansSky-4.png')}
              style={styles.fotinhasFinal}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.container1}>
          <Image
            source={require('../assets/sandbox/Raft-1.jpg')}
            style={styles.foto1}
            resizeMode="contain"
          />
          <Text style={styles.nome1}>
            {'\n'}Raft{'\n'}
          </Text>
          <Text style={styles.texto1}>
            {'\n'}
            {'    '}Raft é um jogo de sobrevivência e exploração em mundo
            aberto, caracterizado como um sandbox. Desenvolvido pela Redbeet
            Interactive, o jogo coloca os jogadores em uma emocionante aventura
            no meio do oceano. A história começa em uma pequena jangada
            flutuante, onde os jogadores devem lutar contra os elementos
            naturais, como tubarões famintos, para coletar recursos à deriva e
            construir uma jangada maior e mais funcional. A exploração é
            essencial para encontrar ilhas, naufrágios e outros destroços, que
            podem fornecer recursos valiosos e conhecimento sobre a história por
            trás dessa situação desconhecida. Com a possibilidade de jogar
            individualmente ou em modo cooperativo, Raft oferece aos jogadores
            uma experiência desafiadora e cativante em um ambiente marítimo
            inexplorado, onde a criatividade e a estratégia são essenciais para
            sobreviver e prosperar.{'\n'}
          </Text>

          <View>
            <Image
              source={require('../assets/sandbox/Raft-2.jpg')}
              style={styles.fotinhas}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/sandbox/Raft-3.jpg')}
              style={styles.fotinhas}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/sandbox/Raft-4.jpg')}
              style={styles.fotinhasFinal}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.container1}>
          <Image
            source={require('../assets/sandbox/Stardew-1.png')}
            style={styles.foto1}
            resizeMode="contain"
          />
          <Text style={styles.nome1}>
            {'\n'}Stardew Valley{'\n'}
          </Text>
          <Text style={styles.texto1}>
            {'\n'}
            {'    '}Stardew Valley é um encantador jogo de simulação de fazenda,
            reconhecido como um sandbox. Criado por ConcernedApe, o jogo
            proporciona uma experiência relaxante e gratificante aos jogadores.
            No início da aventura, o personagem herda uma antiga fazenda e
            decide deixar a agitação da cidade para começar uma nova vida no
            campo. Os jogadores têm total liberdade para cultivar a terra, criar
            animais, minerar recursos preciosos e interagir com a comunidade
            local. Além da agricultura, o jogo também oferece outras atividades,
            como pesca, exploração de cavernas, participação em festivais e
            desenvolvimento de relacionamentos com os habitantes da cidade. Com
            belos gráficos de estilo retrô, uma trilha sonora envolvente e uma
            jogabilidade envolvente, Stardew Valley é um convite para relaxar,
            criar e descobrir um mundo aconchegante cheio de possibilidades.
            {'\n'}
          </Text>

          <View>
            <Image
              source={require('../assets/sandbox/Stardew-2.jpeg')}
              style={styles.fotinhas}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/sandbox/Stardew-3.jpg')}
              style={styles.fotinhas}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/sandbox/Stardew-4.png')}
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
    width: '110%',
    height: '110%',
    zIndex: -1,
  },

  containerTitulo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: 80,
    marginRight: 80,
    marginBottom: 20,
    backgroundColor: 'rgba(13, 114, 184, 0.6)',
    borderRadius: 45,
    elevation: 3,
    zIndex: 5,
  },

  titulo: {
    marginTop: 8,
    marginBottom: 15,
    fontSize: 40,
    fontFamily: 'AmaticSC_700Bold',
    paddingTop: 10,
    color: 'white',
  },

  icone: {
    width: 30,
    height: 30,
  },

  container1: {
    flex: 1,
    backgroundColor: 'rgba(13, 114, 184, 0.6)',
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
    fontSize: 65,
    fontFamily: 'AmaticSC_700Bold',
    textAlign: 'center',
    marginTop: -45,
    marginBottom: -60,
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
    backgroundColor: 'rgba(13, 114, 184, 1)',
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
    backgroundColor: 'rgba(13, 114, 184, 0.6)',
    padding: 10,
    borderRadius: 5,
  },

  textoBotao: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
