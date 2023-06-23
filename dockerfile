FROM maven:3.8-openjdk-18
COPY . .
RUN mvn package -B
EXPOSE 8080
ARG JAR_FILE=target/backend-1.0.0-SNAPSHOT.jar
RUN mv ${JAR_FILE} /app.jar
ENTRYPOINT ["java","-jar","/app.jar"]