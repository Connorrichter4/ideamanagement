import React, {useState} from 'react';
import { makeStyles, AppBar, Toolbar, Typography, Tabs, Tab, Button } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons/';
import { Switch, Route, Link } from "react-router-dom";
import List from '../components/List';
import Create from '../components/Create';
import Edit from '../components/Edit';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        alignItems: "center"
    },
    logo: {
        maxWidth: 100,
    },
}));

const MainNav = (props) => {
    const classes = useStyles();
    const [value, setValue] = useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleLogout = () => {
        sessionStorage.removeItem('authenticated');
        sessionStorage.removeItem('emailId');
        window.location.href = '/';
      }    

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Link to='/'><img src="/hcl.png" className={classes.logo} alt='HCL' /></Link>

                    <Typography variant="h4" align="center" className={classes.title}>
                        <Link style={{ color: '#FFF', textDecoration: 'none' }} to='/'>Idea Management</Link>
                    </Typography>
                    <Typography variant="h6" display="block" gutterBottom>
                        Welcome, {sessionStorage.getItem("userName")}
                    </Typography>
                    <Button color="inherit" onClick={handleLogout} startIcon={<ExitToApp />}>Logout</Button>
                </Toolbar>
            </AppBar>
            <AppBar position="static" color="default">
                <Tabs value={value} onChange={handleChange}>
                    <Tab value={1} label="List" component={Link} to="/" />
                    <Tab value={5} label="Create" component={Link} to="/create" />
                    <Tab value={4} label="Edit" component={Link} to="/edit" />
                </Tabs>
            </AppBar>
            <Switch>
                <Route path="/" exact render={() =>  <List /> }  />
                <Route path="/create" exact render={() => <Create /> } />
                <Route path="/edit" exact render={() => <Edit /> } />
            </Switch>
        </div>
    );
};

export default MainNav;