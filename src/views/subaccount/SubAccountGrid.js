import React, { useEffect, useContext, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { ListItem, SearchBar }from "react-native-elements"
//import CustomTabNavigator from "../../components/CustomTabNavigator/CustomTabNavigator";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { Context as SubAccountContext } from '../../context/SubAccountContext';
import { Feather, AntDesign } from '@expo/vector-icons';
import { navigate } from './../../navigationRef';
const SubAccountGrid = ({ navigation }) => {

    const { state, deleteSubAccount } = useContext(SubAccountContext);
    const [search, setSearch] = useState('')
    const [list, setList] = useState([])
    useEffect(() => {
        state.then((data) => {
            setList(data)
        })
    }, [state]);
    return (
        <View style={{ flex: 1 }}>
            <CustomHeader 
            navigation={navigation}
            title="Sub Account"
            style={{ marginTop: 15 }}>
            </CustomHeader>
            <SearchBar
                placeholder="Type Here..."
                platform="ios"
                lightTheme={true}
                round={true}
                showCancel={true}
                cancelIcon={true}
                onChangeText={()=>setSearch(search)}
                value={search}
            />
            {
                list.map((item) => (
                    <ListItem
                        key={item._id}
                        title={item.SubAcct}
                        subtitle={item.SubGroup}
                        leftIcon={{ name: item.icon }}
                        onPress={() => navigate('SubAccountShow', { id: item._id })}
                        bottomDivider
                        chevron
                    />
                ))
            }

            <TouchableOpacity
                onPress={() => navigate('SubAccountCreate')}
                style={{ position: 'absolute', bottom: 30, right: 20 }}>
                <AntDesign
                    name="addfile"
                    size={50}
                    style={{ backgroundColor: '#102E52', color: '#fff', borderRadius: 50, padding: 10, }}
                />
            </TouchableOpacity>
            {/* <CustomTabNavigator navigation={this.props.navigation} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingVertical: 20
    },
    title: {
        fontSize: 18
    },
    icons: {
        fontSize: 24
    }

})
export default SubAccountGrid;







{/* <FlatList
data={list}
keyExtractor={(subaccount) => subaccount._id && subaccount._id.toString()}
renderItem={({ item }) => {
    return (
        <TouchableOpacity onPress={() => navigate('SubAccountShow', { id: item._id })} >
            <View style={styles.row}>
                <Text style={styles.title}>{item.SubAcct}</Text>
                <Text style={styles.title}>{item.SubDesc}</Text>
                <Text style={styles.title}>{item.SubGroup}</Text>
                <Text style={styles.title}>{item.Active}</Text>
                <TouchableOpacity onPress={() => deleteSubAccount(item._id)}>
                    <Feather name="trash" style={styles.icons} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}}
/> */}