

// const ondeEstou = document.querySelector('#elementoOndeVoceEsta');


// const pai = ondeEstou.parentNode.style.color = 'red';


// const primeiroFilho = document.querySelector('#primeiroFilhoDoFilho').innerText = 'Um texto qualquer para teste';

// const primeiroFilhoPorPai = document.querySelector('#pai').firstElementChild;

// const atravesDoPai = document.getElementById('pai').firstElementChild.innerHTML = 'suruba';

// const atravesDoPai2 = document.getElementById('pai').children[0].style.border = '2px solid red';

// const primeiroDoOnde = ondeEstou.previousElementSibling;

// const acessandoAtencao = ondeEstou.nextElementSibling.previousSibling;

// const terceiroDoOnde = ondeEstou.nextElementSibling;

// const terceiroDoPai = document.querySelector('#pai').children[2];

//SEGUNDA PARTE


const papai = document.querySelector('#pai');
const irmaoMeu = document.createElement('section');
irmaoMeu.className = 'NovoFilhoDoPai';
papai.appendChild(irmaoMeu);


const ondeEstou = document.querySelector('#elementoOndeVoceEsta');
const meuFilho = document.createElement('div');
meuFilho.id = 'filhao';
ondeEstou.appendChild(meuFilho);


const filhoDofilho = document.querySelector('#primeiroFilhoDoFilho');
const filhoDofilhoDoFilho = document.createElement('div');
filhoDofilhoDoFilho.id = 'filhoPraCaramba';
filhoDofilho.appendChild(filhoDofilhoDoFilho);


const terceiroFilho = filhoDofilho;
terceiroFilho.parentElement;



// parentNode: retorna o nó pai.
// parentElement: retorna o elemento pai.
// childNodes: retorna um NodeList com todos os nós filhos.
// children: retorna um HTMLCollection com todos os elementos filhos.
// firstChild: retorna o primeiro nó filho.
// firstElementChild: retorna o primeiro elemento filho.
// lastChild: retorna o último nó filho.
// lastElementChild: retorna o último elemento filho.
// nextSibling: retorna o próximo nó.
// nextElementSibling: retorna o próximo elemento.
// previousSibling: retorna o nó anterior.
// previousElementSibling: retorna o elemento anterior.




