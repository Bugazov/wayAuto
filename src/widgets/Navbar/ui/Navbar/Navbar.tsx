import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import logo from 'shared/assets/icons/logo3.png';

import { NavbarItems } from 'widgets/Navbar/ui/NavbarItems/NavbarItems';
import { useNavigate } from 'react-router-dom';
import { Container } from 'shared/ui/Container/Container';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const navgate = useNavigate();

    const onChangeLink = () => {
        navgate('/');
    };

    return (

        <div className={cls.bg_navbar}>
            <Container className='container'>
                <div className={classNames(cls.Navbar, {}, [className])}>
                    <div onClick={onChangeLink} className={cls.logo}>
                        <img className={cls.logo} src={logo} alt="logo"/>
                    </div>
                    <div className={cls.nav_list}>
                        <NavbarItems/>
                    </div>
                </div>
            </Container>
        </div>
    );
};
