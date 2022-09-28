import './App.css'
import '../../react-app-as-webcomponent/src/App'
import { useRef, useState, useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "standalone-component": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

function App() {
  const [data, setData] = useState('')
  const ref = useRef(null);

  console.log(ref)
  useEffect(() => {
    const element: any = ref.current;
    // console.log(element)
    const callbk = (e: any) => {
      // console.log(e)
      setData(e.detail.data)
    }
    element.addEventListener('interactionEvent', callbk)

    return () => {
      element?.removeEventListener('interactionEvent', callbk);
    };
  }, [])

  return (
      <div>
        Componente Host
        
        <standalone-component ref={ref} dataFromParent={JSON.stringify({data: 'heeeey'})}></standalone-component>

        <p>{data}</p>
      </div>       
  )
}

export default App
