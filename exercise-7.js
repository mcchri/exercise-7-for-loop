let n = 3;

for(let i = 1; i<n;i=i+2){
    console.log(i);

}
console.log(n);

let fa = 5;
let sum = 1;
for(let i =1;i<=fa;i++){
    sum = sum*i;
}
console.log(sum);


let anw = 23456789

for(let i =0; i <= 4;i++){
    let guess = Number(prompt("Enter guess"));
    if(guess ==anw){
        console.log("You are correct");
        break
    }else{
        console.log("You are incorrect");
    }
    
}

let n2 = Number(prompt("Enter number"))
let sum2 = 0;
if(n2==1){
    console.log(1);
}
if(n2 > 0){
    for(let i = 1;i<=n2;i++){
        sum2 = sum2 + i;
    }
}
console.log(sum2);