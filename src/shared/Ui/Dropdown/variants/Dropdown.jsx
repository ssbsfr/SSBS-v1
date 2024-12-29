import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/Dropdown.module.scss";
import { FaChevronDown } from "react-icons/fa";
import Icon from "@/shared/Ui/Icon/variants/Icon";

/**
 * Компонент Dropdown (label (Текст) + иконка указатель вниз)
 */
const Dropdown = ({
    label = "Выберите",
    items = [],
    linkText = "Подробнее",
    linkHref = "#",
}) => {
    const [isOpen, setIsOpen] = useState(false);

    // Переключаем состояние на обратное чтоб открыть меню
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Закрываем меню, когда уводим курсор мыши с контейнера
    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        // Используем стили из модуля: styles.dropdown
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
                {/* Добавляем иконку Направление вниз */}
                {label} <FaChevronDown />
            </button>

            {/* Меню дропдауна */}
            <div
                // Если isOpen === true, добавляем класс .open
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

Dropdown.propTypes = {
    label: PropTypes.string,      // Текст кнопки
    items: PropTypes.array,       // Массив пунктов выпадающего списка
    linkText: PropTypes.string,   // Текст ссылки
    linkHref: PropTypes.string,   // URL для ссылки
};

export default Dropdown;
