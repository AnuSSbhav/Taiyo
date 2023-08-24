import React,{useEffect,useState,FC} from 'react'
import { useAppDispatch } from '../../store/hooks'
import { add,editItem} from '../../store/counterSlice';
import { CounterState } from '../../utils';
type formData={
firstName:string;
lastName:string;
status:string;

}

interface CardProps {
  item: CounterState|null;
 
}

const ContactForm:FC<CardProps> = ({item}) => {
  const [formValues, setFormValues] = useState<formData>({
    firstName:item?.firstName ?? '',
    lastName:item?.lastName ?? '',
    status: item?.status??'',

  });
  useEffect(() => {
   setFormValues({
    firstName:item?.firstName ?? '',
    lastName:item?.lastName ?? '',
    status: item?.status??'',

  })
  }, [item])
  

  console.log(formValues,"fv")
    const dispatch=useAppDispatch()
    const handleForm=(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
    
       if(item?.id)
       {
        dispatch(editItem({...formValues,id:item.id }))
       }
       else{
        dispatch(add({...formValues,id: Math.ceil(Math.random()*100)}))
       }
       
       setFormValues({firstName: '',
       lastName: '',
       status: '',
      })
    }

   // console.log(item,"item")
    const handleFieldChange = (key: string, value: string) => {
      const updatedValues = {
        ...formValues,
        [key]: value,
      };
    
      setFormValues(updatedValues);
    };
   // console.log((formValues?.firstName.length===0 ),( formValues.lastName.length===0),( formValues.status===''),formValues.firstName,formValues.lastName,formValues.status)

  return (
    <div className="w-full max-w-xs">
    <form onSubmit={handleForm} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className='mb-4 text-gray-700 text-xl font-bold '>{item?.id? "Update Contact Form":'Create Contact Form'}</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
         First Name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name" value={formValues.firstName || ''} onChange={(e)=>handleFieldChange('firstName',e.target.value)}/>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Last Name
        </label>
        <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Last Name" value={formValues.lastName || ''} onChange={(e)=>handleFieldChange('lastName',e.target.value)}/>
      </div>
      <div className='flex'>
  <label className="block text-gray-700 text-sm font-bold mt-5 mr-4" htmlFor="username">
    Status
  </label>
  <div className='flex flex-col'>
    <div className="flex items-center mb-4">
      <input
        id="inactive"
        type="radio"
        value="inactive"
        name="status"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onChange={(e)=>handleFieldChange('status',e.target.value)}
      />
      <label htmlFor="inactive" className="ml-2 text-sm font-medium text-gray-900">
        Inactive
      </label>
    </div>
    <div className="flex items-center mb-4">
      <input
        id="active"
        type="radio"
        value="active"
        name="status"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onChange={(e)=>handleFieldChange('status',e.target.value)}
      />
      <label htmlFor="active" className="ml-2 text-sm font-medium text-gray-900">
        Active
      </label>
    </div>
  </div>
</div>
      <div className="mx-auto">
        <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
        disabled={(formValues?.firstName.length===0 || formValues.lastName.length===0 || formValues.status.length===0)}>
          Save
        </button>
        
      </div>
    </form>
 
  </div>
  )
}

export default ContactForm