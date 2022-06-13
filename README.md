# scalab-academy-JS-API-OAuth2
_The task is to communicate with an OAuth2 type API._
_**OAuth** es un estándar de autorización para aplicaciones, que permite autenticar y autorizar a usuarios de distintas formas_

## Requerimiento funcional

Mostrar una cadena de texto por consola que concatene el **token_type** y el **access_token** con un espacio al medio.

### Documentación

URL: https://maf2qxs1f6.execute-api.us-east-1.amazonaws.com/prod/oauth/token
METHOD: POST
BODY: (ejemplo de la estructura, debe reemplazar los valores por los solicitados)
```JSON
{
 "client_id": clientId,
 "client_secret": clientSecret,
 "audience": audience,
 "grant_type": grantType
}
```

Esta API en particular sólo recibe llamados para Grant Type del tipo **client_credentials**.

Los usuarios registrados en esta API tienen los siguientes nombres de usuario y contraseña:

**usuario**: adalovelace
**password**:  1234d4

**usuario**: dualipa 
**password**: du4321

Deben ser usados como **client_id** y **client_secret** respectivamente.

Para ambos usuarios la audiencia es https://escalab.academy

##### Ejemplo de respuesta de API

![Logo Perfil](https://www.appsdeveloperblog.com/wp-content/uploads/2020/07/oauth-refresh-token-postman.jpg)

Lectura adicional
https://programacionymas.com/blog/protocolo-oauth-2
https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2
