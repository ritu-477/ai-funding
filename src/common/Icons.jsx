const Icon = (props) => {
    const IconList = {
        numberOne: (
            <svg width="36" height="42" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="19" r="18" fill="#0E1122" />
                <path d="M17.2378 9.30893L13.7858 9.61764L13.7016 8.80376L19.4829 8.04601H20.802V27.1861H23.4962V28H14.0945V27.1861H17.2378V9.30893Z" fill="white" />
            </svg>


          ),

    };

    return (
        <span className={`flex ${props.className}`}>
            {props.iconName && IconList[props.iconName]}
        </span>
    )
}
export default Icon