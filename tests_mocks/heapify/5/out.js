module.exports = [
    {
        id: 1,
        parentId: 0,
        children: [
            {
                id: 3,
                parentId: 1
            },
            {
                id: 4,
                parentId: 1,
                children: [
                    {
                        id: 6,
                        parentId: 4
                    }
                ]
            },
            {
                id: 11,
                parentId: 1
            }
        ]
    },
    {
        id: 2,
        parentId: 0,
        children: [
            {
                id: 5,
                parentId: 2,
                children: [
                    {
                        id: 7,
                        parentId: 5
                    }
                ]
            },
            {
                id: 12,
                parentId: 2
            }
        ]
    },
    {
        id: 8,
        parentId: 0
    },
    {
        id: 9,
        parentId: 0
    },
    {
        id: 10,
        parentId: 0
    }
];