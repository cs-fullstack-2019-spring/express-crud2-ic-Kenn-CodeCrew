# express-crud2-ic

Using the project attached, create the following pages:
- Index with a list of all albums
- Create a new album and send them to the index afterwards
- Create a delete page

### Challenge
Create a find album page

<hr>

### Notes:
<strong>Pug Form Template</strong>
```pug
  form(method='GET' action='/results')
    p
      label(for='findId') User ID:
      input(type='text', id='findId', name='idLabel')

    p
      label(for='todoid') ToDo Item ID:
      input(type='text', id='todoid', name='todoid')
    p
      label(for='todotitle') Title of ToDo Item:
      input(type='text', id='todotitle', name='todotitle')
    p
      label(for='todocomplete') Is the task completed?:
      input(type='text', id='todocomplete', name='todocomplete')
    br
    button Submit
```

<strong>Pug Results Template</strong>
```pug
each entry in entries
        li
            p Name: #{entry.name}
            p UserName: #{entry.username}
            p email: #{entry.email}
    else
        h1 No results
```

<strong>In router JS file</strong>
```javascript
res.render('[ PUG RESULTS PAGE]', { [VARIABLE FOR HTML] : [RESULTS VARIABLE] } );
```

<strong>Make sure the data you are sending is an array for the pug code to work. Print your results before you send them to the pug page and check them in your console.</strong>

