import "../styles/Header.scss"; // ваши глобальные стили
import Icon from '@/shared/Ui/Icon/variants/Icon';
import Dropdown from '@/shared/Ui/Dropdown/variants/Dropdown';
import IconDropdown from '@/shared/Ui/Dropdown/variants/IconDropdown'; // <-- новый импорт

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
                    {/* ИСПОЛЬЗУЕМ IconDropdown для "Компания" */}
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
                        linkText="Ссылка"
                        linkHref="#"
                    />

                    {/* Остальные дропдауны — как раньше */}
                    <Dropdown
                        label="Пользователь"
                        items={['Профиль', 'Настройки']}
                        linkText="Выход"
                        linkHref="#"
                    />
                    <Dropdown
                        label="Пространство"
                        items={['Проект 1', 'Проект 2']}
                        linkText="Добавить"
                        linkHref="#"
                    />
                </div>

                {/* Правый центральный блок */}
                <div className="header__center-right">
                    <Dropdown
                        label="Статус работы"
                        items={['Активен', 'Отключен']}
                        linkText="Подробнее"
                        linkHref="#"
                    />
                </div>
            </div>

            {/* Правая часть с иконками */}
            <div className="header__right">
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
                <Icon
                    iconName="Night"
                    library="md"
                    size="24px"
                    color="white"
                />
                <Icon
                    iconName="DoorOpen"
                    library="lu"
                    size="24px"
                    color="white"
                />
            </div>
        </div>
    );
}
