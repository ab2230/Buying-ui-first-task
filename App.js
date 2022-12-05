import { StyleSheet, Text, View, } from 'react-native';
import {DescriptionComponent, PriceComponent, ValueComponent} from './components/index';


export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Title</Text>
      </View>
      <DescriptionComponent/>
      <PriceComponent />
      <ValueComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:30
  },
  titleContainer:{
    width:350,
    height:200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#d9d9d9',
    marginTop:100,
    borderRadius:10
  },
  title:{
    fontSize:40
  },
  entityContainer:{
     paddingTop:20
  }
});
