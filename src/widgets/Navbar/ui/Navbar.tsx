import { classNames } from 'shared/lib/classNames/classNames';
import './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    return <div className={classNames('Navbar', {}, [className])}></div>;
};
