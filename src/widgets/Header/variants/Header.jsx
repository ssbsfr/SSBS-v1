// src/widgets/Header/variants/Header.jsx

import "../styles/Header.scss"; // Глобальные стили для Header
import Icon from "@/shared/Ui/Icon/variants/Icon";

// Компоненты дропдаунов
import Dropdown from "@/shared/Ui/Dropdown/variants/Dropdown";       // Базовый дропдаун
import IconDropdown from "@/shared/Ui/Dropdown/variants/IconDropdown"; // Дропдаун с иконкой
// import AvatarDropdown from "@/shared/Ui/Dropdown/variants/AvatarDropdown"; // (Если понадобится)

/**
 * Компонент Header отвечает за отображение шапки сайта.
 */
export default function Header() {
    return (
        <div className="header">
            {/* Левая часть шапки */}
            <div className="header__left">
                <img
                    src="src/widgets/Aside/Image/logossbs.png"
                    alt="Логотип SSBS"
                    className="header__logo"
                />
            </div>

            {/* Центральная часть */}
            <div className="header__center">
                {/* Левый центральный блок с дропдаунами */}
                <div className="header__center-left">

                    {/* 1) "Компания" - IconDropdown c текстом и иконкой */}
                    <IconDropdown
                        label="Компания"
                        icon={
                            <Icon
                                iconName="Company"
                                library="tb"
                                size="20px"
                                color="white"
                            />
                        }
                        items={["Пункт 1", "Пункт 2", "Пункт 3"]}
                        align="left" // По умолчанию. Можно и не указывать
                    />

                    {/* 2) "Пользователь" - тоже IconDropdown c текстом и иконкой */}
                    <IconDropdown
                        label="Пользователь"
                        icon={
                            <Icon
                                iconName="Masseges" // Или любую другую, например, "User"
                                library="md"
                                size="20px"
                                color="white"
                            />
                        }
                        items={["Профиль", "Настройки"]}
                        align="left"
                    />

                    {/* 3) "Пространство" - простой Dropdown (только текст + стрелка) */}
                    <Dropdown
                        label="Пространство"
                        items={["Проект 1", "Проект 2"]}
                        align="left"
                    />

                </div>

                {/* Правый центральный блок с дропдауном */}
                <div className="header__center-right">
                    {/* 4) "Статус работы" - тоже простой Dropdown */}
                    <Dropdown
                        label="Статус работы"
                        items={["Активен", "Отключен"]}
                        align="right"
                    />
                </div>
            </div>

            {/* Правая часть хедера */}
            <div className="header__right">
                {/* Оставляем эти иконки как есть: просто иконки без меню */}
                <Icon
                    iconName="Masseges"
                    library="md"
                    size="24px"
                    color="white"
                />
                <Icon
                    iconName="Reference"
                    library="gr"
                    size="24px"
                    color="white"
                />

                {/*
                  5) Два дропдауна (Night, DoorOpen) без label, 
                     но с align="right", 
                     чтобы меню раскрывалось справа-налево
                */}
                <IconDropdown
                    icon={
                        <Icon
                            iconName="Night"
                            library="md"
                            size="24px"
                            color="white"
                        />
                    }
                    items={["Включить", "Выключить"]}
                    align="right"
                />

                <IconDropdown
                    icon={
                        <Icon
                            iconName="DoorOpen"
                            library="lu"
                            size="24px"
                            color="white"
                        />
                    }
                    items={["Уйти", "Остаться"]}
                    align="right"
                />
            </div>
        </div>
    );
}
