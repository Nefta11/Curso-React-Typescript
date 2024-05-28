import Counter from "./components/Counter"
import CounterWithHook from "./components/CounterWithHook"
import { BasicTypes } from "./typescript"
import BasicFunctions from "./typescript/BasicFunctions"
import ObjectLiterals from "./typescript/ObjectLiterals"

function App() {

  return (
    <main>
<h1>Introduccion a TS - React</h1>
<BasicTypes/>
<br />
<br />
<ObjectLiterals/>
<br />


<BasicFunctions/>
<br />

<Counter/>

<CounterWithHook/>
    </main>
  )
}

export default App
