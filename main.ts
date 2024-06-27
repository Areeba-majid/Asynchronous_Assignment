 //Areeba                       
                                   
                        //==== Asynchronous Assignment ====//


                         /* Question # 1

 Write a simple asynchronous TypeScript function fetchGreeting that returns a
greeting message after a 2-second delay using setTimeout.*/  
console.log("\n Question # 1 ");


async function fetchGreeting(message:string) {

    setTimeout (() => (console.log(message)), 2000);

}
fetchGreeting("Hello World")

/*Question # 2

Write a function simulateTask that simulates a task by logging "Task started",
waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.*/
console.log("\n Question # 2");


function simulateTask(){

    console.log("Task Started");

    setTimeout(() => (console.log("Task completed"),1000));

}

simulateTask();


/*Question # 3

Write a function fetchData that returns a Promise which resolves with the string
"Data fetched successfully!" after a delay of 1 second.*/
console.log("\n Question # 3 ");


function fetchData() {

    return new Promise((resolve) => setTimeout(() => resolve("Data fetched successfully!"),1000));
}

fetchData().then((data) => console.log(data))


/*Question # 4
Write a function fetchWithError that returns a Promise. It should randomly either
resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
delay of 1 second. Handle the rejection using .catch*/
console.log("\n Question # 4");


function fetchWithError(){

    return new Promise((resolve,reject) => {

        setTimeout(()=>{
            
            if (Math.random()<0.5){
                
                resolve("Data fetched successfully again !");
           
            }else{

                reject("Data fetch Failed");
            }
        },1000);
    });
}

fetchWithError().then((data)=>console.log(data)).catch(error=>console.log(error));



/*Question # 5
Write a function executeSequentially that executes two functions fetchData and
processData sequentially using Promises, and logs the results in the order they are
called.*/

console.log("\n Question # 5");



let fetchdata = new Promise((resolve,reject)=>{                   
    resolve("Data Fetched")
})


let processData = new Promise((resolve,reject)=>{                 
    resolve("Data Processed")
})


async function executeSequentially(){                            
    let fetch = await fetchdata
    console.log(fetch)
    let process = await processData
    console.log(process)
}

executeSequentially()                                      







