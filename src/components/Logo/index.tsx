import './Logo.css';

interface LogoProps {
    className?: string;
};

const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        <h1 className={`Logo ${className ?? ''}`}>DolceMika</h1>
    );
};

export default Logo;
