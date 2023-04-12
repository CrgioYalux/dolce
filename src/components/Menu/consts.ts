import type { MenuItem } from "./utils";

const Menu: MenuItem[] = [
    {
        id: 0,
        title: "Torta",
        description: "",
        values: [
            {
                id: 0,
                title: "Bizcochuelo",
                values: [
                    {
                        id: 0,
                        title: "Vainilla",
                        description: ""
                    },
                    {
                        id: 1,
                        title: "Chocolate",
                        description: ""
                    },
                    {
                        id: 2,
                        title: "Coco y nuez",
                        description: ""
                    },
                    {
                        id: 3,
                        title: "Yogurt",
                        description: ""
                    },
                    {
                        id: 4,
                        title: "Red velvet",
                        description: ""
                    },
                    {
                        id: 5,
                        title: "Hamburgués",
                        description: "Con Chocolate y nueces"
                    }
                ]
            },
            {
                id: 1,
                title: "Almíbar",
                values: [
                    {
                        id: 0,
                        title: "Express",
                        description: "Sin alcohol"
                    },
                    {
                        id: 1,
                        title: "Con alcohol",
                        description: ""
                    },
                    {
                        id: 2,
                        title: "Naranja",
                        description: ""
                    }
                ]
            },
            {
                id: 2,
                title: "Relleno",
                values: [
                    {
                        id: 0,
                        title: "Crema pastelera",
                        description: ""
                    },
                    {
                        id: 1,
                        title: "Dulce de leche",
                        description: ""
                    },
                    {
                        id: 2,
                        title: "Ganache de chocolate",
                        description: "Semiamargo o con leche o blanca"
                    },
                    {
                        id: 3,
                        title: "Buttercream de queso",
                        description: ""
                    },
                    {
                        id: 4,
                        title: "Buttercream de chocolate",
                        description: ""
                    },
                    {
                        id: 5,
                        title: "Ganache de frutos rojos",
                        description: ""
                    },
                    {
                        id: 6,
                        title: "Marroc",
                        description: ""
                    },
                    {
                        id: 7,
                        title: "Crema Bariloche",
                        description: ""
                    },
                    {
                        id: 8,
                        title: "Kinder",
                        description: ""
                    },
                    {
                        id: 9,
                        title: "Oreo",
                        description: ""
                    },
                    {
                        id: 10,
                        title: "Funge de limón",
                        description: "Leche condensada + chocolate blanco + limón"
                    },
                    {
                        id: 11,
                        title: "Brigadeiro blanco",
                        description: "Leche condensada + chocolate blanco"
                    },
                    {
                        id: 12,
                        title: "Tramontana",
                        description: "Chocolate blanco + dulce de leche + galletas cubiertas de chocolate"
                    },
                    {
                        id: 13,
                        title: "Banana split",
                        description: ""
                    },
                    {
                        id: 14,
                        title: "Mantecol",
                        description: ""
                    }
                ]
            },
            {
                id: 3,
                title: "Coberturas",
                values: [
                    {
                        id: 0,
                        title: "Buttercream italiano",
                        description: ""
                    },
                    {
                        id: 1,
                        title: "Ganache de chocolate",
                        description: ""
                    },
                    {
                        id: 2,
                        title: "Chantilly",
                        description: ""
                    },
                    {
                        id: 3,
                        title: "Fondant",
                        description: ""
                    }
                ]
            }
        ]
    }
];

export default Menu;
