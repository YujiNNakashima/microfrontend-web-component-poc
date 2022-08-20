import * as React from 'react';


const WebComponentWrapper: React.FC<any> = ({children}) => {
  // const [data, setData] = useState('')

  document.addEventListener('interactionEvent', (e: any) => {
    // setData(e.detail.data)
  })

  return(
    <div>{
      children
    }</div>
  )

} 

export default WebComponentWrapper