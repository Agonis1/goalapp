import { useState } from 'react';
import { Button, View, TextInput, StyleSheet, Modal, Image, Alert } from 'react-native';





function GoalInput(props) {
    const [enteredSynimText, setEnteredGoalText] = useState('');
   
    function goalInput(enteredText){
        setEnteredGoalText(enteredText);
    }

    function addGoal() {
      if(enteredSynimText.length > 3) {
        props.onaddGoal(enteredSynimText);
        setEnteredGoalText('');
      } else{
        Alert.alert('OOPS!', 'Duhet shenuar me shume se 3 karaktere!', [
          {text: 'Në Rregull', onPress: () => console.log('aler closed')}
        ])
      }
        
    }
    
    return ( 
    <Modal visible={props.visible}animationType="slide" >
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/goal.png')} />
        <TextInput style={styles.TextInput} placeholder='Synimi Juaj?' 
          onChangeText={goalInput}
         value={enteredSynimText}
    />
    <View style={styles.buttonContainer}>
    <View style={styles.button}>
         <Button title="Largo" onPress={props.onCancel} color="#00F0FC"/>
       </View>
     <View style={styles.button}>
        <Button title="Shto Synim" onPress={addGoal} color="#1FFC00"/>
      </View>
      
      </View>
    </View>
   </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: '#CB80FF'
     
      },
      TextInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor:'#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '90%',
        marginRight: -2,
        padding: 16
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
      },
      button: {
        width: 100,
        marginHorizontal: 10

      },
      image: {
        width: 100,
        height: 100,
        margin: 20
      }
});