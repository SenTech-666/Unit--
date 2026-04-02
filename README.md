# Unit Testing — Домашнее задание Нетологии (Чистые функции)

[<image-card alt="CI" src="https://github.com/SenTech-666/Unit--/actions/workflows/ci.yml/badge.svg" ></image-card>](https://github.com/SenTech-666/Unit--/actions/workflows/ci.yml)
## Описание

Реализация функции `healthIndicator()`, которая определяет состояние здоровья персонажа по количеству очков здоровья.

- **healthy** — здоровье > 50  
- **wounded** — здоровье от 15 до 50 включительно  
- **critical** — здоровье < 15  

## Задача

Написать чистую функцию `healthIndicator(character)`, которая принимает объект вида `{ name: 'Маг', health: 90 }` и возвращает одну из строк: `'healthy'`, `'wounded'` или `'critical'`.

## Запуск проекта

```bash
npm install
npm test          
npm run coverage  
npm run lint      