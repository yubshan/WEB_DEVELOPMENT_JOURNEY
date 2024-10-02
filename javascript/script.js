console.log("hello world");

function toconvert(num) {
    if (num >= 1000000) {
        if (num % 1000000 == 0) {
            return (num / 1000000) + 'M';
        }
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        if (num % 1000 == 0) {
            return (num / 1000) + 'k';
        }
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
}

function CreateCard(title, cName, views, monthsold, duration, thumbnail) {
    // String, string, int, int, int, link
    let container = document.createElement("div");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");

    container.setAttribute("class", "container");
    document.querySelector(".main").append(container); // Append container to the main class element
    div1.setAttribute("class", "right");
    div2.setAttribute("class", "left");
    container.appendChild(div1);
    container.appendChild(div2);

    let img = document.createElement("img");
    img.src = thumbnail;
    img.alt = "thumbnail";
    div1.appendChild(img);

    let span = document.createElement("span");
    span.textContent = (duration);
    div1.appendChild(span);

    let h1 = document.createElement("h1");
    h1.textContent = title;
    div2.appendChild(h1);

    let div3 = document.createElement("div");
    div3.setAttribute("class", "content");
    div2.appendChild(div3);

    let p = document.createElement("p");
    p.textContent = cName;
    div3.appendChild(p);

    let span2 = document.createElement("span");
    span2.setAttribute("class", "dot");
    div3.appendChild(span2);

    let div4 = document.createElement("div");
    div4.setAttribute("class", "inline-span");
    div3.appendChild(div4);

    let span3 = document.createElement("span");
    span3.textContent = toconvert(views);
    div4.appendChild(span3);

    let span4 = document.createElement("span");
    span4.setAttribute("class", "dot");
    div4.appendChild(span4);

    let span5 = document.createElement("span");
    span5.textContent = `${monthsold} months ago`;
    div4.appendChild(span5);

    // Add event listener to the current container for click
    container.addEventListener("click", () => {
        window.location.href = "https://www.youtube.com";
    });
}

// Create cards
CreateCard("Hey! This is my first video", "Yubshan Shrestha", 27000, 2, 8.10, "image.png");
CreateCard("Hey! This is my second video", "Yubshan Shrestha", 25464, 2, 8.10, "image.png");
CreateCard("Hey! This is my third video", "Yubshan Shrestha", 25464, 4, 8.10, "image.png");
CreateCard("Hey! This is my fourth video", "Yubshan Shrestha", 25464, 5, 8.10, "image.png");
CreateCard("Hey! This is my fifth video", "Yubshan Shrestha", 1254640, 6, 8.10, "image.png");
document.querySelector(".container").addEventListener("click", ()=>{
    window.location.href="https://www.youtube.com";
})