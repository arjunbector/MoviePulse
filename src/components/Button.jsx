
const Button = (props) => {
  return (
    <button className="hover:cursor-pointer px-2 py-1 rounded-xl">
      {props.text}
    </button>
  )
}

export default Button
