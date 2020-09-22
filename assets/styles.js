import { StyleSheet, Dimensions } from 'react-native';
import Colors from './colors';
export const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    containerSignIn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      logo: {
        flex: 1,
        width: "100%",
        resizeMode: "contain",
        alignSelf: "center"
      },
      buttonSignIn: {
        alignItems: 'center',
        backgroundColor: Colors.tabIconSelected,
        width: '90%',
        alignSelf: 'center',
        height: 50,
        marginTop: '5%',
        borderRadius: 4
      },
      form: {
        flex: 1,
        width: "100%"
      },
      textInput: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        paddingRight: 0,
        //backgroundColor: 'black',
        color: Colors.darkgrey
      },
      searchSection: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: Colors.darkgrey,
        paddingBottom: 10,
        marginRight: '5%',
        marginLeft: '5%',
        marginBottom: '5%',
      },
      searchIcon: {
        padding: 10,
        color: Colors.darkgrey
      },
      error: {
        color: 'red',
        textAlign: 'center'
      },
      loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.darkgrey + '50'
      },
      containerSplash: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      text: {
        fontSize: 17,
        textAlign: 'center',
        color: Colors.noticeText,
        fontWeight: 'bold',
        marginTop: '2%'
      },
})