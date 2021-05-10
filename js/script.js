{

    const tasks = [
        {
            content: "nagrać lekcję",
            done: false,
        },
        {
            content: "zjeść pierogi",
            done: true,
        },
    ];

    const render = () => {
        let htmslString = "";

        for (const task of tasks) {
            htmslString += `
                <li>
                    ${task.content}
                </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmslString;
    };

    const init = () => {
        render();
    };

    init();
}