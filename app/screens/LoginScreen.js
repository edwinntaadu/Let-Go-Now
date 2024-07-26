import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {AppForm, AppFormField, SubmitButton} from '../components/forms';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

function LoginScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image
             style={styles.logo}
             source={require("../assets/logo-red.png")} />
             <AppForm
              initialValues={{email: '', password: ''}}
              onSubmit={values => console.log(values)}
              validationSchema={validationSchema}
             >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    textContentType="password"
                />
                <SubmitButton title="Login"/>
             </AppForm>           
        </Screen>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
    container: {
        padding: 10
    }
})

export default LoginScreen;