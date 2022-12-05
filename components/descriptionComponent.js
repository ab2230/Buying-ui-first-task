import { StyleSheet, Text, View } from 'react-native';

export default function DescriptionComponent(){
    return(
        //description view 
        <View style={styles.entityContainer}>
        <Text style={styles.subTopic}>Description</Text>
        <View style={styles.decriptionDetails}><Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text></View>
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
    decriptionDetails:{
      width:350,
      height:100,
      borderRadius:5,
      padding:10,
      backgroundColor:'#f0eceb',
      marginTop:10
    }
  });