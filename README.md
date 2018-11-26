# Web application to Create, Edit or Delete Note by Serverless API (AWS Lambda)

## How to run

* Clone repository `git clone <repo_link>`
* Get into project folder
* Run `yarn install` by command line
* Go to `http://localhost:3000`

### Used technologies

* reactjs
* materialize-css
* react-awesome-modal
* enzyme
* axios

### End point mapping

* [Link](https://7vsntirtje.execute-api.us-east-1.amazonaws.com/dev)
* Get request `/notes` to get all notes
* Post request `/notes` with `{title:"", description:"" }` to create new note
* Put request `/notes/` with query param `?id=<note_id>` and `{title:"", description:"" }` to update exist note
* Delete request `/notes/` with query param `?id=<note_id>` to delete exist note