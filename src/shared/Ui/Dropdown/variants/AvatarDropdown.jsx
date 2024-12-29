import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/AvatarDropdown.module.scss";
import { FaChevronDown } from "react-icons/fa";

// Импортируем ваш универсальный Icon (чтобы использовать как fallback)
import Icon from "@/shared/Ui/Icon/variants/Icon";

/**
 * Компонент AvatarDropdown.
 * Если avatar не передан, используем по умолчанию иконку (например, пользователь).
 */
const AvatarDropdown = ({
    avatar = null,             // Можно передать <img src="..." alt="..." />, <Icon />, любой React-элемент
    label = "Пользователь",    // Текст рядом с аватаркой
    items = [],
    linkText = "Выход",
    linkHref = "#",
    // Допустим, мы хотим опционально менять размер (например, 32px), если Avatar — картинка
    avatarSize = "24px",
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    // Если не передан avatar, используем ваш компонент Icon
    // Предположим, что в Icon.jsx есть, например, "User" или "Company" 
    // – выберите подходящую иконку. Допустим, library="md", iconName="Masseges" — не совсем про юзера,
    // но для примера можно добавить в iconMap что-то вроде "UserIcon".
    const fallbackAvatar = (
        <Icon
            iconName="UserCircle" // или другой "UserIcon", если в iconMap добавите
            library="pi"
            size={avatarSize}
            color="white"
        />
    );

    // Фактический элемент, который отрендерим слева от label
    const avatarElement = avatar ? (
        // Если передана картинка, можно обернуть стилями или просто отрендерить "как есть"
        <div
            className={styles.dropdown__avatarWrapper}
            style={{ width: avatarSize, height: avatarSize }}
        >
            {avatar}
        </div>
    ) : (
        fallbackAvatar
    );

    return (
        <div
            className={styles.dropdown}
            onMouseLeave={closeDropdown}
        >
            <button
                className={styles.dropdown__toggle}
                onClick={toggleDropdown}
                onBlur={closeDropdown}
            >
                {/* Аватар или дефолтная иконка */}
                <span className={styles.dropdown__avatar}>{avatarElement}</span>
                {/* Label (текст) */}
                {label}
                {/* Стрелочка вниз */}
                <FaChevronDown style={{ marginLeft: "8px" }} />
            </button>

            <div
                className={
                    isOpen
                        ? `${styles.dropdown__menu} ${styles.open}`
                        : styles.dropdown__menu
                }
            >
                {items.map((item, index) => (
                    <div key={index} className={styles.dropdown__item}>
                        {item}
                    </div>
                ))}

                <hr className={styles.dropdown__divider} />

                <a href={linkHref} className={styles.dropdown__link}>
                    {linkText}
                </a>
            </div>
        </div>
    );
};

AvatarDropdown.propTypes = {
    /** Аватарка (React-элемент) либо null (тогда рисуем fallback-иконку) */
    avatar: PropTypes.node,
    /** Текст кнопки */
    label: PropTypes.string,
    /** Массив элементов меню */
    items: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
    ])),
    /** Текст ссылки внизу дропдауна */
    linkText: PropTypes.string,
    /** URL для ссылки */
    linkHref: PropTypes.string,
    /** Размер аватарки (картинки или иконки) */
    avatarSize: PropTypes.string,
};

export default AvatarDropdown;
