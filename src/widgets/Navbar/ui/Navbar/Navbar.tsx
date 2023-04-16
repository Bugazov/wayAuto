import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import logo from 'shared/assets/icons/car-logo.png';
import { useMemo } from 'react';
import { navBarItemsList } from 'widgets/Navbar/model/items';
import { NavbarItem } from 'widgets/Navbar/ui/NavbarItem/NavbarItem';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const itemList = useMemo(() => navBarItemsList.map((item) => (
        <NavbarItem
            item={item}
            key={item.path}
        />
    )), []);

    return (

        <div className='container'>
            <div className={classNames(cls.Navbar, {}, [className])}>
                <div className={cls.logo}>
                    <img className={cls.logo} src={logo} alt="logo"/>
                </div>
                <div className={cls.nav_list}>
                    {itemList}
                </div>
            </div>
        </div>
    );
};
