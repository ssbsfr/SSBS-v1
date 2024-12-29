// src/widgets/Header/variants/Header.jsx
import "../styles/Header.scss";
import Dropdown from "@/shared/Ui/Dropdown/variants/Dropdown";
import IconDropdown from "@/shared/Ui/Dropdown/variants/IconDropdown";
import WorkStatusDropdown from "@/features/WorkStatus/ui/WorkStatusDropdown";
import Icon from "@/shared/Ui/Icon/variants/Icon";

export default function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img
                    src="src/widgets/Aside/Image/logossbs.png"
                    alt="Логотип SSBS"
                    className="header__logo"
                />
            </div>

            <div className="header__center">
                <div className="header__center-left">
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
                    />

                    <IconDropdown
                        label="Пользователь"
                        icon={
                            <Icon
                                iconName="Masseges"
                                library="md"
                                size="20px"
                                color="white"
                            />
                        }
                        items={["Профиль", "Настройки"]}
                    />

                    <Dropdown
                        label="Пространство"
                        items={["Проект 1", "Проект 2"]}
                    />
                </div>

                <div className="header__center-right">
                    {/* Наш компонент с часами и статусом */}
                    <WorkStatusDropdown />
                </div>
            </div>

            <div className="header__right">
                <Icon iconName="Masseges" library="md" size="24px" color="white" />
                <Icon iconName="Reference" library="gr" size="24px" color="white" />

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
