# user
## register: peticion POST: aqui es donde de se va a registrar el usuario
https://c17-64-n-python-1.onrender.com/api/user/register/

y de entrada aqui tienes para registrarte
```javascript
{
    "Name": "Juan",
    "LastName": "Perez",
    "Email": "juan@example.com",
    "Password": "contraseña_segura"
}   
```

## login: peticion POST: aqui es donde el usuario se va a loguear 
https://c17-64-n-python-1.onrender.com/api/user/login/

y de entrada de ejemplo para hacer el login

```javascript
{
    "Email": "juan@example.com",
    "Password": "contraseña_segura"
}   
```
y como resultado te da los siguientes datos:

```javascript
{
    "message": "success",
    "user": "Juan",
    "user_id": 1,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZXhwIjoxNzEzMzQxODMzLCJpYXQiOjE3MTMzMzgyMzN9.DLN2-NXqWpTwqIQIcmop5ZOZM3d-gfg-0hnmcEoeNDw"
}
```

## login con token: peticion GET: aqui es donde el token que te dio cuando iniciaste secion lo va a validar para que puedas tener los datos de  del usuario que esta logueado


y como resultado te mada el siguiente formato y para tener todo los datos necesitamos lo que es el token con lo cual obtendremos lo que es datos y vienen de la siguiente manera:
https://c17-64-n-python-1.onrender.com/api/user/profile/


```javascript
{
    "id": 1,
    "Name": "Juan",
    "LastName": "Perez",
    "Email": "juan@example.com",
    "Password": "contraseña_segura"
}

```


## logot view: peticion post el que se encarga de cerrar secion en si eliminar el token de autentificacion que te dieron al loguearte 
https://c17-64-n-python-1.onrender.com/api/user/logout/

ya con esa ruta eliminamos lo que cerramos sesion



# producto

## listar_productos: peticion GET: con esta peticion se lista todo los productos que tenemos en la base de datos junto a todas sus categorias

https://c17-64-n-python-1.onrender.com/api/product/list_products/

la peticion get te mostrara de esta manera los producto que se encuentran en la base de datos, todo los productos que deseas

```javascript
[
    {
        "id": 4,
        "name": "Alfarería",
        "URL": "https://pixabay.com/es/photos/siwak-lanzador-3643297/",
        "price": "120.00",
        "category": 2
    },
    {
        "id": 9,
        "name": "Artesanías en vidrio",
        "URL": "https://pixabay.com/es/photos/nave-de-excavaci%C3%B3n-embarcacion-2875759/",
        "price": "175.00",
        "category": 7
    },
    {
        "id": 8,
        "name": "Bolso",
        "URL": "https://pixabay.com/es/photos/bolso-mimbre-artesan%C3%ADas-cesta-3688900/",
        "price": "75.00",
        "category": 2
    },
    {
        "id": 2,
        "name": "Canasto de mimbre",
        "URL": "https://pixabay.com/es/photos/artesan%C3%ADa-cestos-esparto-mimbre-2777666/",
        "price": "456.00",
        "category": 1
    },
    {
        "id": 6,
        "name": "Esculturas de metal",
        "URL": "https://pixabay.com/es/photos/escultura-escultura-en-metal-8587884/",
        "price": "450.00",
        "category": 7
    },
    {
        "id": 3,
        "name": "Sombreros",
        "URL": "https://www.istockphoto.com/es/foto/sombrero-de-paja-amarillo-de-verano-para-mujer-con-cinta-negra-sobre-fondo-blanco-gm1468924572-500317613",
        "price": "45.00",
        "category": 2
    },
    {
        "id": 5,
        "name": "Tapices tejidos",
        "URL": "https://pixabay.com/es/photos/lana-vistoso-multicolor-1169468/",
        "price": "20.00",
        "category": 2
    },
    {
        "id": 1,
        "name": "Tejidos a mano",
        "URL": "https://pixabay.com/es/photos/tejido-de-punto-trabajo-hecho-a-mano-1614283/",
        "price": "75.00",
        "category": 2
    }
]
```

## listar_categorias: peticion GET : con  esta peticion se lista todo las categorias que tenemos en la  base de datos

https://c17-64-n-python-1.onrender.com/api/product/list_categories/

al hacer esta peticion se te entregara los datos de la siguiente manera:

```javascript
[
    {
        "id": 1,
        "name": "ceramica"
    },
    {
        "id": 2,
        "name": "textiles y tejidos"
    },
    {
        "id": 7,
        "name": "joyas"
    },
    {
        "id": 6,
        "name": "pintura"
    },
    {
        "id": 9,
        "name": "Esculturas de madera"
    }
]
```

## mostrar_categoria : peticion GET: aqui es donde se muestra todo los productos por categoria. ejem si la peticion es productos de la categoria ceramica se mostraran todo los productos pertenecientes a la categoria de ceramica

https://c17-64-n-python-1.onrender.com/api/product/category/<str:category_name>/

en este caso practico voy a tomar un ejemplo para mostrar todo los productos de la categoria joyas  

```javascript
https://c17-64-n-python-1.onrender.com/api/product/category/joyas/
```
que al hacer esa peticion se mostrar de la siguiente manera:

```javascript
[
    {
        "id": 6,
        "name": "Esculturas de metal",
        "URL": "https://pixabay.com/es/photos/escultura-escultura-en-metal-8587884/",
        "price": "450.00",
        "category": 7
    },
    {
        "id": 9,
        "name": "Artesanías en vidrio",
        "URL": "https://pixabay.com/es/photos/nave-de-excavaci%C3%B3n-embarcacion-2875759/",
        "price": "175.00",
        "category": 7
    }
]
```

## buscar_nombre: peticion GET: aqui por esta ruta es donde se muestra el producto que estas buscando. por ejemplo si estas buscando chengo chengo el cual es un juguete que esta guardado en la base de datos, entonces si buscar por su nombre te devolvera el producto en si.

https://c17-64-n-python-1.onrender.com/api/product/product-fill/<str:product_name>/
en caso de que quieras buscar un producto especifico lo puedes de hacer de la siguiente manera:

```javascript
https://c17-64-n-python-1.onrender.com/api/product/product-fill/Sombrero/
```

```javascript
[
    {
        "id": 3,
        "name": "Sombreros",
        "URL": "https://www.istockphoto.com/es/foto/sombrero-de-paja-amarillo-de-verano-para-mujer-con-cinta-negra-sobre-fondo-blanco-gm1468924572-500317613",
        "price": "45.00",
        "category": 2
    }
]
```

## crear producto: peticion POST: aqui es donde se crea un producto.

https://c17-64-n-python-1.onrender.com/api/product/create-product/

para la creacion de producto el formato para crear en json es la siguiente:

```javascript
{
    "name": "vasija artesanal",
    "URL": "https://pixabay.com/es/photos/ceramica-adorno-decoraci%C3%B3n-bonito-3114748/",
    "price": "120.50",
    "category": 7
}
```
pero como respuesta a lo que creaste te responde con lo siguiente:

```javascript
{
    "id": 10,
    "name": "vasija artesanal",
    "URL": "https://pixabay.com/es/photos/ceramica-adorno-decoraci%C3%B3n-bonito-3114748/",
    "price": "120.50",
    "category": 7
}
```
## crear categoria: peticion POST: aqui es donde se crea una nueva categoria.

https://c17-64-n-python-1.onrender.com/api/product/create-category/

para crear la categoria debes seguir la siguiente estructura que esta en formato json
```javascript
{
    "id": 10,
    "name": "juguetes"
}
```
pero como respuesta se espera lo siguiente:

```javascript
{
    "id": 10,
    "name": "juguetes"
}
```

## borrar un producto: peticion DELETE: se borra el producto que usted desea.

https://c17-64-n-python-1.onrender.com/api/product/delete-product/<int:product_id>/

para eliminar un producto se hace mediante su id y para tomarlo de ejemplo en la url deberia ir de la siguiente manre:

```javascript
https://c17-64-n-python-1.onrender.com/api/product/delete-product/3/
```
cuando se elimine de manerca satisfactoria te da como resultado el siguiente:

```javascript
{
    "detail": "Product deleted successfully."
}
```

## borrar categoria: peticion DELETE: se borra la categoria que usted quiere 

https://c17-64-n-python-1.onrender.com/api/product/delete-category/<int:category_id>/

al igual que para eliminar productos en categorias tambien se elimina por el id de la categoria
```javascript
https://c17-64-n-python-1.onrender.com/api/product/delete-category/2/
```
si se elimina de manera satisfactoria se mostrara lo siguiente:

```javascript
{
    "detail": "Category deleted successfully."
}
```

# MESSAGE

## crear mensaje: peticion POST: para crear un mesaje.

https://c17-64-n-python-1.onrender.com/pi/message/create/

```javascript
{
        "fullName": "rene rolando ccoyto ",
        "email": "renerolando@gmail.com",
        "phone": "97535411",
        "message": "seria mas interesante la venta de tal producto"
}
```


```javascript
{
    "id": 2,
    "fullName": "rene rolando ccoyto",
    "email": "renerolando@gmail.com",
    "phone": "97535411",
    "message": "seria mas interesante la venta de tal producto"
}
```

## mostrar mensaje: peticion GET: para mostrar los comentarios que estan.

https://c17-64-n-python-1.onrender.compi/message/list_all/

```javascript
[
    {
        "id": 1,
        "fullName": "samsa",
        "email": "samsa@gmail.com",
        "phone": "9753541",
        "message": "los productos que se ofrecen son muy interesantes"
    }
]
```

# carrito de compra

## mostrar productos que estan en el carrito: peticion GET: aqui se va a mostrar todos los productos que uno tiene en el carrito, siempre y cuando este logueado:

url

como salida quedaria de la siguiente manera:

```javascript
{
    "cart_items": [
        {
            "id_cart": 4,
            "id": 1,
            "name": "chengo chengo",
            "URL": "https://pixabay.com/es/photos/cer%C3%A1mica-arcilla-artesan%C3%ADa-8026823/",
            "price": 450.0,
            "category": {
                "id": 1,
                "name": "juguete"
            },
            "quantity": 3
        },
        {
            "id_cart": 5,
            "id": 2,
            "name": "arete",
            "URL": "https://pixabay.com/es/photos/cer%C3%A1mica-arcilla-artesan%C3%ADa-8026823/",
            "price": 45.0,
            "category": {
                "id": 2,
                "name": "joyas"
            },
            "quantity": 2
        }
    ]
}
```

## añadir producto a carrito: PETICION POST: aqui es donde se añaden productos al carrito:

URL

para añadir el producto al carrito se debe enviar lo que es el id_del producto,y la cantidad de la siguiente manera:
```javascript
{
    "id": 1,
    "quantity": 2
}
```

## eliminar producto del carrito: PETICION POST: aqui se elimina el producto que quieren del carrito
url

se envia el id del producto que quiere quitar del carrito
```javascript
{
    "id": 1
}
```