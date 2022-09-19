import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, SafeAreaView, ActivityIndicator, Text } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import ScreenWrapper from './components/ScreenWrapper';
import { getbooks} from './components/actions';
import { render } from 'react-dom';
import React, { useEffect } from "react";
import actions from './components/actions';


export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false); 
const [Synimet, setSynimet] = useState([]);
const movieURL = "https://reactnative.dev/movies.json";
//const movieURL = "https://mocki.io/v1/89b56a67-ea01-429e-b519-cc1fa6f46aa6";
/* const { books } = useSelector(state => state.userReducer);
const dispatch = useDispatch();


useEffect(() => {
  getData();
  dispatch(getbooks());
}, []); */



  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]); 

  useEffect(() => {
    fetch(movieURL)
      .then((response) => response.json()) 
      .then((json) => {
        setData(json.movies);
        setTitle(json.title);
       setDescription(json.description);
      })
      .catch((error) => alert(error)) 
      .finally(() => setLoading(false)); 
  }, []);

  
  async function getMoviesAsync() {
    try {
      let response = await fetch(movieURL);
      let json = await response.json();
      setData(json.movies);
      setTitle(json.title);
     setDescription(json.description);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  }

  function startAddGoal ()
  {
    setModalIsVisible(true);
  }
 
  function endAddGoal (){
    setModalIsVisible(false);
  }

  function addGoal(enteredSynimText){
    setSynimet((currentSynimet) => [
      ...currentSynimet, 
     {text: enteredSynimText, id:Math.random().toString() }, 
    ]);

    
    endAddGoal();
  }

  function deleteGoal(id) {
    setSynimet(currentSynimet => {
      return  currentSynimet.filter((goal) => goal.id !== id );

    });
  }


  
 /*  _getData = async () => {
    fetch("https://mocki.io/v1/89b56a67-ea01-429e-b519-cc1fa6f46aa6")
    .then((response)=> response.Json())
    .then((responseJson) => {
     this.setState({text:responseJson.titulli, des:responseJson.Autori});
    })
    .catch((error)=>{
      console.error(error);
    });
  } */

  return (
   
    <View style={styles.appContainer}>
      <Button title ='Shto Synim te Ri' 
      color= "#5e0acc" onPress={startAddGoal}
      />
      <GoalInput visible={modalIsVisible} onaddGoal={addGoal} 
        onCancel={endAddGoal} />
        
      <View style={styles.goalsContainer}>
       <FlatList 
          data={Synimet} 
          renderItem={(itemData) => {
         return <GoalItem text={itemData.item.text}  
         id={itemData.item.id}
         onDeleteItem={deleteGoal} />;
       }}
       keyExtractor={(item, index) => {
        return item.id;
      }}
        />
    </View>
    
    {/* <View>
        <Button title="API te dhena" onPress={this._getData}/>
        <Text>{this.state.text}</Text>
        <Text>{this.state.desc}</Text>
    </View> */}


        <SafeAreaView style={styles.container}>
      {}
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          {}
          <Text style={styles.title}>{title}</Text>
          {}
          <View style={{ borderBottomWidth: 1, marginBottom: 12 }}></View>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={{ paddingBottom: 10 }}>
                <Text style={styles.movieText}>
                  {item.id},
                  {item.title}, 
                  {item.releaseYear}
                </Text>
              </View>
            )}
          />
          {}
          <Text style={styles.description}>{description}</Text>
        </View>
      )}
    </SafeAreaView>
  


   </View>
  );

}



const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#8BF8E5'
  },
  
  goalsContainer: {
    flex: 5
  },
  movieText: {
    fontSize: 26,
    fontWeight: "200",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
    marginBottom: 18,
    fontWeight: "200",
    color: "green",
  },

});
