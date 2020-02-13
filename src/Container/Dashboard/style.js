import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  imgContainer:{
    width: '100%', 
    height: '100%',
    justifyContent:'center',
    alignItems:'center'
  },
  joinBtn:{
    borderWidth:1, 
    borderColor:'#fff', 
    alignItems: 'center', 
    padding: 25, 
    width:'50%', 
    margin:'10%',
    backgroundColor:'#ff3385',
    opacity:0.7,
    borderRadius:25,
  },
  fontStyle:{
    color:'#fff', 
    fontWeight:'800', 
    fontSize:20, 
    fontFamily:'sans-serif'
  }
})