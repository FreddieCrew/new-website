interface ButtonProps {
    children: React.ReactNode;
    link?: string;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    disabled?: boolean;
    target?: string;
}