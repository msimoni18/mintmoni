export default function Modal({ onDelete, onCancel }) {
  return (
    <div
      className="fixed inset-0 m-auto w-1/2 h-28 bg-stone-500 p-2 rounded-lg"
      style={{
        border: '2px solid white',
      }}
    >
      <p>Are you sure you want to delete this transaction?</p>
      <div className="flex justify-end gap-2">
        <button className="border p-2 rounded-lg" onClick={onDelete}>
          Delete
        </button>
        <button className="border p-2 rounded-lg" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  )
}
