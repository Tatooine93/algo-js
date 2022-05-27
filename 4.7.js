function elevator(currentL, currentR, callF){
    let distanceL = Math.abs(callF - currentL);
    let distanceR = Math.abs(callF - currentR);
    
    if (distanceL > distanceR ){
        console.log(`Right`);
    }
    else if (distanceL < distanceR){
        console.log(`Left`);
    }
    else {
        console.log(`Right`);
    }
}

elevator(0, 1, 0); // => "left"
elevator(0, 1, 1); // => "right"
elevator(0, 1, 2); // => "right"
elevator(0, 0, 0); // => "right"
elevator(0, 2, 1); // => "right"
