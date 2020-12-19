import React from "react";
import { useDispatch } from 'react-redux';
import { CreateUserForm } from "../../components/user/CreateUserForm";
import { addUser } from "../../store/reducers/userReducer";

export default function CreateNewUser({ navigation }) {
  const dispatch = useDispatch();
  const onCreate = (user) => dispatch(addUser(user));

  return (
      <CreateUserForm createUser={onCreate}/>
  );
}
