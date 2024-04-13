const ejecutarONoEn1s = (callback) => {
    setTimeout(() => {
        if (Math.random() > 0.1) {
            callback()
        } else {
            throw Error('No, no, no')
        }
    }, 1_000);
}

ejecutarONoEn1s(() => console.log(1));
ejecutarONoEn1s(() => console.log(2));
ejecutarONoEn1s(() => console.log(3));
ejecutarONoEn1s(() => console.log(4));
ejecutarONoEn1s(() => console.log(5));
ejecutarONoEn1s(() => console.log(6));
ejecutarONoEn1s(() => console.log(7));
ejecutarONoEn1s(() => console.log(8));
ejecutarONoEn1s(() => console.log(9));
ejecutarONoEn1s(() => console.log(10));
