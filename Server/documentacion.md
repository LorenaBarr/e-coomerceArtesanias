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

# products

## peticion POST: para crear una categoria
http://127.0.0.1:8000/api/product/create-category/

para crear el producto debes hacer lo soguiente

```javascript
{
    "name": "juguete",
    "description": "juguetes divertidos hechas de manera artesanal"
}
```


## peticion POST: para crear un un producto
http://127.0.0.1:8000/api/product/create-product/

aqui es ya donde se crear lo que es un producto pero por ahora entre los atributos aun no hay lo que es la imagen recien modificare para que se pueda cargar imagenes

```javascript
{
    "name": "chengo chengo",
    "description": "Potencial juguete para entretener a tu hijo",
    "price": "120.50",
    "category": 7
}
```

## peticion GET: para mostrar todas las categorias que tenemos 

http://127.0.0.1:8000/api/product/list-all-categories/

como resultado te da eso
```javascript
[
    {
        "id": 3,
        "name": "mochilas"
    },
    {
        "id": 4,
        "name": "pulsera"
    },
    {
        "id": 5,
        "name": "chompas"
    },
    {
        "id": 6,
        "name": "chullos"
    },
    {
        "id": 7,
        "name": "juguete"
    }
]
```




## peticion GET: para mostrar todo los productos pertenecientes a una categoria
http://127.0.0.1:8000/api/product/category/<la categoria>/

te muestra de esa manera:
```javascript
[
    {
        "id": 2,
        "name": "mochila",
        "description": "es chida y muy aligable",
        "price": "45.20",
        "category": 3
    }
]

```



## peticion GET: para mostrar todo los productos 
http://127.0.0.1:8000/api/product/list-all-products/

y el resulatado debe ser de la siguiente manera:

```javascript
[
    {
        "id": 2,
        "name": "mochila",
        "description": "es chida y muy aligable",
        "price": "45.20",
        "category": 3
    }
]
```




## peticion DELETE: para eliminar una categoria
http://127.0.0.1:8000/api/product/delete-category/<id de categoria>/

si te sale esto eso quiere decir que si se elimino

```javascript
{
    "detail": "Category deleted successfully."
}
```


## peticion DELETE: para eliminar un producto
http://127.0.0.1:8000/api/product/delete-product/<id del producto>/



# message

## peticion POST: es donde se deja un comentario de su opinion o alguna recomendacion para el dueño
http://127.0.0.1:8000/api/message/create
```javascript

```



# carshoping

```javascript

```