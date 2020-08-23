# EasyIcons
Moscow OVH Icons Replacer


1. Необходимо подключить библиотеку EasyIcons в BODY шаблона в панеле MoscowOVH предварительно загрузив на CDN сервис
```html
    <script src="https://raw.githubusercontent.com/nod3zp/EasyIcons/master/EasyIcon.min.js"></script>
```
или вместо CDN сервиса можно использовать RAW код с одного из файлов
```html
    <script>
      //RAW КОД С ГИТА
    </script>
```

2. В тот-же BODY добавляем инициализацию скрипта и вводим необходимые параметры
```html
    <script>
        let IconsArray = [
            {
                where: '<span>Обратная связь</span>',
                icon: 'fas fa-ice-cream',
                tag: '.nav-link'
            },
            {
                where: '<span>Серверы</span>',
                icon: 'fas fa-server',
                tag: '.nav-link'
            }
        ];

        //  where - Это параметр предопределяющий заменяемый компонент
        //  tag - Класс объекта в котором выполняем поиск where (Для хеадера это .nav-link)
        //  icon - Класс иконки с сервиса https://fontawesome.com/icons

        new EasyIcons(IconsArray);
    </script>
```
