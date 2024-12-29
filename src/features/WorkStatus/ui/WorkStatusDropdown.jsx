// src/features/WorkStatus/ui/WorkStatusDropdown.jsx

import React, { useState, useEffect } from "react";
import styles from "./WorkStatusDropdown.module.scss";

const WorkStatusDropdown = () => {
    const STATUS_OPTIONS = ["Работаю", "Не работаю", "Отошел"];

    // Начальный статус
    const [status, setStatus] = useState("Работаю");
    const [currentTime, setCurrentTime] = useState("");
    // Открыто / закрыто меню
    const [isOpen, setIsOpen] = useState(false);

    // Раз в минуту обновляем время (ЧЧ:ММ)
    useEffect(() => {
        function updateTime() {
            const now = new Date();
            const hh = String(now.getHours()).padStart(2, "0");
            const mm = String(now.getMinutes()).padStart(2, "0");
            setCurrentTime(`${hh}:${mm}`);
        }
        updateTime();
        const intervalId = setInterval(updateTime, 60000);
        return () => clearInterval(intervalId);
    }, []);

    // Определяем цвет для часов
    const getTimeColor = (st) => {
        switch (st) {
            case "Работаю": return "green";
            case "Не работаю": return "red";
            case "Отошел": return "yellow";
            default: return "white";
        }
    };
    const timeColor = getTimeColor(status);

    // Тоггл открытия меню
    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    // Закрываем меню (используем при уходе мыши с контейнера)
    const closeDropdown = () => setIsOpen(false);

    // Выбор нового статуса
    const handleSelect = (newStatus) => {
        setStatus(newStatus);
        setIsOpen(false);
    };

    return (
        // Навешиваем onMouseLeave на общий контейнер
        <div
            className={styles.workStatus}
            onMouseLeave={closeDropdown}
        >
            {/* Кнопка с часами (цвет) и статусом (белый) */}
            <button
                className={styles.workStatus__toggle}
                onClick={toggleDropdown}
            >
                <span
                    className={styles.workStatus__time}
                    style={{ color: timeColor }}
                >
                    {currentTime}
                </span>
                &nbsp;
                <span className={styles.workStatus__status}>
                    {status}
                </span>
            </button>

            {/* Показываем меню, если isOpen === true */}
            {isOpen && (
                <div className={styles.workStatus__menu}>
                    {STATUS_OPTIONS.map((option) => (
                        <div
                            key={option}
                            className={styles.workStatus__item}
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WorkStatusDropdown;
