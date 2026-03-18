//Задача № 1
function cachingDecoratorNew(func) {
    const cache = [];

    return function wrapper(...args) {
        const hash = md5(JSON.stringify(args));

        // Проверяем наличие хеша в кеше
        const index = cache.findIndex(item => item.hash === hash);

        if (index !== -1) {
            console.log("Из кеша:", cache[index].result);
            return "Из кеша: " + cache[index].result;
        }

        // Если не найден, считаем результат
        const result = func(...args);
        console.log("Вычисляем:", result);

        // Добавляем результат в кеш
        cache.push({ hash: hash, result: result });

        // Если кеш больше 5 элементов — удаляем самый старый
        if (cache.length > 5) {
            cache.shift(); // удаляет первый (старый) элемент
        }

        return "Вычисляем: " + result;
    };
}



//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId;

    wrapper.count = 0;
    wrapper.allCount = 0;

    function wrapper(...args) {

        if (timeoutId) {
            // Моментальный первый вызов
            console.log('уже есть таймаут', args);
            clearTimeout(timeoutId);
        }
        
        if (!timeoutId) {
            console.log('первый сигнал', args);
            func.call(this, args);
            wrapper.count++;
        }

        timeoutId = setTimeout(() => {
            console.log('задержка юольше 2000мл сек, сработал таймаут');

            console.log('args', args);
            func.apply(this, args);
            wrapper.count++;
        }, delay);


        wrapper.allCount++; // количество всех вызовов декорированной функции
    }
    return wrapper;
}