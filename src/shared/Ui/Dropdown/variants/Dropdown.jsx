import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/Dropdown.module.scss";
import { FaChevronDown } from "react-icons/fa";

/**
 * Базовый дропдаун (только label, стрелочка вниз, список items).
 * Теперь умеет align="left" | "center" | "right".
 */
const Dropdown = ({
    label = "Выберите",
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
                : styles["align-left"]; // По умолчанию left

    return (
        <div className={styles.dropdown} onMouseLeave={closeDropdown}>
            <button
                className={styles.dropdown__toggle}
                onClick={toggleDropdown}
                onBlur={closeDropdown}
            >
                {label} <FaChevronDown style={{ marginLeft: "8px" }} />
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

Dropdown.propTypes = {
    /** Текст кнопки */
    label: PropTypes.string,
    /** Массив пунктов выпадающего списка */
    items: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    ),
    /** Выравнивание меню: left (по умолчанию), center, right */
    align: PropTypes.oneOf(["left", "center", "right"]),
};

export default Dropdown;
