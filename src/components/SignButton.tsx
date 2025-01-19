export default function SignButton(props) {
    return (
        <div className="d-flex justify-content-between mt-4">
            {props.buttons.map((button, index) => (
                <button
                    key={index}
                    type={button.type || 'button'}
                    className={button.className}
                    id={button.id}
                    onClick={button.onClick}
                >
                    {button.label}
                </button>
            ))}
        </div>
    )
}