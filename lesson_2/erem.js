// Напишите функцию checkTask(arr), принимающую в
// аргументы массив с числами.
// Используя метод reduce(), найдите сумму всех
// элементов до первого нуля.
// Результат выведите в консоль.
// Например, для массива:
// [1, 2, 3, 0, 4, 5, 6]
// суммируем первые 3 элемента, так как дальше
// стоит элемент с числом 0.
// Вывод будет:
// 6
// function checkTask(arr){
//     let num =0;
//     return arr.reduce((acc,el)=>{
//        if(acc===0){
//          return num = acc
//        }else{
//          return acc + el
//        }
//    })
// }
// console.log(checkTask([1, 2, 3, 4, 0, 5, 6]));






//? Задание 12
// function checkTask(arr){
//     return arr.flat().reduce((acc,el)=>acc+el)
// }
// console.log(checkTask([1,2, [4,5,6], [7,8]]));





//? Задание 4
// Нельзя использовать sort()!
// function checkTask(arr){
//     return arr.reduce((acc,el)=>acc>el? acc : el)
// }
// console.log(checkTask([4, 15, -4, 27, 12, 8]));






// 1. Найти первый элемент в массиве, который больше 10.
// let arr = [1, 2, 5, 3, 6, 8, 40, 9, 70];
// output: 40
// let arr1 = arr.filter(el=>el>10)
// console.log(arr1);




// 2. Проверить, все ли элементы массива являются положительными числами.
// let arr = [1, 2, 4, 11, 6, 23, -0, 88, 67, 3];
// // output: false
// let res = arr.every(el=>el%2===0)
// console.log(res);




// 3. Проверить, есть ли в массиве хотя бы один элемент, равный 0.
// let arr = [5, 6, 3, 2, 7, 4, 0, 23, 16, 73, 28];
// // output: true
// let res = arr.some(el=>el===0)
// console.log(res);



// 4. Найти первое четное число в массиве.
// let arr = [3, 5, 7, 1, 33, 77, 44];
// // output: 44
// let res = arr.filter(el=>el%2===0)
// console.log(res);




// 5. Проверить, все ли строки в массиве содержат более 5 символов.
// let person = ["Yntymak", "Malika", "Azima", "Abdylaziz", "Aitunuk","Aidana", "Elvira"];
// // output: false

// let res = person.map(el=>el.length===5)
// console.log(res);





// 6. Проверить, есть ли в массиве хотя бы одно отрицательное число.
// let arr = [1, 2, 4, 11, 6, 23, -0, 88, 67, 3];
// // output: true
// let res = arr.some(el=>el<=0)
// console.log(res);



// // 7. Найти первую строку в массиве, которая начинается с буквы "M".
// let person = ["Yntymak", "Malika", "Azima", "Abdylaziz", "Aitunuk","Aidana", "Elvira"];
// // output: Malika
// let res= person.filter(el=>el[0]==='M')
// console.log(res);




// 8. Проверить, все ли элементы массива являются четными числами.
// let arr = [3, 5, 7, 1, 33, 77, 44];
// // output: false
// let res = arr.every(el=>el%2===0)
// console.log(res);




// 9. Проверить, есть ли в массиве хотя бы одна строка, содержащая только цифры.
// let person = ["Yntymak", "Malika", "Azima", "Abdy1aziz", "Aitunuk","Aidana", "Elvira"];
// // output: false
// let res = person.some(el=> typeof el === 'number')
// console.log(res);






// 10. Найти первый элемент массива, который делится на 3 без остатка.
// let arr = [5, 7, 1, 8, 9, 77, 44];
// // output: 9
// let res = arr.filter(el=>el%3===0)
// console.log(res);





// 11. Проверить, все ли элементы массива больше 0.
// let arr = [1, 2, 4, 11, 6, 23, -0, 88, 67, 3];
// // output: true
// let res = arr.every(el=>el>0)
// console.log(res);



// 12. Проверить, есть ли в массиве хотя бы одна строка, начинающаяся с заглавной буквы.
// let person = ["yntymak", "malika", "Azima", "abdy1aziz", "aitunuk","Aidana", "Elvira"];
// // output: true
// let res = person.some(el=>el[0].toUpperCase())
// console.log(res);


