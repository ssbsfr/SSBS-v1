import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/AvatarDropdown.module.scss";
import { FaChevronDown } from "react-icons/fa";
import Icon from "@/shared/Ui/Icon/variants/Icon";

/**
 * Дропдаун с аватаркой (или fallback-иконкой) + label.
 * Умеет align="left" | "center" | "right".
 */
const AvatarDropdown = ({
    avatar = null,
    label = "Пользователь",
    items = [],
    avatarSize = "24px",
    align = "left", // новинка: выравнивание
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const closeDropdown = () => setIsOpen(false);

    // Если avatar не передан, отображаем fallback-иконку
    const fallbackAvatar = (
        <Icon
            iconName="Masseges" // пример, лучше добавить что-то вроде "User"
            library="md"
            size={avatarSize}
            color="white"
        />
    );

    const avatarElement = avatar ? (
        <div
            className={styles.dropdown__avatarWrapper}
            style={{ width: avatarSize, height: avatarSize }}
        >
            {avatar}
        </div>
    ) : (
        fallbackAvatar
    );

    // Определяем класс выравнивания
    const alignClass =
        align === "center"
            ? styles["align-center"]
            : align === "right"
                ? styles["align-right"]
                : styles["align-left"];

    return (
        <div className={styles.dropdown} onMouseLeave={closeDropdown}>
            <button
                className={styles.dropdown__toggle}
                onClick={toggleDropdown}
                onBlur={closeDropdown}
            >
                <span className={styles.dropdown__avatar}>{avatarElement}</span>
                {label}
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

AvatarDropdown.propTypes = {
    avatar: PropTypes.node,
    label: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    ),
    avatarSize: PropTypes.string,
    /** Выравнивание меню */
    align: PropTypes.oneOf(["left", "center", "right"]),
};

export default AvatarDropdown;
