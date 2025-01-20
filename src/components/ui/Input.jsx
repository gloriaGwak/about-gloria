export default function Input({ name, type, placeholder, errors, register, ...rest }) {
    return (
        <>
            <label htmlFor={name} className="block mt-4 first:mt-0">
                <span className="block capitalize mb-1 font-medium text-base md:text-lg">
                    {name}
                </span>
                {type === 'textarea' ? (
                    <textarea 
                        id={name} 
                        placeholder={placeholder} 
                        {...register(name)}
                        {...rest} 
                        className="w-full h-40 md:h-60 rounded p-3"
                    />
                ) : (
                    <input 
                        type={type} 
                        id={name} 
                        placeholder={placeholder} 
                        {...register(name)}
                        {...rest} 
                        className="w-full h-10 rounded px-3"
                    />
                )}
            </label>
            {errors[name] && (
                <p className="text-red-500 text-sm">{errors[name]?.message}</p>
            )}
        </>
    );
}
