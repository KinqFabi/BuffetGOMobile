import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button, ButtonText } from '@/components/ui/button';
import { Input, InputField } from '@/components/ui/input';
import { Checkbox, CheckboxLabel, CheckboxIcon,  CheckboxIndicator } from '@/components/ui/checkbox';
import { FormControl, FormControlLabel, FormControlLabelText } from '@/components/ui/form-control';
import { CheckIcon } from "@/components/ui/icon"
import { LinearGradient } from "expo-linear-gradient"

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  return (
      <LinearGradient
          style={{flex: 1}}
      colors={["#ff9933", "#ffcc99"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      >
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
      <FormControl className="w-full mb-4">
        <FormControlLabel>
          <FormControlLabelText>Email</FormControlLabelText>
        </FormControlLabel>
        <Input size="xl">
          <InputField
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </Input>
      </FormControl>
      <FormControl className="w-full mb-4">
        <FormControlLabel>
          <FormControlLabelText>Password</FormControlLabelText>
        </FormControlLabel>
        <Input size="xl">
          <InputField
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </Input>
      </FormControl>
        <Checkbox value={"true"} size="lg" isInvalid={false} isDisabled={false}>
            <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Label</CheckboxLabel>
        </Checkbox>
      <Button
        variant={"solid"}
        size={"xl"}
        className={"w-full "}
        action={"primary"}
        style={{height: 50}}
      >
        <ButtonText>Login</ButtonText>
      </Button>
    </View>
      </LinearGradient>
  );
}
