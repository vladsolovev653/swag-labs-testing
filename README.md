## Классический Page Object

### Общий подход к написанию кода

Веб-страница делится на 3 сущности:
1. Страница (состоит из компонентов)
2. Компоненты страницы (формы, модалки, шапки и тд)
3. Элементы (кнопки, поля, ссылки и тд)

### Реализация (в тесте обращение только к методам страниц)
Все компоненты и элементы страниц `private readonly`, доступ к ним только через публичные методы.

Пример:
- У страницы `InventoryPage` есть компонент `MainHeader` (композиция)
- У `MainHeader` есть вспомогательный метод `clickOnCart`
- У `InventoryPage` есть метод `openCart`, который вызывает `clickOnCart` и возвращает экземпляр `CartPage`
- Так как header у `InventoryPage` приватный, в тесте мы обращаемся только к методам `InventoryPage`:

```ts
// Так можно
const cartPage = await inventoryPage.openCart();

// Так нельзя, header приватный
const cartPage = await inventoryPage.header.clickOnCart();
```

Плюсы реализации:
1. Четко понятно как писать код, т.к. в тесте вызываем только методы на уровне страниц.

Минусы реализации:
1. Если компонент общий для нескольких страниц, то для совершения какого-либо действия, например, перехода в корзину, для каждой страницы придется писать свой метод, который будет обращаться к компоненту.