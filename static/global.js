/*console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}

let navLinks = $$("nav a");

let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname); //quando usamos 3 "=" haverá uma comparação não só do valor como do tipo

currentLink.classList.add("current"); //Define o current com javascript agora, ao invés de definir em cada HTML

//o bloco if a seguir é equivalente a currentLink?.classList.add("current");
if (currentLink) { // or if (currentLink !== undefined)
    currentLink.classList.add("current");
}*/

const ARE_WE_HOME = document.documentElement.classList.contains("home");  //const porque o valor não vai mudar

let pages = [
    {url: ".", title: "Home"},
    {url: "projects", title: "Projects"},
    {url: "contact", title: "Contact"}
    // se tiver mais páginas HTML, adicioná-las aqui
];

let nav = document.createElement("nav");
document.body.prepend(nav);  //adiciona o nav no começa da página, mas ainda não tem links

for (let p of pages) {
    let url = p.url;
    let title = p.title;
    // Create link and add it to nav
    if (!ARE_WE_HOME && !url.startsWith("http")) {
        url = "../" + url;
    }
    // nav.insertAdjacentHTML("beforeend", `<a href="${ url }">${ title }</a>` );
    let a = document.createElement("a");
    a.href = url;
    a.textContent = title;

    if (a.host === location.host && a.pathname === location.pathname) {
        a.classList.add("current");
    }

    if (a.host != location.host) {
        // console.log(a.host, location.host); //é pra aparecer o link do github no código por exemplo e abra uma nova guia
        a.setAttribute("target", "_blank");
    }

    nav.append(a);
}
