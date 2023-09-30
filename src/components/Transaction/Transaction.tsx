import { useState } from 'react'
import { toast } from 'react-hot-toast'
import DatePicker from 'react-datepicker'
import { motion } from 'framer-motion'
import { FaRegEdit, FaRegWindowClose } from 'react-icons/fa'
import { RiDeleteBin7Line } from 'react-icons/ri'
import type { Transaction } from '../../types/types'
import Modal from '../Modal/Modal'
import 'react-datepicker/dist/react-datepicker.css'

function Text({ label, children }) {
  return (
    <h1>
      {label}: <span className="text-sky-500">{children}</span>
    </h1>
  )
}

export default function Transaction({
  id,
  date,
  originalDate,
  description,
  originalDescription,
  amount,
  accountName,
}: Transaction) {
  const [showModal, setShowModal] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const handleDelete = () => {
    console.log('deleting transaction')
    setShowModal(false)
  }

  const handleCancelModel = () => {
    setShowModal(false)
  }

  return (
    <motion.li layout key={id} className="flex-col p-5 rounded-lg bg-stone-950">
      <div className="flex justify-between gap-2">
        {isEditing ? (
          <>
            Date: <DatePicker selected={new Date(date)} />
          </>
        ) : (
          <Text label="Date">{date}</Text>
        )}
        <Text label="Amount">${amount}</Text>
      </div>
      <Text label="Description">{description}</Text>
      {isEditing && (
        <div>
          <Text label="Original Date">{originalDate}</Text>
          <Text label="Original Description">{originalDescription}</Text>
        </div>
      )}
      <div className="flex justify-between">
        <Text label="Account Name">{accountName}</Text>
        <div className="flex items-center gap-2 justify-end">
          {isEditing ? (
            <button
              className="flex items-center gap-1"
              onClick={() => setIsEditing(false)}
            >
              <FaRegWindowClose />
              Close
            </button>
          ) : (
            <button
              className="flex items-center gap-1"
              onClick={() => setIsEditing(true)}
            >
              <FaRegEdit />
              Edit
            </button>
          )}
          <button
            className="flex items-center gap-1 text-red-500"
            onClick={() => setShowModal(true)}
          >
            <RiDeleteBin7Line />
            Delete
          </button>
        </div>
      </div>
      {showModal && (
        <Modal onDelete={handleDelete} onCancel={handleCancelModel} />
      )}
    </motion.li>
  )
}
