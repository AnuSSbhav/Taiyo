import React,{useState} from 'react'
import Modal from './contact/Modal'
import ContactForm from './contact/ContactForm'
import Card from './contact/Card'
import { useAppSelector,useAppDispatch } from '../store/hooks'
import { add } from '../store/counterSlice'
import { CounterState } from '../utils'
const Home = () => {
    const dispatch=useAppDispatch()
    const count = useAppSelector((state) => state.users)
    const [open, setopen] = useState<boolean>(false)
    const [id, setid] = useState<CounterState|null>(null)
   // console.log(count,"cp")

    const openEdit=(item:CounterState)=>{
setid(item)
setopen(true)
    }
  return (
    <div className="flex flex-col  ">
    <button  className="mx-auto my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {setopen(true)}}>
      Create Contact
    </button>
    <Modal open={open} onClose={() => setopen(false)}>
      <div className="text-center">
        <ContactForm item={id}/>
      </div>
    </Modal>
    <div className="flex flex-wrap m-4">
  {count.length === 0 ? (
    <h1 className='flex justify-center  w-full h-screen text-center'>No Data</h1>
  ) : (
    count.map(item => <Card key={item.id} item={item} openEdit={openEdit} />) // Don't forget to add a key prop to Card when mapping
  )}
</div>

  </div>
  
  )
}

export default Home