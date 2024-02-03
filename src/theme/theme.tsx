import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        text: {
            primary: "#fff",
            secondary: "#6e7681",
        },
        primary: {
            main: '#010409',
        },
        secondary: {
            main: '#6e7681',
        },
        background: {
            default: '#010409',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h6: {
            fontWeight: 700,
            letterSpacing: 0.15,
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& label.Mui-focused': {
                        color: '#fff',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#30363d',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#fff',
                        },
                    }
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    '& label.Mui-focused': {
                        color: '#fff',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#30363d',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#fff',
                    },
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    '&.Mui-focused': {
                        color: '#fff',
                    },
                }
            }
        },
        MuiList: {
            styleOverrides: {
                root: {
                    backgroundColor: '#30363d',
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        backgroundColor: '#30363d',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#40464d',
                        },
                    },
                    '&:hover': {
                        backgroundColor: '#40464d',
                    },
                }
            }
        },
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    ".MuiDataGrid-columnSeparator": {
                        display: 'none',
                    },
                    ".MuiDataGrid-withBorderColor": {
                        borderColor: "#30363d",
                    },
                    ".MuiIconButton-root": {
                        color: "#6e7681"
                    },
                    '& .MuiDataGrid-cell:focus': {
                        outlineColor: "#30363d",
                    },
                    '.MuiDataGrid-checkboxInput': {
                        color: "#6e7681",
                    },
                    border: '1px solid',
                    borderColor: "#30363d",
                    backgroundColor: '#0d1117',
                },
                row: {
                    '&.Mui-selected': {
                        backgroundColor: '#161b20',
                    },
                    '&.Mui-selected:hover': {
                        backgroundColor: '#161b20',
                    },
                    '&:hover': {
                        backgroundColor: '#161b20',
                    },
                },
            },
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    width: '100%',
                    padding: '0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '3px',
                    color: "#fff"
                },
                input: {
                    color: "#fff"
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 10,
                    padding: '6px 24px',
                    fontSize: 16,
                    fontWeight: 500,
                    '&:hover': {
                        backgroundColor: '#161b20',
                        color: '#ffffff',
                    },
                }
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    margin: "2px 6px",
                    borderRadius: 10,
                    fontSize: 16,
                    fontWeight: 500,
                    '&:hover': {
                        backgroundColor: '#161b20',
                        color: '#ffffff',
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    border: 1,
                    boxShadow: 'none',
                },
            },
        },
    },
});