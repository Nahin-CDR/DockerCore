# stage : 1
FROM golang:latest AS build

WORKDIR /app

COPY . .

RUN go build -o myapp .


# stage : 2

FROM alpine:latest 

WORKDIR /newDir/

COPY --from=build /app/myapp .

CMD [ "./myapp" ]
