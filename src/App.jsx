import { useState, useCallback, useEffect, useRef } from "react"

function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charaAllowed,setCharaAllowed] = useState(false);
  const [password,setPassword] = useState("");

  //use refHook
  const passwordRef = useRef(null)

  const passwordGenerator =useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str+="0123456789"
    if(charaAllowed) str+="~!@#$%^&*()"

    for (let i = 1 ; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length,numberAllowed,charaAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)
  } ,[password])

  useEffect(()=>{
    passwordGenerator()
  },[numberAllowed,charaAllowed,length,passwordGenerator])
  // passwordGenerator()

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-700 text-center' >
        <h1 className='text-white text-center py-1'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-3 py-3'>
            <input 
              type="text"
              value={password} 
              placeholder="Password"
              readOnly
              className='outline-none w-full py-1 px-3 rounded-md mx-2'
              ref={passwordRef}
              />
              <button className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 rounded-md'
              onClick={copyPasswordToClipboard} >
                Copy
              </button>
        </div>

        <div className='flex text-sm gap-x-2 mt-3 pb-5'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(Number(e.target.value))}}
             />
             <label>length : {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={()=>{
                setNumberAllowed((prev)=>!prev)
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
            <input 
              type="checkbox"
              defaultChecked={charaAllowed}
              id="charInput"
              onChange={()=>{
                setCharaAllowed((prev)=>!prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
