import "./Button.css";

export default function LoginButton(props) {

	return (
            
            <button style={{border: `3px solid ${props.color}`, color: props.color}} className="Button">{props.text}
            </button>
	);
}