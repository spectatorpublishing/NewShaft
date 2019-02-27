# Setup

Quick rundown on the backend:
- digital ocean hosts/handles a server.
- docker creates a container that runs a program on the server (i.e. mysql) [docker containers will run the same between different oses (what's the plural of os?) which is why they're useful]
- kubernetes takes 1 (or more) containers, throws them into a pod, and creates multiple instances of the pod. This is so if a fuck ton people try to access the site at the same time (surprisingly this does/will happen), their requests will be distributed to different instances of the pods. 
- This lightens the load on each independent instance, which makes for better performance on each instance. fyi, this process is called load-balancing, so put that on your resume.


## digital ocean - server

request access from anyone who has access to the admin digital ocean account (mb members)
 - there's nothing to really do here actually. Traditionally you'd ssh into the server to do stuff, but since we have kubernetes, just use kubectl to do everything (see below).


## mysql (mai squell) - database service.

when you are off the server, run:
something along the lines of (we aren't sure how this works yet)
[docker exec -it shaft_db mysql -uroot -p
then input the password "bug1877ButItsLongerNow_lmaoxD"]


## kubernetes (cue bear(?) netties a.k.a. κυβερνήτης, Greek for "governor", "helmsman" or "captain") load balances docker containers.  

What you need for kubernetes:
- kubectl
- copy of config file

Install kubectl:
- Linux: 
    run the following:
        sudo apt-get update && sudo apt-get install -y apt-transport-https
        curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
        echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee -a /etc/apt/sources.list.d/kubernetes.list
        sudo apt-get update
        sudo apt-get install -y kubectl
- macOS:
    run: 
        brew install kubernetes-cli
    run to check if install works: 
        kubectl version
- windows (lol):
    run the following in powershell. <path> is wherever you want kubernetes to be installed:
        Install-Script -Name install-kubectl -Scope CurrentUser -Force 
        install-kubectl.ps1 [-DownloadLocation <path>] (these might be all one command, experiment).
    run to check install:
        kubectl version

Get config file:
    It's on the shaft github projects page, on the card about kubernetes config.
    Create the directory ~/.kube, put the config file there (rename from config.txt to just config)

Now you can run kubectl <command> to interact with kubernetes.
A good test command is 'kubectl get nodes'

## docker 

To install docker on your platform look at the following link: https://docs.docker.com/install/

# Deployment Steps

## docker 


To build the docker image for newshaft do the following:

```
cd theshaft/
docker build -t newshaft:latest .
```

To run the docker container locally run:

```
docker run --rm -p 8080:8080 newshaft:latest
```

In order for the docker container to run in kubernetes we have to use a cloud platform called dockerhub.
We login using the following command (you only have to do this once), the password is ilovetim123.

```
docker login --username=columbiaspectator
```

To push the docker image run:

```
docker tag <image id> columbiaspectator/newshaft:latest
docker push columbiaspectator/newshaft:latest
```

You can find the image id by running docker images and copying and pasting the image id.

Make sure that you build, tag and push your docker image whenever you make a change to the application that you want to see on kubernetes.

## kubernetes

### Secret 

In order to pull private images from dockerhub you need to create a secret. It is likely that a secret has 
already been created. Check if myregistry key exists by running:

```
kubectl get secrets
```
If you need to create it again follow these steps:

Paste the following environment variables in your .env file:

```
DOCKER_REGISTRY_SERVER=docker.io
DOCKER_USER=columbiaspectator
DOCKER_EMAIL=online@columbiaspectator.com
DOCKER_PASSWORD=<password>
```

Replace password with the password (Arsalaan Knows).

Source your .env file and run create secret: 

```
source .env
kubectl create secret docker-registry myregistrykey \
  --docker-server=$DOCKER_REGISTRY_SERVER \
  --docker-username=$DOCKER_USER \
  --docker-password=$DOCKER_PASSWORD \
  --docker-email=$DOCKER_EMAIL
```

This will create a secret called myregistry key. 

### Shaft Deployment 

To deploy both the shaft-frontend and mysql database simply run:

```
kubectl create -f kube/
```
This will create all of the resources in the kube folder which include:

1. Deployment: shaft-frontend , which is the actual react + express webapp
2. Service: 

NEED TO PUT CONFIG FILES FOR mysql database in folder












