miniheap
========

Creates min-heap from your array

```
    [
        {
            id: 2,
            parentId: 1
        },
        {
            id: 1,
            parentId: 0
        }
    ]
```

to heap:

```
    [
        {
            id: 1,
            parentId: 0,
            children: [
                {
                    id: 2,
                    parentId: 1
                }
            ]
        }
    ]
```