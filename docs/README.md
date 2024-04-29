# Affiliates Order Form Spy

> ⚠️ This app is no longer maintained by VTEX. This means support and maintenance are no longer provided.

The VTEX Affiliates Order Form Spy app is responsible for getting the checkout email and monitoring the order form, sending the email information for the Affiliates main app to use on the order flow.

## 🚀 Getting started

These instructions will allow you to get a copy of the running project on your local machine for the purposes of querying the vtex api and integrating with app **Affiliates Order Form Spy**.

## 🔧 Installation

To start the installation, you need to clone the GitLab project into a directory of your choice:


```
 cd "directory of your choice"
```

SSH clone 
```
 git clone git@github.com:vtex-apps/affiliates-order-form-spy.git
```
or

HTTPS clone
```
  git clone https://github.com/vtex-apps/affiliates-order-form-spy.git
```

Once the clone is done, now let's login, create the workspace and get it running in the store.
Tip: whenever you login, always check the 'manifest.json' file to get the correct name of the store.

### Login and access the store

Access the project folder in terminal / cmd
```
  cd "saved directory"
  vtex login youraccount
```

### Check VTEX account and workspace

To verify the VTEX account and workspace in use, just type

```
  vtex whoami
```

### Creating your workspace in the store

```
  vtex use 'vtex000'
  (by default, we use jira task number vtex000 without spaces and hyphen).
```

### Link your workspace in the store

```
  vtex link vtex000
  (which would be your ws id)
```

### Start your workspace in the store

  The server will start up in your WS environment just log in

```
https://vtex000--yourstore.myvtex.com
```

## 🛠️ Built with

* [Node](https://nodejs.org/en/docs/)
* [Typescript](https://www.typescriptlang.org/docs/)
* [GraphQl](https://graphql.org/code/#javascript)

## 📌 Version

 Please note the changelog file and tags in this repository (https://github.com/vtex-apps/affiliates-order-form-spy/blob/master/CHANGELOG.md) 

## ✒️ Authors

* **Gabriel Eluan** - *Developer* - [Gabriel Eluan](https://github.com/gabEluan)
* **Gabriel Hosino** - *Developer* - [Gabriel Hosino](https://gitlab.com/gabrielHosino)
* **Matheus Izidio** - *Developer* - [Matheus Izidio](https://gitlab.com/MIzidio)
* **Gabriel Barros** - *Developer* - [Gabriel Barros](https://gitlab.com/GabrielBarross)
