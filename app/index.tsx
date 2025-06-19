import { StyleSheet, View, Text, Image, Alert, TouchableOpacity, ScrollView  } from 'react-native';

import Note from '@/components/Note';

export default function AssetExample() {

  const handlePressInput = () => {
    Alert.alert('Você clicou para cadastrar uma nota!');
    // Aqui você pode abrir um modal, navegar para outra tela, etc.
  };

  return (
    <View style={styles.tela}>
      <View style={styles.header}>
        <Text style={styles.logo}>+NOTES</Text>
        <Image
          source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
          style={styles.perfil}
        />
      </View>
      <TouchableOpacity style={styles.cadastrar} onPress={handlePressInput}>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={styles.plus}
        />
        <Text style={styles.place}>Cadastrar Nota</Text>
      </TouchableOpacity>
      <Text style={styles.subtitle}>Notas Registradas</Text>
      <ScrollView>
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    backgroundColor: '#f5ebe0',
    width: '100%',
    height: '100%',
    paddingTop: '20%',
    paddingHorizontal: 30,
    paddingBottom: '10%',
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 56,
    color: '#14213d',
  },
  perfil: {
    width: 70,
    height: 70,
    borderWidth: 4,
    borderColor: '#14213d',
    borderRadius: 40,
    backgroundColor: '#fff',
  },
  cadastrar: {
    width: '100%',
    marginVertical: 50,
    padding: 25,
    backgroundColor: '#fca311',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  plus: {
    width: 30,
    height: 30,
  },
  place: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    color: '#14213d',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  }
});
