
let progress= 0;
let progressVal = document.getElementById('progress')
setInterval(()=>{
    progress += 10;
    progressVal.style.width=`${progress}px`;
    console.log(progressVal.style.width);
    console.log(progress);
},1000)

