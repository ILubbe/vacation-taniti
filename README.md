# Vacation Taniti
## Vacation Taniti Front End written with React Framework

## To Run, Build the container with the provided Containerfile and run the container.

For example: (Docker works too)

podman build -t react-vacation-taniti:latest .

podman run -d --rm -p 3000:3000 --name vacation-taniti react-vacation-taniti:latest

## To kill:

podman stop vacation-taniti
