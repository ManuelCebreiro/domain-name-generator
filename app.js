let pronom = ['el','nuestro', 'la'];
let adj = ['mejor', 'gran', 'pequeño'];
let nam = ['chorizo','lacon', 'caldo'];
let extension = ['.com', '.es', '.net'];


for (i=0;i<pronom.length;i++){ 
    for (j=0;j<adj.length;j++) {
        for (x=0;x<nam.length;x++){
            for (z=0;z<extension.length;z++){
                console.log(pronom[i] + adj[j] + nam[x] + extension[z]) 

            }
        } 
    } 
}
