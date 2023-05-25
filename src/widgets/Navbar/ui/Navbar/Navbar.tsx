import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import logo from '@/shared/assets/icons/logo3.png';

import { NavbarItems } from '@/widgets/Navbar/ui/NavbarItems/NavbarItems';
import { useNavigate } from 'react-router-dom';
import { Container } from '@/shared/ui/Container/Container';
import { HStack } from '@/shared/ui/Stack';
import { Icon } from '@/shared/ui/Icon/Icon';
import MenuIcon from '@/shared/assets/icons/menu.svg';
import { Popover } from '@/shared/ui/Popups';
import { MenuButton } from '@/features/MenuButton';

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
            <Container>
                <div className={classNames(cls.Navbar, {}, [className])}>
                    <HStack>
                        <MenuButton/>
                        <div onClick={onChangeLink} className={cls.logo}>
                            <img className={cls.logo} src={logo} alt="logo"/>
                        </div>
                    </HStack>
                    <div className={cls.nav_list}>
                        <NavbarItems/>
                    </div>
                </div>
            </Container>
        </div>
    );
};
