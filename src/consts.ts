import type { Menu } from "./providers/Menu/utils";

const MENU: Menu = [
    {
        id: 0,
        added: false,
        isOption: false,
        title: "Torta",
        description: "",
        values: [
            {
                id: 0,
                added: false,
                isOption: false,
                title: "Bizcochuelo",
                description: "Added a description",
                values: [
                    {
                        id: 0,
                        added: false,
                        isOption: true,
                        title: "Vainilla",
                        description: "",
                    },
                    {
                        id: 1,
                        added: false,
                        isOption: true,
                        title: "Chocolate",
                        description: "",
                    },
                    {
                        id: 2,
                        added: false,
                        isOption: true,
                        title: "Coco y nuez",
                        description: "",
                    },
                    {
                        id: 3,
                        added: false,
                        isOption: true,
                        title: "Yogurt",
                        description: "",
                    },
                    {
                        id: 4,
                        added: false,
                        isOption: true,
                        title: "Red velvet",
                        description: "",
                    },
                    {
                        id: 5,
                        added: false,
                        isOption: true,
                        title: "Hamburgués",
                        description: "Con Chocolate y nueces"
                    }
                ]
            },
            {
                id: 1,
                added: false,
                title: "Almíbar",
                isOption: false,
                values: [
                    {
                        id: 0,
                        added: false,
                        isOption: true,
                        title: "Express",
                        description: "Sin alcohol"
                    },
                    {
                        id: 1,
                        added: false,
                        isOption: true,
                        title: "Con alcohol",
                        description: "",
                    },
                    {
                        id: 2,
                        added: false,
                        isOption: true,
                        title: "Naranja",
                        description: "",
                    }
                ]
            },
            {
                id: 2,
                added: false,
                title: "Relleno",
                isOption: false,
                values: [
                    {
                        id: 0,
                        added: false,
                        isOption: true,
                        title: "Crema pastelera",
                        description: "",
                    },
                    {
                        id: 1,
                        added: false,
                        isOption: true,
                        title: "Dulce de leche",
                        description: "",
                    },
                    {
                        id: 2,
                        added: false,
                        isOption: true,
                        title: "Ganache de chocolate",
                        description: "Semiamargo o con leche o blanca"
                    },
                    {
                        id: 3,
                        added: false,
                        isOption: true,
                        title: "Buttercream de queso",
                        description: "",
                    },
                    {
                        id: 4,
                        added: false,
                        isOption: true,
                        title: "Buttercream de chocolate",
                        description: "",
                    },
                    {
                        id: 5,
                        added: false,
                        isOption: true,
                        title: "Ganache de frutos rojos",
                        description: "",
                    },
                    {
                        id: 6,
                        added: false,
                        isOption: true,
                        title: "Marroc",
                        description: "",
                    },
                    {
                        id: 7,
                        added: false,
                        isOption: true,
                        title: "Crema Bariloche",
                        description: "",
                    },
                    {
                        id: 8,
                        added: false,
                        isOption: true,
                        title: "Kinder",
                        description: "",
                    },
                    {
                        id: 9,
                        added: false,
                        isOption: true,
                        title: "Oreo",
                        description: "",
                    },
                    {
                        id: 10,
                        added: false,
                        isOption: true,
                        title: "Funge de limón",
                        description: "Leche condensada + chocolate blanco + limón"
                    },
                    {
                        id: 11,
                        added: false,
                        isOption: true,
                        title: "Brigadeiro blanco",
                        description: "Leche condensada + chocolate blanco"
                    },
                    {
                        id: 12,
                        added: false,
                        isOption: true,
                        title: "Tramontana",
                        description: "Chocolate blanco + dulce de leche + galletas cubiertas de chocolate"
                    },
                    {
                        id: 13,
                        added: false,
                        isOption: true,
                        title: "Banana split",
                        description: "",
                    },
                    {
                        id: 14,
                        added: false,
                        isOption: true,
                        title: "Mantecol",
                        description: "",
                    }
                ]
            },
            {
                id: 3,
                added: false,
                title: "Coberturas",
                isOption: false,
                values: [
                    {
                        id: 0,
                        added: false,
                        isOption: true,
                        title: "Buttercream italiano",
                        description: "",
                    },
                    {
                        id: 1,
                        added: false,
                        isOption: true,
                        title: "Ganache de chocolate",
                        description: "",
                    },
                    {
                        id: 2,
                        added: false,
                        isOption: true,
                        title: "Chantilly",
                        description: "",
                    },
                    {
                        id: 3,
                        added: false,
                        isOption: true,
                        title: "Fondant",
                        description: "",
                    }
                ]
            }
        ]
    },
    {
        id: 1,
        added: false,
        isOption: false,
        title: "Tarta",
        description: "",
        values: [
            {
                id: 0,
                added: false,
                isOption: false,
                title: "Sabor",
                description: "",
                values: [
                    {
                        id: 0,
                        added: false,
                        isOption: true,
                        title: "Chocolate",
                        description: "Amargo",
                    }
                ]
            }
        ]
    }
];

export { MENU };
