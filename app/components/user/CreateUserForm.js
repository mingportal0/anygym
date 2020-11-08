import React from 'react';
import { View, Text, Button } from 'react-native';

export const CreateUserForm = ({ oncreateUser, onLogin }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Create User</Text>
      <Button title="Create user" onPress={oncreateUser} />
      <Button title="Log in 으로 이동" onPress={onLogin} />
    </View>
  );
};