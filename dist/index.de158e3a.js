let html = document.querySelector("#html");
let style = document.querySelector('#style');
let string = `/*\u{4F60}\u{597D}\u{FF0C}\u{6211}\u{53EB}\u{5C0F}\u{83DC}
*\u{63A5}\u{4E0B}\u{6765}\u{6211}\u{6F14}\u{793A}\u{4E00}\u{4E0B}\u{6211}\u{7684}\u{524D}\u{7AEF}\u{529F}\u{5E95}
*\u{9996}\u{5148}\u{6211}\u{8981}\u{51C6}\u{5907}\u{4E00}\u{4E2A}div
*/
#div1{
    border: 1px solid red;
    width:200px;
    height:200px;
}
/* \u{63A5}\u{4E0B}\u{6765}\u{6211}\u{628A} div \u{53D8}\u{6210}\u{4E00}\u{4E2A}\u{516B}\u{5366}\u{56FE}
* \u{6CE8}\u{610F}\u{770B}\u{597D}\u{4E86}
* \u{9996}\u{5148}\u{FF0C}\u{628A} div \u{53D8}\u{6210}\u{4E00}\u{4E2A}\u{5706}
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
    }
/* \u{516B}\u{5366}\u{662F}\u{9634}\u{9633}\u{5F62}\u{6210}\u{7684}
* \u{4E00}\u{9ED1}\u{4E00}\u{767D}
*/
#div1{
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*\u{52A0}\u{4E24}\u{4E2A}\u{795E}\u{79D8}\u{7684}\u{5C0F}\u{7403} */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let string2 = ``;
let n = 0;
let step = ()=>{
    setTimeout(()=>{
        if (string[n] === "\n") string2 += "<br>";
        else if (string[n] === " ") string2 += "&nbsp";
        else string2 += string[n];
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            // 如果n不是最后一个，就继续
            n += 1; //54
            step();
        }
    }, 50);
};
step(); // setTimeout(() =>{
 //     style.innerHTML = `
 //     body{
 //         color: red;
 //     }
 //     `;
 // },3000);

//# sourceMappingURL=index.de158e3a.js.map
