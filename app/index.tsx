import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import { Button, ButtonText } from '@/components/ui/button';
import { Pressable } from 'react-native';

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        padding: 24,
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 24 }}>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={{
          width: '100%',
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          padding: 12,
          marginBottom: 16,
        }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          width: '100%',
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          padding: 12,
          marginBottom: 16,
        }}
      />
      <Pressable
        onPress={() => setStayLoggedIn(!stayLoggedIn)}
        style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 24 }}
      >
        <View
          style={{
            height: 24,
            width: 24,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 4,
            marginRight: 8,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: stayLoggedIn ? '#007AFF' : '#fff',
          }}
        >
          {stayLoggedIn && (
            <View style={{ width: 12, height: 12, backgroundColor: '#fff', borderRadius: 2 }} />
          )}
        </View>
        <Text>Stay logged in</Text>
      </Pressable>
      <Button
        variant={"solid"}
        size={"xl"}
        className={"w-full p-6 min-h-20"}
        action={"positive"}
      >
        <ButtonText>Login</ButtonText>
      </Button>
    </View>
  );
}
