
function Button({type, text='Login', onClick}) {
  return (
    <div>
        <button type={type} onClick={onClick} className="px-4 py-2 rounded-2xl bg-blue-600 text-white font-semibold cursor-pointer">
          {text}
          </button>
    </div>
  )
}

export default Button