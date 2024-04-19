## Exercise 0.4

```mermaid
sequenceDiagram
    participant browser
    participant server
    note right of browser: Client sends the new note form data in a POST request
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note {"note": "{{NOTE}}"}
    activate server
    server-->>browser: 302 Redirect {"Location": "/exampleapp/notes"}
    deactivate server

    note left of server: Server stores the note and tells the browser to refresh the page
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTTP 304 Not Modified
    deactivate server

    note right of browser: Browser reloads a cached version of the page

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: HTTP 304 Not Modified
    deactivate server

    note right of browser: Browser reloads a cached version of the JavaScript script

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    note right of browser: GET request is sent from JavaScript
    activate server
    server-->>browser: Notes data.json
    deactivate server
     note right of browser: JavaScript updates the page DOM based on the returned data
    
```

## Exercise 0.5

```mermaid
sequenceDiagram
    participant browser
    participant server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML Document
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: spa.js Script
    deactivate server
    

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    note right of browser: JS Script requests the notes data.json
    activate server
    server-->>browser: data.json
    deactivate server
     note right of browser: JS updates the page DOM based on the returned data
    
```

## Exercise 0.6

```mermaid
sequenceDiagram
    participant browser
    participant server

    note right of browser: JS Overrides the form onsubmit method and redraws the notes to include<br>the to be submitted new note. It then submits the note
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: HTTP 200 {body: {"message":"note created"}}
    deactivate server

    
```