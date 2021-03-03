import "./Button.css";

export default function LoginButton(props) {

	return (
            
            <span style={{border: `3px solid ${props.color}`, color: props.color,}} className="Button">{props.text}
            </span>
	);
}