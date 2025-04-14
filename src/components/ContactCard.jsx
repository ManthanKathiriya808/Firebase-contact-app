import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import {  deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import AddAndUpdateContact from './AddAndUpdateContact';
import useDisclouse from '../hooks/useDisclouse';
import { toast } from 'react-toastify';
const ContactCard = ({ele}) => {
  const {open,onOpen, setOpen} = useDisclouse()

const deleteContact = async (id)=>{
    try {
        await deleteDoc(doc(db,"contacts",id))
        toast.success("Contact Deleted Successfully")
    } catch (error) {
      console.log(error)  
    }
}

  return (
<>

<div key={ele.id} className="div items-center  rounded-lg  flex justify-between bg-amber-200">
    <div className='flex items-center gap-1 '>
    <FaUserCircle  className='text-orange-700 text-4xl'/>
      <div className=''>
        <h2 className='font-medium'>{ele.name}</h2>
        <p className='text-sm'>{ele.email}</p>
      </div>
    </div>
      <div className='flex items-center text-3xl '>
      <RiEditCircleLine onClick={onOpen} className='cursor-pointer'/>
      <IoMdTrash onClick={()=> deleteContact(ele.id)} className='text-orange-700 cursor-pointer'/>
      </div>
  </div>
    
    <AddAndUpdateContact ele={ele} isUpdate open={open} setOpen={setOpen}/>

</>
  )
}

export default ContactCard
