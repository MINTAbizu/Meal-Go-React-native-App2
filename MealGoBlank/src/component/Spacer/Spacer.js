import React from "react";

import { View } from "react-native";

import styled from 'styled-components/native'

const  TopMedium=styled(View)`
marginTop:4px
`
const  TopSmall=styled(View)`
marginTop:8px
`
const  TopLarge=styled(View)`
marginTop:16px
`

export const Spacer =({Varieant})=>{

    if(Varieant === "Top.small"){
        return <TopSmall/>
    }
     if(Varieant === "Top.medium"){
        return <TopMedium/>
    }
     if(Varieant === "Top.large"){
        return <TopLarge/>
    }

}