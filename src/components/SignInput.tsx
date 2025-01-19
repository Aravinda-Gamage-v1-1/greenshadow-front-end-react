export default function SignInput(props){
    if(props.type === 'select' && props.options.length > 0){
        return (
            <div className='form-group form-group-custom'>
                <span className="input-icon">
                    <i className={props.icon}></i>
                </span>
                <select
                    id={props.id}
                    className='form-control role'
                    required
                    onChange={props.onChange}
                >
                    {props.options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        );
    }

    return (
        <div className='form-group position-relative form-group-custom'>
            <span className= 'input-icon'>
                <i className={props.icon}></i>
            </span>
            <input
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                className={props.className}
                required
                onChange={props.onChange}
            />
        </div>
    );
}