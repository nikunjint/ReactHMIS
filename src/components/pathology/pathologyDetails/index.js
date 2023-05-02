import React from 'react'
import { useParams } from 'react-router';
import PatientInfo from './PatientInfo';
import CollectType from './CollectType';

const Index=()=>{
    const { slug, id } = useParams();
    console.log('slug',slug,id)
    return(
        <div>
            <div>
                <PatientInfo/>
            </div>
            <div>
                <CollectType/>
            </div>
        </div>
    )
}
export default Index