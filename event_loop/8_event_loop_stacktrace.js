const ejecutarEn1sONo = (callback) => {
    setTimeout(() => {
        if (Math.random() > 0.1) {
            callback()
        } else {
            throw Error('No, no, no')
        }
    }, 1_000);
}

ejecutarEn1sONo(() => console.log(1));
ejecutarEn1sONo(() => console.log(2));
ejecutarEn1sONo(() => console.log(3));
ejecutarEn1sONo(() => console.log(4));
ejecutarEn1sONo(() => console.log(5));
ejecutarEn1sONo(() => console.log(6));
ejecutarEn1sONo(() => console.log(7));
ejecutarEn1sONo(() => console.log(8));
ejecutarEn1sONo(() => console.log(9));
ejecutarEn1sONo(() => console.log(10));
