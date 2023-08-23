import React,{useState} from 'react'
import Modal from './Modal'
import ContactForm from './ContactForm'
import Card from './Card'
import { useAppSelector,useAppDispatch } from '../store/hooks'
import { add } from '../store/counterSlice'
const Home = () => {
    const dispatch=useAppDispatch()
    const [open, setopen] = useState<boolean>(false)
  return (
    <div className="flex flex-col  ">
    <button  className="mx-auto my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {setopen(false)}}>
      Create Contact
    </button>
    <Modal open={open} onClose={() => setopen(false)}>
      <div className="text-center">
        <ContactForm />
      </div>
    </Modal>
    <div className="flex flex-wrap m-4">
    <Card/>
  </div>
  </div>
  
  )
}

export default Home