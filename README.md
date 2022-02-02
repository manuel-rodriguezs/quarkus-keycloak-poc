# quarkus-keycloak-poc Project

This is a proof of concept of how to build a web client to get a JWT from Keycloak and use it in the backend. 

Check out this youtube video where I explain what it consists of.

[KeyCloak - OAuth desde cliente web y uso de JWT en el back-end (spanish)](https://youtu.be/ijo1sFN-eLE)

## Running

You will need to bring up keycloak (on port 8080 by default) and the Quarkus application (on port 8081 for example)

```shell script
docker-compose -f docker-compose-keycloak.yml up
./mvnw quarkus:dev -Dquarkus.http.port=8081
```
