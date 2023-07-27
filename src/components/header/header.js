import style from './header.module.scss';

const Header = () => {
    return (
        <header className={style.header}>
            <h2 className={style.h2}>Pc Shop</h2>
            <button className={style.button}>Pannier <i class="fa-solid fa-cart-shopping"></i></button>
        </header>
        );
    
};

export default Header;