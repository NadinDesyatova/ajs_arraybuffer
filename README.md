# Домашнее задание к лекции «`ArrayBuffer`»

## `ArrayBuffer`

### Описание

Реализован класс `ArrayBufferConverter` с методом `load()`, который может загружать данные из буфера `ArrayBuffer`(сигнатура `load(buffer)`), и методом `toString`, который умеет переводить содержимое загруженного `ArrayBuffer` в строку. Создание объекта типа `ArrayBuffer` эмулирует функция `getBuffer()`: 

```javascript
function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return (input => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}
```

Написан unit-тест, который обеспечивает 100% покрытие класса.

---