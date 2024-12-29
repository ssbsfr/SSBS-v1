import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/IconDropdown.module.scss";
import { FaChevronDown } from "react-icons/fa";

/**
 * Компонент IconDropdown
 * Аналог Dropdown, но позволяет вставлять иконку (React-элемент) перед label.
 */
const IconDropdown = ({
    icon = null,
    label = "Выберите",
    items = [],
    linkText = "Подробнее",
    linkHref = "#",
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div
            className={styles.dropdown}
            onMouseLeave={closeDropdown}
        >
            {/* Кнопка для открытия/закрытия меню */}
            <button
                className={styles.dropdown__toggle}
                onClick={toggleDropdown}
                onBlur={closeDropdown}
            >
                {/* Иконка, если передана */}
                {icon && <span className={styles.dropdown__icon}>{icon}</span>}
                {label}
                <FaChevronDown style={{ marginLeft: "8px" }} />
            </button>

            {/* Меню дропдауна */}
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

IconDropdown.propTypes = {
    /** Иконка (React-элемент), которая будет отображаться перед label */
    icon: PropTypes.node,
    /** Текст на кнопке */
    label: PropTypes.string,
    /** Массив пунктов */
    items: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
    ])),
    /** Текст ссылки внизу дропдауна */
    linkText: PropTypes.string,
    /** URL для ссылки */
    linkHref: PropTypes.string,
};

export default IconDropdown;
