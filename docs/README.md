# Affiliates Order Form Spy

[<i class="fa-brands fa-github"></i> Source code](https://github.com/vtex/affiliates-order-form-spy)

> ⚠️ This app is no longer maintained by VTEX. This means support and maintenance are no longer provided.

The VTEX Affiliates Order Form Spy app retrieves the checkout email and monitors the order form, sending the email information to the Affiliates main app for use in the order flow.

These instructions will help you get a copy of the running project on your local machine for querying the VTEX API and integrating with the **Affiliates Order Form Spy** app.

## Installation

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

Once the clone is done, let's log in, create the workspace, and get it running in the store.

### Login and access the store

Access the project folder in the terminal/cmd
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

  The server will start up in your WS environment:

```
https://vtex000--yourstore.myvtex.com
```

## ✒️ Authors

* **Gabriel Eluan** - *Developer* - [Gabriel Eluan](https://github.com/gabEluan)
* **Gabriel Hosino** - *Developer* - [Gabriel Hosino](https://gitlab.com/gabrielHosino)
* **Matheus Izidio** - *Developer* - [Matheus Izidio](https://gitlab.com/MIzidio)
* **Gabriel Barros** - *Developer* - [Gabriel Barros](https://gitlab.com/GabrielBarross)
