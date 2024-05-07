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





// Задание №2
// Используя цикл for вывести все четные числа от 1 до 100;
// for(let i=0; i<=100;i+=2){
//     console.log(i);
// }



// Подсчитайте сумму чисел в диапазоне от 1 до 20 с помощью цикла for, while и do...while.
// let num = 0;
// for(let i =1;i<=20;i++){
//     num+=i
// }
// console.log(num);




// Задание №5
// Напишите функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; -1, если первое число меньше, чем второе, и 0, если числа равны.
// function func(a,b){
//     if(a>b){
//         return -1
//     }else if(a<b){
//         return 0
//     }else if(a===b){
//          return '='
//     }
// }
// console.log(func(3,4));





// Задание №5
// Напишите функцию, где пользователь вводит любое целое положительное число. А программа суммирует все числа от 1 до введенного пользователем числа.

// function func(num){
//     let numm = 0
//     for(let i =1; i<=num;i++){
//         numm+=i
//     }
//     return numm
// }
// console.log(func(5));





// const str = "I am a Megalodon, oceans feeling like a pond"
// let num = str.split(' ')
// let ser = num.reduce((acc,el)=>acc.length>el.length? acc: el)
// console.log(ser);





// Задание №7
// Напишите функцию, которая принимает параметром элемент и возвращает его тип (typeof)
// function func(el){
//     if(typeof el){
//         return typeof el
//     }
// }
// console.log(func(5));






// Задание №8
// Напишите функцию для расчета площади и окружности круга по радиусу.
// Ввести радиус:
// Вывести площадь и окружность
// function func(s){
//     let num = 3.14*(s**2)
//     return `${num} радиус`
// }
// console.log(func(5));



// let arr = [1, 2, 3, 4, 5, 6]
// function func(arr){
//     let num = []
//   return arr.map(el=>{
//     if(el%2===0){
//       num.push(el)
//     }
//     return num

//   })
// }
// console.log(func(arr));





function func(arr){
   return arr.filter(el=>el<0)
}
console.log(func([7, -5, -29, 0, 62, 4, 5, -6, -27]));



function rgb(n,u,m){
    let ter =  n.toString()
    let ter1 = u.toString()
    let ter2= m.toString()
    if(ter === '' && ter1===0&&ter2===0){
        return 0
    }else{
        return `rgb(${ter} ${ter1} ${ter2})`  
    }
    
}
console.log(rgb(2,3,4));


function func(a,b){
    if(a.length === b.length&&a===b){
        return true
    }else{
        return false
    }
}
console.log(func(234,234));



function func1(a,b){
    return a.filter(el=>{
        if(el%b==0){
            return el
        } 
    })
}
console.log(func1([1, 2, 3, 4, 5, 6],2));