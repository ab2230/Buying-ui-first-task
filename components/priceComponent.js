import { StyleSheet, Text, View } from 'react-native';

export default function PriceComponent(){
    return(
        //price view
    <View style={styles.entityContainer}>
        <Text style={styles.subTopic}>Prices</Text>
        <View style={styles.priceValueContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>
              Buying Price
              {'\n'}
              $23
              </Text>
            </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>
              Selling Price
              {'\n'}
              $23
              </Text>
            </View>
          </View>
    </View>
    )
}

const styles = StyleSheet.create({
    entityContainer:{
       paddingTop:20
    },
    subTopic:{
        fontSize:20
    },
    priceValueContainer:{
    flexDirection:'row',
    justifyContent:'space-around'
    },
    priceContainer:{
       backgroundColor:'#f0eceb',
       padding:15,
       marginTop:10,
       borderRadius:5
    },
    priceText:{
      fontSize:25,
      textAlign:'center'
    }
  });