// nested loop
for(var i = 1; i <= 2; i++){
    for(var j = 1; j <= 5; j++){
        console.log(`Week ${i} day ${j}`);
    }
}

for( var year = 2023; year < 2025; year++){
    console.log(year);
    for(var month = 6; month < 9; month++){
        console.log("----------", month);
    }
}

// Multiplication table
for(let i = 1; i < 10; i++){
    for(var j = 1; j < 10; j++){
        console.log(`${i} times ${j} equals ${i * j}`);
    }
    console.log('*******************');
}

// Custom division table
for(var i = 100; i > 10; i -= 10){
    for(var j = 10; j > 4; j -= 5){
        console.log(`${i} divided by ${j} equals ${i / j}`);
    }
}