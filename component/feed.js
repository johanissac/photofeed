import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, FlatList} from 'react-native';
import {f,auth,database,storage} from '../config/config.js'

type Props = {};
export default class feed extends Component<Props>{
    constructor(props){
        super(props);
        this.state = {
            photo_feed : [],
            refresh : false,
            loading : true
        }
    }

    componentDidMount = ()=>{
        this.loadFeed();
    }
    loadFeed = ()=>{
        this.setState({
            refresh : true,
            photo_feed: []
        });

        var that = this;
        database.ref('photos').orderByChild('posted').once('value').then(function(snapshot){
            const exists = (snapshot.val()!== null);
            if(exists) data = snapshot.val();
            var photo_feed = that.state.photo_feed;

            for(var photo in data){
                var photoObj = data[photo];
                database.ref('users').orderByChild(photoObj.author).once('value').then(function(snapshot){
                 photo_feed.push({
                     id:photo,
                     url: photoObj.url,
                     caption: photoObj.caption,
                     posted: photoObj.posted,
                     author: data.username,
                 });
                    that.setState({
                        refresh: false,
                        loading : false
                    })
                }).catch(error => console.log(error));
            }
        }).catch(error => console.log(error));

        
    }
    

    loadNew = ()=>{
       this.loadFeed();
    }


    render(){
        return(
            <View style={{flex:1}}>
                <View style={{height: 50, justifyContent:"center", alignItems:"center", backgroundColor:"white", borderBottomColor:"lightgrey", borderBottomWidth: .5}}>
                    <Text>Feed</Text>
                </View>
                {this.state.loading == true ? (
                    <View>
                        <Text>
                            Loading..
                        </Text>
                    </View>
                ):(
                    <FlatList
                    refreshing = {this.state.refresh}
                    onRefresh = {this.loadNew}
                    data = {this.state.photo_feed}
                    keyExtractor = {(item,index)=> index.toString}
                    style ={{flex:1}}
                    renderItem = {({item,index})=>(
                        <View key={index}>
                            <View style={{flexDirection:"row"}}>
                            <Text>{item.posted}</Text>
                            <Text>{item.author}</Text>
                            </View>
                            <View>
                            <Image source={{uri: item.url}}
                            style={{height:300, resizeMode: "cover", width: "100%"}}/>
                            </View>
                            <View>
                            <Text>{item.caption}</Text>
                            <Text>View Comment</Text>
                            </View>
                        </View>
                    )}
                />
                )}
                
                        
                
                
                
            </View>
        )
    }
}