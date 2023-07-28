// membuat countdown
const countDown = start => {
    setTimeout(() => {
        console.log(start);
        start > 0 ? countDown(start-1) : null
    }, 900);
};
countDown(10);