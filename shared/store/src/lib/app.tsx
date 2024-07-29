// import { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RLogInForm } from './rufferal-design/system';

export const App = () => {
  // const [data, setData] = useState([]);
  // const [authToken, setAuthToken] = useState<null | string>('');
  // const [loading, setLoading] = useState(true);
  // const [singleUserLoading, setSingleUserLoading] = useState(true);
  // const [singleUserError, setSingleUserError] = useState<unknown>();
  // const [singleUserData, setSingleUserData] = useState();
  // const [signUpLoading, setSignUpLoading] = useState(true);
  // const [signUpError, setSignUpError] = useState<unknown>();
  // const [signUpData, setSignUpData] = useState();

  // const handleSingleUser = async () => {
  //   setSingleUserLoading(true);

  //   try {
  //     const userData = await fetch('http://localhost:5000/admin/users/1', {
  //       method: 'GET',
  //       headers: {
  //         Accept: 'application/json',
  //       },
  //     });

  //     if (!userData.ok) {
  //       throw new Error(`Error! status: ${userData.status}`);
  //     }

  //     const result = await userData.json();

  //     console.log('result is: ', JSON.stringify(result, null, 4));

  //     setSingleUserData(result);
  //   } catch (err) {
  //     setSingleUserError(err);
  //   } finally {
  //     setSingleUserLoading(false);
  //   }
  // };
  // console.log('singleUserData', singleUserData);
  // console.log('singleUserError', singleUserError);

  // const handleSignUp = async () => {
  //   setSignUpLoading(true);

  //   try {
  //     const userData = await fetch('http://localhost:5000/admin/users/1', {
  //       method: 'GET',
  //       headers: {
  //         Accept: 'application/json',
  //       },
  //     });

  //     if (!userData.ok) {
  //       throw new Error(`Error! status: ${userData.status}`);
  //     }

  //     const result = await userData.json();

  //     console.log('result is: ', JSON.stringify(result, null, 4));

  //     setSignUpData(result);
  //   } catch (err) {
  //     setSignUpError(err);
  //   } finally {
  //     setSignUpLoading(false);
  //   }
  // };
  // console.log('signUpData', signUpData);
  // console.log('signUpError', signUpError);

  // const signUp = () => {
  //   fetch('http://localhost:5000/api/signup', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       user: {
  //         email: 'test@test.com',
  //         password: '123456',
  //         forename: 'Blarg',
  //         surname: 'McBlargson',
  //       },
  //     }),
  //   })
  //     .then((response) => {
  //       const authHeader = response.headers.get('Authorization');
  //       setAuthToken(authHeader);
  //       return response.json();
  //     })
  //     .then((json) => {
  //       console.log(JSON.stringify(json));
  //     })
  //     .catch((error) => {
  //       console.log('ERROR SIGNUP', error);
  //     })
  //     .finally();
  // };
  // console.log('authToken', authToken);

  // const logIn = () => {
  //   fetch('http://localhost:5000/api/login', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       user: {
  //         email: 'test@test.com',
  //         password: '123456',
  //       },
  //     }),
  //   })
  //     // .then((response) => {
  //     //   console.log('BUFFFFFF');
  //     //   for (var pair of Object.entries(response.headers)) {
  //     //     console.log('BLARG');
  //     //     console.log(pair[0] + ': ' + pair[1]);
  //     //     console.log('POOP');
  //     //     if (pair[0] === 'Authorization') {
  //     //       setAuthToken(pair[1]);
  //     //     }
  //     //   }
  //     //   return response.json();
  //     // })
  //     // .then((json) => {
  //     //   for (let pair of Object.entries(json.headers)) {
  //     //     console.log('BLARG');
  //     //     console.log(pair[0] + ': ' + pair[1]);
  //     //     console.log('POOP');
  //     //     debugger;
  //     //     if (pair[0] === 'Authorization') {
  //     //       const blarg = pair[1];
  //     //       debugger;
  //     //       setAuthToken('jhkjhk');
  //     //     }
  //     //   }
  //     //   setAuthToken(json.headers.get('Authorization'));
  //     //   console.log(JSON.stringify({ thisBeTest: 'BIFF' }));
  //     //   console.log(JSON.stringify(json));
  //     //   console.log('authToken', authToken);
  //     // })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(JSON.stringify(json));
  //     })
  //     .catch((error) => {
  //       console.log('ERROR LOGIN', error);
  //     })
  //     .finally();
  // };

  // const logOut = () => {
  //   fetch('http://localhost:5000/api/logout', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       user: {
  //         email: 'test@test.com',
  //         password: '123456',
  //       },
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       console.log(JSON.stringify(responseData));
  //     })
  //     .finally();
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Rufferal</Text>
      <Text style={styles.instructions}>Authentication Playground</Text>

      <RLogInForm />
      {/* <GetUsers />
      <GetUser /> */}
      {/* TESTING SIGNUP (POST) */}
      {/* <View style={styles.buttonPadding}>
        <RButton title="sign up" onPress={() => signUp()} />
      </View> */}
      {/* TESTING LOGIN (POST) */}
      {/* <View style={styles.buttonPadding}>
        <RButton title="log in" onPress={() => logIn()} />
      </View> */}
      {/* TESTING LOGIN (POST) */}
      {/* <View style={styles.buttonPadding}>
        <RButton title="log out" onPress={() => logOut()} />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  buttonPadding: {
    marginTop: 10,
    marginBottom: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  testingContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 64,
    paddingVertical: 8,
    backgroundColor: '#FC33FF',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
