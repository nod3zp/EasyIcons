# EasyIcons
Moscow OVH Icons Replacer


1. Необходимо подключить библиотеку EasyIcons в BODY шаблона в панеле Moscow OVH
```html
    <script src="https://cdn.jsdelivr.net/gh/nod3zp/easyicons/EasyIcon.min.js"></script>
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
                tag: '.nav-link',
                add: true
            }
        ];

        //  where - Это параметр предопределяющий заменяемый компонент
        //  tag - Класс объекта в котором выполняем поиск where (Для хеадера это .nav-link)
        //  icon - Класс иконки с сервиса https://fontawesome.com/icons
        //  add - Необязательный тэг при добавление которого и установке его значения на TRUE будет не заменяться текст а добавляться иконка к тексту

        new EasyIcons(IconsArray);
    </script>
```
