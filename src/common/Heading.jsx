const Heading = ({ text, className, }) => {
    return (
        <h2 className={`font-semibold abril-semibold lg:text-custom-3xl lg:leading-custom-4xl text-ink-black text-custom-2xl leading-9 ${className}`}>{text}</h2>
    )
}

export default Heading