const Header = ({ children }) => <header className="lg:flex justify-between">{children}</header>;
Header.TextContainer = ({ children }) => <div className="lg:max-w-[720px]">{children}</div>;
Header.ButtonContainer = ({ children }) => (
	<div className="mt-4 lg:mt-0 lg:mr-8 lg:self-end lg:justify-end">{children}</div>
);

export default Header;
