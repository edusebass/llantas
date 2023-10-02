interface Props  {
    text: string;
    onClick: () => void;
    type?: 'button' | 'submit';
    className?: string;
}

const Button = ({
    text,
    type='button',
    className,
    onClick
}: Props ) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`mx-auto w-2/3 py-3 text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-200 font-bold rounded-lg text-md mt-6 uppercase ${className}`}
        >
            {text}
        </button>
    )
}

export default Button