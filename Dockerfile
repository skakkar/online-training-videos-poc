FROM openjdk:8
COPY ./target/training*.jar training.jar
CMD ["java","-jar","training.jar"]