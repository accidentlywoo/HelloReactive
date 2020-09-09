const rootElement = document.getElementById("root");

const list = [
    { title: "React에 대해 알아봅시다." },
    { title: "Redux에 대해 알아봅시다." },
    { title: "TypeScript에 대해 알아봅시다." }
];

function app(items){
    rootElement.innerHTML = `
    <ul>
      ${items.map((items) => `<li>${items.title}</li>`).join("")}
    </ul>
    `;
    // TODO : JS map공부 -> return type이 String[] .joint("")함수를 사용해 하나의 문자열로 붙여준다.
    // ['<li>1</li>','<li>2</li>', '<li>3</li>'].join('') -> "<li>1</li><li>2</li><li>3</li>"
    // ['<li>1</li>','<li>2</li>', '<li>3</li>'].join() -> "<li>1</li>,<li>2</li>,<li>3</li>"
}
app(list);