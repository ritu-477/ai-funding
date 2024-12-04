const Button = ({ text, className }) => {
    return (
        <button className={`sm:text-base text-sm leading-custom-2xl sm:leading-6 font-poppins text-white font-medium bg-ink-blue duration-300 ease-in-out rounded-3xl hover:text-ink-blue hover:bg-white ${className}`}>{text}</button>)
}
export default Button;