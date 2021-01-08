import React from "react";
import { useDispatch } from 'react-redux';
import { CreateUserForm } from "../../components/user/CreateUserForm";
import { addUser } from "../../store/reducers/userReducer";
import MongoClient from "mongodb";

export default function CreateNewUser({ navigation }) {
  const dispatch = useDispatch();
  const onCreate = (user) => {
    createUser(user);
    dispatch(addUser(user));
  };

  //유저 db insert
  const createUser = (user) => {
    // Replace the uri string with your MongoDB deployment's connection string.
    const uri = "mongodb+srv://admin:admin@anygym.iehhm.gcp.mongodb.net/anygym?retryWrites=true&w=majority";

    const client = new MongoClient(uri, { useUnifiedTopology: true });

    async function run() {
      try {
        await client.connect();

        const collection = client.db("development").collection("aguser");
        const result = await collection.insertOne(user);
        console.log(result);
      } finally {
        //close
        await client.close();
      }
    }
    run().catch(console.dir);

  }

  return (
      <CreateUserForm createUser={onCreate} navigation={navigation} />
  );
}
