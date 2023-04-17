import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import logo from 'shared/assets/icons/logo3.png';

import { NavbarItems } from 'widgets/Navbar/ui/NavbarItems/NavbarItems';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    return (

        <div className='container'>
            <div className={classNames(cls.Navbar, {}, [className])}>
                <div className={cls.logo}>
                    <img className={cls.logo} src={logo} alt="logo"/>
                </div>
                <div className={cls.nav_list}>
                    <NavbarItems/>
                </div>
            </div>
        </div>
    );
};
