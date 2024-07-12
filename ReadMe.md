## **Test home assistant 3rd party functionality**

## Obtain a Long Lived Access Token

Open home assistant front end

Go to Profile (bottom of screen) then click security tab

At the bottom of the security screen create a long lived access token
### **\*\*You will only see this once so copy it accurately\*\***

create a .env file in the root directory
with contents: 
 VITE_REACT_APP_ACCESS_TOKEN = "\<the access token you just created\>"

 ## Ensure you have the correct url

 In vite.config.js, it should look similar to this where the url 192.168.1.xx is the local ip address of your home assistant instance, running on default port :8123

 This configuration stops cors on home assistant blocking the development server

`````
 import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://192.168.1.15:8123'
   
      }
    }
 
})
`````
## Installation
Fork and clone the repo 

On the command line run `````npm install`````

Start the development server with `````npm run dev`````