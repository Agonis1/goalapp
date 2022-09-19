import { StyleSheet, View, Text, Pressable } from 'react-native';
import ScreenWrapper from './ScreenWrapper';
import {MaterialIcons} from '@expo/vector-icons';

function GoalItem(props) {
return(
  
    <View style={styles.goalItem}>
        <Pressable android_ripple={{color: '#dddddd'}} 
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem }
        >
          <MaterialIcons name='delete' size={18} color= '#FF0000'/>
         <Text style={styles.goalText}>{props.text}</Text>
         </Pressable>
      </View>
  
    
  );

}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        color: 'white',
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        padding: 8,
        flexDirection: 'row'
      },
      pressedItem: {
        opacity: 0.5,
        padding: 5,
        
      },
      goalText: {
        color: 'white',
        padding: 8,
        
      }
});