import { View, Text } from 'react-native';
export default function App() {
  return (
    
    <View className="flex-row justify-between gap-5 bg-slate-500 p-5">
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>Movie App</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>☰</Text>
    </View>
  );
}