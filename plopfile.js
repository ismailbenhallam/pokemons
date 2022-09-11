module.exports = function (plop) {
    // component generator
    plop.setGenerator("component", {
        description: "React component generator",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "component name please",
            },
        ],
        actions: [
            {
                type: "addMany",
                destination: "components/{{pascalCase name}}",
                templateFiles: "plop/component/*.hbs",
                base: "plop/component",
            },
        ],
    });

    plop.setGenerator("page", {
        description: "Next page generator",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "page name please",
            },
        ],
        actions: [
            {
                type: "add",
                path: "pages/{{lowerCase name}}.tsx",
                templateFile: "plop/page/page.tsx.hbs",
            },
        ],
    });
};