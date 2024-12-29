import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/IconDropdown.module.scss";
import { FaChevronDown } from "react-icons/fa";

/**
 * Дропдаун с иконкой (react-элемент `icon`) и опциональным `label`.
 * Умеет align="left" | "center" | "right".
 */
const IconDropdown = ({
    icon = null,
    label,
    items = [],
    align = "left", // новинка: выравнивание меню
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const closeDropdown = () => setIsOpen(false);

    // Определяем класс выравнивания
    const alignClass =
        align === "center"
            ? styles["align-center"]
            : align === "right"
                ? styles["align-right"]
                : styles["align-left"]; // default left

    return (
        <div className={styles.dropdown} onMouseLeave={closeDropdown}>
            <button
                className={styles.dropdown__toggle}
                onClick={toggleDropdown}
                onBlur={closeDropdown}
            >
                {icon && <span className={styles.dropdown__icon}>{icon}</span>}
                {label && <span className={styles.dropdown__label}>{label}</span>}
                <FaChevronDown style={{ marginLeft: "8px" }} />
            </button>

            <div
                className={
                    isOpen
                        ? `${styles.dropdown__menu} ${styles.open} ${alignClass}`
                        : `${styles.dropdown__menu} ${alignClass}`
                }
            >
                {items.map((item, index) => (
                    <div key={index} className={styles.dropdown__item}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

IconDropdown.propTypes = {
    /** Иконка (React-элемент) */
    icon: PropTypes.node,
    /** Текст кнопки (необязательный) */
    label: PropTypes.string,
    /** Массив пунктов меню */
    items: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    ),
    /** Выравнивание меню */
    align: PropTypes.oneOf(["left", "center", "right"]),
};

export default IconDropdown;
