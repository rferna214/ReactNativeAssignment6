import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
const database = require('../../components/Handlers/database.js');


const Group = props => {

    const post = props.post;
    const navigation = useNavigation();


    const onPress = () => {
        if (post.contact_id){
            try {
                database.addContactGroups(post.contact_id, post.id);
            } catch (error) {
                console.log('Error adding contact group ' + error);
            }
            alert('Group added to contact!');
            navigation.navigate('Go To Contacts!');
        } else {
            console.log(post.name);
        }
        
    }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={onPress}>
            <View style={{flex: 2}}>
                <Text style={styles.name} numberOfLines={1}>{post.name}</Text>
                <Text style={styles.description} numberOfLines={1}>{post.description}</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default Group;