import React from 'react';
import PropTypes from 'prop-types';

// Импортируем иконки из библиотеки Material Design
import {
    MdHome,
    MdOutlineNotifications,
    MdOutlineNightlight,
} from 'react-icons/md';

// Импортируем иконки из библиотеки Tabler Icons
import {
    TbBuildings
} from "react-icons/tb";

// Импортируем иконки из библиотеки Grommet-icons
import {
    GrCircleQuestion
} from "react-icons/gr";

// Импортируем иконки из библиотеки Lucide
import {
    LuDoorOpen
} from "react-icons/lu";

// Импортируем иконки из библиотеки Weather Icons
import {
    WiDaySunny
} from "react-icons/wi";

// Карта доступных иконок, сгруппированных по библиотекам. Это возможность:
// 1. Ограничить использование иконок только теми, что одобрены для проекта.
// 2. Централизованно добавлять новые иконки, обеспечивая единообразие стиля.
// 3. Упростить командную работу, исключив произвольное использование иконок.
// 4. Пприсвоить имя иконки понятное для проекта.
const iconMap = {
    md: {
        Masseges: MdOutlineNotifications, // Используется для Уведомлений
        Night: MdOutlineNightlight, // Используется для Темной темы
    },
    tb: {
        Company: TbBuildings, // Используется для Компании
    },
    gr: {
        Reference: GrCircleQuestion, // Используется для Справки
    },
    lu: {
        DoorOpen: LuDoorOpen, // Используется для кнопки Выход
    },
    wi: {
        Day: WiDaySunny, // Используется для Светлой темы
    },
};

/**
 * Компонент Icon предназначен для отрисовки иконок из библиотеки react-icons.
 *
 * Особенности:
 * 1. Упрощает использование иконок в проекте.
 * 2. Работает только с заранее определенными иконками (iconMap).
 * 3. Позволяет кастомизировать стиль, размер и цвет каждой иконки.
 *
 * @param {string} iconName - Название иконки (например, "Company").
 * @param {string} library - Префикс библиотеки (например, "tb"). По умолчанию "md".
 * @param {string} className - Дополнительный CSS-класс для стилизации иконки. Опционально.
 * @param {string} size - Размер иконки (например, "1em", "24px"). По умолчанию "1em".
 * @param {string} color - Цвет иконки (например, "red", "blue"). По умолчанию "inherit".
 */
const Icon = ({ iconName, library = 'md', className = '', size = '1em', color = 'inherit' }) => {
    // Пытаемся найти иконку в iconMap по имени и библиотеке
    const IconComponent = iconMap[library]?.[iconName];

    // Если иконка не найдена, выводим предупреждение в консоль
    if (!IconComponent) {
        console.warn(`Icon "${iconName}" not found in library "${library}".`);
        return null; // Возвращаем null, чтобы не ломать интерфейс
    }

    // Рендерим найденный компонент иконки с переданными параметрами
    return <IconComponent className={className} size={size} color={color} />;
};

// Валидация пропсов с использованием PropTypes
// Это помогает:
// 1. Избежать ошибок при передаче параметров.
// 2. Понять, какие параметры ожидаются.
Icon.propTypes = {
    iconName: PropTypes.string.isRequired, // Обязательное имя иконки (например, "Beer")
    library: PropTypes.string,            // Библиотека (например, "fa", "md"). По умолчанию "fa"
    className: PropTypes.string,          // Дополнительные CSS-классы для стилизации
    size: PropTypes.string,               // Размер иконки (например, "1em", "24px")
    color: PropTypes.string,              // Цвет иконки (например, "red", "blue")
};

// Экспорт компонента Icon для использования в других частях проекта
export default Icon;
