/*
    ES6 (2015)
    자바스크립트 최신문법이 많이 등장한 버전

    1 let, const
    2 화살표 함수
    3 메서드
    4 구조분해할당
    5 스프레드 연산자
    6 Promise
*/

/* 
    let, const

    1 let
    2 const
    3 블록범위
*/


// 1 let: 변수 선언에 사용되는 예악어

// let foo = "bar"
// console.log(foo)

// let foo ="baz" // 재선언 불가


// 2 const (constant): 상수

// const foo = "bar" // 다음의 형태로만 사용가능하다
// console.log(foo)

// 블록범위

// {
//     var varInBlock = true
//     let letInBlock = true // 블록범위(블록 밖에서는 접근 불가)
//     const constInBlock = true // 블록범위
// }

// console.log(varInBlock)
// console.log(letInBlock)
// console.log(constInBlock)




/*
    화살표 함수
    익명함수를 더 간단하게 표현할 수 있다
*/

// let f = () => {
//     console.log("foo")
// }

// f()

// let f = () => "foo" // 한개의 값을 리턴하는 경우 중괄호와 return생략 가능
// console.log(f())

// let f = x => "foo" + x // 매개변수가 하나인 경우 () 생략 가능
// console.log(f("bar"))



/*
    메서드

    1 Array.map()
    2 Object.keys()
*/ 

// Array.map()
// 배열에 특정한 작업을 수행한다.업데이트 된 배열을 리턴한다

// let beers = ["Guiness", "Heineken", "Budswiser"]

// let updateBeers = beers.map((beer) => { // beer: 배열의 각 아이템
//     return beer.toUpperCase()
// })

// console.log(updateBeers)


// Object.keys()
// 객체의 키를 문자열 배열로 리턴한다

// let cat = {
//     name: "Kitty",
//     home: null,
//     sound: function(){
//         return "야옹"
    //     }
    // }

// const keys = Object.keys(cat)
// console.log(keys)



/*
    구조분해할당 (destructing)

    1 배열 구조분해할당
    간단한 방법으로 배열의 아이템을 변수에 할당할 수 있다

    2 객체 구조분해할당
    간단한 방법으로 객체의 속성을 변수에 할당 할 수 있다.
*/

// 기존 방법
// var beers = ["Guiness", "Heiken", "Budswiser"]

// var ihrshBeer = beers[0]
// var dutchBeer = beers[1]
// var americanBeer = beers[2]

// console.log(irishBeer)
// console.log(dutchBeer)
// console.log(americanBeer)


// 구조분해할당
// var beers = ["Guinness", "Heineken", "Budwiser"];

// var [irishBeer, dutchBeer, americanBeer] = beers;

// console.log(irishBeer) // Guinness
// console.log(dutchBeer) // Heineken
// console.log(americanBeer) // Budwiser


// 객체
// var irishBeer = {name:"Guiness", origin:"Irelane" , avaliable: false}

// 기존 방법
// var name = irishBeer.name;
// var origin = irishBeer.origin;
// var available = irishBeer.available;

// console.log(name, origin, available)

// var{name, origin, available} = irishBeer

// console.log(name, origin, available)


// 매개변수
// var irishBeer = {name: 'Guiness', origin:'Ireland', available:false}

// // 기존방법
// function f(irshBeer){
//     var name = irshBeer.name
//     var origin = irhBeer.origin
//     var available = irshBeer.available
// }


// // 구조분해할당
// function f({name, origin, available}) {

// }

// f(irishBeer)



// Q. 구조분해할당을 이용해 배열의 각 아이템을 변수에 할당
// var asianBeers  = ["클라우드", "아사히"]

// var [koreanBeer, JapenBeer] = asianBeers

// console.log(koreanBeer)
// console.log(JapenBeer)



/*
    스프레드 연산자 (Spread Operator)

    1 배열
    배열의 아이템을 간편하게 복사할 수 있다
    ...복사할 배열

    2 객체
    객체의 속성을 간편하게 복사할 수 있다
    ...복사할 객체
*/


// 배열
// var beers =  ['Guiness', "Heineken"]
// var newBeer = 'BudWiser'

// var updateBeers = [...beers, newBeer]
// console.log(updateBeers)


// 객체
// var irishBeer = {
//     name: 'Guiness',
//     origin: 'Ireland',
//     available: false
// }

// var updateBeers = {...irishBeer, available: true}
// console.log(updateBeers)


//Q. 스프레드 연산자를 사용하여 치즈의 home속성을 삼산동으로 갱신
// var cat = {
//     name: "치즈",
//     age: 1,
//     home: null,
//     sound: function(){
//         return "야옹"
//     }
// }

// var updateCat = {...cat, home:"삼산동"}
// console.log(updateCat)



/*
    Promise 객체
    비동기 작업의 성공 또는 실패여부를 나타낸다
    비동기 작업의 가동성을 향상시키기 위해 사용된다

    1 프로미스의 구조
    2 사용예시
    3 async/await
*/



/*
    1 프로미스의 구조

    - 프로미스의 인스턴스 생성
    생성자 함수에 두개의 콜백을 전달한다

    첫번째 콜백: resolve, 성공시에 호출된다
    두번째 콜백: rejected, 실패시에 호출된다

    - 프로미스의 상태
    fullfilled: 비동기 작업의 성공
    rejected: 비동기 작업의 실패
    pending: 비동기 작업의 대기상태

    - 프로미스의 매세드
    Promise.then(): 비동기 작업 성공시 데이터를 다룬다
    Promise.catch(): 비동기 작업 실패시 에러를 처리한다
    Promise.finally(): 성공 실패 여부와 상관없이 실행되는 메서드
*/

// const promise = new Promise((res, rej) => {
//     res({foo:"bar"}) // 비동기 작업 성공(fullfilled)
// })

// promise
//     .then((value) =>{ // 데이터를 다루는 부분
//         console.log(value)
//     })
//     .catch((error) =>{ // 에러를 다루는 부분
//         console.error(error)
//     })


/*
    실제 예시
    서버에 데이터 요청 예시
*/

// 서버에 데이터를 요청하는 함수
// 결과로 프로미스 객체를 리턴한다

// function fetchData(){
//     const promise = new Promise((res,rej)=>{
//         res({foo:"bar"})
//     })

//     return promise
// }

// fetchData()
//     .then(data =>{
//         console.log("응답 데이터:", data)
//     })
//     .catch(data =>{
//         console.error(error)
//     })

// console.log("다음 작업")




/*
    async/await

    프로미스 객체가 결과를 리턴할 때까지 기다린다
    프로미스의 가독성을 향상시키기 위해 사용한다
    try/catch 문법으로 에러를 처리한다
*/


// 서버에 데이터를 요청하는 함수
// function fetchData(){
//     const promise = new Promise((res,rej) => {
//         res({foo:"bar"})
//     })

//     return promise
// }

// async function f(){
//     try{
//         const data = await fetchData() // 프로미스가 결과를 리턴할 때까지 기다린다

//         console.log(data)
//     }catch(err){
//         console.error(err)
//     }
// }

// f()
// console.log("다음 작업")
