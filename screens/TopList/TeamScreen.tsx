import firestore from '@react-native-firebase/firestore';
import { useFocusEffect } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'

import { Context as LeagueContext } from '../../context/LeagueContext'


interface TeamScreenProps {

}

const TeamScreen: React.FC<TeamScreenProps> = (props) => {
    // Global State
    const { state } = useContext(LeagueContext);
    const { tournament } = state;


    useFocusEffect(
        React.useCallback(() => {
            // console.log(state,'useFocusEffect') 
        }, [])
    )

    useEffect(() => {
        // console.log(state, 'useEffect')
        return () => {
            const db = firestore();
            db.settings({ host: 'localhost:8080', ssl: false });
            const leagueRef = db.collection("leagues");
            const countriyRef = leagueRef.doc('Türkiye - Süper Lig');
            const teamRef = countriyRef.collection('Galatasaray SK');
            // db.collection('leagues').where('id','==','sr:competition:52')
            // db.collection("leagues").doc("Türkiye - Süper Lig").collection('Galatasaray SK').limit(10)
            // db.collection("leagues").doc("suha").collection('suha').path()
            // db.collection("leagues/suha/suha")
            // const myCollection = db.collection("leagues").where('id','==','sr:competition:52')
            db.collection("leagues").doc("Türkiye - Süper Lig").collection('Galatasaray SK').doc('221096').get({source:'server'}).then((querySnapshot) => {
                console.log(querySnapshot.data())
                // console.log(querySnapshot)

            }).catch(err => {
                console.log(err)
            })
            // db.collectionGroup('Galatasaray SK').get().then((querySnapshot) => {
            //     console.log(querySnapshot.empty)
            //     // console.log(querySnapshot)

            // }).catch(err => {
            //     console.log(err)
            // })

            teamRef.get({source:'server'})
                .then(querySnapshot => {
                    // console.log(querySnapshot);
                    // console.log('Total leagues: ', querySnapshot.size);
                    console.log(querySnapshot.docs);
                    querySnapshot.forEach(documentSnapshot => {
                        // console.log(documentSnapshot.get('suha'))
                        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                    });
                }).catch(err => {
                    console.log(err)
                });
        };
    }, [])

    return (
        <View>
            <Text>TeamScreen</Text>
        </View>)
}

export default TeamScreen