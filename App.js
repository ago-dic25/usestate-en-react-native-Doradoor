import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function MiApp() {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState('');

  return (
    <View style={{ padding: 20, backgroundColor: '#fff', flex: 1 }}>
      
      <Text style={{ fontSize: 24, marginTop: 40, marginBottom: 30 }}>
        Contador App
      </Text>
      
      {/* CONTADOR */}
      <Text style={{ fontSize: 18, marginTop: 20 }}>Contador:</Text>
      <Text style={{ fontSize: 40, marginVertical: 10 }}>{contador}</Text>
      
      <Button title="-" onPress={() => setContador(contador - 1)} />
      <Button title="+" onPress={() => setContador(contador + 1)} />
      
      {/* NOMBRE */}
      <Text style={{ fontSize: 18, marginTop: 30 }}>Tu Nombre:</Text>
      
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
        value={nombre}
        onChangeText={setNombre}
        placeholder="Escribe aquí"
      />
      
      <Button title="Limpiar" onPress={() => setNombre('')} />
      
      {nombre && (
        <Text style={{ marginTop: 20, fontSize: 16 }}>
          ¡Hola, {nombre}!
        </Text>
      )}
      
    </View>
  )
}