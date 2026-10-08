(function () {
  "use strict";

  var STR = {
    en: {
      "meta.title": "Aether — code at the speed of thought",
      "meta.desc": "Aether is the neural layer for your editor. It writes, reviews, and answers across the repo — priced per seat, live as you drag.",
      "lang.label": "Language",
      "nav.product": "Product",
      "nav.pricing": "Pricing",
      "nav.features": "Features",
      "nav.faq": "FAQ",
      "nav.cta": "Get Aether",
      "nav.menu": "Menu",
      "hero.kicker": "Public beta · v2.6",
      "hero.t1": "Ship software",
      "hero.t2": "at the speed of thought.",
      "hero.lead": "Aether is the neural layer inside your editor. It writes code, reviews the diff, and answers across the whole repo — without pulling you out of flow.",
      "hero.primary": "See live pricing",
      "hero.secondary": "Try the demo",
      "hero.cmd": "Ask Aether to price 8 Studio seats",
      "hero.s1": "48ms",
      "hero.s1l": "median completion",
      "hero.s2": "70+",
      "hero.s2l": "languages",
      "hero.s3": "2 mo",
      "hero.s3l": "free on yearly",
      "hero.ask": "Or pick a prompt",
      "prompt.1": "Session guard",
      "prompt.2": "Rate limiter",
      "prompt.3": "Seat pricing",
      "prompt.4": "React hook",
      "term.writing": "Aether is writing…",
      "term.done": "Compiled · 0 issues",
      "term.pause": "Pause",
      "term.play": "Play",
      "price.kicker": "01 — Pricing",
      "price.title": "A price that scales with the team.",
      "price.lead": "Flip the billing toggle and drag the seat slider. The total, the per-user rate, and the volume tier recalculate on the spot.",
      "bill.month": "Monthly",
      "bill.year": "Yearly",
      "bill.save": "2 months free",
      "bill.aria": "Yearly billing",
      "seats.label": "Users",
      "seats.dec": "Fewer users",
      "seats.inc": "More users",
      "tier.signal": "Signal",
      "tier.studio": "Studio",
      "tier.orbit": "Orbit",
      "tier.constellation": "Constellation",
      "tier.d1": "1–4 · list price",
      "tier.d2": "5–19 · −10%",
      "tier.d3": "20–49 · −20%",
      "tier.d4": "50–80 · −30%",
      "price.stamp": "Best value",
      "price.per": "{price} per user / month",
      "price.billedMonth": "Billed every month. Cancel any day.",
      "price.billedYear": "Billed {sum} once a year.",
      "price.saveYear": "You save {sum} versus paying monthly.",
      "price.saveHint": "Switch to yearly and save {sum}.",
      "price.lineCadence": "Cadence",
      "price.lineSeats": "Users",
      "price.lineTier": "Volume",
      "price.lineSeat": "Per user",
      "price.lineDue": "Due today",
      "price.cta": "Start with this plan",
      "price.note": "USD. Taxes extra. This preview does not charge a card.",
      "price.more": "Need more than 80 seats? The beta form below reaches a human.",
      "price.list": "list price",
      "price.off": "−{n}%",
      "feat.kicker": "02 — Product",
      "feat.title": "One copilot. Four powers.",
      "feat.lead": "Each tab swaps the product surface — completion, agent, review, and repo chat.",
      "feat.t1": "Ghostwrite",
      "feat.t1d": "Inline completion that knows the repo.",
      "feat.t2": "Agent",
      "feat.t2d": "Plans the change, runs tests, opens the PR.",
      "feat.t3": "Review",
      "feat.t3d": "A diff that explains the why.",
      "feat.t4": "Ask",
      "feat.t4d": "Highlight code. Ask the repo.",
      "feat.c1": "Dimmed lines are Aether’s guess. Tab commits them into the file.",
      "feat.c2": "The agent stays in the repo. You approve the PR, you don’t babysit the shell.",
      "feat.c3": "Green is the fix. The note underneath is the reasoning, not a wall of warnings.",
      "feat.c4": "Answers cite the function you highlighted, so the number matches the receipt on this page.",
      "shot.suggest": "Suggestion",
      "shot.accept": "accept",
      "shot.reject": "dismiss",
      "agent.title": "Agent · volume pricing",
      "agent.run": "Running",
      "agent.s1": "Read src/billing/seats.ts",
      "agent.s2": "Patch Studio, Orbit, Constellation tiers",
      "agent.s3": "Run vitest billing.spec.ts",
      "agent.s4": "Open PR “Exact cents for yearly Studio”",
      "agent.st1": "Done",
      "agent.st2": "Done",
      "agent.st3": "Running",
      "agent.st4": "Queued",
      "review.tag": "Review",
      "review.aria": "Diff replacing a flat 30 times seats with seat_price times seats.",
      "review.whyLabel": "Why",
      "review.why": "Yearly is $25 and volume stacks on top. Multiplying the list price skipped both.",
      "chat.title": "Ask · billing.ts",
      "chat.u": "Does yearly apply before the volume tier?",
      "chat.a": "Volume first. Studio (5–19) takes 10% off $30 → $27, then yearly locks $22.50. Eight seats bill $180/mo, $2,160 for the year.",
      "sec.1": "Private repos excluded from training",
      "sec.2": "SSO and audit log",
      "sec.3": "SOC 2 Type II",
      "sec.4": "VPC deploy on Constellation",
      "faq.kicker": "03 — FAQ",
      "faq.title": "Questions teams actually ask.",
      "faq.lead": "Billing, editors, and what never leaves your machine.",
      "faq.q1": "Does Aether train on private code?",
      "faq.a1": "No. Private repositories are excluded from training. Completions run in an isolated context and are not used to update the base model.",
      "faq.q2": "Which editors are supported?",
      "faq.a2": "VS Code, JetBrains IDEs, and Neovim today. A web companion ships with the beta so you can try Aether before installing anything.",
      "faq.q3": "How does yearly billing work?",
      "faq.a3": "You pay for 10 months and use Aether for 12 — $25 instead of $30 per user, before volume. Studio takes another 10% off, Orbit 20%, Constellation 30%. The calculator on this page is the same formula.",
      "faq.q4": "What if the team changes size?",
      "faq.a4": "Add or remove seats any day. Monthly plans prorate immediately. Yearly plans credit the unused time back to the workspace balance.",
      "faq.q5": "Which languages can it write?",
      "faq.a5": "More than 70, including TypeScript, Python, Rust, Go, Java, Kotlin, Swift, SQL, and C++. Prompts are layout-aware: they read the repo you already have open.",
      "faq.q6": "Can I cancel?",
      "faq.a6": "Monthly plans cancel in one click. Yearly plans stay active until the term ends, and you can turn renewal off whenever you want.",
      "faq.q7": "Is there an on-prem version?",
      "faq.a7": "Constellation includes SSO, audit logs, and a VPC deployment. Private networking is available when you write in through the beta form.",
      "beta.kicker": "Beta",
      "beta.title": "Put Aether in the editor tonight.",
      "beta.lead": "Leave a work email. This preview stores it only in your browser — nothing is sent to a server.",
      "beta.emailLabel": "Work email",
      "beta.ph": "you@company.com",
      "beta.btn": "Request access",
      "beta.ok": "You’re in. {email} stays in this browser — this preview never sends mail.",
      "beta.err": "Enter a valid email address.",
      "beta.reset": "Use a different email",
      "foot.note": "Aether is a product preview. The calculator, demo, and beta form all run locally in your browser.",
      "foot.product": "Product",
      "foot.help": "Help",
      "foot.rights": "© 2026 Aether Labs. All rights reserved.",
      "seats.one": "1 user",
      "seats.many": "{n} users"
    },
    ru: {
      "meta.title": "Aether — код со скоростью мысли",
      "meta.desc": "Aether — нейронный слой в редакторе. Пишет, ревьюит и отвечает по репозиторию. Цена за пользователя пересчитывается сразу.",
      "lang.label": "Язык",
      "nav.product": "Продукт",
      "nav.pricing": "Цены",
      "nav.features": "Возможности",
      "nav.faq": "Вопросы",
      "nav.cta": "Получить Aether",
      "nav.menu": "Меню",
      "hero.kicker": "Открытая бета · v2.6",
      "hero.t1": "Собирайте софт",
      "hero.t2": "со скоростью мысли.",
      "hero.lead": "Aether — нейронный слой прямо в редакторе. Пишет код, разбирает дифф и отвечает по всему репозиторию, не выдёргивая вас из потока.",
      "hero.primary": "Живой калькулятор",
      "hero.secondary": "Запустить демо",
      "hero.cmd": "Попросите Aether посчитать 8 мест Studio",
      "hero.s1": "48 мс",
      "hero.s1l": "медиана дополнения",
      "hero.s2": "70+",
      "hero.s2l": "языков",
      "hero.s3": "2 мес",
      "hero.s3l": "в подарок за год",
      "hero.ask": "Или выберите запрос",
      "prompt.1": "Проверка сессии",
      "prompt.2": "Лимит запросов",
      "prompt.3": "Цена за место",
      "prompt.4": "React-хук",
      "term.writing": "Aether пишет…",
      "term.done": "Собралось · 0 замечаний",
      "term.pause": "Пауза",
      "term.play": "Играть",
      "price.kicker": "01 — Цены",
      "price.title": "Цена, которая растёт вместе с командой.",
      "price.lead": "Переключатель «помесячно / за год» и слайдер пользователей. Итог, ставка и тариф пересчитываются сразу.",
      "bill.month": "Помесячно",
      "bill.year": "За год",
      "bill.save": "2 месяца в подарок",
      "bill.aria": "Оплата за год",
      "seats.label": "Пользователи",
      "seats.dec": "Меньше пользователей",
      "seats.inc": "Больше пользователей",
      "tier.signal": "Signal",
      "tier.studio": "Studio",
      "tier.orbit": "Orbit",
      "tier.constellation": "Constellation",
      "tier.d1": "1–4 · без скидки",
      "tier.d2": "5–19 · −10%",
      "tier.d3": "20–49 · −20%",
      "tier.d4": "50–80 · −30%",
      "price.stamp": "Выгодно",
      "price.per": "{price} за пользователя / мес",
      "price.billedMonth": "Списание каждый месяц. Отмена в любой день.",
      "price.billedYear": "Списание {sum} раз в год.",
      "price.saveYear": "Экономия {sum} относительно помесячной оплаты.",
      "price.saveHint": "Переключите на год и сэкономьте {sum}.",
      "price.lineCadence": "Период",
      "price.lineSeats": "Пользователи",
      "price.lineTier": "Объём",
      "price.lineSeat": "За пользователя",
      "price.lineDue": "К оплате",
      "price.cta": "Начать с этим планом",
      "price.note": "USD. Налоги отдельно. Превью не списывает карту.",
      "price.more": "Нужно больше 80 мест? Форма беты ниже дойдёт до человека.",
      "price.list": "без скидки",
      "price.off": "−{n}%",
      "feat.kicker": "02 — Продукт",
      "feat.title": "Один копилот. Четыре суперсилы.",
      "feat.lead": "Каждая вкладка меняет экран продукта: дополнение, агент, ревью и чат по репозиторию.",
      "feat.t1": "Ghostwrite",
      "feat.t1d": "Дополнение в строке, которое знает репозиторий.",
      "feat.t2": "Агент",
      "feat.t2d": "Планирует правку, гоняет тесты, открывает PR.",
      "feat.t3": "Ревью",
      "feat.t3d": "Дифф, который объясняет зачем.",
      "feat.t4": "Спросить",
      "feat.t4d": "Выделите код. Спросите репозиторий.",
      "feat.c1": "Тусклые строки — догадка Aether. Tab вписывает их в файл.",
      "feat.c2": "Агент остаётся в репозитории. Вы принимаете PR и не дежурите у терминала.",
      "feat.c3": "Зелёным отмечено исправление. Под ним причина, а не простыня предупреждений.",
      "feat.c4": "Ответ ссылается на выделенную функцию, поэтому цифра совпадает с чеком на этой странице.",
      "shot.suggest": "Подсказка",
      "shot.accept": "принять",
      "shot.reject": "скрыть",
      "agent.title": "Агент · тарифы объёма",
      "agent.run": "В работе",
      "agent.s1": "Читает src/billing/seats.ts",
      "agent.s2": "Правит уровни Studio, Orbit, Constellation",
      "agent.s3": "Запускает vitest billing.spec.ts",
      "agent.s4": "Открывает PR «Точные центы для годового Studio»",
      "agent.st1": "Готово",
      "agent.st2": "Готово",
      "agent.st3": "Идёт",
      "agent.st4": "В очереди",
      "review.tag": "Ревью",
      "review.aria": "Дифф: вместо 30 умножить на места используется seat_price умножить на места.",
      "review.whyLabel": "Зачем",
      "review.why": "Год стоит $25, скидка за объём считается сверху. Умножение прайса пропускало и то и другое.",
      "chat.title": "Вопрос · billing.ts",
      "chat.u": "Годовая цена применяется до скидки за объём?",
      "chat.a": "Сначала объём. Studio (5–19) снимает 10% с $30 → $27, затем год фиксирует $22.50. Восемь мест: $180 в месяц и $2 160 за год.",
      "sec.1": "Приватные репозитории не идут в обучение",
      "sec.2": "SSO и журнал аудита",
      "sec.3": "SOC 2 Type II",
      "sec.4": "Разворачивание в VPC на Constellation",
      "faq.kicker": "03 — Вопросы",
      "faq.title": "То, что команды спрашивают на самом деле.",
      "faq.lead": "Оплата, редакторы и то, что не покидает вашу машину.",
      "faq.q1": "Aether учится на приватном коде?",
      "faq.a1": "Нет. Приватные репозитории исключены из обучения. Дополнения считаются в изолированном контексте и не обновляют базовую модель.",
      "faq.q2": "Какие редакторы поддерживаются?",
      "faq.a2": "Сейчас VS Code, IDE JetBrains и Neovim. С бетой идёт веб-компаньон: Aether можно попробовать до установки.",
      "faq.q3": "Как устроена оплата за год?",
      "faq.a3": "Платите за 10 месяцев, пользуетесь 12 — $25 вместо $30 за пользователя до скидки за объём. Studio снимает ещё 10%, Orbit 20%, Constellation 30%. Калькулятор на странице считает по той же формуле.",
      "faq.q4": "Что, если размер команды изменится?",
      "faq.a4": "Места можно добавить или убрать в любой день. Месячный план пересчитывается сразу. Годовой возвращает неиспользованное время на баланс воркспейса.",
      "faq.q5": "На каких языках он пишет?",
      "faq.a5": "Больше чем на 70: TypeScript, Python, Rust, Go, Java, Kotlin, Swift, SQL и C++. Запросы видят структуру уже открытого репозитория.",
      "faq.q6": "Можно отменить?",
      "faq.a6": "Месячный план отменяется в один клик. Годовой действует до конца срока, автопродление выключается когда угодно.",
      "faq.q7": "Есть версия внутри контура?",
      "faq.a7": "Constellation включает SSO, журнал аудита и установку в VPC. Приватная сеть доступна через форму беты.",
      "beta.kicker": "Бета",
      "beta.title": "Поставьте Aether в редактор сегодня вечером.",
      "beta.lead": "Оставьте рабочую почту. Превью хранит её только в браузере — на сервер ничего не уходит.",
      "beta.emailLabel": "Рабочая почта",
      "beta.ph": "you@company.com",
      "beta.btn": "Запросить доступ",
      "beta.ok": "Вы в списке. {email} остаётся в этом браузере — письмо не отправляется.",
      "beta.err": "Введите корректный email.",
      "beta.reset": "Указать другой email",
      "foot.note": "Aether — превью продукта. Калькулятор, демо и форма беты работают локально в браузере.",
      "foot.product": "Продукт",
      "foot.help": "Помощь",
      "foot.rights": "© 2026 Aether Labs. Все права защищены.",
      "seats.one": "1 пользователь",
      "seats.few": "{n} пользователя",
      "seats.many": "{n} пользователей"
    },
    tj: {
      "meta.title": "Aether — рамз бо суръати фикр",
      "meta.desc": "Aether — қабати нейронӣ дар муҳаррир. Менависад, баррасӣ мекунад ва дар репозиторий ҷавоб медиҳад. Нарх барои ҳар корбар фавран нав мешавад.",
      "lang.label": "Забон",
      "nav.product": "Маҳсулот",
      "nav.pricing": "Нархҳо",
      "nav.features": "Имкониятҳо",
      "nav.faq": "Саволҳо",
      "nav.cta": "Гирифтани Aether",
      "nav.menu": "Меню",
      "hero.kicker": "Бетаи оммавӣ · v2.6",
      "hero.t1": "Нармафзор созед",
      "hero.t2": "бо суръати фикр.",
      "hero.lead": "Aether — қабати нейронӣ дар дохили муҳаррир. Код менависад, тағйиротро баррасӣ мекунад ва дар тамоми репозиторий ҷавоб медиҳад, бе он ки шуморо аз ҷараёни кор берун кашад.",
      "hero.primary": "Нархи зинда",
      "hero.secondary": "Деморо санҷед",
      "hero.cmd": "Аз Aether нархи 8 ҷои Studio-ро пурсед",
      "hero.s1": "48 мс",
      "hero.s1l": "миёнаи такмил",
      "hero.s2": "70+",
      "hero.s2l": "забон",
      "hero.s3": "2 моҳ",
      "hero.s3l": "ройгон дар солона",
      "hero.ask": "Ё дархостро интихоб кунед",
      "prompt.1": "Санҷиши сессия",
      "prompt.2": "Маҳдудияти дархост",
      "prompt.3": "Нархи ҷой",
      "prompt.4": "Ҳуки React",
      "term.writing": "Aether менависад…",
      "term.done": "Ҷамъ шуд · 0 эрод",
      "term.pause": "Таваққуф",
      "term.play": "Идома",
      "price.kicker": "01 — Нарх",
      "price.title": "Нархе, ки ҳамроҳи даста меафзояд.",
      "price.lead": "Калиди ҳармоҳа / солона ва слайдери истифодабарандагон. Маблағ, нарх барои як кас ва сатҳ фавран аз нав ҳисоб мешаванд.",
      "bill.month": "Ҳармоҳа",
      "bill.year": "Солона",
      "bill.save": "2 моҳ ройгон",
      "bill.aria": "Пардохти солона",
      "seats.label": "Истифодабарандагон",
      "seats.dec": "Камтар истифодабаранда",
      "seats.inc": "Бештар истифодабаранда",
      "tier.signal": "Signal",
      "tier.studio": "Studio",
      "tier.orbit": "Orbit",
      "tier.constellation": "Constellation",
      "tier.d1": "1–4 · нархнома",
      "tier.d2": "5–19 · −10%",
      "tier.d3": "20–49 · −20%",
      "tier.d4": "50–80 · −30%",
      "price.stamp": "Беҳтарин",
      "price.per": "{price} барои як кас / моҳ",
      "price.billedMonth": "Ҳар моҳ ситонида мешавад. Ҳар рӯз бекор кардан мумкин.",
      "price.billedYear": "Соле як бор {sum} ситонида мешавад.",
      "price.saveYear": "Нисбат ба пардохти моҳона {sum} сарфа мешавад.",
      "price.saveHint": "Ба солона гузаред ва {sum} сарфа кунед.",
      "price.lineCadence": "Давра",
      "price.lineSeats": "Корбарон",
      "price.lineTier": "Ҳаҷм",
      "price.lineSeat": "Барои як кас",
      "price.lineDue": "Имрӯз",
      "price.cta": "Бо ҳамин нақша оғоз",
      "price.note": "USD. Андоз алоҳида. Ин пешнамоиш кортро ситон намекунад.",
      "price.more": "Аз 80 ҷой бештар лозим аст? Форми бета дар поён ба инсон мерасад.",
      "price.list": "нархнома",
      "price.off": "−{n}%",
      "feat.kicker": "02 — Маҳсулот",
      "feat.title": "Як копилот. Чор қудрат.",
      "feat.lead": "Ҳар таб сатҳи маҳсулотро иваз мекунад: такмил, агент, баррасӣ ва чати репозиторий.",
      "feat.t1": "Ghostwrite",
      "feat.t1d": "Такмили дохили сатр, ки репоро мешиносад.",
      "feat.t2": "Агент",
      "feat.t2d": "Тағйиротро нақша мекунад, тест мегузаронад, PR мекушояд.",
      "feat.t3": "Баррасӣ",
      "feat.t3d": "Диффе, ки сабабро мефаҳмонад.",
      "feat.t4": "Пурсидан",
      "feat.t4d": "Кодро ҷудо кунед. Аз репо пурсед.",
      "feat.c1": "Сатрҳои хира — тахмини Aether. Tab онҳоро ба файл менависад.",
      "feat.c2": "Агент дар репозиторий мемонад. Шумо PR-ро қабул мекунед ва терминалро посбонӣ намекунед.",
      "feat.c3": "Сабз — ислоҳ. Дар зер сабаб аст, на девори огоҳӣ.",
      "feat.c4": "Ҷавоб ба функсияи ҷудошуда такя мекунад, бинобар ин рақам бо чеки ҳамин саҳифа рост меояд.",
      "shot.suggest": "Пешниҳод",
      "shot.accept": "қабул",
      "shot.reject": "рад",
      "agent.title": "Агент · нархҳои ҳаҷм",
      "agent.run": "Иҷро",
      "agent.s1": "Хондани src/billing/seats.ts",
      "agent.s2": "Ислоҳи сатҳҳои Studio, Orbit, Constellation",
      "agent.s3": "Иҷрои vitest billing.spec.ts",
      "agent.s4": "Кушодани PR «Сентҳои дақиқ барои Studio-и солона»",
      "agent.st1": "Тайёр",
      "agent.st2": "Тайёр",
      "agent.st3": "Иҷро мешавад",
      "agent.st4": "Дар навбат",
      "review.tag": "Баррасӣ",
      "review.aria": "Дифф: ба ҷои 30 зарб ба ҷойҳо, seat_price зарб ба ҷойҳо.",
      "review.whyLabel": "Чаро",
      "review.why": "Солона $25 аст ва тахфифи ҳаҷм болои он меистад. Зарб ба нархнома ҳардуро аз даст медод.",
      "chat.title": "Савол · billing.ts",
      "chat.u": "Нархи солона пеш аз тахфифи ҳаҷм татбиқ мешавад?",
      "chat.a": "Аввал ҳаҷм. Studio (5–19) аз $30 даҳ фоиз мегирад → $27, сипас солона $22.50-ро қулф мекунад. Ҳашт ҷой: $180 дар моҳ ва $2 160 дар сол.",
      "sec.1": "Репоҳои хусусӣ ба омӯзиш дохил намешаванд",
      "sec.2": "SSO ва сабти аудит",
      "sec.3": "SOC 2 Type II",
      "sec.4": "Насб дар VPC барои Constellation",
      "faq.kicker": "03 — Саволҳо",
      "faq.title": "Саволҳое, ки дастаҳо воқеан медиҳанд.",
      "faq.lead": "Пардохт, муҳаррирҳо ва он чи аз мошини шумо берун намеравад.",
      "faq.q1": "Оё Aether аз рамзи хусусӣ ёд мегирад?",
      "faq.a1": "Не. Репозиторийҳои хусусӣ аз омӯзиш хориҷанд. Такмилҳо дар контексти ҷудо иҷро мешаванд ва модели асосиро нав намекунанд.",
      "faq.q2": "Кадом муҳаррирҳо дастгирӣ мешаванд?",
      "faq.a2": "Имрӯз VS Code, муҳаррирҳои JetBrains ва Neovim. Ҳамроҳи бета веб-ҳамроҳ ҳаст, то пеш аз насб Aether-ро санҷед.",
      "faq.q3": "Пардохти солона чӣ гуна кор мекунад?",
      "faq.a3": "Барои 10 моҳ мепардозед ва 12 моҳ истифода мебаред — $25 ба ҷои $30 барои як кас, пеш аз тахфифи ҳаҷм. Studio боз 10%, Orbit 20%, Constellation 30% мегирад. Калкулятори ҳамин саҳифа ҳамон формуларо ҳисоб мекунад.",
      "faq.q4": "Агар андозаи даста иваз шавад?",
      "faq.a4": "Ҷойҳоро ҳар рӯз илова ё кам кунед. Нақшаи моҳона фавран мутаносиб мешавад. Нақшаи солона вақти истифоданашударо ба тавозуни коргоҳ бармегардонад.",
      "faq.q5": "Кадом забонҳоро менависад?",
      "faq.a5": "Зиёда аз 70, аз ҷумла TypeScript, Python, Rust, Go, Java, Kotlin, Swift, SQL ва C++. Дархостҳо сохтори репои кушодаро мебинанд.",
      "faq.q6": "Оё бекор кардан мумкин аст?",
      "faq.a6": "Нақшаи моҳона бо як пахш бекор мешавад. Нақшаи солона то охири мӯҳлат фаъол мемонад ва навсозии худро ҳар вақт хомӯш кардан мумкин аст.",
      "faq.q7": "Оё версияи дохили шабака ҳаст?",
      "faq.a7": "Constellation SSO, сабти аудит ва насби VPC-ро дар бар мегирад. Шабакаи хусусӣ тавассути форми бета дастрас аст.",
      "beta.kicker": "Бета",
      "beta.title": "Имшаб Aether-ро дар муҳаррир гузоред.",
      "beta.lead": "Почтаи кориро гузоред. Ин пешнамоиш онро танҳо дар браузер нигоҳ медорад — ба сервер чизе фиристода намешавад.",
      "beta.emailLabel": "Почтаи корӣ",
      "beta.ph": "you@company.com",
      "beta.btn": "Дархости дастрасӣ",
      "beta.ok": "Шумо дар рӯйхат ҳастед. {email} дар ҳамин браузер мемонад — мактуб фиристода намешавад.",
      "beta.err": "Почтаи дурустро ворид кунед.",
      "beta.reset": "Почтаи дигар",
      "foot.note": "Aether пешнамоиши маҳсулот аст. Калкулятор, демо ва форми бета дар браузери шумо кор мекунанд.",
      "foot.product": "Маҳсулот",
      "foot.help": "Кумак",
      "foot.rights": "© 2026 Aether Labs. Ҳамаи ҳуқуқҳо ҳифз шудаанд.",
      "seats.one": "1 истифодабаранда",
      "seats.many": "{n} истифодабаранда"
    }
  };

  var SNIPPETS = [
    {
      key: "prompt.1",
      file: "src/auth/session.ts",
      code: [
        "import { verify } from \"@aether/token\";",
        "",
        "export async function requireSession(req: Request) {",
        "  const header = req.headers.get(\"authorization\");",
        "  const token = header?.replace(/^Bearer\\s+/i, \"\");",
        "  if (!token) throw new Error(\"missing_token\");",
        "",
        "  const session = await verify(token, { issuer: \"aether\" });",
        "  return session.user;",
        "}"
      ].join("\n")
    },
    {
      key: "prompt.2",
      file: "aether/guard.py",
      code: [
        "from aether import guard",
        "",
        "@guard(limit=120, window=\"1m\")",
        "async def create_checkout(user_id: str, seats: int) -> str:",
        "    if seats < 1:",
        "        raise ValueError(\"seats\")",
        "    return await billing.checkout(user_id, seats)"
      ].join("\n")
    },
    {
      key: "prompt.3",
      file: "src/billing/price.rs",
      code: [
        "fn seat_price(seats: u32, yearly: bool) -> f64 {",
        "    let base = if yearly { 25.0 } else { 30.0 };",
        "    let volume = match seats {",
        "        50.. => 0.7,",
        "        20.. => 0.8,",
        "        5.. => 0.9,",
        "        _ => 1.0,",
        "    };",
        "    base * volume",
        "}"
      ].join("\n")
    },
    {
      key: "prompt.4",
      file: "src/ui/useSeats.ts",
      code: [
        "import { useState } from \"react\";",
        "import { seatPrice } from \"../billing\";",
        "",
        "export function useSeats(initial = 8) {",
        "  const [seats, setSeats] = useState(initial);",
        "  const perSeat = seatPrice(seats, true);",
        "  return { seats, setSeats, total: perSeat * seats };",
        "}"
      ].join("\n")
    }
  ];

  var TIERS = [
    { name: "tier.signal", min: 1, max: 4, mult: 1 },
    { name: "tier.studio", min: 5, max: 19, mult: 0.9 },
    { name: "tier.orbit", min: 20, max: 49, mult: 0.8 },
    { name: "tier.constellation", min: 50, max: 80, mult: 0.7 }
  ];

  var LIST = 30;
  var YEAR = 25;

  var lang = "en";
  var yearly = false;
  var index = 0;
  var autoplay = true;
  var typing = false;
  var statusKey = "term.writing";
  var tick = null;
  var wait = null;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var slider = document.getElementById("seats");
  var seatNum = document.getElementById("seat-num");
  var switchBtn = document.getElementById("bill-switch");
  var pickMonth = document.getElementById("pick-month");
  var pickYear = document.getElementById("pick-year");
  var priceBig = document.getElementById("price-big");
  var termLines = document.getElementById("term-lines");
  var termFile = document.getElementById("term-file");
  var termStatus = document.getElementById("term-status");
  var termBar = document.getElementById("term-bar");
  var termPlay = document.getElementById("term-play");
  var navToggle = document.getElementById("nav-toggle");
  var navMenu = document.getElementById("nav-menu");

  function t(key) {
    var pack = STR[lang] || STR.en;
    if (pack[key] != null) return pack[key];
    return STR.en[key] != null ? STR.en[key] : "";
  }

  function locale() {
    if (lang === "ru") return "ru-RU";
    if (lang === "tj") return "tg-TJ";
    return "en-US";
  }

  function money(n) {
    var digits = Math.abs(n - Math.round(n)) < 0.001 ? 0 : 2;
    return new Intl.NumberFormat(locale(), {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: digits,
      maximumFractionDigits: digits
    }).format(n);
  }

  function seatsWord(n) {
    if (lang === "ru") {
      var n10 = n % 10;
      var n100 = n % 100;
      if (n10 === 1 && n100 !== 11) return t("seats.one");
      if (n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14)) return t("seats.few").replace("{n}", n);
      return t("seats.many").replace("{n}", n);
    }
    if (n === 1) return t("seats.one");
    return t("seats.many").replace("{n}", n);
  }

  function applyI18n() {
    var htmlLang = lang === "tj" ? "tg" : lang;
    document.documentElement.lang = htmlLang;
    document.title = t("meta.title");
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("meta.desc"));
    document.getElementById("lang-switch").setAttribute("aria-label", t("lang.label"));
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll(".langs button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });
    termPlay.textContent = autoplay ? t("term.pause") : t("term.play");
    if (statusKey) termStatus.textContent = t(statusKey);
    renderPrompts();
    updatePrice();
    var saved = storageGet("aether-beta");
    if (saved) showBetaOk(saved);
  }

  function tierFor(seats) {
    return TIERS.filter(function (tier) { return seats >= tier.min && seats <= tier.max; })[0];
  }

  function cents(n) {
    return Math.round(n * 100) / 100;
  }

  function quote(seats, isYear) {
    var tier = tierFor(seats);
    var perMonth = cents(LIST * tier.mult);
    var perYear = cents(YEAR * tier.mult);
    var per = isYear ? perYear : perMonth;
    var month = cents(per * seats);
    var due = isYear ? cents(month * 12) : month;
    var save = cents(cents(perMonth * seats) * 12 - cents(perYear * seats) * 12);
    return { tier: tier, per: per, month: month, due: due, save: save };
  }

  function animateNum(el, target) {
    var gen = String(++animateNum.seq);
    el.dataset.gen = gen;
    var from = Number(el.dataset.cur);
    if (!Number.isFinite(from)) from = target;
    if (reduce || Math.abs(from - target) < 0.001) {
      el.textContent = money(target);
      el.dataset.cur = String(target);
      return;
    }
    var start = performance.now();
    var step = function (now) {
      if (el.dataset.gen !== gen) return;
      var p = Math.min(1, (now - start) / 420);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = p === 1 ? target : from + (target - from) * eased;
      el.textContent = money(val);
      el.dataset.cur = String(val);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  animateNum.seq = 0;

  function updatePrice() {
    var seats = Number(slider.value);
    var q = quote(seats, yearly);
    var off = Math.round((1 - q.tier.mult) * 100);
    animateNum(priceBig, q.month);
    document.getElementById("price-tier").textContent = t(q.tier.name);
    document.getElementById("price-per").textContent = t("price.per").replace("{price}", money(q.per));
    document.getElementById("price-sub").textContent = yearly
      ? t("price.billedYear").replace("{sum}", money(q.due))
      : t("price.billedMonth");
    document.getElementById("price-save").textContent = yearly
      ? t("price.saveYear").replace("{sum}", money(q.save))
      : t("price.saveHint").replace("{sum}", money(q.save));
    document.getElementById("r-cadence").textContent = yearly ? t("bill.year") : t("bill.month");
    document.getElementById("r-seats").textContent = seatsWord(seats);
    document.getElementById("r-tier").textContent = off
      ? t(q.tier.name) + " · " + t("price.off").replace("{n}", off)
      : t(q.tier.name) + " · " + t("price.list");
    document.getElementById("r-seat").textContent = money(q.per);
    document.getElementById("r-due").textContent = money(q.due);
    document.getElementById("stamp").hidden = !yearly;
    slider.setAttribute("aria-valuetext", seatsWord(seats));
    document.querySelectorAll(".tier").forEach(function (btn) {
      var on = seats >= Number(btn.dataset.min) && seats <= Number(btn.dataset.max);
      btn.classList.toggle("is-on", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function setSeats(value) {
    var n = Math.round(Number(value));
    if (!Number.isFinite(n)) n = 1;
    n = Math.min(80, Math.max(1, n));
    slider.value = String(n);
    seatNum.value = String(n);
    var pct = ((n - 1) / 79) * 100;
    slider.style.setProperty("--pct", pct + "%");
    updatePrice();
  }

  function setYearly(next) {
    yearly = next;
    switchBtn.setAttribute("aria-checked", yearly ? "true" : "false");
    pickMonth.classList.toggle("is-on", !yearly);
    pickYear.classList.toggle("is-on", yearly);
    updatePrice();
  }

  function stopTimers() {
    clearInterval(tick);
    clearTimeout(wait);
    tick = null;
    wait = null;
  }

  function renderTyped(text, caret) {
    var lines = text.split("\n");
    termLines.replaceChildren();
    lines.forEach(function (line, i) {
      var li = document.createElement("li");
      var span = document.createElement("span");
      var trimmed = line.trim();
      if (trimmed.indexOf("//") === 0 || trimmed.indexOf("#") === 0) span.className = "cmt";
      span.textContent = line.length ? line : " ";
      li.appendChild(span);
      if (caret && i === lines.length - 1) {
        var c = document.createElement("span");
        c.className = "caret";
        li.appendChild(c);
      }
      termLines.appendChild(li);
    });
  }

  function setStatus(key) {
    statusKey = key;
    termStatus.textContent = t(key);
  }

  function markPrompt(i) {
    document.querySelectorAll("#prompts .chip").forEach(function (btn, idx) {
      var on = idx === i;
      btn.classList.toggle("is-on", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function scheduleNext(i) {
    if (!autoplay) return;
    wait = setTimeout(function () {
      show((i + 1) % SNIPPETS.length, !reduce);
    }, reduce ? 4000 : 1800);
  }

  function show(i, animate) {
    stopTimers();
    index = i;
    var snip = SNIPPETS[i];
    termFile.textContent = snip.file;
    markPrompt(i);
    var text = snip.code;
    if (!animate || reduce) {
      typing = false;
      renderTyped(text, false);
      termBar.style.width = "100%";
      setStatus("term.done");
      scheduleNext(i);
      return;
    }
    typing = true;
    setStatus("term.writing");
    var n = 0;
    tick = setInterval(function () {
      n += Math.random() > 0.72 ? 1 : 2;
      if (n > text.length) n = text.length;
      renderTyped(text.slice(0, n), true);
      termBar.style.width = (n / text.length) * 100 + "%";
      if (n >= text.length) {
        clearInterval(tick);
        tick = null;
        typing = false;
        setStatus("term.done");
        scheduleNext(i);
      }
    }, 14);
  }

  function renderPrompts() {
    var box = document.getElementById("prompts");
    box.replaceChildren();
    box.setAttribute("aria-label", t("hero.ask"));
    SNIPPETS.forEach(function (snip, i) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip" + (i === index ? " is-on" : "");
      btn.setAttribute("aria-pressed", i === index ? "true" : "false");
      btn.textContent = t(snip.key);
      btn.addEventListener("click", function () { show(i, true); });
      box.appendChild(btn);
    });
  }

  function selectTab(tab) {
    document.querySelectorAll('[role="tab"]').forEach(function (item) {
      var on = item === tab;
      item.setAttribute("aria-selected", on ? "true" : "false");
      item.tabIndex = on ? 0 : -1;
      var panel = document.getElementById(item.getAttribute("aria-controls"));
      panel.hidden = !on;
      if (on) {
        panel.classList.remove("is-in");
        void panel.offsetWidth;
        panel.classList.add("is-in");
      }
    });
  }

  function showBetaOk(email) {
    var msg = document.getElementById("form-msg");
    msg.hidden = false;
    msg.className = "form-msg ok";
    msg.textContent = t("beta.ok").replace("{email}", email);
    document.getElementById("beta-form").hidden = true;
    document.getElementById("form-reset").hidden = false;
  }

  function storageGet(key) {
    try { return localStorage.getItem(key); } catch (err) { return null; }
  }
  function storageSet(key, value) {
    try { localStorage.setItem(key, value); } catch (err) { /* preview still works */ }
  }
  function storageDel(key) {
    try { localStorage.removeItem(key); } catch (err) { /* ignore */ }
  }

  var savedLang = storageGet("aether-lang");
  var navLang = (navigator.language || "en").toLowerCase();
  if (savedLang === "en" || savedLang === "ru" || savedLang === "tj") lang = savedLang;
  else if (navLang.indexOf("tg") === 0 || navLang.indexOf("tj") === 0) lang = "tj";
  else if (navLang.indexOf("ru") === 0) lang = "ru";

  if (reduce) autoplay = false;

  document.querySelectorAll(".langs button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      lang = btn.getAttribute("data-lang");
      storageSet("aether-lang", lang);
      applyI18n();
    });
  });

  switchBtn.addEventListener("click", function () { setYearly(!yearly); });
  pickMonth.addEventListener("click", function () { setYearly(false); });
  pickYear.addEventListener("click", function () { setYearly(true); });
  slider.addEventListener("input", function () { setSeats(slider.value); });
  seatNum.addEventListener("input", function () {
    if (seatNum.value === "") return;
    setSeats(seatNum.value);
  });
  seatNum.addEventListener("change", function () { setSeats(seatNum.value || 1); });
  document.getElementById("seat-dec").addEventListener("click", function () {
    setSeats(Number(slider.value) - 1);
  });
  document.getElementById("seat-inc").addEventListener("click", function () {
    setSeats(Number(slider.value) + 1);
  });
  document.querySelectorAll(".tier").forEach(function (btn) {
    btn.addEventListener("click", function () { setSeats(btn.dataset.pick); });
  });

  termPlay.addEventListener("click", function () {
    autoplay = !autoplay;
    termPlay.textContent = autoplay ? t("term.pause") : t("term.play");
    if (!autoplay) {
      clearTimeout(wait);
      wait = null;
      return;
    }
    if (!typing) show((index + 1) % SNIPPETS.length, !reduce);
  });

  document.querySelectorAll('[role="tab"]').forEach(function (tab, i, all) {
    tab.addEventListener("click", function () { selectTab(tab); });
    tab.addEventListener("keydown", function (e) {
      var next = null;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") next = all[(i + 1) % all.length];
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = all[(i - 1 + all.length) % all.length];
      if (e.key === "Home") next = all[0];
      if (e.key === "End") next = all[all.length - 1];
      if (!next) return;
      e.preventDefault();
      selectTab(next);
      next.focus();
    });
  });

  document.querySelectorAll(".acc-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".acc-item");
      var wasOpen = item.classList.contains("is-open");
      document.querySelectorAll(".acc-item").forEach(function (it) {
        it.classList.remove("is-open");
        it.querySelector(".acc-btn").setAttribute("aria-expanded", "false");
      });
      if (!wasOpen) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  function closeNav() {
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
  navToggle.addEventListener("click", function () {
    var open = !navMenu.classList.contains("is-open");
    navMenu.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  navMenu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeNav);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeNav();
  });
  document.addEventListener("click", function (e) {
    if (!navMenu.classList.contains("is-open")) return;
    if (navMenu.contains(e.target) || navToggle.contains(e.target)) return;
    closeNav();
  });

  if (window.PointerEvent) {
    document.addEventListener("pointermove", function (e) {
      document.documentElement.style.setProperty("--mx", e.clientX + "px");
      document.documentElement.style.setProperty("--my", e.clientY + "px");
    });
  }

  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      document.querySelectorAll(".nav-links a").forEach(function (a) {
        if (a.getAttribute("href") === "#" + entry.target.id) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0.01 });
  ["product", "pricing", "features", "faq"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) spy.observe(el);
  });

  var form = document.getElementById("beta-form");
  var formMsg = document.getElementById("form-msg");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var email = document.getElementById("email").value.trim();
    var ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    formMsg.hidden = false;
    if (!ok) {
      formMsg.className = "form-msg err";
      formMsg.textContent = t("beta.err");
      document.getElementById("email").focus();
      return;
    }
    storageSet("aether-beta", email);
    showBetaOk(email);
  });
  document.getElementById("form-reset").addEventListener("click", function () {
    storageDel("aether-beta");
    form.hidden = false;
    formMsg.hidden = true;
    document.getElementById("form-reset").hidden = true;
    document.getElementById("email").value = "";
    document.getElementById("email").focus();
  });

  applyI18n();
  setSeats(8);
  setYearly(false);
  show(0, !reduce);
})();
