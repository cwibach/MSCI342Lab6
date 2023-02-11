import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@mui/material/Button";
import history from '../Navigation/history';

class RenterLogin extends Component {
    render () {
        return(
            <div>
                <Button variant="contained"
                    onClick={() => history.push('/')}>
                    Back to Home
                </Button>

                Login as a Renter

                <Button variant="contained"
                    onClick={() => history.push('/RenterProfile')}>
                    Login
                </Button>
            </div>
        );
    }
}

export default RenterLogin;