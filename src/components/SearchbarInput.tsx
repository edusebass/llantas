interface Props {
    text: string;
    name: string;
    placeholder: string;
    onChange: (
        event: {
            target: { name: string; value: string }
        }
    ) => void;
    value: string;
}

const SearchbarInput = ({
    text,
    placeholder,
    name,
    onChange,
    value
}: Props) => {
    return (
        <div>
            <h2 className='mt-4'>
                {text}
            </h2>
            <input
                type="number"
                id="search"
                name={name}
                className="py-2 px-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </div>
    )
};

export default SearchbarInput;