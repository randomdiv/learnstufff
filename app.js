const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const methodOverride = require('method-override');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session      = require('express-session');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');

//routes
const index = require('./routes/index');
const auth  = require('./routes/auth');
const categories  = require('./routes/categories');
const assignments  = require('./routes/assignments');
const courses  = require('./routes/courses');
const users  = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//express session middleware
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

//using routes
app.use('/', index);
app.use('/auth', auth);
app.use('/users', users);
app.use('/categories', categories);
app.use('/assignments', assignments);
app.use('/courses', courses);

const port = process.env.PORT || 5002;
app.listen(port, () =>{
  console.log(`Random learning is starting on port ${port}, isn't it AWESOME!!`);
});