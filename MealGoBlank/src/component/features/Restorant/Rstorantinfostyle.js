import {styled} from 'styled-components/native'

import {SvgXml} from 'react-native-svg'

export const SectionEnd =styled.View`
flex-direction:row
flex:1
justify-content:flex-end
`

export const Section =styled.View`
flex-direction:row
align-item:center
`


export  const CardCover=styled.Card.Cover`
 padding:${(props)=>props.theme.size[3]}
  backgroundColor:'white'
`
 
export const RatingRow= styled.View `
flex-direction:row
color:${(props)=>props.theme.color.ui.error}
`

 export const Card= styled.Card`
 backgroundColor:'white'
 color:${(props )=>props.theme.color.text.primary}
 padding:${(props)=>props.theme.spacing.space[3]} 
`

export const Info = styled.View`
padding:${(props)=>props.theme.spacing.space[3]} 
`

export const Titile= styled.Text `
backgroundcolor:'blue'
`
export const Address =styled.View`
backgroundcolor:'blue'

`
export const Open= styled(SvgXml)`
flex-direction:row
`
