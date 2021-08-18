# ProductQuotes.io  

[productquotes.io](https://api.productquotes.io) is a free JSON API for hand curated Product Quotes

ProductQuotes is a collection of Product Quotes to inspire your product teams. 

## Usage

```shell
# Retrieve a random product quote
$ curl --request GET \
       --url 'https://api.productquotes.io/random' \
       --header 'accept: application/json'


```

Example response:

```json
[
    {
        "quote": "tWhile I’ve met many engineers who don’t want to do discovery, I’ve rarely met an engineer who didn’t have an opinion about what the team should be building.",
        "author": "Teresa Torres",
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