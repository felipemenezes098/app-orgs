import { StatusBar, SafeAreaView } from 'react-native';

import Cesta from './src/pages/Cesta/Index';
import mock from './src/mocks/cesta'

export default function App() {

  // const [fonteCarregada] = useFonts({
  //   "MontserratRegular": Montserrat_400Regular,
  //   "MontserratBold": Montserrat_700Bold,
  // });


  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}