import { getBooks } from "./modules/petions.js";
const containerBox = document.getElementById('container-box');

const main = async () =>{

let books = await getBooks();
let boxes = '';

books.forEach(element => {
    boxes += `
    <div class="box">
    <img src="https://http2.mlstatic.com/flores-en-el-atico-saga-dollanganger-1-v-c-andrews-D_NQ_NP_610935-MCO27095669799_032018-F.jpg" alt="">
    <h1>${element.name}</h1>
    <p>${element.author}</p>
    </div>
    `;
    containerBox.innerHTML = boxes;
  
});





}



main();


/* <div class="box">
<img src="https://http2.mlstatic.com/flores-en-el-atico-saga-dollanganger-1-v-c-andrews-D_NQ_NP_610935-MCO27095669799_032018-F.jpg" alt="">
<h1>Title</h1>
<p>Lorem, ipsum dolor.</p>
</div> */