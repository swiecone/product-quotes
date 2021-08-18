# ProductQuotes.io 

[productquotes.io](https://api.productquotes.io) is a free JSON API for hand curated Product Quotes

ProductQuotes is a collection of Product Quotes to inspire your product teams. 


Chuck Norris facts have spread around the world, leading not only to translated versions, but also spawning localized
versions mentioning country-specific advertisements and other Internet phenomena. Allusions are also sometimes made to
his use of roundhouse kicks to perform seemingly any task, his large amount of body hair with specific regard to his
beard, and his role in the action television series Walker, Texas Ranger.

## Usage

```shell
# Retrieve all quotes
$ curl --request GET \
       --url 'https://api.productquotes.io/' \
       --header 'accept: application/json'


```

Example response:

```json
[
    {
        "quote": "this is the first quote I created",
        "author": "anonimous",
        "_id": "611c3bd134b044111c34de3f",
        "__v": 0
    },
    {
        "quote": "this is the second quote",
        "author": "anonimous",
        "_id": "611d5f338119c00ab6922861",
        "__v": 0
    }
]
```

For more examples check the [Swagger documentation](https://api.productquotes.io/documentation) and have a look into the [Postman collection](./postman/io.productquotes.api.postman_collection.json).

## Local development

## License

This distribution is covered by the **GNU GENERAL PUBLIC LICENSE**, Version 3, 29 June 2007.

## Support & Contact

Having trouble with this repository? Check out the documentation at the repository's site or contact alex@alexswiec.com and we’ll help you sort it out.

Happy Coding

:v: