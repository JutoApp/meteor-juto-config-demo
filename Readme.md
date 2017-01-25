juto:config example
===

An example meteor project to demonstrate the meteor [juto:config](https://github.com/JutoApp/meteor-juto-config) package.

### How to run

1. Clone this repository.

    Take a look in private/config : these are the config files:
    
    default.json:
    ```json
    {
        "server": {
            "foo": "bar",
            "defaultServerKey": "default server value"
        },
        "public": {
            "foo": "public bar"
        }
    }
    ```
    
    production.json:
    ```json
    {
      "server": {
        "foo": "production bar",
        "anotherServerKey": "production extra server val"
      },
      "public": {
        "foo": "production public bar",
        "anotherKey": "production extra val modified"
      }
    }    
    ```
    
    There is also a git-crypt encrypted json file named ```encrypted.json```
    
    encrypted.json:
    ```json
    {
      "server": {
        "foo": "encrypted bar"
      },
      "public": {
        "foo": "encrypted bar"
      }
    }
    ```
    
2. ```meteor npm install```
3. ```meteor``` . Then navigate to [http://localhost:3000]().
 
   You'll see that development settings are used:
   
   ```json
    {
      "foo": "bar",
      "defaultServerKey": "default server value",
      "public": {
        "foo": "public bar"
      }
    }
   ```
4. Try it in production mode: 
    ```
    NODE_ENV=production meteor
    ```
    
    You'll see that development and production settings have been merged:
    
    ```json
    {
      "foo": "production bar",
      "defaultServerKey": "default server value",
      "anotherServerKey": "production extra server val",
      "public": {
        "foo": "production public bar",
        "anotherKey": "production extra val modified"
      }
    }
    ```
5. To explicitly ignore git-crypt encrypted config files, set the environment variable ```CONFIG_SKIP_GITCRYPT=1```
    ```
    NODE_ENV=encrypted CONFIG_SKIP_GITCRYPT=1 meteor
    ```
    (you could similarly encrypt the production.json with git-crypt)
    
6. The JutoConfigDemo GPG Key has been added to git-crypt for this repository.
    
    To see git-crypt in action (transparently unencrypting):
     
    ```
    # import the gpg private key into your personal key chain
    gpg --import jutoconfigdemo_sec.gpg # password is JutoConfigDemo
    git-crypt unlock # password for the jutoconfigdemo@example.com key is JutoConfigDemo
    ```
    
    The ```private/config/encrypted.json``` file is no longer encrypted. You can then use it in a meteor app :

    ```
    NODE_ENV=encrypted meteor    
    ```
    
    **NOTE:** of course, you wouldn't normally include the GPG secret key in the git repository!
    
---

Notice how ```settings-development.json``` and ```settings-production.json``` files are created. You should probably 
add these to ```.gitignore``` , and allow them to be regenerated every time.

.gitignore:
```
settings-development.json
settings-production.json
```

.gitattributes:
```
private/config/encrypted.json filter=git-crypt diff=git-crypt
```