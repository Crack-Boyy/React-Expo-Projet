import { Text, View} from 'react-native';
import { s } from '../../App.styles.js';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { FlexDemo } from '../../components/FlexDemo';

export default function HomeScreen() {
return (
<SafeAreaProvider>
<SafeAreaView style={{ flex: 1 }}>


<FlexDemo />
</SafeAreaView>
</SafeAreaProvider>
);
}
