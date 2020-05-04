# springBoot with Angular
 
## Idea of the app 
 - this is a secure api using spring-security used to enroll a user and register a course and watch online courses.

## Installation 
The project is created with Maven, so you just need to import it to your IDE(Eclipse,..) and build the project to resolve the dependencies

Steps:

Build the project 
1.Test, Compile and Package it using maven.
  mvn clean package
2.Create a bridged network which is required for containers' intercommunication.
  docker network create boot-mysql-nw
3.Start mysqldb container on a bridged network.
  docker container run --name mysqldb --network boot-mysql-nw -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=sample_database -d mysql:8
4.Verify if mysql container is up by looking at logs, and/or exec-ing into mysqldb container
docker container logs -f mysqldb
-- exec into mysql
docker container exec -it mysqldb bash
-- connect to mysql and verify if 'sample_database' has been created
mysql -uroot -proot
show databases;
5.Build docker image of this springboot app using Dockerfile
docker image build -t training .
6.Run this image
docker container run --network boot-mysql-nw --name training-container -p 8080:8080 -d training
7.Verify app logs
docker container logs -f training-container