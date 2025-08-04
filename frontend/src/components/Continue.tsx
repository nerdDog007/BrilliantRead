function Continue({clasName, text, Icon}: {clasName: string, text: string, Icon: React.ElementType}) {
  return (
    <div className={` ${clasName}`}>
        {Icon &&<Icon />}
        <p>{text}</p>
    </div>
  )
}

export default Continue