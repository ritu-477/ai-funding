const Icon = (props) => {
    const IconList = {
        numberOne: (
            <svg width="36" height="42" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="19" r="18" fill="#0E1122" />
                <path d="M17.2378 9.30893L13.7858 9.61764L13.7016 8.80376L19.4829 8.04601H20.802V27.1861H23.4962V28H14.0945V27.1861H17.2378V9.30893Z" fill="white" />
            </svg>

        ),

        doubleArrow: (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="black" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z" />
                <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
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