interface IProp {
	text: string;
}

const ButtonAction = ({ text }: IProp) => {
	return <button className="bg-degrad-global px-5 py-1 rounded-md ">{text}</button>;
};

export default ButtonAction;
