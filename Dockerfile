FROM openjdk:8
COPY ./target/training*.jar training.jar
EXPOSE 8080
CMD ["java","-jar","training.jar"]
