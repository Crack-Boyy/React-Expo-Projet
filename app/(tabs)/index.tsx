import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet, View } from 'react-native';
import { PlatformDetector } from '../../components/PlatformDetector/PlatformDetector';
export default function HomeScreen() {
 return (
 <ParallaxScrollView
 headerImage={<View style={{ flex: 1, backgroundColor: 'transparent' }} />}
 headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}>
 <ThemedView style={styles.titleContainer}>
 <ThemedText type="title">Détection Platform</ThemedText>
 </ThemedView>

 <ThemedView style={styles.stepContainer}>
 <PlatformDetector />
 </ThemedView>
 </ParallaxScrollView>
 );
}
const styles = StyleSheet.create({
 titleContainer: {
    flexDirection: 'row',
 alignItems: 'center',
 gap: 8,
 },
 stepContainer: {
 gap: 8,
 marginBottom: 8,
 },
});