# Run the server
    node index.js

# Get Places

    GET /

--------

## Return

    [
        {
            "_id": "60f0f2a3eb8f912df7a819f4",
            "name": "maruf",
            "slug": "my-favourite-place",
            "city": "yellow town",
            "state": "UI",
            "createdAt": 1626403491083,
            "updatedAt": 1626403491083,
            "__v": 0
        },
        {
            "_id": "60f10c5311e20421d2af811a",
            "name": "yatra",
            "slug": "my-favourite-place-2",
            "city": "yellow town",
            "state": "UI",
            "createdAt": 1626410067616,
            "updatedAt": 1626410067616,
            "__v": 0
        }
    ]

# Get A Place

    GET /60f0f2a3eb8f912df7a819f4

--------

## Return

    {
        "_id": "60f0f2a3eb8f912df7a819f4",
        "name": "maruf",
        "slug": "my-favourite-place",
        "city": "yellow town",
        "state": "UI",
        "createdAt": 1626403491083,
        "updatedAt": 1626403491083,
        "__v": 0
    }

# Get filtered Places

    GET /?city=yellow town

--------

## Result

    [
        {
            "_id": "60f0f2a3eb8f912df7a819f4",
            "name": "maruf",
            "slug": "my-favourite-place",
            "city": "yellow town",
            "state": "UI",
            "createdAt": 1626403491083,
            "updatedAt": 1626403491083,
            "__v": 0
        },
        {
            "_id": "60f10c5311e20421d2af811a",
            "name": "yatra",
            "slug": "my-favourite-place-2",
            "city": "yellow town",
            "state": "UI",
            "createdAt": 1626410067616,
            "updatedAt": 1626410067616,
            "__v": 0
        }
    ]

# Create a Place

    POST /

------

## Return

    {
        "_id": "60f10c5311e20421d2af811a",
        "name": "yatra",
        "slug": "my-favourite-place-2",
        "city": "yellow town",
        "state": "UI",
        "createdAt": 1626410067616,
        "updatedAt": 1626410067616,
        "__v": 0
    }