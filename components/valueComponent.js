import { StyleSheet, Text, View ,  TouchableOpacity} from 'react-native';
import { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function ValueComponent(){
    const [value,setValue] = useState(1) // used to track the value of the quantity
    const decrease = ()=>{
      if(value>0){ //check the quantity value is 0 because negative value is not allowed
        setValue(currentValue => currentValue - 1)
      }
      else 
       setValue(0)
    }
    return(
        //quantity view
        <View style={styles.entityContainer}>
        <Text style={styles.subTopic}>Quantity</Text>
        <View>
        <View style={styles.valueContainer}><Text testID='value' style={styles.value}>{value}</Text></View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity testID='decreaseButton' style={styles.button} onPress={() => decrease()}> 
             <Text style={styles.text}><AntDesign name='minus' /></Text>
          </TouchableOpacity>
          <TouchableOpacity testID='increaseButton' style={styles.button} onPress={() => setValue(currentValue => currentValue + 1)}>
             <Text><AntDesign name='plus' /></Text>
          </TouchableOpacity>
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
    valueContainer:{
        width:150,
        paddingTop:10,
        marginHorizontal:100,
        alignItems:'center',
        backgroundColor:'#efebea',
        borderRadius:5,
        justifyContent:'center'
      },
      value:{
        fontSize:25,
        alignItems:'center',
        justifyContent:'center'
      },
      buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        paddingHorizontal:120
      },
      button: {
        marginTop:10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 18,
        borderRadius: 15,
        backgroundColor: '#efebea',
      }
})