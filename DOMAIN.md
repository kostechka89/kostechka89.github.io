# Подключение k0st9chka.ru

Сайт: https://kostechka89.github.io

1. В GitHub открой Settings → Pages → Custom domain и укажи `k0st9chka.ru`.
2. В REG.RU открой управление DNS-зоной домена. Оставь DNS-серверы регистратора, если зона обслуживается у REG.RU.
3. Добавь четыре A-записи для `@`:

| Тип | Имя | Значение |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | kostechka89.github.io |

Удалить нужно только конфликтующие A/AAAA/CNAME записи для этих имён; почтовые MX и TXT не трогать.

4. Дождись успешной проверки DNS в GitHub, затем включи Enforce HTTPS. DNS и выпуск сертификата могут занять до 24 часов.

На экране «Указать DNS-серверы / Указать IP-адрес» из скриншота IP-адреса не следует вводить в поля DNS-серверов. Нужен редактор DNS-зоны с A-записями.

При публикации через GitHub Actions файл `public/CNAME` сам по себе не подключает домен: значение необходимо установить в Settings → Pages.

Проверенные значения: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
