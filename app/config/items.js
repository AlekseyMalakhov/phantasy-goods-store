export default [
    {
        id: 1,
        name: "Azura's Star",
        type: "Miscellaneous",
        description:
            "Vivamus congue erat non dui pharetra pretium. Pellentesque rutrum finibus mi eget mollis. Phasellus finibus ligula eros, tempus sagittis justo pellentesque id. Aenean et metus sed diam condimentum tempor. Cras vitae congue enim, in placerat felis. Morbi tincidunt nisl quis rhoncus tempus. Nam vulputate augue et bibendum mollis. ",
        price: 20,
        images: [
            {
                id: 1,
                uri: require(`../assets/AzurasStar.jpg`),
            },
            {
                id: 2,
                uri: require(`../assets/FortifyIllusion.jpg`),
            },
            {
                id: 3,
                uri: require(`../assets/ScrollofRevenant.jpg`),
            },
        ],
        seller: {
            id: 1,
            name: "Ruby Ferguson",
        },
    },
    {
        id: 2,
        name: "Fortify Illusion",
        type: "Potions",
        description:
            "Sed eu ex vitae justo dictum vulputate. Pellentesque consequat mattis dui sed aliquet. Praesent accumsan ullamcorper nibh, sit amet maximus justo. Nunc tincidunt pellentesque libero. Nulla malesuada augue et neque vulputate iaculis. Sed tempor nunc diam, vitae euismod tellus lobortis at. Fusce pulvinar purus sit amet dolor feugiat, vel semper tortor tristique. Nam vestibulum vel nunc et finibus. Donec ultricies porttitor condimentum. Cras hendrerit ligula sed enim venenatis, ac hendrerit ipsum luctus. Sed volutpat lectus sed dui auctor venenatis. Etiam consectetur nec nulla vitae finibus. Sed vitae rhoncus ligula, et efficitur tellus.Sed eu ex vitae justo dictum vulputate. Pellentesque consequat mattis dui sed aliquet. Praesent accumsan ullamcorper nibh, sit amet maximus justo. Nunc tincidunt pellentesque libero. Nulla malesuada augue et neque vulputate iaculis. Sed tempor nunc diam, vitae euismod tellus lobortis at. Fusce pulvinar purus sit amet dolor feugiat, vel semper tortor tristique. Nam vestibulum vel nunc et finibus. Donec ultricies porttitor condimentum. Cras hendrerit ligula sed enim venenatis, ac hendrerit ipsum luctus. Sed volutpat lectus sed dui auctor venenatis. Etiam consectetur nec nulla vitae finibus. Sed vitae rhoncus ligula, et efficitur tellus",
        price: 15,
        images: [
            {
                id: 4,
                uri: require(`../assets/FortifyIllusion.jpg`),
            },
            {
                id: 5,
                uri: require(`../assets/HallgerdsTale.jpg`),
            },
            {
                id: 6,
                uri: require(`../assets/AzurasStar.jpg`),
            },
        ],
        seller: {
            id: 2,
            name: "Ged Higgins",
        },
    },
    {
        id: 3,
        name: "Scroll of Revenant",
        type: "Scrolls",
        description:
            "Fusce venenatis sapien sit amet augue egestas, malesuada pulvinar turpis iaculis. Suspendisse scelerisque aliquet dapibus. Nullam turpis urna, pulvinar at pulvinar eu, fermentum id ex. Duis nulla est, vestibulum vitae laoreet ac, congue ut felis. Ut commodo sit amet dui et tincidunt. Integer eget sapien luctus, facilisis risus in, vestibulum ex. Aliquam laoreet, mi quis ultrices ornare, justo ipsum ultrices elit, id tempor libero nunc sit amet sem. Phasellus sed venenatis neque, auctor scelerisque arcu. ",
        price: 50,
        images: [
            {
                id: 7,
                uri: require(`../assets/ScrollofRevenant.jpg`),
            },
            {
                id: 8,
                uri: require(`../assets/EmbershardMineKey.jpg`),
            },
            {
                id: 9,
                uri: require(`../assets/FortifyIllusion.jpg`),
            },
        ],
        seller: {
            id: 3,
            name: "Willow Webster",
        },
    },
    {
        id: 4,
        name: "Hallgerd's Tale",
        type: "Books",
        description:
            "Etiam mattis justo quis sem vehicula, sed varius velit porttitor. Sed scelerisque tellus metus, dictum sodales est interdum eget. Nam ornare vel tellus sed venenatis. Sed non risus non nibh vehicula lobortis. Sed dapibus pharetra felis. Vestibulum dictum tortor eleifend metus ultrices, quis porttitor ex pulvinar. Integer sagittis erat eget hendrerit lacinia. ",
        price: 30,
        images: [
            {
                id: 10,
                uri: require(`../assets/HallgerdsTale.jpg`),
            },
            {
                id: 11,
                uri: require(`../assets/EmbershardMineKey.jpg`),
            },
            {
                id: 12,
                uri: require(`../assets/AzurasStar.jpg`),
            },
        ],
        seller: {
            id: 4,
            name: "Rachel Wheatly",
        },
    },
    // {
    //     id: 5,
    //     name: "Embershard Mine Key",
    //     type: "Keys",
    //     description:
    //         " Nam vestibulum vel nunc et finibus. Donec ultricies porttitor condimentum. Cras hendrerit ligula sed enim venenatis, ac hendrerit ipsum luctus. Sed volutpat lectus sed dui auctor venenatis. Etiam consectetur nec nulla vitae finibus. Sed vitae rhoncus ligula, et efficitur tellus. ",
    //     price: 65,
    //     images: [require(`../assets/EmbershardMineKey.jpg`), require(`../assets/FortifyIllusion.jpg`)],
    //     seller: {
    //         id: 5,
    //         name: "Jim Shorts",
    //     },
    // },
];
